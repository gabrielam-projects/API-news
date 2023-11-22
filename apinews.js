// NEWS API connection

const newSchema = {
    title: '',
    description: '',
    source: {
        id: '',
        name: ''
    },
    publishedAt: ''
};

async function getWorldNews() {
    try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?language=en&apiKey=c8bb7c8b03bf4b528b528265a036c9dd&pageSize=100');
        const data = await response.json();
        const newsList = await data.articles;

         newsList.forEach(async (news) => {
         newSchema.title = news.title || '';
         newSchema.description = news.description || '';
         newSchema.source.id = news.source.id || '';
         newSchema.source.name = news.source.name || '';
         newSchema.publishedAt = news.publishedAt || '';
            
        });
        return newSchema;

    } catch (error) {
        console.error('Ocurrio un error al obtener las noticias:', error.message);
    }

}

module.exports = {getWorldNews}