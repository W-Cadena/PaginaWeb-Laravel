<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pelicula; 

class PeliculaController extends Controller
{
    public function mostrarPeliculas($genero = null)
    {
        if ($genero) {
            $peliculas = Pelicula::where('genero', $genero)->get();
        } else {
            $peliculas = Pelicula::all();
        }

        return view('peliculas', ['peliculas' => $peliculas,'genero' => $genero]);
    }
}
