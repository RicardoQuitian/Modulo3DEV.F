const API_KEY = "8d53d0ca"
const URL_PELICULAS = `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}`

export async function buscarPeliculas (nombre){
let resultado = await fetch (URL_PELICULAS+`&s=${nombre}`) 
let objResultado = await resultado.json()
return objResultado 
}


