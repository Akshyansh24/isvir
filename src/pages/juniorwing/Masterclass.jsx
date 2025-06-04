import React from 'react';
import { Container, Row, Col, Card, Form, Button, InputGroup } from 'react-bootstrap';
import { BiSearch } from 'react-icons/bi';
import MasterclassImage from '../../assets/images/MasterclassImage.jpg';
import MemberImage from '../../assets/images/juniorWing/one.jpg';

function MasterClass() {
    const eventImages = Array(6).fill(MemberImage);

    return (
        <div className="masterclass-container ">
            <div
                className="masterclass-header py-5"
                style={{ backgroundImage: `url(${MasterclassImage})` }}
            >
            </div>
            <div style={{ backgroundColor: 'rgba(95, 32, 237, 0.05)' }}>
                <div className="sectionPadding py-5">
                    <Row>

                        <Col md={3} >
                            <h5 className="sidebar-heading">Previous Masterclass Series</h5>
                            <Card className="sidebar-card p-3 border-0 mb-4" style={{ backgroundColor: 'transparent' }}>
                                <div className="search-container mb-3">
                                    <h6 className="search-heading">Search here</h6>
                                    <InputGroup>
                                        <Form.Control
                                            type="text"
                                            placeholder="Search"
                                            aria-label="Search"
                                            className='searchInput'
                                        />
                                        <InputGroup.Text>
                                            <BiSearch size={18} />
                                        </InputGroup.Text>
                                    </InputGroup>
                                </div>
                            </Card>
                            <Card className="sidebar-card p-3 border-0" style={{ backgroundColor: 'transparent' }}>
                                <div className="categories-container mb-0">
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
                                    <Col md={4} key={idx} className="">
                                        <Card className="event-card border-0">
                                            <Card.Img variant="top" src={imgSrc} className="event-image" />
                                        </Card>
                                    </Col>
                                ))}
                            </Row>

                            <div className="load-more-container d-flex justify-content-end">
                                <Button variant="danger" className="load-more-button">Load More...</Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default MasterClass;

