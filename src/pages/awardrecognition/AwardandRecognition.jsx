
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './AwardRecognition.css';

const AwardandRecognition = () => {
    return (
        <Container fluid className="award-main py-5">
            <Container>
                <h3 className="text-start fw-bold mb-3">Award & Recognition</h3>
                <p className="text-start mb-4">Home &gt; Award & Recognition</p>

                <div className="award-tabs mb-4">
                    <Button variant="light" className="award-tab-btn">Gold Medal</Button>
                    <Button variant="light" className="award-tab-btn">Orator</Button>
                    <Button variant="light" className="award-tab-btn">Best Trainee</Button>
                    <Button variant="light" className="award-tab-btn">Young Investigator</Button>
                    <Button variant="light" className="award-tab-btn">Best Publication Of Year</Button>
                    <Button variant="light" className="award-tab-btn">Best JCIR Reviewer</Button>
                    <Button variant="light" className="award-tab-btn">Abstract Winners</Button>
                    <Button variant="light" className="award-tab-btn">Neuro Quiz Winners</Button>
                </div>

                <div className="award-years mb-4">
                    <Button variant="danger" className="award-year-btn">ISVIR 2025</Button>
                    <Button variant="light" className="award-year-btn">ISVIR 2024</Button>
                    <Button variant="light" className="award-year-btn">ISVIR 2023</Button>
                </div>

                <Row>
                    <Col md={4} className="mb-4">
                        <Card className="award-card text-center">
                            <Card.Img variant="top" src="https://via.placeholder.com/150" className="award-img" />
                            <Card.Body>
                                <h5>Prof NAVEEN KALRA</h5>
                                <p>#1584, SECTOR 49 B, CHANDIGARH Pushpac Complex, Chandigarh, UT, 160047</p>
                                <p><a href="mailto:navkal2004@yahoo.com" className="text-decoration-none">navkal2004@yahoo.com</a></p>
                                <p className="fw-bold">National - 2025</p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} className="mb-4">
                        <Card className="award-card text-center">
                            <Card.Img variant="top" src="https://via.placeholder.com/150" className="award-img" />
                            <Card.Body>
                                <h5>Prof NAVEEN KALRA</h5>
                                <p>#1584, SECTOR 49 B, CHANDIGARH Pushpac Complex, Chandigarh, UT, 160047</p>
                                <p><a href="mailto:navkal2004@yahoo.com" className="text-decoration-none">navkal2004@yahoo.com</a></p>
                                <p className="fw-bold">National - 2025</p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} className="mb-4">
                        <Card className="award-card text-center">
                            <Card.Img variant="top" src="https://via.placeholder.com/150" className="award-img" />
                            <Card.Body>
                                <h5>Prof NAVEEN KALRA</h5>
                                <p>#1584, SECTOR 49 B, CHANDIGARH Pushpac Complex, Chandigarh, UT, 160047</p>
                                <p><a href="mailto:navkal2004@yahoo.com" className="text-decoration-none">navkal2004@yahoo.com</a></p>
                                <p className="fw-bold">National - 2025</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default AwardandRecognition;
