import React from 'react';
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';

const Contact = () => {
    return (
        <div>
            <Menu></Menu>
            
            <div className="my-5 container">
                <Form className="d-flex justify-content-center">
                    <div>
                        <Row className="mb-3">
                            <Form.Group as={Col}>
                                <h5 className="text-start">Name</h5>
                                <Form.Control type="text" placeholder="Enter Name" />
                            </Form.Group>

                            <Form.Group as={Col}>
                                <h5 className="text-start">Phone Number</h5>
                                <Form.Control type="text" placeholder="Enter Your Number" />
                            </Form.Group>
                        </Row>
                        <Form.Group>
                            <h5 className="text-start">Email</h5>
                            <Form.Control type="email" placeholder="Enter Email" />
                        </Form.Group>
                        <div className="my-3">

                            <FloatingLabel controlId="floatingTextarea2" label="Message">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                />
                            </FloatingLabel>
                        </div>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>
                </div>
            <Footer></Footer>
      </div>
        
    );
};

export default Contact;