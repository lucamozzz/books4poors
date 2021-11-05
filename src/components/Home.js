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
        <div className={HomeCSS.container} >
            <h2>Welcome!</h2>
            <h3>Wanna save on reading? <br />You're in the right place!</h3>
            <h3 className={HomeCSS.emoji}>🤗</h3>
            <div>
                <Link to='/about' style={{ textDecoration: 'none' }}>
                    <button className={HomeCSS.aboutButton}>?</button>
                </Link>
                <Link to='/books' style={{ textDecoration: 'none' }}>
                    <button className={HomeCSS.startButton}>Start reading!</button>
                </Link>
            </div>
            <h4></h4>
        </div>
    )
}

export default Home;