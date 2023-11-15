// NEWS API connection

// Declare the newSchema object:
// It has several properties and their types (strings and 1 object)
const newSchema = {
    title: '',
    description: '',
    source: {
        id: '',
        name: ''
    },
    publishedAt: ''
};

// getWorldNews Async Function:
// This function uses the await keyword to wait for the completion of the asynchronous fetch operation to get news data from the specified URL.
async function getWorldNews() {
    try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?language=en&apiKey=c8bb7c8b03bf4b528b528265a036c9dd&pageSize=100');
        // It then converts the response to JSON format and extracts the articles array into newsList.
        const data = await response.json();
        const newsList = data.articles;

        // Iterating Through newsList:
        // It uses the forEach method to iterate over each item in the newsList array.
        // For each news item, it updates the properties of the newSchema object with values from the current news item.
        // If a value is falsy (like null or undefined), it uses an empty string as a default.
        // It then logs the updated newSchema object, --> Keep in mind that this will log the same object multiple times, each time it is updated.
        newsList.forEach(news => {
            newSchema.title = news.title || '';
            newSchema.description = news.description || '';
            newSchema.source.id = news.source.id || '';
            newSchema.source.name = news.source.name || '';
            newSchema.publishedAt = news.publishedAt || '';

            // Do something with newSchema (e.g., print it, send it to another function, etc.)
            console.log(newSchema);
        });

    // Error Handling:
    } catch (error) {
        console.error('Ocurrio un error al obtener las noticias:', error.message);
    }
}

module.exports = {getWorldNews}

//mandar a mongo un esquema que se escriba en Mongo, e imprimir en consola lo que se escribio
// Insert + find