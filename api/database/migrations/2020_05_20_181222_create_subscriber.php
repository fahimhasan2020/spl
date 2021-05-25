<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubscriber extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('subscriber', function (Blueprint $table) {
            $table->id();
            $table->string('email')->unique()->nullable();
            $table->string('provider_id')->unique()->nullable();
            $table->string('password',200);
            $table->string('first_name',200)->nullable();
            $table->string('last_name',200)->nullable();
            $table->string('nid',200)->nullable();
            $table->integer('coins')->default(0);
            $table->string('profile_picture',200)->nullable();
            $table->string('reference_code',200)->nullable();
            $table->boolean('suspended')->default(false);
            $table->boolean('hold')->default(false);
            $table->boolean('blocked')->default(false);
            $table->boolean('deactivated')->default(false);
            $table->string('phone_number')->nullable()->unique();
            $table->string('remember_token')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('subscriber');
    }
}
