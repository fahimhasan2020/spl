<?php

namespace App\Http\Controllers\NonUsers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Subscribers\Subscriber;
use App\BirdCount;
use App\Model\Coupons;
use Illuminate\Support\Facades\Http;
use App\Model\UserInvited;
use App\Model\UserDevices;
use App\Model\GameResults;
use App\Events\SingleGameOver;

class VisitorViewController extends Controller
{
    public function index(){
        return view('welcome');
    }

    public function birds(){
        $birds = BirdCount::all();
        return $birds;
    }

    public function addLocation(Request $request){
        
    }

    public function checkNotification()
    {
        $response = Http::withHeaders([
            'Accept'=> 'application/json',
            'Accept-encoding'=> 'gzip, deflate',
            'Content-Type'=> 'application/json',
        ])->post('https://exp.host/--/api/v2/push/send', [
            'to'=> 'ExponentPushToken[X5iHh2DtO31fOJml1UIEu-]',
            'sound'=> 'default',
            'title'=> 'Original Title',
            'body'=> 'And here is the body!',
        ]);
    }

    public function appShare($id)
    {

        $user = UserInvited::where('user_id',$id)->get();
        if(count($user) < 2){
            UserInvited::create(['user_id'=>$id]);
            return view('samreena');
        }else{
            UserInvited::where('user_id',$id)->delete();
            $code = $id.time();
            Coupons::create([
                'user_id'=>$id,
                'type'=>'ratio',
                'code'=>$code,
                'expire_date'=>new \DateTime('tomorrow + 2day'),
                'amount'=>5
            ]);
            $device = UserDevices::where('user_id',$id)->get();
            foreach($device as $d){
                $response = Http::withHeaders([
                    'Accept'=> 'application/json',
                    'Accept-encoding'=> 'gzip, deflate',
                    'Content-Type'=> 'application/json',
                ])->post('https://exp.host/--/api/v2/push/send', [
                    'to'=> $d->token,
                    'sound'=> 'default',
                    'title'=> 'Invitation Code Received',
                    'body'=> 'You have got 5% discount over user invitation',
                ]);
            }
            return view('samreena');
        }
        
    }

    public function sendPushNotification()
    {
        $token="dMMOY2oxQBahbBo1dYypaH:APA91bGCjADb8dv_p7YlV4mIPrMDrYeuuSk_ooKOrddoNhFoRX6wIS620FMpk_sVV7M3B6U9iNG10lrcN-pbOvWBjFbaSb_CbESYdhBNnfvi6wPtABI9TOnTZAEMIpIjO-qLvv41DYoi";  
        $from="AAAAFr3o3qI:APA91bG1UL0COV-llp99ZFC8O66lsaX2IJa6uvPCiXHBA87w38MVUBLOJzQGqVPRDckDmnnvaEm3HKqI8wNgyWfWLO04EMwN63HFMuEMcnz2phqqPe8RNeQ_LnkYKFn7iD-keE9NfNuH";

        $msg = array(
            'android_channel_id'=>"1",
            'title'=>"Payment withrow success", 
            'body'=> "Cash sent to account" );

        $fields = array
                (
                    'to'        => $token,
                    'notification'  => $msg
                );
        $headers = array
                (
                    'Authorization: key=' . $from,
                    'Content-Type: application/json'
                );
        $ch = curl_init();
        curl_setopt( $ch,CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send' );
        curl_setopt( $ch,CURLOPT_POST, true );
        curl_setopt( $ch,CURLOPT_HTTPHEADER, $headers );
        curl_setopt( $ch,CURLOPT_RETURNTRANSFER, true );
        curl_setopt( $ch,CURLOPT_SSL_VERIFYPEER, false );
        curl_setopt( $ch,CURLOPT_POSTFIELDS, json_encode( $fields ) );
        $result = curl_exec($ch );
        dd($result);
        curl_close( $ch );
    }

    public function saveData($id,$name,$score)
    {
        GameResults::create([
            'user_id'=>$id,
            'game'=>$name,
            'score'=>$score
        ]);
        event(new SingleGameOver($id));
    }
}
