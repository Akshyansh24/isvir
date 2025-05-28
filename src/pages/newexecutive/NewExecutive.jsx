
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import MemberImage from '../../assets/images/MemberImage.jpg';
import BackgroundImage from '../../assets/images/BackgroundImage.png';

const NewExecutive = () => {
    return (
        <>

            <div
                className="junior-header py-5"
                style={{ backgroundImage: `url(${BackgroundImage})` }}
            >
                <Container style={{ maxWidth: '1200px' }}>
                    <div className="text-left">
                        <h1 className="junior-header-title mb-2">
                            ISVIR New Executive Committee Members
                        </h1>
                        <p className="junior-header-subtitle mb-0">
                            Home - ISVIR New Executive Committee Members
                        </p>
                    </div>
                </Container>
            </div>

            <Container fluid className="executive-page py-5">
                <Container>
                    <Row>
                        {Array(18).fill(0).map((_, index) => (
                            <Col key={index} xs={6} md={4} lg={3} className="mb-4">
                                <Card className="executive-card border border-primary text-center">
                                    <Card.Img
                                        variant="top"
                                        src={MemberImage}
                                        className="executive-img"
                                        style={{ margin: 0, padding: 0 }}
                                    />
                                    <Card.Body>
                                        <h5 className="mb-2">Dr Shyamkumar K Keshava</h5>
                                        <p className="newexecutivedesignation small mb-2">
                                            President
                                        </p>
                                        <hr className="my-3" />
                                        <p className="newexecutivenumber small mb-2 text-start">
                                            <FontAwesomeIcon icon={faPhone} className="newexecutivedesignation me-2" /> +91 9999999999
                                        </p>
                                        <p className="text-muted small mb-1 text-start">
                                            <FontAwesomeIcon icon={faEnvelope} className="newexecutivedesignation me-2" /> shyamkumar.k@abc.com
                                        </p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Container>

        </>
    );
};

export default NewExecutive;




