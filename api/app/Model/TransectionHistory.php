<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class TransectionHistory extends Model
{
    protected $fillable = ['user_id','amount','type'];
    protected $table = 'transection_history';
}
