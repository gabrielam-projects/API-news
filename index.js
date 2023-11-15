const {run} = require("./database") // importacion de la funcion run 
const {getWorldNews} = require("./apinews")//importamos el modulo para obtener las noticias del mundo

run().catch(console.dir);
getWorldNews();


