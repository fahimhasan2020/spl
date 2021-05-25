<?php

namespace App\Http\Controllers\Rider;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Rider;
use App\Events\RiderCallComplete;
use Storage;
use App\Model\Subscribers\Subscriber;
use Illuminate\Support\Str;
use App\Model\Ride;
use App\Model\Pole;
use App\Events\UpdateRiderMarker;
use App\Events\RideCancelled;
use App\Model\PoleUser;
use App\Events\RiderSetUser;

class HomeController extends Controller
{

    public function locationUpdate(Request $request){
        $request->validate([
            'id'=>'required',
            'latitude'=>'required',
            'longitude'=>'required'
        ]);
        $ride = Ride::find($id);
        event(new UpdateRiderMarker($ride->user_id,$request->latitude,$request->longitude));
    }

    public function getInfo(Request $request)
    {
        $request->validate([
            'email'=>'required',
        ]);
        $rider = Rider::where('email',$request->email)->first();
        return response()->json($rider);
      
    }

    public function saveInfo(Request $request)
    {
        $request->validate([
            'email'=>'required',
        ]);
        $user = Rider::where('email',$request->email)->first();
        $id = Rider::find($user->id);
        if(isset($request->firstName)){
            $id->first_name = $request->firstName;
        }
        if(isset($request->lastName)){
            $id->last_name = $request->lastName;
        }
        if(isset($request->dob)){
            $id->date_of_birth = $request->dob;
        }
        if(isset($request->phone)){
            $id->phone_number = $request->phone;
        }
        $id->update();
        return response(  5
        )->json(['Success'=>'Added']); 
    }

    public function updateDp(Request $request)
    {
        $request->validate([
            'email'=>'required',
            'image'=>'required'
        ]);
        $rider = Rider::where('email',$request->email)->first();
        $rideDriver = Rider::find($rider->id);
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

    public function findUser(Request $request)
    {
        $request->validate(['id'=>'required']);
        $user = Subscriber::where('id',$request->id)->first();
        if($user){
            return $user;
        }

    }

    public function findRide(Request $request)
    {
        $request->validate(['id'=>'required']);
        $ride = Ride::find($request->id);
        return $ride;
    }

    public function findPole(Request $request)
    {
        $request->validate(['id'=>'required']);
        $ride = Pole::find($request->id);
        return $ride;
    }

    public function completeRide(Request $request)
    {
        $request->validate(['id'=>'required']);
        $ride = Ride::find($request->id);
        $ride->completed = 1;
        $ride->update();
        event(new RiderCallComplete($ride->user_id,0));

    }

    
    public function completePole(Request $request)
    {
        $request->validate(['id'=>'required']);
        $ride = Pole::find($request->id);
        $ride->completed = 1;
        $ride->update();
        $users = PoleUser::where('pole_id',$request->id)->get();
        foreach($users as $u){
             event(new RiderCallComplete($u->user_id,0));
        }
       

    }


    public function completePoleSingle(Request $request)
    {
        $request->validate(['id'=>'required','rent'=>'required']);
        event(new RiderCallComplete($request->id,$request->rent));
    }

    public function cancelRide(Request $request)
    {
        $request->validate(['id'=>'required']);
        $rides = Ride::where('id',$request->id)->first();
        $user = $rides->user_id; 
        $ride = Ride::where('id',$request->id)->delete();
        event(new RideCancelled($user));     
    }

    public function cancelPole(Request $request)
    {
        $request->validate(['id'=>'required']);
        $rides = Pole::where('id',$request->id)->first();
        $ride = Pole::where('id',$request->id)->delete();
        $users = PoleUser::where('pole_id',$request->id)->get();
        foreach($users as $u){
            event(new RideCancelled($u->user_id));
        }
        

    }

    public function allRide(Request $request)
    {
        $request->validate(['email'=>'required']);
        $rider = Rider::where('email',$request->email)->first();
        $ride = Ride::where(['rider_id'=>$rider->id,'completed'=>1])->get();
        return $ride;
    }

    public function allPole(Request $request)
    {
        $request->validate(['email'=>'required']);
        $rider = Rider::where('email',$request->email)->first();
        $ride = Pole::where(['rider_id'=>$rider->id,'completed'=>1])->get();
        return $ride;
    }

    public function riderAcceptPoleJoin(Request $request)
    {
        $request->validate(['email'=>'required','id'=>'required']);
        $user = Subscriber::where('email',$request->email)->first();
        $pole = Pole::where('id',intval($request->id))->first();
        event(new RiderSetUser($user,$pole));
        return 2;
    }
}
