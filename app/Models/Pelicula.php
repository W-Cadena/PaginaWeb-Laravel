<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pelicula extends Model
{
    
    public function populares()
{
    return $this->hasMany(Popular::class);
}

    use HasFactory;
}
