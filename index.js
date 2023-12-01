const {run} = require("./database") // importacion de la funcion run 
const {getWorldNews} = require("./apinews")//importamos el modulo para obtener las noticias del mundo

const example = {
    title : 'example'
}

async function mainFunction() {
  try {
    const result = await getWorldNews();
    console.log(result);
  } catch (error) {
    console.error('Error:', error);
  }
}

//run(example).catch(console.dir);
const noticia = mainFunction();

console.log(noticia)


