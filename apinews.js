// NEWS API connection

async function getWorldNews() {
    var newsArray = new Array();
    try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?language=en&apiKey=c8bb7c8b03bf4b528b528265a036c9dd&pageSize=100');
        const data = await response.json();
        const newsList = await data.articles;
        newsList.forEach(async (e) => {
            const newSchema = {
                title: e.title || '',
                description: e.description || '',
                source: {
                    id: e.source.id || '',
                    name: e.source.name || ''
                },
                publishedAt: e.publishedAt || ''
            };
            newsArray.push(newSchema);
        });
        return newsArray;
    } catch (error) {
        console.error('Ocurrio un error al obtener las noticias:', error.message);
    }
}
module.exports = {getWorldNews}