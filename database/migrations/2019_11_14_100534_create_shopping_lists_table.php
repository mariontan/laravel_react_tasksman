<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateShoppingListsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shopping_lists', function (Blueprint $table) {
            $table->increments('id');
            $table->string('itemname');
            $table->text('description');
            $table->unsignedInteger('quantity');
            $table->boolean('is_bought')->dafault(0);
            $table->timestamps();
        });
    }
    /*
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->text('description');
            $table->boolean('is_completed')->default(0);
            $table->timestamps();
        });
    }
    */
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('shopping_lists');
    }
}
