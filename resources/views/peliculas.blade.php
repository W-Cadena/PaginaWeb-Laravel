@extends ('layouts.plantilla_genero')

@section ('title', $genero)

@section ('content')
<h1>Películas de {{$genero}} </h1>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href=".">Pelí-REC</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Próximas</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Top 10</a>
                </li>
            </ul>
        </div>
    </nav>
    
    <div class="container mt-5">
        <div class="row">
            @foreach ($peliculas as $pelicula)
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="{{ $pelicula->imagen }}" class="card-img-top" alt="{{ $pelicula->titulo }} Poster">
                        <div class="card-body">
                            <h5 class="card-title">{{ $pelicula->titulo }}</h5>
                            <p class="card-text">{{ $pelicula->descripcion }}</p>
                            <button type="button" class="btn btn-success">Me gusta</button>
                            <button type="button" class="btn btn-danger">No me gusta</button>
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
    </div>

@endsection