<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\SavedPlaces;
use App\Events\AdminNotifications;
use App\Model\Subscribers\Subscriber;
use Image;
use App\Model\Coupons;
use Storage;
use App\Events\PoleUserCheckRider;
use Illuminate\Support\Str;
use App\Model\UserDevices;
use App\Model\Ride;
use App\Model\Rider;
use App\Model\MultigameResult;
use App\Events\UserCheckRider;
use App\Model\Pole;
use App\Model\PoleUser;
use App\Events\PoleJoin;
use App\Events\UserSetPole;
use DB;
use App\Model\ReferenceHistory;
use App\Model\TransectionHistory;
use App\User;
use App\Model\TransectionRecord;
use App\Model\CashoutRecord;
use App\Model\SiteSettings;


class HomeController extends Controller
{
    public function addLocation(Request $request)
    {
        $request->validate([
            'name'=>'required',
            'email'=>'required',
            'formattedAddress'=>'required',
            'lat'=>'required',
            'lng'=>'required'
        ]);

        $user = Subscriber::where('email',$request->email)->first();

        try{
           SavedPlaces::create([
            'user_id'=>$user->id,
            'name'=>$request->name,
            'lat'=>$request->lat,
            'lng'=>$request->lng,
            'formatted_address'=>$request->formattedAddress
        ]);
        return response()->json(['Success'=>'Added']); 
        }catch(error $e){
            return response()->json($e);
        }
        
    }

    public function locationUpdate(Request $request){
        $request->validate([
            'email'=>'required',
            'latitude'=>'required',
            'longitude'=>'required'
        ]);
        $user = Subscriber::where('email',$request->email)->first();
        $use = Subscriber::find($user->id);
        $use->latitude = $request->latitude;
        $use->longitude = $request->longitude;
        $use->update();
    }

    public function getInfo(Request $request)
    {
        $request->validate([
            'email'=>'required',
        ]);
        $user = Subscriber::where('email',$request->email)->first();
        return response()->json($user);
    }

    public function saveInfo(Request $request)
    {
        $request->validate([
            'email'=>'required',
        ]);
        $user = Subscriber::where('email',$request->email)->first();
        $id = Subscriber::find($user->id);
        if(isset($request->first_name)){
            $id->first_name = $request->first_name;
        }
        if(isset($request->last_name)){
            $id->last_name = $request->last_name;
        }
        if(isset($request->dob)){
            $id->date_of_birth = $request->dob;
        }
        if(isset($request->phone)){
            $id->phone_number = $request->phone;
        }
        $id->update();
        return response()->json(['Success'=>'Added']); 
    }

    public function updateDp(Request $request)
    {
        $request->validate([
            'email'=>'required',
            'image'=>'required'
        ]);
        $rider = Subscriber::where('email',$request->email)->first();
        $rideDriver = Subscriber::find($rider->id);
        $image_64 = $request['image']; //your base64 encoded data
        $extension = explode('/', explode(':', substr($image_64, 0, strpos($image_64, ';')))[1])[1];
        $replace = substr($image_64, 0, strpos($image_64, ',')+1); 
        $image = str_replace($replace, '', $image_64); 
        $image = str_replace(' ', '+', $image); 
        $imageName = time().Str::random(10).'.'.$extension;
        Storage::disk('local')->put($imageName, base64_decode($image));
        $rideDriver->profile_picture = $imageName;
        $rideDriver->update();
        return response()->json(['Success'=>'Pic uploaded']);
    }


    public function savedLocations(Request $request)
    {
        $request->validate([
            'email'=>'required',
        ]);
        $user = Subscriber::where('email',$request->email)->first();
        $locations = SavedPlaces::where('User_id',$user->id)->get();
        return $locations;
    }

    public function couponList(Request $request)
    {
        $request->validate([
            'email'=>'required'
        ]);
        $user = Subscriber::where('email',$request->email)->first();
        $coupons = Coupons::where(['user_id'=>$user->id,'used'=>0])->get();
        return $coupons;
    }

    public function checkCoupon(Request $request)
    {
       $request->validate([
           'email'=>'required',
           'code'=>'required|min:8',
           'amount'=>'required'
       ]);
       $user = Subscriber::where('email',$request->email)->first();
       $coupon = Coupons::where(['code'=>$request->code,'used'=>0,'user_id'=>$user->id])->get();
       if(count($coupon) < 1){
            return response()->json(['error'=>'Invalid coupon code']);
       }
       if($request->amount < 100){
            return response()->json(['error'=>'No discount available below 100 taka']);
       }
       $coup = Coupons::find($coupon[0]->id);
       $coup->used = 1;
       $coup->update();
       if($coupon[0]->type == 'ratio'){
           $remains = ($request->amount*intval($coupon[0]->amount))/100;
           $discounted = $request->amount - $remains;
           return response()->json(['sucs'=>'You have some discount','amount'=>$discounted,'discounted'=>$remains]);
       }else{
           if($request->amount < $coupon[0]->amount){
            $coup->used = 0;
            $coup->update();
            return response()->json(['error'=>'Insufficient fund']);
           }
            $remains = ($request->amount - $coupon[0]->amount);
            return response()->json(['success','Hurreh! you have some discount','amount'=>$remains,'discounted'=>$coupon[0]->amount]);
       }
    }

    public function updateDeviceToken(Request $request)
    {
     $request->validate([
         'email'=>'required',
         'token'=>'required'
     ]);
     $use = Subscriber::where('email',$request->email)->first();
     $user = UserDevices::where(['user_id'=>$use->id,'token'=>$request->token])->get();
     if(!count($user)>0){
         UserDevices::create(['user_id'=>$use->id,'token'=>$request->token]);
     }
    }

    public function postRide(Request $request)
     {
        $request->validate([
            'email'=>'required',
            'rent'=>'required',
            'starting_cordinate'=>'required',
            'ending_cordinate'=>'required'
        ]);
        $user = Subscriber::where('email',$request->email)->first();
        if($user){
            $cd = 0;
            if($request->type === 'pole'){
                $pole = Pole::create([
                    'total_rent'=>$request->rent,
                    'starting_cordinate'=>$request->starting_cordinate,
                    'ending_cordinate'=>$request->ending_cordinate,
                ]);
                $poleUser = PoleUser::create([
                    'user_id'=>$user->id,
                    'pole_id'=>$pole->id,
                    'rent'=>$request->rent,
                ]);
                $cd= $pole->id;
            }else if($request->type === 'ride'){
                $ride = Ride::create([ 
                'user_id'=>$user->id,
                'rent'=>$request->rent,
                'starting_cordinate'=>$request->starting_cordinate,
                'ending_cordinate'=>$request->ending_cordinate,
            ]);
            $cd= $ride->id;
            }
            
            event(new \App\Events\RiderCall($cd,$request->rent,$request->starting_cordinate,$request->ending_cordinate,$user->id,$request->type));
        }
     }

     public function riderAccepted(Request $request)
     {
         $request->validate(['email'=>'required',
         'type'=>'required','ride'=>'required','duration'=>'required']);
         $rider = Rider::where('email',$request->email)->first();
         if($request->type === 'ride'){
             $ride = Ride::find($request->ride);
             if(!$ride->rider_id){
                 $ride->rider_id = $rider->id;
                 $ride->update();
                 event(new UserCheckRider($ride->user_id,$request->duration,$rider->id));
                 return response()->json(['success'=>'Ride started']);
             }else{
                 return response()->json(['errorV'=>'Request received by another driver']);
             }
         }else if($request->type === 'pole'){
            $ride = Pole::find($request->ride);
            if(!$ride->rider_id){
                $ride->rider_id = $rider->id;
                $ride->update();
                $users = PoleUser::where('pole_id',$ride->id)->get();
                foreach($users as $u){
                   event(new PoleUserCheckRider($u->user_id,$request->duration,$rider->id)); 
                }
                
                return response()->json(['success'=>'Ride started']);
            }else{
                return response()->json(['errorV'=>'Request received by another driver']);
            }
         }
     }

     public function viewRider(Request $request)
     {
         $request->validate(['id'=>'required']);
         $rider = Rider::find($request->id);
         return $rider;
     }

     public function getPoles()
     {
        $poles = Pole::where('completed',0)->orderBy('id', 'DESC')->get();
        return $poles;
     }

     public function poleJoinRequest(Request $request)
     {
        $request->validate([
            'email'=>'required',
            'pole_id'=>'required'
        ]);
        $user = Subscriber::where('email',$request->email)->first();
        $pole = Pole::where('id',intval($request->pole_id))->first();
        $rider = Rider::where('id',intval($pole->rider_id))->first();
        event(new PoleJoin($user,$pole,$rider));
        return response()->json(["success"=>"Joined"]);
     }

     public function poleReceive(Request $request)
     {
        $request->validate([
            'email'=>'required',
            'pole'=>'required',
            'start'=>'required',
            'end'=>'required',
            'rent'=>'required'
        ]);

        $user = Subscriber::where('email',$request->email)->first();
        $pole = Pole::where('id',intval($request->pole))->first();
        $rider = Rider::where('id',intval($pole->rider_id))->first();
        PoleUser::create([
            'user_id'=>$user->id,
            'pole_id'=>$pole->id,
            'rent'=>$request->rent
        ]);
        event(new UserSetPole($user,$pole,$rider,$request->start,$request->end,$request->rent));
        return response()->json(["success"=>"Joined"]);
     }

     public function allRide(Request $request)
     {
        $request->validate(['email'=>'required']);
        $rider = Subscriber::where('email',$request->email)->first();
        $ride = Ride::where(['user_id'=>$rider->id,'completed'=>1])->get();
        return $ride;
     }

     public function allPole(Request $request)
     {
        $request->validate(['email'=>'required']);
        $rider = Subscriber::where('email',$request->email)->first();
        $ride = DB::table('pole_users')
            ->join('pole', 'pole.id', '=', 'pole_users.pole_id')
            ->select('pole.*')
            ->where('pole_users.user_id', $rider->id)
            ->get();
            return $ride;
     }

     public function transectionCoins(Request $request)
     {
        TransectionRecord::create([
            'user_id'=>$request->user,
            'amount'=>$request->amount,
            'binance_account'=>$request->binance_account,
            'nogod_account'=>$request->nogod_account
        ]);
        $users = User::all();
        foreach($users as $u){
            event(new AdminNotifications('Transection request','/admins/transection',$u->id));
        }
        return response()->json(['success','Transection granted']);
     }


     public function cashoutCoins(Request $request)
     {
        CashoutRecord::create([
            'user_id'=> $request->user,
            'amount'=> $request->amount,
            'binance_account'=> $request->binanceAccount,
            'nogod_account'=> $request->nogodAccount
        ]);
        $users = User::all();
        foreach($users as $u){
            event(new AdminNotifications('Cashout request','/admins/cashout',$u->id));
        }
        
     }
     public function paymentInfo()
     {
       $nagad = SiteSettings::where('id',1)->first();
       return ['nagad'=>$nagad->nagad,'binance'=>$nagad->binance,'bkash'=>$nagad->bkash];
     }

     public function newCoins(Request $request)
     {
         $request->validate([
             'email'=>'required',
             'coins'=>'required'
         ]);
         $user = Subscriber::where('email',$request->email)->first();
         $use = Subscriber::find($user->id);
         $use->coins = $request->coins;
         $use->update();
     }

     public function newLoose($user,$coin)
     {
         $new = Subscriber::where('id',$user)->first();
         $used = Subscriber::find($new->id);
         $used->coins = $used->coins - $coin;
         $used->update();
         MultigameResult::create([
            'user_id'=>$user,
            'game'=>'Ludo',
            'coins'=>$coin,
            'result'=>0
        ]);
     }

     public function getRandom()
     {
        $subs = Subscriber::where('suspended',1)->orderByRaw("RAND()")->first();
        return $subs;
     }


      public function multigameResult($userId,$coins,$result,$game)
      {
         $winnigCoins = $coins - ($coins*0.1);
         $user = Subscriber::find($userId);
         if($result == 1){
           
            $lastGame = DB::table('multigame_results')->where('user_id',$userId)->order_by('id', 'desc')->first();
            $lastGame->results = 1;
            $lastGame->coins = $winnigCoins;
            $lastGame->update();
            // MultigameResult::create([
            //     'user_id'=>$userId,
            //     'game'=>$game,
            //     'coins'=>$winnigCoins,
            //     'result'=>$result
            // ]);
            $user->coins = $coins*2 - ($coins*0.1)+ $user->coins;
            event(new \App\Events\MultiplayerGameEnd($userId,$result,$winnigCoins));
            if($user->reference_code != null){
                $refUserId =  $user->reference_code - 669982;
                $refUser = Subscriber::find($refUserId);
                if($refUser->reference_code != null){
                    $firstRef = $refUser->reference_code - 669982;
                    $firstUser = Subscriber::find($firstRef);
                    $firstUser->coins = $firstUser->coins + $coins * 0.1 * 0.1;
                    $firstUser->update();
                    $refUser->coins = $refUser->coins + $coins * 0.1 * 0.3;
                }else{
                    $refUser->coins = $refUser->coins + $coins * 0.1 * 0.3;
                }
                
                $refUser->update();
                if($user->first_name === null){
                    $refUserDetails = 'friend';
                }else{
                    $refUserDetails = $user->first_name;
                }
                if($refUser->reference_code != null){
                    ReferenceHistory::create([
                        'user_id'=>$refUserId,
                        'user_name'=>$refUserDetails,
                        'amount'=> $coins * 0.1 * 0.3,
                        'game'=>$game
                    ]);
                    if($refUser->first_name === null){
                        $topReferer = 'friend';
                    }else{
                        $topReferer = $refUser->first_name;
                    }
                    ReferenceHistory::create([
                        'user_id'=>$firstRef,
                        'user_name'=>$topReferer,
                        'amount'=> $coins * 0.1 * 0.1,
                        'game'=>$game
                    ]);

                }else{
                    ReferenceHistory::create([
                        'user_id'=>$refUserId,
                        'user_name'=>$refUserDetails,
                        'amount'=> $coins * 0.1 * 0.4,
                        'game'=>$game
                    ]);
                }
            }

            
         }else{
            //  $user->coins = $user->coins - $coins;
             event(new \App\Events\MultiplayerGameEnd($userId,$result,$coins));
             $lastGame = DB::table('multigame_results')->where('user_id',$userId)->order_by('id', 'desc')->first();
             $lastGame->results = 0;
             $lastGame->coins = $winnigCoins;
             $lastGame->update();
            //  MultigameResult::create([
            //     'user_id'=>$userId,
            //     'game'=>$game,
            //     'coins'=>$coins,
            //     'result'=>$result
            // ]);
         }
        $user->update();
        
      }

    public function lastGameResult($id)
    {
          $result = MultigameResult::where('user_id',$id)->orderBy('id', 'DESC')->get();
          return $result;
    }

    public function transectionHistory($id)
    {
       $result = TransectionHistory::where('user_id',$id)->orderBy('id', 'DESC')->get();
       return $result;
    }

    public function referenceHistory($id)
    {
        $result = ReferenceHistory::where('user_id',$id)->orderBy('id', 'DESC')->get();
        return $result;
    }

     public function nidVerify(Request $request){
        
     }
     

     public function updateAllList()
     {
        $im = 1;
        for($i=2;$i<998;$i++)
        {$user = Subscriber::find($i);
        $user->profile_picture = 'https://admin.spl.games/fakeimg/'.$im.'.jpg';
        $user->update();
        $im++;
        if($im>99){
            $im=1;
        }
     }
    }
}
