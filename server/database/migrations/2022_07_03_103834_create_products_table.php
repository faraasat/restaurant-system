<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('productId');
            $table->string('name');
            $table->string('desc');
            $table->float('price');
            $table->string('shortDesc');
            $table->string('category');
            $table->string('weight');
            $table->string('imgUrl');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('products');
    }
};
