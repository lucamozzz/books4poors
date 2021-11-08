const axios = require("axios");

const handler = async (event) => {
    const { id } = event.queryStringParameters;
    const API_KEY = process.env.REACT_APP_API_KEY;
    const url = `https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`;
    try {
        const { data } = await axios(url);
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        }
    } catch (error) {
        return { statusCode: 500, body: error.toString() }
    }
}

module.exports = { handler }