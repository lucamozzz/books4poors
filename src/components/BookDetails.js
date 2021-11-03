import React, { useState, useEffect } from 'react';
import BookDetailsCSS from '../style/BookDetails.module.css';
import { Link } from 'react-router-dom';

const axios = require('axios');
const object = require('lodash/object');

export const BookDetails = ({ match }) => {

    const fetchBook = async () => {
        try {
            const response = await axios(`https://www.googleapis.com/books/v1/volumes/${match.params.id}`);
            if (response.status === 200)
                setBook(response.data);
        } catch (err) {
            console.error(err);
        }
    }

    const [book, setBook] = useState({});
    useEffect(() => {
        fetchBook();
    });

    return (
        < div className={BookDetailsCSS.container} >
            <Link to='/books' style={{ textDecoration: 'none' }}>
                <button>Go back</button>
            </Link>
            <h2>{object.get(book, 'volumeInfo.title', 'Unknown Title')}</h2>
            <h3>{object.get(book, 'volumeInfo.authors', 'Unknown Authors')}</h3>
            <img src={object.get(book, 'volumeInfo.imageLinks.thumbnail', '')} alt="not available" />
            <h6>{object.get(book, 'volumeInfo.publisher', '')}</h6>
            <h6>{object.get(book, 'volumeInfo.publishedDate', '')}</h6>
            <h4>Description</h4>
            <p>{object.get(book, 'volumeInfo.description', 'Unknown description')}</p>
        </div >
    );
}

export default BookDetails;