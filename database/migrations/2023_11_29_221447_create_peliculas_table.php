<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    // En el archivo de migración generado
public function up()
{
    Schema::create('peliculas', function (Blueprint $table) {
        $table->id();
        $table->string('titulo');
        $table->text('descripcion');
        $table->string('imagen');
        $table->string('genero');
        $table->timestamps();
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('peliculas');
    }
};
