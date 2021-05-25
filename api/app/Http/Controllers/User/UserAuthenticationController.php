<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Model\Subscribers\Subscriber;
use Illuminate\Http\Request;
use App\Mail\RegistrationVerifyMail;
use Illuminate\Validation\ValidationException;
use Hash;
use Auth;
use Mail;
use DB;

class UserAuthenticationController extends Controller
{
    public function register(Request $request){
        $request->validate([
            'email'=>'required|email|unique:subscriber',
            'password'=>'required|min:8|confirmed',
        ]);
        $user = Subscriber::create([
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'reference_code'=>$request->reference
        ]);
        if ($user){
            $fourRandomDigit = rand(1000,9999);
            $response = ['user'=>$user,'code'=>$fourRandomDigit];
            Mail::to($request->email)->send(new RegistrationVerifyMail($fourRandomDigit));
            return response($response,201);
        }else{
            return response()->json(['fault'=>'Something went wrong. Try again later'],500);
        }
    }

    public function registerWithSocial(Request $request)
    {
        $usered = Subscriber::where('email',$request->email)->get();
        if(count($usered)<1){
            $users = Subscriber::create([
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'profile_picture' => $request->photoUrl,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);
            $token = $users->createToken('oppoF17-pro')->plainTextToken;
            $response = [
                'user'=>$users,
                'token'=>$token
            ];
            return response($response,201);
        }else{
            $user = Subscriber::where('email', $request->email)->first();
            $token = $user->createToken('oppoF17-pro')->plainTextToken;
            $response = [
                'user'=>$user,
                'token'=>$token
            ];
            return response($response,201);
        }

        
    }

    
    
    public function login(Request $request)
    {
        $this->validate($request, [
            'username' => 'required',
            'password' => 'required|min:8',
            'device_name' => 'required'
        ]);
        $user = Subscriber::where('email', $request->username)->first();
        if (! $user || ! Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }
        $token = $user->createToken($request->device_name)->plainTextToken;
        $response = [
            'user'=>$user,
            'token'=>$token
        ];
        return response($response,201);
    }

    public function verifyUserOtp(Request $request)
    {
        $this->validate($request, [
            'username'=>'required'
        ]);
        $user = Subscriber::where('email', $request->username)->first();
        if($user){
            $code= rand(0000,9999);
            $otp = \App\Model\UserOtp::create(['user_id'=>$user->id,'otp'=>$code]);
            Mail::to($user->email)->queue(new \App\Mail\UserLoginOtp($code));
            return response()->json(['success'=>'Success']);
        }
        return response()->json(['fault'=>"Otp not sent"]);
    }

    public function resetPasswordString(Request $request){
        $this->validate($request, [
            'email'=>'required',
            'password'=>'required'
        ]);
        $user = Subscriber::where('email', $request->email)->first();
        if($user){
            $u = Subscriber::find($user->id);
        $u->password = Hash::make($request->password);
        $u->update();
        return response()->json(['success'=>'Success']);
        }
        return response()->json(['fault'=>'Error loading subscriber']);
        
    }

    public function verifyOtp(Request $request){
        $this->validate($request, [
            'otp' => 'required',
            'email'=>'required'
        ]);
        $id = Subscriber::where('email', $request->email)->first();
        $last = DB::table('user_otp')->where('user_id',$id->id)->orderBy('id', 'DESC')->first();
        if($request->otp == $last->otp){
            return response()->json(['success'=>'Success']);;
        }else{
            return response()->json(['fault'=>$last->otp]);
        }


    }
}