import React from 'react';
import Footer from '../components/Footer';

export const About = () => {
    return (
        <div>
            <h2>About this app</h2>
            <p>
                This app retrieves data from the <a href="https://developers.google.com/books" target='_blank' rel="noreferrer">Google Books API</a>. <br />
                The displayed books are either free or full-preview. <br />
                Looking for an ebook? Wanna save money on reading?<br />
                You re in the right place!
            </p>
            <Footer></Footer>
        </div>
    )
}

export default About;