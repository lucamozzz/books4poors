import React from 'react';
import BookCSS from '../style/Book.module.css';

export const Book = (props) => {
    return (
        <div className={BookCSS.bookRow} key={props.id}>
            <h2>
                {props.title === undefined ?
                    'Unknown title' :
                    props.title}
            </h2>
            <h3>
                {props.authors === undefined ?
                    'Unknown authors' :
                    props.authors}
            </h3>
            <img className={BookCSS.bookCover} src={props.thumbnail} alt="not available" />
        </div>
    )
}

export default Book;