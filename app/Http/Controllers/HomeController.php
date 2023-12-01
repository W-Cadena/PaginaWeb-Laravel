<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index () { // pagina principal
        return view ('Home');
        }
}
