import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MemberImage from '../../assets/images/MemberImage.jpg';
import AwardImage from '../../assets/images/awardimg.png';
import BackgroundImage from '../../assets/images/BackgroundImage.png';

const AwardandRecognition = () => {
    const [activeTab, setActiveTab] = useState('Gold Medal');
    const [activeYear, setActiveYear] = useState('ISVIR 2025');

    const tabs = [
        'Gold Medal',
        'Orator',
        'Best Trainee',
        'Young Investigator',
        'Best Publication Of Year',
        'Best JCIR Reviewer',
        'Abstract Winners',
        'Neuro Quiz Winners',
        'Neuro',
    ];

    const years = ['ISVIR 2025', 'ISVIR 2024', 'ISVIR 2023'];

    const awardsData = [
        {
            category: 'Gold Medal',
            year: 'ISVIR 2025',
            winners: [
                {
                    name: 'Prof NAVEEN KALRA',
                    address: '#154, SECTOR #9 & CHANDIGARH\nPushpac Complex, Chandigarh, UT, 160047',
                    email: 'navlad2004@yahoo.com',
                },
                {
                    name: 'Dr JOHN DOE',
                    address: '#154, SECTOR #9 & CHANDIGARH\nPushpac Complex, Chandigarh, UT, 160047',
                    email: 'john.doe@example.com',
                },
            ],
        },
        {
            category: 'Gold Medal',
            year: 'ISVIR 2024',
            winners: [
                {
                    name: 'Dr JANE DOE',
                    address: '456, ANOTHER STREET, ANOTHER CITY',
                    email: 'jane.doe@example.com',
                },
            ],
        },
        {
            category: 'Gold Medal',
            year: 'ISVIR 2023',
            winners: [
                {
                    name: 'Dr ALICE SMITH',
                    address: '789, THIRD STREET, THIRD CITY',
                    email: 'alice.smith@example.com',
                },
            ],
        },
        {
            category: 'Orator',
            year: 'ISVIR 2025',
            winners: [
                {
                    name: 'Ms JANE SMITH',
                    address: '456, ANOTHER STREET, CITY',
                    email: 'jane.smith@example.com',
                },
            ],
        },
        {
            category: 'Orator',
            year: 'ISVIR 2024',
            winners: [
                {
                    name: 'Mr BOB JOHNSON',
                    address: '321, FOURTH STREET, FOURTH CITY',
                    email: 'bob.johnson@example.com',
                },
            ],
        },
        {
            category: 'Orator',
            year: 'ISVIR 2023',
            winners: [
                {
                    name: 'Dr CAROL WILLIAMS',
                    address: '654, FIFTH STREET, FIFTH CITY',
                    email: 'carol.williams@example.com',
                },
            ],
        },
    ];

    const currentAwards = awardsData.find(
        (award) => award.category === activeTab && award.year === activeYear
    );

    return (
        <>
            <div
                className="junior-header py-5"
                style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <Container style={{ maxWidth: '1200px' }}>
                    <div className="text-left text-white">
                        <h1 className="junior-header-title mb-2">Award & Recognition</h1>
                        <p className="junior-header-subtitle mb-0">Home - Award & Recognition</p>
                    </div>
                </Container>
            </div>

            <div style={{ backgroundColor: 'rgba(95, 32, 237, 0.05) !important;' }}>
                <Container fluid className="award-main py-4">
                    <Container>
                        {/* Tabs */}
                        <div
                            className="custom-tabs-scroll-container d-flex overflow-auto mb-4 p-1 gap-2"
                            style={{
                                background: 'linear-gradient(90deg, #0E8BDF, #37B6F2, #3CBBF4)',
                                borderRadius: '25px',
                            }}
                        >
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    className={`custom-tab flex-shrink-0 border px-3 py-2 ${activeTab === tab ? 'active' : ''
                                        }`}
                                    onClick={() => setActiveTab(tab)}
                                    style={{
                                        backgroundColor: activeTab === tab ? 'white' : 'transparent',
                                        color: activeTab === tab ? '#0e76ec' : 'white',
                                        borderColor: 'white',
                                        fontWeight: 'bold',
                                        whiteSpace: 'nowrap',
                                        minWidth: '120px',
                                        borderRadius: '20px',
                                        cursor: 'pointer',
                                    }}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Year Buttons */}
                        <div className="award-years mb-4 d-flex gap-2">
                            {years.map((year) => (
                                <button
                                    key={year}
                                    onClick={() => setActiveYear(year)}
                                    style={{
                                        backgroundColor: activeYear === year ? 'white' : '#0E8BDF',
                                        color: activeYear === year ? '#0e76ec' : 'white',
                                        border: '1.5px solid #0E8BDF',
                                        borderRadius: '20px',
                                        padding: '6px 16px',
                                        fontWeight: 'bold',
                                        whiteSpace: 'nowrap',
                                        cursor: 'pointer',
                                    }}
                                >
                                    {year}
                                </button>
                            ))}
                        </div>


                        <Row className="justify-content-center g-4">
                            {!currentAwards || currentAwards.winners.length === 0 ? (
                                <p className="text-center">
                                    No content available for "{activeTab}" in {activeYear}
                                </p>
                            ) : (
                                currentAwards.winners.map((item, index) => (
                                    <Col md={6} key={index}>
                                        <Card
                                            className="award-card h-100 border-0"
                                            style={{
                                                borderRadius: '15px',
                                                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                                            }}
                                        >
                                            <div className="award-content d-flex" style={{ minHeight: '215px' }}>
                                                <div
                                                    className="award-img-container"
                                                    style={{
                                                        width: '210px',
                                                        borderTopLeftRadius: '15px',
                                                        borderBottomLeftRadius: '15px',
                                                        overflow: 'hidden',
                                                    }}
                                                >
                                                    <Card.Img
                                                        variant="top"
                                                        src={MemberImage}
                                                        className="award-img h-100"
                                                        style={{ objectFit: 'cover' }}
                                                    />
                                                </div>

                                                <Card.Body className="award-text p-3 d-flex flex-column">
                                                    <h5 className="fw-bold mb-2 text-start">{item.name}</h5>
                                                    <p className="mb-2 text-start fw-bold" style={{ whiteSpace: 'pre-line' }}>
                                                        {item.address}
                                                    </p>
                                                    <hr
                                                        className="line my-2 mb-4"
                                                        style={{ borderTop: '1px solid #dc3545', width: '100%' }}
                                                    />
                                                    <p className="mb-2 text-start d-flex align-items-center">
                                                        <FontAwesomeIcon
                                                            icon={faEnvelope}
                                                            className="me-2"
                                                            style={{ color: '#dc3545' }}
                                                        />
                                                        <a
                                                            href={`mailto:${item.email}`}
                                                            className="text-decoration-none"
                                                            style={{ color: 'black' }}
                                                        >
                                                            {item.email}
                                                        </a>
                                                    </p>
                                                    <div className="award-image-container mt-1">
                                                        <img
                                                            src={AwardImage}
                                                            alt="Award"
                                                            style={{ width: '48px', height: '48px' }}
                                                        />
                                                    </div>
                                                    <div className="text-start fw-bold">
                                                        <p>National 2025</p>
                                                    </div>
                                                </Card.Body>
                                            </div>
                                        </Card>
                                    </Col>
                                ))
                            )}
                        </Row>
                    </Container>
                </Container>
            </div>
        </>
    );
};

export default AwardandRecognition;