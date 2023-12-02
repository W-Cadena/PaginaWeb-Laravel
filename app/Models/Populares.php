<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Populares extends Model
{

public function pelicula()
{
    return $this->belongsTo(Pelicula::class);
}

    use HasFactory;
}
