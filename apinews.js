// conexion a la API NEWS

// class NewsArticle {
//     constructor(title, description, source, publishedAt) {
//       this.title = title;
//       this.description = description;
//       this.source = source;
//       this.publishedAt = publishedAt;
//     }
//   }

async function getWorldNews() {
    try{
        const response = await fetch ('https://newsapi.org/v2/top-headlines?language=en&apiKey=c8bb7c8b03bf4b528b528265a036c9dd&pageSize=100')
        const data = await response.json();
        const newsList = data.articles;
        //const newsObjects = 
    }catch(error){
        console.error('Ocurrio un error al obtener las noticias:', error.message);
    }
}

getWorldNews();
