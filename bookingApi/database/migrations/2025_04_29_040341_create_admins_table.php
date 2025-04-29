<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('admin', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->enum("role", ["pembeli", "admin"])->default("pembeli");
            $table->string("alamat");
            $table->enum("jenis-kelamin",["laki-laki","perempuan"])->default("laki-laki");
            $table->string("email");
            $table->string("noTelp",13);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('admin');
    }
};
