import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';

const AllCourses = () => {
    const [courses, setCourse] = useState([]);
    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])
    return (
        <div>
            <Menu></Menu>
            <div className="container my-5">
                <div>
                    <p className="text-center">We Provide Online courses on various Sector. Such as Graphics Designing, Web development, Cinematography and Photography</p>
                </div>
                <div>
                    <h1 className="text-primary fw-bold">Our All Courses</h1>
                </div>
                <Row xs={1} md={3} className="g-4">
                    {courses?.map(course => (
                        <Col>
                            <Card className="h-100">
                                <Card.Img variant="top" src={course.img} className="img-fluid h-100" />
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p>Rating : {course.ratings}</p>
                                        <p>Enrolled : {course.enrolled}</p>
                                        <h5>Price : ${course.price}</h5>
                                    </div>
                                        <div>
                                            <Card.Title className="text-start"><h3>{course.title}</h3></Card.Title>
                                        </div>
                                </Card.Body>

                                <Card.Footer>
                                    <Button  variant="primary">Enroll Now</Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllCourses;