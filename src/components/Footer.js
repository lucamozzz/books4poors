import React from 'react';
import { FaGithub } from 'react-icons/fa';
import FooterCSS from '../style/Footer.module.css';

export const Footer = () => {
    return (
        <footer className={FooterCSS.container}>
            <FaGithub />
            <p>Luca Mozzoni - 2021</p>
        </footer>
    )
}

export default Footer;