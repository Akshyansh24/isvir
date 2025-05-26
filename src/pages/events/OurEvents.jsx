
import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import EventsCards from '../../assets/images/EventsCards.png';


const OurEvents = () => {
    const [activeTab, setActiveTab] = useState('Upcoming ISVIR Events');

    const tabs = [
        'Upcoming ISVIR Events',
        'Upcoming International Events',
        'Past Event',
        'Photo Gallery',
    ];

    return (
        <section className="bg-light py-4">
            <Container>

                <div className="custom-tabs-container mb-4" style={{ width: "100%" }}>
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            className={`custom-tab ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <Row className="g-4">
                    {[1, 2, 3].map((item, index) => (
                        <Col md={4} key={index}>
                            <Card className="eventcards shadow-sm h-100 text-center border-0">
                                <div className="eventsection">
                                    <img
                                        src={EventsCards}
                                        alt="ISVIR Event"
                                    />
                                </div>
                                <Card.Body className="px-3 pt-3 pb-2">
                                    <Card.Title className="eventtitle">
                                        ISVIR Mid Term CME & Complication Meet 2025 Guwahati
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

            </Container>
        </section>
    );
};

export default OurEvents;
