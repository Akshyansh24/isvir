import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import EventsCards from '../../assets/images/EventsCards.png';
import BackgroundImage from '../../assets/images/BackgroundImage.png';

const OurEvents = () => {
    const [activeTab, setActiveTab] = useState('Upcoming ISVIR Events');

    const tabs = [
        'Upcoming ISVIR Events',
        'Upcoming International Events',
        'Past Event',
        'Photo Gallery',
    ];


    const eventsData = {
        'Upcoming ISVIR Events': [
            {
                title: 'ISVIR Mid Term CME & Complication Meet 2025 Guwahati',
                img: EventsCards,
            },
            {
                title: 'ISVIR Annual Conference 2025 Mumbai',
                img: EventsCards,
            },
            {
                title: 'ISVIR Winter Symposium 2025 Delhi',
                img: EventsCards,
            },
        ],
        'Upcoming International Events': [
            {
                title: 'International Vascular Conference 2025 London',
                img: EventsCards,
            },
            {
                title: 'Global Radiology Symposium 2025 New York',
                img: EventsCards,
            },
            {
                title: 'World Medical Imaging Congress 2025 Tokyo',
                img: EventsCards,
            },
        ],
        'Past Event': [
            {
                title: 'ISVIR Summer Meet 2024 Chennai',
                img: EventsCards,
            },
            {
                title: 'International Radiology Meet 2023 Berlin',
                img: EventsCards,
            },
            {
                title: 'Neuro Vascular Summit 2023 Paris',
                img: EventsCards,
            },
        ],
        'Photo Gallery': [
            {
                title: 'ISVIR Conference 2024 Photos',
                img: EventsCards,
            },
            {
                title: 'International Event 2023 Gallery',
                img: EventsCards,
            },
            {
                title: 'Annual Meet 2023 Highlights',
                img: EventsCards,
            },
        ],
    };

    const currentEvents = eventsData[activeTab] || [];

    return (
        <>


            <div className="junior-header py-5" style={{ backgroundImage: `url(${BackgroundImage})` }}>
                <Container style={{ maxWidth: '1200px' }}>
                    <div className="text-left">
                        <h1 className="junior-header-title mb-2">Our Events</h1>
                        <p className="junior-header-subtitle mb-0">Home - Events</p>
                    </div>
                </Container>
            </div>

            <section className="bg-light py-4">
                <div style={{ backgroundColor: 'rgba(95, 32, 237, 0.05)' }}>
                    <Container>
                        <div className="custom-tabs-container mb-4">
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
                            {currentEvents.map((event, index) => (
                                <Col md={4} key={index}>
                                    <Card className="eventcards shadow-sm h-100 text-center border-0">
                                        <div className="eventsection">
                                            <img src={event.img} alt={event.title} />
                                        </div>
                                        <Card.Body className="px-3 pt-3 pb-2">
                                            <Card.Title className="eventtitle">{event.title}</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </div>
            </section >

        </>
    );
};

export default OurEvents;
