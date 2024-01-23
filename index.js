const {run} = require("./database") // importacion de la funcion run 
const {getWorldNews} = require("./apinews")//importamos el modulo para obtener las noticias del mundo
//objeto ejemplo
const objeto = {
    title: 'MyTitle',
    description: 'Mydescription',
    source: {
        id: 'MyId',
        name: 'MyName'
    },
    publishedAt: 'MypublishedAt'
};

async function mainFunction() {
    try {
        const result = await getWorldNews();
        console.log(result);
        await run (result);
    } catch(error) {
        console.log('Error:', error);
    }
}

const noticia = mainFunction();






