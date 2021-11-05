const axios = require("axios");

const handler = async (event) => {
    const { key } = event.queryStringParameters;
    const API_KEY = process.env.REACT_APP_API_KEY;
    const url = `https://www.googleapis.com/books/v1/volumes?filter=full&filter=free-ebooks&projection=LITE&orderBy=relevance&maxResults=40&key=${API_KEY}&q=intitle:`;
    try {
        const { data } = await axios(url + key);

        return {
            statusCode: 200,
            body: JSON.stringify(data)
        }
    } catch (error) {
        return { statusCode: 500, body: error.toString() }
    }
}

module.exports = { handler }