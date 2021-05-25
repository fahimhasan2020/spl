<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class ReferenceHistory extends Model
{
    protected $fillable = ['user_id','user_name','amount','game'];
    protected $table = 'reference_history';
}
