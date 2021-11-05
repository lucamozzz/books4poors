import React, { useState, useEffect } from 'react';
import BookDetailsCSS from '../style/BookDetails.module.css';
import { Link } from 'react-router-dom';

const object = require('lodash/object');

export const BookDetails = ({ match }) => {

    const fetchBook = async () => {
        try {
            const response = await fetch(`/.netlify/functions/book-details?id=${match.params.id}`);
            const data = response.json();
            if (response.status === 200)
                setBook(object.get(data, 'items', 'unknown item'));
        } catch (err) {
            console.error(err);
        }
    }

    const [book, setBook] = useState({});
    useEffect(() => {
        fetchBook();
    });

    const downloadEpub = () => {
        if (object.get(book, 'accessInfo.epub.isAvailable', false))
            return (
                <a href={object.get(book, 'accessInfo.pdf.acsTokenLink', '')}>Download EPUB</a>
            );
    }

    const downloadPdf = () => {
        if (object.get(book, 'accessInfo.pdf.isAvailable', false))
            return (
                <a href={object.get(book, 'accessInfo.pdf.acsTokenLink', '')}>Download PDF</a>
            );
    }

    return (
        <div className={BookDetailsCSS.container}>
            <Link to='/books' style={{ textDecoration: 'none' }}>
                <button>Go back</button>
            </Link>
            <h2>{object.get(book, 'volumeInfo.title', 'Unknown Title')}</h2>
            <img src={object.get(book, 'volumeInfo.imageLinks.thumbnail', '')} alt="not available" />
            <h3 className={BookDetailsCSS.authors}>{object.get(book, 'volumeInfo.authors', 'Unknown Authors')}</h3>
            <h6>{object.get(book, 'volumeInfo.publisher', '')}</h6>
            <h6>{object.get(book, 'volumeInfo.publishedDate', '')}</h6>
            {downloadEpub()}
            {downloadPdf()}
            <h4>Description</h4>
            <p>{object.get(book, 'volumeInfo.description', 'Unknown description')}</p>
        </div>
    );
}

export default BookDetails;