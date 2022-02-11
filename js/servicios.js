let uri1 = "https://swapi.py4e.com/api/people/"

fetch(uri1)
    .then(function(respuesta) {
        return (respuesta.json())
    })
    .then(function(respuesta) {
        console.log(respuesta)
    })





let uri2 = "https://api.nasa.gov/neo/rest/v1/feed?api_key=WDkBdr8bzljUV9XZRLDXOqObO4chmiGAbSRr9iaC"





fetch(uri2)
    .then(function(respuesta1) {
        return (respuesta1.json())
    })
    .then(function(respuesta1) {
        console.log(respuesta1)
    })