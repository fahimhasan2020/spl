<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class NidVerification extends Model
{
    protected $fillable = ['user_id','front_image','back_image'];
    protected $table = 'nid_verification';
}
