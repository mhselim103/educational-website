import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Courses = (props) => {
    const { img, title, ratings, enrolled, price } = props.course;
    console.log(props.course);
    return (
        <Col>
            <Card className="h-100">
                <Card.Img variant="top" src={img} className="img-fluid h-100" />
                <Card.Body>
                    <div className="d-flex justify-content-between align-items-center">
                        <p>Rating : {ratings}</p>
                        <p>Enrolled : {enrolled}</p>
                        <h5>Price : ${price}</h5>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <Card.Title className="text-start"><h1>{title}</h1></Card.Title>
                        </div>
                        <div>
                            <Button variant="primary">Enroll Now</Button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Courses;