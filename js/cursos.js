// let cursos = [

//     { foto: 'img/SQL-Server.jpg', nombre: "SQL SERVER", nivel: "basico" },
//     { foto: 'img/mongodb.png', nombre: "Mongo DB", nivel: "basico" },
//     { foto: `img/java-logo.png`, nombre: "JAVA", nivel: "basico" },
//     { foto: 'img/java-script.jpg', nombre: "JAVASCRIPT", nivel: "basico" },
//     { foto: 'img/nodejs.jpg', nombre: "NODE.JS", nivel: "basico" },
//     { foto: 'img/CSharp.png', nombre: "C Sharp", nivel: "basico" },
//     { foto: 'img/Android-Studio.png', nombre: "ANDROID STUDIO", nivel: "basico" },
//     { foto: 'img/docker.jpg', nombre: "DOKER", nivel: "basico" },
//     { foto: 'img/angular.jpg', nombre: "ANGULAR", nivel: "basico" },
//     { foto: 'img/python.png', nombre: "PYTHON", nivel: "basico" },

// ]

// console.log(cursos);

// let fila = document.getElementById("fila")

// cursos.forEach(function(curso) {

//     let columna = document.createElement("div")
//     columna.classList.add("col")

//     let tarjeta = document.createElement("div")
//     tarjeta.classList.add("card")
//     tarjeta.classList.add("p-2")
//     tarjeta.classList.add("shadow")

//     let imagen = document.createElement("img")
//     imagen.classList.add("card-img-top")
//     imagen.classList.add("w-100")
//     imagen.classList.add("rounded-3")
//     imagen.src = curso.foto

//     let divisor = document.createElement("hr")

//     let cuerpotarjeta = document.createElement("div")
//     cuerpotarjeta.classList.add("card-body")

//     let cursonombre = document.createElement("h5")
//     cursonombre.classList.add("card-title")
//     cursonombre.classList.add("encabezado")
//     cursonombre.textContent = curso.nombre

//     let nivelcurso = document.createElement("p")
//     nivelcurso.classList.add("card-text")
//     nivelcurso.classList.add("text-muted")
//     nivelcurso.classList.add("encabezado")
//     nivelcurso.textContent = curso.nivel


//     cuerpotarjeta.appendChild(cursonombre)
//     cuerpotarjeta.appendChild(nivelcurso)

//     tarjeta.appendChild(imagen)
//     tarjeta.appendChild(divisor)
//     tarjeta.appendChild(cuerpotarjeta)



//     fila.appendChild(columna)
//     columna.appendChild(tarjeta)





// });

let cursos = [
    { foto: 'img/SQL-Server.jpg', nombre: "SQL SERVER", nivel: "basico", descripcion: "Curso básico de SQL Server para manejar bases de datos." },
    { foto: 'img/mongodb.png', nombre: "Mongo DB", nivel: "basico", descripcion: "Introducción a MongoDB, una base de datos NoSQL." },
    { foto: 'img/java-logo.png', nombre: "JAVA", nivel: "basico", descripcion: "Curso de iniciación a la programación en Java." },
    { foto: 'img/java-script.jpg', nombre: "JAVASCRIPT", nivel: "basico", descripcion: "Fundamentos de JavaScript para desarrollo web." },
    { foto: 'img/nodejs.jpg', nombre: "NODE.JS", nivel: "basico", descripcion: "Curso básico de Node.js para desarrollo backend." },
    { foto: 'img/CSharp.png', nombre: "C Sharp", nivel: "basico", descripcion: "Curso introductorio a la programación en C#." },
    { foto: 'img/Android-Studio.png', nombre: "ANDROID STUDIO", nivel: "basico", descripcion: "Desarrollo de aplicaciones móviles con Android Studio." },
    { foto: 'img/docker.jpg', nombre: "DOCKER", nivel: "basico", descripcion: "Introducción a Docker y contenedores." },
    { foto: 'img/angular.jpg', nombre: "ANGULAR", nivel: "basico", descripcion: "Fundamentos de Angular para desarrollo frontend." },
    { foto: 'img/python.png', nombre: "PYTHON", nivel: "basico", descripcion: "Curso básico de Python para desarrollo general." },
];

let cursoCarouselInner = document.getElementById("cursoCarouselInner");

cursos.forEach(function(curso, index) {
    // Añadir al carrusel
    let carouselItem = document.createElement("div");
    carouselItem.classList.add("carousel-item");
    if (index === 0) {
        carouselItem.classList.add("active");
    }

    let carouselImage = document.createElement("img");
    carouselImage.classList.add("d-block", "w-100");
    carouselImage.src = curso.foto;

    let carouselCaption = document.createElement("div");
    carouselCaption.classList.add("carousel-caption", "d-none", "d-md-block");
    
    let carouselTitle = document.createElement("h5");
    carouselTitle.textContent = curso.nombre;

    let carouselText = document.createElement("p");
    carouselText.textContent = curso.descripcion;

    carouselCaption.appendChild(carouselTitle);
    carouselCaption.appendChild(carouselText);

    carouselItem.appendChild(carouselImage);
    carouselItem.appendChild(carouselCaption);

    cursoCarouselInner.appendChild(carouselItem);
});
