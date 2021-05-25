<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class UserPushToken extends Model
{
    protected $fillable = ['user_id','token'];
    protected $table = 'user_pushtoken';
}
