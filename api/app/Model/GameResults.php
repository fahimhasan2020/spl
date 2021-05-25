<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class GameResults extends Model
{
    protected $fillable = ['user_id','game','score','counted'];
    protected $table = 'game_results';
}
