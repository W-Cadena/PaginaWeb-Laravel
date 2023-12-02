<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Popular;
use App\Models\Pelicula;

class HomeController extends Controller
{

    public function mostrarPopularesPorGenero($generoId)
    {
        $peliculasPopulares = Popular::whereHas('pelicula', function ($query) use ($generoId) {
            $query->where('genero_id', $generoId);
        })->get();
    
        return view('Home', ['peliculasPopulares' => $peliculasPopulares]);
    }

}
