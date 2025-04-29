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
        Schema::create('pembayaran', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("id_pembeli");
            $table->bigInteger("bayar");
            $table->bigInteger("totalHarga");
            $table->enum("status",["lunas","pending"])->default("pending");
            $table->timestamps();
            $table->foreign('id_pembeli')->references('id')->on('pembeli')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pembayaran');
    }
};
