import React from 'react';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';

const About = () => {
    return (
        <div className="container">
            <Menu></Menu>
            <div className="text-center about">
                <h1 className="text-primary">The Leading Online Teaching Platform</h1>
                <p>We Ensure Quality Teaching</p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;