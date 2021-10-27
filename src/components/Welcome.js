import React from 'react';
import WelcomeCSS from '../style/Welcome.module.css';

export const Welcome = () => {
    return (
        <div className={WelcomeCSS.container}>
            <h2>Welcome!</h2>
            <p>Type relevant keywords to the book you're looking for... <br />
            If it appears in the results, it means it's totally free and you can download it!</p>
        </div>
    )
}

export default Welcome;