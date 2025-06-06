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
        Schema::create('daftar_lapangan', function (Blueprint $table) {
            $table->id();
            $table->string("nama_lapangan");
            $table->integer("kapasitas");
            $table->string("alamat");
            $table->string("deskripsi");
            $table->bigInteger("harga");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('daftar_lapangan');
    }
};
