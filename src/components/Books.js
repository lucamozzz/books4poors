import React from 'react';
import Book from './Book';
import Searchbar from './Searchbar';
import BooksCSS from '../style/Books.module.css';
import { useSelector } from 'react-redux';
import { get } from 'lodash';
import { Link } from 'react-router-dom';

const Books = () => {
    const books = useSelector(state => state.bookList);

    return (
        <div className={BooksCSS.container}>
            <Searchbar />
            {books.length === 0 ? (
                <div>
                    <h2>No results...</h2>
                    <h3>Retry using different keywords!</h3>
                    <h3 className={BooksCSS.sadFace}>🥺</h3>
                    <h3 className={BooksCSS.sadHands}>👉👈</h3>
                </div>) :
                books.map(book => {
                    let id = book.id;
                    {/* + random(0, 10, true); */ }
                    let { title, authors } = get(book, 'volumeInfo', { title: 'Unknown title', authors: 'Unknown authors' });
                    let { smallThumbnail } = get(book, 'volumeInfo.imageLinks');
                    return (
                        <Link to={`/books/${id}`}>
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
}

export default Books;