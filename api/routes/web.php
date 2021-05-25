<?php
Auth::routes();
Route::namespace('NonUsers')->group(function () {
    Route::get('/','VisitorViewController@index');
    Route::get('home', 'HomeController@index')->name('home');
    Route::resource('subscribe-email', 'NewsletterEmailController');
    Route::get('visitor/count','VisitorCounterController@visit');
    Route::get('ludu',function(){
        return view('ludu');
    });
    
    Route::get('pool',function(){
        return view('pool');
    });

    Route::get('card',function(){
        return 'card';
    });
    Route::get('bubble/{id}',function($id){
        return view('bubble',['id'=>$id]);
    });

    Route::get('fruit/{id}',function($id){
        return view('fruitchop',['id'=>$id]);
    });

    Route::get('football/{id}',function($id){
        return view('football',['id'=>$id]);
    });

    Route::get('chess',function(){
        return view('chesssingle');
    });
    Route::get('runner/{id}',function($id){
        return view('runner',['id'=>$id]);
    });

    Route::get('cricket/{id}',function($id){
        return view('cricket',['id'=>$id]);
    });

    Route::get('carrom',function(){
        return view('carrom');
    });

    Route::get('save/data/{id}/{name}/{score}','VisitorViewController@saveData');

    Route::get('fcm','VisitorViewController@sendPushNotification');
});