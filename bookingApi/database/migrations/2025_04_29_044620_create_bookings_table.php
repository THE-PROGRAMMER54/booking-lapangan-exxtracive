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
        Schema::create('bookings', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("id_lapangan");
            $table->unsignedBigInteger("id_pembeli");
            $table->unsignedBigInteger("id_admin");
            $table->time('jam_mulai')->nullable();
            $table->time('jam_selesai')->nullable();
            $table->timestamps();

            $table->foreign("id_lapangan")->references("id")->on("daftar_lapangan")->onDelete("cascade");
            $table->foreign("id_pembeli")->references("id")->on("pembeli")->onDelete("cascade");
            $table->foreign("id_admin")->references("id")->on("admin")->onDelete("cascade");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bookings');
    }
};
