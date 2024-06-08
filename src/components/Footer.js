import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    let currentDate = new Date().getFullYear();
    return (
        <footer className="bg-dark text-white text-center p-3">
            <Container>
                <p>Animal Catalog © { currentDate }</p>
            </Container>
        </footer>
    );
};

export default Footer;
