import React, { useState, useEffect } from 'react';
import { setBooks } from '../store/actions/bookActions';
import BookDetailsCSS from '../style/BookDetails.module.css';

const axios = require('axios');
const object = require('lodash/object');

export const BookDetails = ({ match }) => {
    const [book, setBook] = useState({});
    useEffect(() => {
        fetchBook();
    }, []);

    const fetchBook = async () => {
        try {
            const response = await axios(`https://www.googleapis.com/books/v1/volumes/${match.params.id}`);
            if (response.status === 200)
                setBook(response.data);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className={BookDetailsCSS.container}>
            <h2>{object.get(book, 'volumeInfo.title', 'Unknown Title')}</h2>
            <h3>{object.get(book, 'volumeInfo.authors', 'Unknown Authors')}</h3>
            <img src={object.get(book, 'volumeInfo.imageLinks.thumbnail')} alt="book_cover" />
            <h6>{object.get(book, 'volumeInfo.publisher', '')}</h6>
            <h6>{object.get(book, 'volumeInfo.publishedDate', '')}</h6>
            <h4>Description</h4>
            <p>{object.get(book, 'volumeInfo.description', 'Unknown description')}</p>
            {/* <img src={object.get(book, 'imageLinks.thumbnail', { title: 'Unknown title' })} alt="Book cover" />
            <h2>{object.get(book, 'title', { title: 'Unknown title' })}</h2>
            <h3>{object.get(book, 'authors', { authors: 'Unknown authors' })}</h3>
            <h6>{object.get(book, 'publisher', { publisher: 'Unknown publisher' })}</h6>
            <h6>{object.get(book, 'publishedDate', { publishedDate: 'Unknown publishedDate' })}</h6>
            <h4>Description</h4>
            <p>{object.get(book, 'description', { description: 'Unknown description' })}</p> */}
        </div>
    );
}

export default BookDetails;