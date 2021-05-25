<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class MultigameResult extends Model
{
    protected $fillable = ['user_id','game','coins','result'];
    protected $table = 'multigame_results';
}
