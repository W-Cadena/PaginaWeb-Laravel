var t1 = "titnone";
var p1 = "none";
var t2 = "titnone";
var p2 = "none";
var t3 = "titnone";
var p3 = "none";
var t4 = "titnone";
var p4 = "none";
var t5 = "titnone";
var p5 = "none";

        t1 = "Operación Fortune: El gran desengaño"
        p1 = "Guy Ritchie se ha convertido en un cineasta pasado y repetitivo, como de hace un par de décadas, para algunos. Pero sus fans siguen sin perderse sus entretenidos thrillers repletos de acción, comedia y carismáticos repartos. Aquí destacan Jason Statham, Aubrey Plaza o Hugh Grant, entre otros."
        t2 = "Emily"
        p2 = "Esta claro que si hay alguien con madera de estrella del cine en el reparto de Sex Education, esa es Emma Mackey, y no lo decimos solo por su parecido con Margot Robbie morena. A juzgar por las críticas, parece que será este biopic, en el que encarna a Emily Bronte, joven autora de Cumbres borrascosas, en el que dará ese salto."
        t3 = "The Fall: El sueño de Alexandria"
        p3 = "Las grandes explanadas, los coloridos vestuarios o las sombras dibujadas en las paredes hacen de esta película de Tarsem Singh una proeza estética. Ganadora del premio a Mejor Película en el Festival de Sitges, este filme venido de la India se instala en Hollywood para contar, como el propio lugar, historias increíbles de mundos exóticos."
        t4 = "Deseando amar"
        p4 = "El hongkonés Wong Kar Wai ha conseguido su prestigio gracias a historias de gran sensibilidad, complejidad y, por supuesto, una puesta en escena que quita el hipo. Eso es lo que demuestra en la que es, probablemente, su mejor película: un relato de infidelidades, desengaños y reencuentros con cámaras lentas, canciones de Nat King Cole y colores llamativos. Es, sin duda ninguna, de las mejores películas de Wong Kar Wai."
        t5 = "La noche del cazador"
        p5 = "En este escenario se desarrolla uno de los momentos más tensos y visualmente impactantes de toda la película de Charles Laughton. Ahí, en las luces y sombras entre las dos casas, aparecerá un inquietante Robert Mitchum en busca de dos niños a la fuga. Este clásico de los años 50 sigue impresionando gracias a su aparato visual en blanco y negro, que explota las sombras al máximo para crear tensión y terror."
 

function funciones1(){
    if(document.getElementById("funciones").value == "r"){
        window.location.reload();
    }else if(document.getElementById("funciones").value  == "tipo" 
    || document.getElementById("funciones").value  == "comic" 
    || document.getElementById("funciones").value  == "verda"
    || document.getElementById("funciones").value  == "times"){

        
        if(document.getElementById("funciones").value == "tipo"){
            var combo = document.getElementById("funciones")
            combo.options[combo.selectedIndex].value = "comic"
            document.body.style.fontFamily ="Comic Sans MS";
        }else if(document.getElementById("funciones").value == "comic"){
            var combo = document.getElementById("funciones")
            combo.options[combo.selectedIndex].value = "verda"
            document.body.style.fontFamily ="Verdana";
        }else if(document.getElementById("funciones").value == "verda"){
            var combo = document.getElementById("funciones")
            combo.options[combo.selectedIndex].value = "times"
            document.body.style.fontFamily ='Times New Roman';
        }else{
            var combo = document.getElementById("funciones")
            combo.options[combo.selectedIndex].value = "tipo"
            document.body.style.fontFamily ="Arial, sans-serif";
            
        }
    }else if(document.getElementById("funciones").value == "noche" || document.getElementById("funciones").value == "dia"){

        if(document.getElementById("funciones").value == "noche"){
            var combo = document.getElementById("funciones")
            combo.options[combo.selectedIndex].value = "dia"
            document.getElementById("bloques").style.backgroundColor = "black";
            document.getElementById("bloques1").style.backgroundColor = "black";
            document.getElementById("bloques2").style.backgroundColor = "black";
            document.getElementById("bloques3").style.backgroundColor = "black";
            document.getElementById("bloques4").style.backgroundColor = "black";
            document.getElementById("bloques5").style.backgroundColor = "black";
            
            document.getElementById("bloques1").style.color = "white";
            document.getElementById("bloques3").style.color = "white";
            document.getElementById("bloques4").style.color = "white";
            document.getElementById("bloques5").style.color = "white";
        }else{
            var combo = document.getElementById("funciones")
            combo.options[combo.selectedIndex].value = "noche"
            document.getElementById("bloques").style.backgroundColor = "white";
            document.getElementById("bloques1").style.backgroundColor = "white";
            document.getElementById("bloques2").style.backgroundColor = "white";
            document.getElementById("bloques3").style.backgroundColor = "white";
            document.getElementById("bloques4").style.backgroundColor = "white";
            document.getElementById("bloques5").style.backgroundColor = "white";
            
            document.getElementById("bloques1").style.color = "black";
            document.getElementById("bloques3").style.color = "black";
            document.getElementById("bloques4").style.color = "black";
            document.getElementById("bloques5").style.color = "black";
        }
    }else if(document.getElementById("funciones").value  == "tam" 
    || document.getElementById("funciones").value  == "tam1" 
    || document.getElementById("funciones").value  == "tam2"
    || document.getElementById("funciones").value  == "tam3"){

        if(document.getElementById("funciones").value  == "tam"){
            var combo = document.getElementById("funciones")
            combo.options[combo.selectedIndex].value = "tam1"
            document.body.style.fontSize =  "25px";
        }else if(document.getElementById("funciones").value  == "tam1"){
            var combo = document.getElementById("funciones")
            combo.options[combo.selectedIndex].value = "tam2"
            document.body.style.fontSize =  "40px";
        }else if(document.getElementById("funciones").value  == "tam2"){
            var combo = document.getElementById("funciones")
            combo.options[combo.selectedIndex].value = "tam3"
            document.body.style.fontSize =  "60px";
        }else{
            var combo = document.getElementById("funciones")
            combo.options[combo.selectedIndex].value = "tam"
            document.body.style.fontSize =  "16px";
        }
    }else if(document.getElementById("funciones").value  == "min"){
        document.getElementById("text1").innerHTML = document.getElementById("text1").innerHTML.toLowerCase();
        document.getElementById("text2").innerHTML = document.getElementById("text2").innerHTML.toLowerCase();
        document.getElementById("text3").innerHTML = document.getElementById("text3").innerHTML.toLowerCase();
        document.getElementById("text4").innerHTML = document.getElementById("text4").innerHTML.toLowerCase();
        document.getElementById("text5").innerHTML = document.getElementById("text5").innerHTML.toLowerCase();
        document.getElementById("text6").innerHTML = document.getElementById("text6").innerHTML.toLowerCase();
    
    }else if(document.getElementById("funciones").value  == "max"){
        document.getElementById("text1").innerHTML = document.getElementById("text1").innerHTML.toUpperCase();
        document.getElementById("text2").innerHTML = document.getElementById("text2").innerHTML.toUpperCase();
        document.getElementById("text3").innerHTML = document.getElementById("text3").innerHTML.toUpperCase();
        document.getElementById("text4").innerHTML = document.getElementById("text4").innerHTML.toUpperCase();
        document.getElementById("text5").innerHTML = document.getElementById("text5").innerHTML.toUpperCase();
        document.getElementById("text6").innerHTML = document.getElementById("text6").innerHTML.toUpperCase();
    }
}

function funciones2(){
    if(document.getElementById("genero").value  == "ac"){
        document.getElementById("titulo").innerHTML = "Peliculas Populares de accion";
        document.getElementById("imag1").src = "https://upload.wikimedia.org/wikipedia/en/thumb/8/85/Terminator2poster.jpg/220px-Terminator2poster.jpg"; 
        document.getElementById("imag2").src = "https://moviepostermexico.com/cdn/shop/products/1_2d9febd3-7c50-4152-a454-4db62dc5acf3_540x.jpg?v=1596172691";
        document.getElementById("imag3").src = "https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Mad_Max_Fury_Road.jpg/220px-Mad_Max_Fury_Road.jpg";
        document.getElementById("imag4").src = "https://upload.wikimedia.org/wikipedia/en/thumb/9/98/John_Wick_TeaserPoster.jpg/220px-John_Wick_TeaserPoster.jpg";
        document.getElementById("imag5").src = "https://i.etsystatic.com/18242346/r/il/3236c6/2543109415/il_1588xN.2543109415_g6y4.jpg";
        t1 = "Terminator 2: Judgment Day"
        p1 ="Un ciborg indestructible es enviada al pasado para proteger al joven John Connor de un modelo avanzado de Terminator."
        t2 ="Die Hard"
        p2 ="Un policía de Nueva York lucha contra un grupo de terroristas que toman como rehenes a un edificio durante una fiesta navideña."
        t3 = "Mad Max: Fury Road";
        p3 = "En un futuro postapocalíptico, Max se une a Furiosa para escapar de un líder tiránico y su ejército en un viaje a través del desierto";
        t4 = "John Wick";
        p4 = "John Wick, un exasesino a sueldo, busca venganza después de que unos criminales matan a su perro y roban su auto";
        t5 = "Black Panther";
        p5 = "T'Challa regresa a la ficticia Wakanda para asumir el trono después de la muerte de su padre y debe enfrentarse a desafíos para proteger su nación";
        document.body.style.backgroundColor = "gray";
        document.getElementById("bloques").style.backgroundColor = "rgb(50, 50, 50)";
        document.getElementById("bloques1").style.backgroundColor = "rgb(50, 50, 50)";
        document.getElementById("bloques2").style.backgroundColor = "rgb(50, 50, 50)";
        document.getElementById("bloques3").style.backgroundColor = "rgb(50, 50, 50)";
        
        document.getElementById("tit1").style.color = "black";
        document.getElementById("text2").style.color = "black";
    
    }else if(document.getElementById("genero").value  == "com"){
        document.getElementById("titulo").innerHTML = "Peliculas Populares de comedia";
        document.getElementById("imag1").src = "https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/Superbad_Poster.png/220px-Superbad_Poster.png";
        document.getElementById("imag2").src = "https://moviepostermexico.com/cdn/shop/products/shaun_of_the_dead_xlg_1024x1024@2x.jpg?v=1576686235";
        document.getElementById("imag3").src = "https://moviepostermexico.com/cdn/shop/products/thegrandbudapest2_540x.jpg?v=1621955373";
        document.getElementById("imag4").src = "https://i.etsystatic.com/46778249/r/il/d63e76/5401941997/il_1588xN.5401941997_ff2f.jpg";
        document.getElementById("imag5").src = "https://m.media-amazon.com/images/I/71NSaiNKO9L.__AC_SX300_SY300_QL70_FMwebp_.jpg";
        t1 = "Superbad"
        p1 ="Dos amigos intentan hacer su última fiesta épica antes de graduarse de la escuela secundaria, pero las cosas no salen como esperaban."
        t2 ="Shaun of the Dead"
        p2 ="Shaun intenta reconciliar su vida amorosa y laboral mientras enfrenta un apocalipsis zombi en su pub local."
        t3 = "The Grand Budapest Hotel";
        p3 = "Un conserje y su joven protegido se involucran en una serie de eventos hilarantes mientras tratan de recuperar una pintura robada.";
        t4 = "Hot Fuzz";
        p4 = "Un sargento de policía es transferido a un tranquilo pueblo inglés, pero descubre que las cosas no son tan pacíficas como parecen";
        t5 = "Bridesmaids";
        p5 = "Una dama de honor y su grupo enfrentan una serie de desastres cómicos mientras se preparan para la boda de su amiga";

        document.body.style.backgroundColor = "white";
        document.getElementById("bloc1").style.backgroundColor = "rgb(50, 50, 50)"
        document.getElementById("bloques").style.backgroundColor = "gray";
        document.getElementById("bloques1").style.backgroundColor = "gray";
        document.getElementById("bloques2").style.backgroundColor = "gray";
        document.getElementById("bloques3").style.backgroundColor = "gray";
        
        document.getElementById("bloques1").style.color = "white";
        document.getElementById("bloques3").style.color = "white";


    }else if(document.getElementById("genero").value  == "dram"){
        document.getElementById("titulo").innerHTML = "Peliculas Populares de drama";
        document.getElementById("imag1").src = "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/ShawshankRedemptionMoviePoster.jpg/220px-ShawshankRedemptionMoviePoster.jpg"
        document.getElementById("imag2").src = "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Forrest_Gump_poster.jpg/220px-Forrest_Gump_poster.jpg"
        document.getElementById("text1").innerHTML = "The Shawshank Redemption"
        document.getElementById("text2").innerHTML = "Un banquero es condenado por un crimen que no cometió y encuentra amistad y esperanza en la prisión de Shawshank."
        document.getElementById("text5").innerHTML = "Forrest Gump"
        document.getElementById("text6").innerHTML = "Forrest Gump, con una discapacidad intelectual, vive una vida extraordinaria y deja una profunda huella en la historia de Estados Unidos."
        
        document.getElementById("bloques").style.backgroundColor = "black";
        document.getElementById("bloques1").style.backgroundColor = "black";
        document.getElementById("bloques2").style.backgroundColor = "black";
        document.getElementById("bloques3").style.backgroundColor = "black";
        document.getElementById("bloques4").style.backgroundColor = "black";
        document.getElementById("bloques5").style.backgroundColor = "black";
        
        document.getElementById("bloques1").style.color = "white";
        document.getElementById("bloques3").style.color = "white";
        document.getElementById("bloques4").style.color = "white";
        document.getElementById("bloques5").style.color = "white";
    }else if(document.getElementById("genero").value  == "cient"){
        document.getElementById("titulo").innerHTML = "Peliculas Populares de ciencia ficcion";
        document.getElementById("imag1").src = "https://http2.mlstatic.com/D_NQ_NP_2X_799978-MLM44039919288_112020-F.webp"
        document.getElementById("imag2").src = "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg"
        document.getElementById("text1").innerHTML = "Blade Runner"
        document.getElementById("text2").innerHTML = "En un futuro distópico, un blade runner debe perseguir y 'retirar' a cuatro replicantes fugitivos que regresaron a la Tierra en busca de su creador."
        document.getElementById("text5").innerHTML = "The Matrix"
        document.getElementById("text6").innerHTML = "Un hacker descubre la verdad sobre su realidad y se une a una rebelión contra las máquinas que controlan a la humanidad en una simulación de realidad virtual."
        
        document.getElementById("bloques").style.backgroundColor = "black";
        document.getElementById("bloques1").style.backgroundColor = "black";
        document.getElementById("bloques2").style.backgroundColor = "black";
        document.getElementById("bloques3").style.backgroundColor = "black";
        document.getElementById("bloques4").style.backgroundColor = "black";
        document.getElementById("bloques5").style.backgroundColor = "black";
        
        document.getElementById("bloques1").style.color = "white";
        document.getElementById("bloques3").style.color = "white";
        document.getElementById("bloques4").style.color = "white";
        document.getElementById("bloques5").style.color = "white";
    }else if(document.getElementById("genero").value  == "ani"){
        document.getElementById("titulo").innerHTML = "Peliculas Populares de animacion";
        document.getElementById("imag1").src = "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Finding_Nemo.jpg/220px-Finding_Nemo.jpg"
        document.getElementById("imag2").src = "https://m.media-amazon.com/images/I/71hWkxTBHRL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
        document.getElementById("text1").innerHTML = "Finding Nemo"
        document.getElementById("text2").innerHTML = "Marlin, un pez payaso, emprende un viaje épico para encontrar a su hijo Nemo, que ha sido capturado y llevado a un acuario."
        document.getElementById("text5").innerHTML = "Zootopia"
        document.getElementById("text6").innerHTML = "Judy Hopps, una conejita policía, se asocia con un astuto zorro para resolver un misterioso caso en la ciudad de animales antropomórficos, Zootopia."
    }else if(document.getElementById("genero").value  == "nan"){
        document.getElementById("titulo").innerHTML = "Peliculas Populares";
        document.getElementById("imag1").src = "https://www.lahiguera.net/cinemania/pelicula/8978/operacion_fortune_el_gran_engano-cartel-10283.jpg"
        document.getElementById("imag2").src = "https://moviepostermexico.com/cdn/shop/products/emily_in_paris_xlg_1024x1024@2x.jpg?v=1610691255"
        document.getElementById("imag3").src = "https://i.pinimg.com/736x/1b/2d/76/1b2d7661bf8057bffd3fe273cc9b44db.jpg"
        document.getElementById("imag4").src = "https://www.elseptimoarte.net/carteles/341/deseando_amar_86077.jpg"
        document.getElementById("imag5").src = "https://www.tuposter.com/pub/media/catalog/product/cache/image/700x560/91bbed04eb86c2a8aaef7fbfb2041b2a/f/i/file_90_8.jpg"
        t1 = "Operación Fortune: El gran desengaño"
        p1 = "Guy Ritchie se ha convertido en un cineasta pasado y repetitivo, como de hace un par de décadas, para algunos. Pero sus fans siguen sin perderse sus entretenidos thrillers repletos de acción, comedia y carismáticos repartos. Aquí destacan Jason Statham, Aubrey Plaza o Hugh Grant, entre otros."
        t2 = "Emily"
        p2 = "Esta claro que si hay alguien con madera de estrella del cine en el reparto de Sex Education, esa es Emma Mackey, y no lo decimos solo por su parecido con Margot Robbie morena. A juzgar por las críticas, parece que será este biopic, en el que encarna a Emily Bronte, joven autora de Cumbres borrascosas, en el que dará ese salto."
        t3 = "The Fall: El sueño de Alexandria"
        p3 = "Las grandes explanadas, los coloridos vestuarios o las sombras dibujadas en las paredes hacen de esta película de Tarsem Singh una proeza estética. Ganadora del premio a Mejor Película en el Festival de Sitges, este filme venido de la India se instala en Hollywood para contar, como el propio lugar, historias increíbles de mundos exóticos."
        t4 = "Deseando amar"
        p4 = "El hongkonés Wong Kar Wai ha conseguido su prestigio gracias a historias de gran sensibilidad, complejidad y, por supuesto, una puesta en escena que quita el hipo. Eso es lo que demuestra en la que es, probablemente, su mejor película: un relato de infidelidades, desengaños y reencuentros con cámaras lentas, canciones de Nat King Cole y colores llamativos. Es, sin duda ninguna, de las mejores películas de Wong Kar Wai."
        t5 = "La noche del cazador"
        p5 = "En este escenario se desarrolla uno de los momentos más tensos y visualmente impactantes de toda la película de Charles Laughton. Ahí, en las luces y sombras entre las dos casas, aparecerá un inquietante Robert Mitchum en busca de dos niños a la fuga. Este clásico de los años 50 sigue impresionando gracias a su aparato visual en blanco y negro, que explota las sombras al máximo para crear tensión y terror."
 
        document.body.style.backgroundColor = "gray";
        document.getElementById("bloques").style.backgroundColor = "white";
        document.getElementById("bloques1").style.backgroundColor = "white";
        document.getElementById("bloques2").style.backgroundColor = "white";
        document.getElementById("bloques3").style.backgroundColor = "#f8f8f8";
        
        document.getElementById("bloc1").style.color = "black";
    }
}

function texto(sel){
    switch(sel){
        case 1:
            document.getElementById("tit1").innerHTML = t1;
            document.getElementById("text2").innerHTML = p1;
            break;
        case 2:
            document.getElementById("tit1").innerHTML = t2;
            document.getElementById("text2").innerHTML = p2;
            break;
        case 3:
            document.getElementById("tit1").innerHTML = t3;
            document.getElementById("text2").innerHTML = p3;
            break;    
        case 4:
            document.getElementById("tit1").innerHTML = t4;
            document.getElementById("text2").innerHTML = p4;
            break;
        case 5:
            document.getElementById("tit1").innerHTML = t5;
            document.getElementById("text2").innerHTML = p5;
            break;
    }

}

function palabras(){
    var e  =document.getElementById("text2");
    e.className = "slidein"
}

function palabras2(){
    var e  =document.getElementById("text6");
    e.className = "slidein"
}

function alerta_inicio(){
    alert("bienvenido: " + document.getElementById("username").value)
}

function registro(){
    alert("Registro confirmado: \n" + document.getElementById("firstName").value + "\n"
    + document.getElementById("lastName").value + "\n"
    + document.getElementById("gender").value + "\n"
    + document.getElementById("phoneNumber").value + "\n"
    + document.getElementById("email").value)
}