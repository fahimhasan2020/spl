<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class SiteSettings extends Model
{
    protected $fillable = ['nagad','binance'];
    protected $table = 'site_settings';
}
