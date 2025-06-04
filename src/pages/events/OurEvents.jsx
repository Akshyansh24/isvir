import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import EventsCards from '../../assets/images/EventsCards.png';
import BreadCrumb from '../../components/layouts/BreadCrumb';

const OurEvents = () => {
    const [activeTab, setActiveTab] = useState('Upcoming ISVIR Events');

    const eventsData = {
        'Upcoming ISVIR Events': [
            { id: 1, title: 'ISVIR Mid Term CME & Complication Meet 2025 Guwahati', img: EventsCards },
            { id: 2, title: 'ISVIR Annual Conference 2025 Mumbai', img: EventsCards },
            { id: 3, title: 'ISVIR Winter Symposium 2025 Delhi', img: EventsCards },
        ],
        'Upcoming International Events': [
            { id: 1, title: 'International Vascular Conference 2025 London', img: EventsCards },
            { id: 2, title: 'Global Radiology Symposium 2025 New York', img: EventsCards },
            { id: 3, title: 'World Medical Imaging Congress 2025 Tokyo', img: EventsCards },
        ],
        'Past Event': [
            { id: 1, title: 'ISVIR Summer Meet 2024 Chennai', img: EventsCards },
            { id: 2, title: 'International Radiology Meet 2023 Berlin', img: EventsCards },
            { id: 3, title: 'Neuro Vascular Summit 2023 Paris', img: EventsCards },
        ],
        'Photo Gallery': [
            { id: 1, title: 'ISVIR Conference 2024 Photos', img: EventsCards },
            { id: 2, title: 'International Event 2023 Gallery', img: EventsCards },
            { id: 3, title: 'Annual Meet 2023 Highlights', img: EventsCards },
        ],
    };

    // Dynamically generate tabs except "Photo Gallery"
    const tabs = Object.keys(eventsData).filter(tab => tab !== 'Photo Gallery');

    const currentEvents = eventsData[activeTab] || [];

    return (
        <>
            <BreadCrumb title="Our Events" />

            <section className="eventSection sectionPadding">
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
                    {currentEvents.map((event) => (
                        <Col md={4} key={event.id}>
                            <Card className="eventcards h-100 text-center border-0">
                                <div className="eventImageCard">
                                    <img src={event.img} alt={event.title} />
                                </div>
                                <Card.Body className="px-3 pt-2 pb-2 d-flex align-items-center">
                                    <Card.Title className="eventtitle">{event.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </section>
        </>
    );
};

export default OurEvents;
