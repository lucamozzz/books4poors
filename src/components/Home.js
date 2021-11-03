import React, { useEffect } from 'react';
import HomeCSS from '../style/Home.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setBooks } from '../store/actions/bookActions';

export const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setBooks([]));
    });

    return (
        <div className={HomeCSS.container}>
            <h2>Welcome!</h2>
            <h3>
                If you're broke and also a reader, <br />you're in the right place!
            </h3>
            <h3 className={HomeCSS.emoji_1}>🤗</h3>
            <Link to='/books' style={{ textDecoration: 'none' }}>
                <button className={HomeCSS.startButton}>
                    Start reading!
                </button>
            </Link>
        </div>
    )
}

export default Home;