import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setBooks } from '../store/actions/bookActions';

const object = require('lodash/object');
const axios = require('axios');
const path = `https://www.googleapis.com/books/v1/volumes?filter=full&projection=LITE&orderBy=relevance&maxResults=40&key=${process.env.REACT_APP_API_KEY}&q=intitle:`;

const Searchbar = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const fetchBooks = async (e, text) => {
        try {
            e.preventDefault();
            const response = await axios(path + text);
            if (response.status === 200 && text !== '') {
                dispatch(setBooks(object.get(response, 'data.items', [])));
            }
            else dispatch(setBooks([]));
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <form action="">
                <input
                    type="text"
                    id="header-search"
                    placeholder="Search for books..."
                    name="s"
                    onChange={e => setText(e.target.value)}
                />
                <button onClick={(e) => fetchBooks(e, text)}>Search</button>
            </form>
        </>
    )
}

export default Searchbar;