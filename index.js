const {run} = require("./database") // importacion de la funcion run 
const {getWorldNews} = require("./apinews")//importamos el modulo para obtener las noticias del mundo

const example = {
    title : 'example'
}


//run(example).catch(console.dir);
const noticia = getWorldNews();

console.log(noticia)


