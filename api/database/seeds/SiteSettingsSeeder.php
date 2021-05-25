<?php

use Illuminate\Database\Seeder;
use App\Model\SiteSettings;

class SiteSettingsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            [
                "id"=>1,
                "nagad"=>"01711432259",
                "binance" =>'123456789',
                "bkash"=>'01711432259'
            ],
        ];
        foreach ($items as $item) {
         $settings = SiteSettings::create($item);
        }
    }
}
