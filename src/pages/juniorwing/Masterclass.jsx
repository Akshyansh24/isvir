
import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import MasterclassImage from '../../assets/images/MasterclassImage.jpg';
import MemberImage from '../../assets/images/MemberImage.jpg';

function MasterClass() {
    const eventImages = Array(6).fill(MemberImage);

    return (
        <div className="masterclass-container">
            <div
                className="masterclass-header py-5"
                style={{ backgroundImage: `url(${MasterclassImage})` }}
            >
                <Container></Container>
            </div>

            <Container className="masterclass-content">
                <Row>

                    <Col md={3}>
                        <Card className="sidebar-card p-3">
                            <h5 className="sidebar-heading">Previous Masterclass Series</h5>

                            <div className="search-container">
                                <h6 className="search-heading">Search here</h6>
                                <Form.Control type="text" placeholder="Search" />
                            </div>

                            <div className="categories-container">
                                <h6 className="categories-heading">Categories</h6>
                                <ul className="categories-list">
                                    {[
                                        'General IR',
                                        'Gastrointestinal IR',
                                        'Onco IR',
                                        'Neuro Intervention',
                                        'Aortic IR',
                                        'MSK IR',
                                        'Peripheral Arterial Interventions',
                                    ].map((cat, idx) => (
                                        <li key={idx} className="category-item">
                                            <Button variant="light" className="category-button">{cat}</Button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Card>
                    </Col>


                    <Col md={9}>
                        <Row className="image-card-row">
                            {eventImages.map((imgSrc, idx) => (
                                <Col md={4} key={idx} className="mb-4">
                                    <Card className="event-card">
                                        <Card.Img variant="top" src={imgSrc} className="event-image" />
                                    </Card>
                                </Col>
                            ))}
                        </Row>

                        <div className="load-more-container d-flex justify-content:end;">
                            <Button variant="danger" className="load-more-button">Load More...</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default MasterClass;






