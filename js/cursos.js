let cursos = [

    { foto: 'img/SQL-Server.jpg', nombre: "SQL SERVER", nivel: "basico" },
    { foto: 'img/mongodb.png', nombre: "Mongo DB", nivel: "basico" },
    { foto: `img/java-logo.png`, nombre: "JAVA", nivel: "basico" },
    { foto: 'img/java-script.jpg', nombre: "JAVASCRIPT", nivel: "basico" },
    { foto: 'img/nodejs.jpg', nombre: "NODE.JS", nivel: "basico" },
    { foto: 'img/CSharp.png', nombre: "C Sharp", nivel: "basico" },
    { foto: 'img/Android-Studio.png', nombre: "ANDROID STUDIO", nivel: "basico" },
    { foto: 'img/docker.jpg', nombre: "DOKER", nivel: "basico" },
    { foto: 'img/angular.jpg', nombre: "ANGULAR", nivel: "basico" },
    { foto: 'img/python.png', nombre: "PYTHON", nivel: "basico" },

]

console.log(cursos);

let fila = document.getElementById("fila")

cursos.forEach(function(curso) {

    let columna = document.createElement("div")
    columna.classList.add("col")

    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("p-2")
    tarjeta.classList.add("shadow")

    let imagen = document.createElement("img")
    imagen.classList.add("card-img-top")
    imagen.classList.add("w-100")
    imagen.classList.add("rounded-3")
    imagen.src = curso.foto

    let divisor = document.createElement("hr")

    let cuerpotarjeta = document.createElement("div")
    cuerpotarjeta.classList.add("card-body")

    let cursonombre = document.createElement("h5")
    cursonombre.classList.add("card-title")
    cursonombre.classList.add("encabezado")
    cursonombre.textContent = curso.nombre

    let nivelcurso = document.createElement("p")
    nivelcurso.classList.add("card-text")
    nivelcurso.classList.add("text-muted")
    nivelcurso.classList.add("encabezado")
    nivelcurso.textContent = curso.nivel


    cuerpotarjeta.appendChild(cursonombre)
    cuerpotarjeta.appendChild(nivelcurso)

    tarjeta.appendChild(imagen)
    tarjeta.appendChild(divisor)
    tarjeta.appendChild(cuerpotarjeta)



    fila.appendChild(columna)
    columna.appendChild(tarjeta)





});