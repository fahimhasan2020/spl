<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Jobs\AdminAccountActivation;
use App\Jobs\AdminWelcome;
use App\Model\AdminInvited;
use App\Model\AdminPermission;
use App\Model\Role;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\User;
use Mail;
use App\Model\TransectionHistory;
use Sentinel;
use Activation;
use App\Model\Subscribers\Subscriber;
use App\Model\CashoutRecord;
use App\Model\TransectionRecord;
use DB;

class AdminResourceController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin',['except'=>['inviteResponse']]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $per = User::select('id','first_name','last_name','email','profile_picture');
        if ($request->orderBy === 'Newest'){
            $per->orderBy('id','desc');
        }elseif ($request->orderBy === 'Name'){
            $per->orderBy('first_name','asc');
        }else{
            $per->orderBy('id','asc');
        }
        $search_input = $request->input('search');
        if ($search_input) {
            $per->where(function($per) use ($search_input) {
                $per->where('first_name', 'like', '%' . $search_input . '%')
                    ->orWhere('last_name', 'like', '%' . $search_input . '%')
                    ->orWhere('email', 'like', '%' . $search_input . '%')
                    ->orWhere('phone_number', 'like', '%' . $search_input . '%');
            });
        }
        $per->where('hold',0);
        $per->where('suspended',0);
        $permissions = $per->paginate($request->perPage);
        return $permissions;
    }
    public function indexHold(Request $request)
    {
        $per = User::select('id','first_name','last_name','email','profile_picture');
        if ($request->orderBy === 'Newest'){
            $per->orderBy('id','desc');
        }elseif ($request->orderBy === 'Name'){
            $per->orderBy('first_name','asc');
        }else{
            $per->orderBy('id','asc');
        }
        $search_input = $request->input('search');
        if ($search_input) {
            $per->where(function($per) use ($search_input) {
                $per->where('first_name', 'like', '%' . $search_input . '%')
                    ->orWhere('last_name', 'like', '%' . $search_input . '%')
                    ->orWhere('email', 'like', '%' . $search_input . '%')
                    ->orWhere('phone_number', 'like', '%' . $search_input . '%');
            });
        }
        $per->where('hold',1);
        $per->where('suspended',0);
        $permissions = $per->paginate($request->perPage);
        return $permissions;
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        $roles = Role::all();
        $permisions = AdminPermission::all();
        return Inertia::render('Users/Admin/AdminAdd',[
            'roles'=>$roles,
            'permissions'=>$permisions
        ]);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        $request->validate([
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8|regex:/^.*(?=.{3,})(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\d\X])(?=.*[!$#%]).*$/',
            'confirm_password' => 'required|same:password'
        ]);
        try {
            $credentials = [
                'email'    => $request->email,
                'password' => $request->password,
            ];
            $user = Sentinel::register($credentials);
            $activation = Activation::create($user);
            $this->dispatch(new AdminAccountActivation($request->email,$activation->code,$request->password));
            foreach ($request->roles as $r){
                $role = Sentinel::findRoleBySlug($r);
                if ($role != null){
                    $role->users()->attach($user);
                }
            }
            return redirect()->back()->with('success','New admin registered, Password and activation link has been sent to his account');
        }catch (\Exception $e){
            return redirect()->back()->with('fault',$e);
        }


    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
    public function invite(Request $request){
        $request->validate([
            'email' => 'required|email|unique:users|unique:admin_invited',
            'roles' => 'required'
        ]);
        try {
            dispatch(new AdminWelcome($request->email,$request->roles));
            return redirect()->back()->with('success','Invitation sent');
        }catch (\Exception $e){
            return redirect()->back()->with('fault',$e);
        }

    }
    public function inviteResponse(Request $request){
        $request->validate([
            'email' => 'required|email|unique:users',
            'first_name' => 'required|max:255',
            'last_name' => 'required|max:255',
            'password' => 'required|min:8|regex:/^.*(?=.{3,})(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\d\X])(?=.*[!$#%]).*$/',
            'confirm_password' => 'required|same:password',
            'slug'=> 'required'
        ]);

        try {
            $credentials = [
                'email'    => $request->email,
                'password' => $request->password,
                'first_name'=>$request->first_name,
                'last_name' =>$request->last_name
            ];
            $user = Sentinel::registerAndActivate($credentials);
            $slug = explode(' ',$request->slug);
            foreach ($slug as $r){
                $role = Sentinel::findRoleBySlug($r);
                if ($role != null){
                    $role->users()->attach($user);
                }
            }
            $invitation = AdminInvited::where('email',$request->email)->first();
            $get = AdminInvited::findOrFail($invitation->id);
            $get->delete();
            return redirect()->route('admin.login')->with('success','Registered successfully. Login now');
        }catch (\Exception $e){
            return redirect()->back()->with('fault','Error occurred! Try after sometime later');
        }


    }
    public function loginAsOthers(Request $request){
        $request->validate([
            'id'=>'required'
        ]);
        $user = Sentinel::findById($request->id);
        Sentinel::login($user);
        return redirect()->back()->with('success','New user logged in');
    }
    public function holdOtherAdmin($id){
        $user = User::findOrFail($id);
        $user->hold = true;
        $user->update();
        return redirect()->back()->with('success','User holded');
    }
    public function unholdOtherAdmin($id){
        $user = User::findOrFail($id);
        $user->hold = false;
        $user->update();
        return redirect()->back()->with('success','User holded');
    }
    public function suspendOtherAdmin($id){
        $user = User::findOrFail($id);
        $user->suspended = true;
        $user->update();
        return redirect()->back()->with('success','User suspended');
    }

    public function holdOtherUser($id){
        $user = Subscriber::findOrFail($id);
        $user->hold = true;
        $user->update();
        return redirect()->back()->with('success','User holded');
    }

    public function unholdOtherUser($id){
        $user = Subscriber::findOrFail($id);
        $user->hold = false;
        $user->update();
        return redirect()->back()->with('success','User holded');
    }
    
    public function suspendOtherUser($id){
        $user = Subscriber::findOrFail($id);
        $user->suspended = true;
        $user->update();
        return redirect()->back()->with('success','User suspended');
    }

    public function cashoutView()
    {
        $cashouts = DB::table('cashout_record')->where('delivered',0)->paginate(10);
        return Inertia::render('Users/User/Cashout',['admins'=>$cashouts]);
    }

    public function transectionView()
    {
        $cashouts = TransectionRecord::where('delivered',0)->paginate(10);
        return Inertia::render('Users/User/Transection',['admins'=>$cashouts]);
    }

    public function transectionAction(Request $request)
    {
      $user = Subscriber::where('id',$request->user)->first();
      $user->coins = $user->coins + $request->amount;
      $use  = Subscriber::find($request->user);
      $use->coins  = $user->coins;
      $use->update();
      $tr = TransectionRecord::find($request->trid);
      $tr->delivered = 1;
      $tr->update();
      TransectionHistory::create([
          'user_id'=>$user->id,
          'amount'=>$request->amount,
          'type'=>'Cash In'
      ]);
      return redirect()->back();
    }


    public function cashoutAction(Request $request)
    {
      $user = Subscriber::where('id',$request->user)->first();
      $user->coins = $user->coins - $request->amount;
      $use  = Subscriber::find($request->user);
      $use->coins  = $user->coins;
      $use->update();
      $tr = CashoutRecord::find($request->trid);
      $tr->delivered = 1;
      TransectionHistory::create([
        'user_id'=>$user->id,
        'amount'=>$request->amount,
        'type'=>'Cash Out'
    ]);
      $tr->update();
      return redirect()->back();
    }
}
