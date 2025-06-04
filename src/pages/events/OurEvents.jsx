import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import EventsCards from '../../assets/images/EventsCards.png';
import BackgroundImage from '../../assets/images/BackgroundImage.png';
import BreadCrumb from '../../components/layouts/BreadCrumb';

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
            <BreadCrumb title={"Our Events"} />

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
                    {currentEvents.map((event, index) => (
                        <Col md={4} key={index}>
                            <Card className="eventcards  h-100 text-center border-0">
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

            </section >

        </>
    );
};

export default OurEvents;
