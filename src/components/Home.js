import React from 'react';
import HomeCSS from '../style/Home.module.css';
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div className={HomeCSS.container}>
            <h2>Welcome!</h2>
            <h3>
                If you enjoy reading but ain't got no money, you're in the right place!
            </h3>
            <Link to='/books'>
                <button>
                    Start reading!
                </button>
            </Link>
        </div>
    )
}

export default Home;