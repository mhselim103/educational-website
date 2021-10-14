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
            <div className="container bg-light my-5">
                
                    <div className="d-flex justify-content-between">
                        <div>
                            <h1 className="text-primary">Our Courses</h1>
                        </div>
                        <div>
                        <Button variant="primary" className="rounded">
                            See All</Button>
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
            <Footer></Footer>
        </div>
    );
};

export default Home;