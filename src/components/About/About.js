import React from 'react';
import { Card } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';

const About = () => {
    return (
        <div >
            <Menu></Menu>
            <section>
                <Card className="w-50 mx-auto bg-light my-5">
                    <Card.Body>
                        <div>
                            <Card.Title className="text-center"><h3>Leading Online Teaching Platform in Bd</h3></Card.Title>
                        </div>
                        <div>
                            <p>We Ensure Quality Training.This free online learning platform enables instructors to design and offer courses consisting of a combination of videos, audio files, PowerPoint presentations, and documents such as PDF files, as well as tests consisting of multiple choice questions. Instructors can choose to make their courses freely available or charge a fee for them. Learnopia takes a percentage of all for-fee courses.</p>
                        </div>
                    </Card.Body>
                </Card>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default About;