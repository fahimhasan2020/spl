<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class CashoutRecord extends Model
{
    protected $fillable = ['user_id','amount','delivered','binance_account','nogod_account'];
    protected $table = 'cashout_record';
}
