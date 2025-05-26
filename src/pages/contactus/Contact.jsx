
import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMapMarkerAlt,
    faPhone,
} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <Container fluid className="contact-main py-5">
            <Container>
                <h3 className="text-start fw-bold mb-3">Get in touch with us</h3>
                <p className="text-start fw-bold" style={{ maxWidth: "846px" }}>
                    The Indian Society of Vascular & Interventional Radiology (ISVIR) has been floated to provide a platform for exchange of information regarding catheter-based radiological procedures. ISVIR was formed in Trivandrum on November 9, 1997.
                </p>

                <Row className="mt-4">
                    <Col md={6}>
                        <iframe
                            title="map"
                            src="https://maps.google.com/maps?q=london&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ minHeight: "400px", border: "0", borderRadius: "8px" }}
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </Col>

                    <Col md={6}>
                        <Card className="shadow-sm p-4 h-100">
                            <h5 className="mb-3 fw-bold">Get in touch</h5>
                            <p>We are here for you! How can we help?</p>
                            <Form>
                                <Form.Group className="mb-3" controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your name" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter your email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formPhone">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your phone number" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formMessage">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Type your message" />
                                </Form.Group>

                                <Button
                                    type="submit"
                                    className="w-100"
                                    style={{
                                        background: 'linear-gradient(to right, #1da1f2, #0e76ec)',
                                        border: 'none',
                                        borderRadius: '25px',
                                        padding: '10px 0',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    Submit
                                </Button>
                            </Form>
                        </Card>
                    </Col>
                </Row>


                <Row className="mt-5 text-start">
                    <Col md={4} className="mb-4">
                        <Card className="p-3 h-100">
                            <h6>
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-danger me-2" />
                                Address:
                            </h6>
                            <p>3, 302, DDA Building, V-3S Mall Laxmi Nagar, East Delhi - 110092</p>

                            <h6>
                                <FontAwesomeIcon icon={faPhone} className="text-danger me-2" />
                                Office Executive
                            </h6>
                            <p>
                                Gaurav Kumar<br />
                                <a href="tel:+919319159560">+91 93191 59560</a><br />
                                <a href="mailto:officeexecutive@isvirindia.org">officeexecutive@isvirindia.org</a>
                            </p>
                        </Card>
                    </Col>

                    <Col md={4} className="mb-4">
                        <Card className="p-3 h-100">
                            <h6>
                                <FontAwesomeIcon icon={faPhone} className="text-danger me-2" />
                                Express Helpline
                            </h6>
                            <p>
                                <a href="tel:+919319133560">+91 93191 33560</a><br />
                                <a href="mailto:info.isvir@gmail.com">info.isvir@gmail.com</a>
                            </p>

                            <h6>
                                <FontAwesomeIcon icon={faPhone} className="text-danger me-2" />
                                Co-ordinator
                            </h6>
                            <p>
                                Pankaj<br />
                                <a href="tel:+919958474870">+91 99584 74870</a>
                            </p>

                            <h6>
                                <FontAwesomeIcon icon={faPhone} className="text-danger me-2" />
                                ISVIR Secretary
                            </h6>
                            <p>
                                <a href="mailto:secretaryisvir@gmail.com">secretaryisvir@gmail.com</a>
                            </p>
                        </Card>
                    </Col>

                    <Col md={4} className="mb-4">
                        <Card className="p-3 h-100">
                            <h6>
                                <FontAwesomeIcon icon={faPhone} className="text-danger me-2" />
                                IT Manager
                            </h6>
                            <p>
                                Padam Yadav<br />
                                <a href="tel:+919319133556">+91 93191 33556</a><br />
                                <a href="mailto:technical-support@isvirindia.org">technical-support@isvirindia.org</a>
                            </p>

                            <h6>
                                <FontAwesomeIcon icon={faPhone} className="text-danger me-2" />
                                Official Travel Agent
                            </h6>
                            <p>
                                Dushyant Singh<br />
                                <a href="tel:+919953146444">+91 99531 46444</a><br />
                                <a href="mailto:packnbags21@gmail.com">packnbags21@gmail.com</a>
                            </p>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Contact;
