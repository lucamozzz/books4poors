import React from 'react';
import Book from './Book';
import BooksCSS from '../style/Books.module.css';
import { useSelector } from 'react-redux';

const Books = () => {
    const bookList = useSelector(state => state.bookList);

    return (
        <div className={BooksCSS.container}>
            {bookList.length === 0 ? (<h1>Loading...</h1>) :
                bookList.map(book => {
                    let { id } = book;
                    let { title, authors } = book.volumeInfo;
                    let { smallThumbnail } = book.volumeInfo.imageLinks;
                    return (
                        <Book
                            key={id}
                            title={title}
                            authors={authors}
                            thumbnail={smallThumbnail} />
                    );
                })}
        </div>
    )
}

export default Books;