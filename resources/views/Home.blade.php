<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Géneros de Películas</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="./css/menu_principal.css">
    <script src="./js/funciones.js"></script>
</head>
<body>

    <header class="bg-dark text-white p-4 d-flex justify-content-between align-items-center">
        <section class="seccion_log">
            <img class="logo" src="imagenes/Peli_Cine.png" alt="Logo">
        </section>
        <aside>
            <a id="inicio" href="iniciosesion.html" class="text-light">Iniciar sesión</a>
        </aside>
    </header>

    <nav class="bg-secondary text-white p-2">
        <ul class="nav">
            <li class="nav-item"><a class="nav-link" href="peliculas/accion">Acción</a></li>
            <li class="nav-item"><a class="nav-link" href="peliculas/comedia">Comedia</a></li>
            <li class="nav-item"><a class="nav-link" href="peliculas/drama">Drama</a></li>
            <li class="nav-item"><a class="nav-link" href="peliculas/cienciaficcion">Ciencia Ficción</a></li>
            <li class="nav-item"><a class="nav-link" href="peliculas/Animacion">Animación</a></li>
        </ul>
    </nav>

    <section class="container mt-4">
        <div class="row">
            <div class="col-md-6">
                <h2>Explora nuestros géneros</h2>
                <p>Selecciona un género para obtener más información:</p>
                <label for="genero">Géneros:</label>
                <select class="form-control" id="genero" name="genero" onchange="funciones2()">
                    <option value="nan">--</option>
                    <option value="ac">Acción</option>
                    <option value="com">Comedia</option>
                </select>
            </div>
        </div>
    </section>

    <section class="container mt-4">
        <center><h3 id="titulo">Películas Populares</h3></center>
    </section>

    <section class="container mt-4">
        <style>
            .carousel-control-prev-icon, .carousel-control-next-icon {
                background-color: #444; /* Cambia el color de las flechas a negro */
                color: white;
            }
        </style>        

        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="d-flex justify-content-around">
                        <button onclick="palabras()" onmouseover="texto(1)" class="btn btn-outline-light dvd">
                            <img class="img-fluid" id="imag1" src="https://www.lahiguera.net/cinemania/pelicula/8978/operacion_fortune_el_gran_engano-cartel-10283.jpg" alt="Película 1">
                        </button>
                        <button onclick="palabras()" onmouseover="texto(2)" class="btn btn-outline-light dvd">
                            <img class="img-fluid" id="imag2" src="https://moviepostermexico.com/cdn/shop/products/emily_in_paris_xlg_1024x1024@2x.jpg?v=1610691255" alt="Película 2">
                        </button>
                        <button onclick="palabras()" onmouseover="texto(3)" class="btn btn-outline-light dvd">
                            <img class="img-fluid" id="imag3" src="https://i.pinimg.com/736x/1b/2d/76/1b2d7661bf8057bffd3fe273cc9b44db.jpg" alt="Película 3">
                        </button>
                    </div>
                </div>
                    <div class="carousel-item">
                        <div class="d-flex justify-content-around">
                            <button onclick="palabras()" onmouseover="texto(4)" class="btn btn-outline-light dvd">
                                <img class="img-fluid" id="imag4" src="https://www.elseptimoarte.net/carteles/341/deseando_amar_86077.jpg" alt="Película 4">
                            </button>
                            <button onclick="palabras()" onmouseover="texto(5)" class="btn btn-outline-light dvd">
                                <img class="img-fluid" id="imag5" src="https://pics.filmaffinity.com/La_noche_del_cazador-379395042-large.jpg" alt="Película 5">
                            </button>
                            <button onclick="palabras()" onmouseover="texto(5)" class="btn btn-outline-light dvd">
                                <img class="img-fluid" id="imag5" src="https://pics.filmaffinity.com/La_noche_del_cazador-379395042-large.jpg" alt="Película 5">
                            </button>
                        </div>
                    </div>
                </div>
                <!-- Repite el mismo formato para los demás elementos carousel-item -->
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Anterior</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Siguiente</span>
            </a>
        </div>
        
        <div class="container-fluid mt-4">
            <div class="row">
                <div class="col-md-6 mx-auto">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title" id="tit1"></h5>
                            <p class="card-text" id="text2">Esto es un texto de ejemplo</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
            
    </section>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

</body>
</html>