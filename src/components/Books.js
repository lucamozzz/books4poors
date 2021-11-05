import React, { useEffect, useState } from 'react';
import Book from './Book';
import Searchbar from './Searchbar';
import BooksCSS from '../style/Books.module.css';
import { useSelector } from 'react-redux';
import { get } from 'lodash';
import { Link } from 'react-router-dom';

const Books = () => {
    const books = useSelector(state => state.bookList);
    const [flag, setFlag] = useState(0);
    useEffect(() => {
        setFlag(flag + 1);
    }, [books]);

    return (
        <div className={BooksCSS.container}>
            <Searchbar />
            {flag > 1 ? (
                books.length === 0 ? (
                    <div>
                        <h2>No results...</h2>
                        <h3>Retry using different keywords!</h3>
                        <h3 className={BooksCSS.emoji_1}>🥺</h3>
                        <h3 className={BooksCSS.emoji_2}>👉👈</h3>
                    </div>) : (
                    <div className={BooksCSS.books}>
                        {books.map(book => {
                            let id = book.id;
                            let { title, authors } = get(book, 'volumeInfo', { title: 'Unknown title', authors: 'Unknown authors' });
                            let { smallThumbnail } = get(book, 'volumeInfo.imageLinks', '');
                            return (
                                <Link style={{ textDecoration: 'none' }} to={`/books/${id}`}>
                                    <Book
                                        key={id}
                                        title={
                                            title.length > 50 ?
                                                title.slice(0, 50) + '...' :
                                                title}
                                        authors={authors}
                                        thumbnail={smallThumbnail} />
                                </Link>
                            );
                        })}
                    </div>
                )
            ) : (
                <div>
                    <h2>Help me help you!</h2>
                    <h3>Type relevant keywords to the book you're looking for...</h3>
                    <h3 className={BooksCSS.emoji_1}>🧐</h3>
                </div>
            )}
        </div>
    )
}

export default Books;