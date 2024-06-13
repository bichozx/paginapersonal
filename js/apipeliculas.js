const uri = "https://api.themoviedb.org/3/movie/popular?api_key=35700dacc9850e3acda5a9ea994d4d5e&language=es-MX";
const uri2="https://api.themoviedb.org/3/movie/157336?api_key=35700dacc9850e3acda5a9ea994d4d5e&append_to_response=videos"

fetch(uri)
    .then(function(respuesta) {
        return respuesta.json();
    })
    .then(function(respuesta) {
        console.log(respuesta);
        pintarDatos(respuesta);
    })
    .catch(function(error) {
        console.log(error);
    });


    fetch(uri2)
    .then(function(respuesta) {
        return respuesta.json();
    })
    .then(function(respuesta) {
        console.log('soy nueva',respuesta);
        
    })
    .catch(function(error) {
        console.log(error);
    });

function pintarDatos(datos) {
    const peliculas = document.getElementById("peliculas");

    datos.results.forEach(movie => {
        console.log(movie.title);
        console.log(movie.poster_path);

        // Crear un div para la columna
        const columna = document.createElement("div");
        columna.classList.add("col-12", "col-md-4", "col-lg-3", "d-flex", "align-items-stretch");

        // Crear la tarjeta
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("fondotarjeta");

        // Crear la imagen
        const imagen = document.createElement("img");
        imagen.classList.add("tarjeta-imagen");
        imagen.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
        imagen.alt = `Poster de ${movie.title}`;

        // Crear el encabezado de la tarjeta
        const encabezado = document.createElement("div");
        encabezado.classList.add("encabezado");
        encabezado.textContent = movie.title;

        // Crear la descripción
        const descripcion = document.createElement("div");
        descripcion.classList.add("tarjeta-descripcion");
        descripcion.textContent = movie.overview;

        // Crear los botones
        const botones = document.createElement("div");
        botones.classList.add("botones");

        const botonVer = document.createElement("button");
        botonVer.classList.add("boton");
        botonVer.textContent = "Ver Ahora";

        const botonAñadir = document.createElement("button");
        botonAñadir.classList.add("boton", "boton-secundario");
        botonAñadir.textContent = "Añadir a Mi Lista";

        // Añadir elementos al contenedor de botones
        botones.appendChild(botonVer);
        botones.appendChild(botonAñadir);

        // Añadir elementos al contenido de la tarjeta
        tarjeta.appendChild(imagen);
        tarjeta.appendChild(encabezado);
        tarjeta.appendChild(descripcion);
        tarjeta.appendChild(botones);

        // Añadir tarjeta a la columna
        columna.appendChild(tarjeta);

        // Añadir columna al contenedor de películas
        peliculas.appendChild(columna);
    });
}
