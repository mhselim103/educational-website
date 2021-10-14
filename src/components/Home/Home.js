import React, { useEffect, useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import Courses from '../Courses/Courses';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
    const [courses, setCourse] = useState([]);
    useEffect(() => {
        fetch('./home.json')
            .then(res => res.json())
        .then(data => setCourse(data))
    },[])
    return (
        <div>
            <Header/>
            <section className="bg-light">
                <div className="container my-5">
                    <div className="d-flex justify-content-between mx-3">
                        <div>
                            <h1>Our Courses</h1>
                        </div>
                        <div>
                            <Button variant="primary" className="rounded">See All</Button>
                        </div>
                    </div>
                    <Row xs={1} md={2} className="g-4">
                        {
                            courses?.map(course => <Courses
                                key={course.id}
                                course={course}
                            ></Courses>)
                        }
                    </Row>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Home;