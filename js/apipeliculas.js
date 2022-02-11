let uri = "https://api.themoviedb.org/3/movie/popular?api_key=35700dacc9850e3acda5a9ea994d4d5e&language=es-MX"


fetch(uri)
    .then(function(respuesta) {
        return (respuesta.json())

    })

.then(function(respuesta) {
    console.log(respuesta)
    pintarDatos(respuesta)

})

.catch(function(error) {
    console.log(error)
})

function pintarDatos(datos) {

    let peliculas = document.getElementById("peliculas")

    datos.results.forEach(movie => {

        console.log(movie.title)
        console.log(movie.poster_path)

        //crear un div para la tarjeta
        let columna = document.createElement("div")
        columna.classList.add("col")

        //crear la tarjeta
        let tarjeta = document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("mb-3")
        tarjeta.setAttribute("style", "max-width: 540px;")

        //crear cuerpo tarjeta
        let cuerpoimg = document.createElement("div")
        cuerpoimg.classList.add("row")
        cuerpoimg.classList.add("g-0")
        cuerpoimg.classList.add("rounded")

        let cuerpoimg2 = document.createElement("div")
        cuerpoimg2.classList.add("col-md-4")
        cuerpoimg2.classList.add("fondotarjeta")

        //crear imagen
        let imagen = document.createElement("img")
        imagen.classList.add("img-fluid")
        imagen.classList.add("rounded-start")
        imagen.classList.add("poster")
        imagen.classList.add("rounded")
        imagen.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

        let cuerpo = document.createElement("div")
        cuerpo.classList.add("col-md-8")
        cuerpo.classList.add("fondotarjeta")

        let bodycard = document.createElement("div")
        bodycard.classList.add("card-body")
        bodycard.classList.add("fondotarjeta")

        let titulo = document.createElement("h5")
        titulo.classList.add("card-title")
        titulo.classList.add("display-6")
        titulo.classList.add("text-muted")
        titulo.textContent = movie.title







        peliculas.appendChild(columna)
        columna.appendChild(tarjeta)
        tarjeta.appendChild(cuerpoimg)
        cuerpoimg.appendChild(cuerpoimg2)
        cuerpoimg2.appendChild(imagen)
        cuerpoimg.appendChild(cuerpo)
        cuerpo.appendChild(bodycard)
        bodycard.appendChild(titulo)





    });


}