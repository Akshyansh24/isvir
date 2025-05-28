
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import MemberImage from '../../assets/images/MemberImage.jpg';
import BackgroundImage from '../../assets/images/BackgroundImage.png';

function JuniorCommittee2025() {
    const committeeMembers = [
        { name: "Dr. Adarsh Anil", position: "Coordinator" },
        { name: "Dr. Ujjwal Agarwal", position: "Council Member" },
        { name: "Dr. T Seetam Kumar", position: "Council Member" },
        { name: "Dr. Rajat Singhal", position: "Council Member" },
        { name: "Dr. Shreya Garg", position: "Council Member" },
        { name: "Dr. Apratim Roy Choudhury", position: "Council Member" },
        { name: "Dr. M Pooja Sai", position: "Council Member" },
        { name: "Dr. Vikas H P", position: "Council Member" }
    ];

    return (
        <div>
            <div
                className="junior-header py-5"
                style={{ backgroundImage: `url(${BackgroundImage})` }}
            >
                <Container style={{ maxWidth: '1200px' }}>
                    <div className="text-left">
                        <h1 className="junior-header-title mb-2">
                            ISVIR Junior Wing
                        </h1>
                        <p className="junior-header-subtitle mb-0">
                            Home - ISVIR Junior Wing
                        </p>
                    </div>
                </Container>
            </div>

            <Container className="junior-container py-5">
                <h2 className="junior-heading">Junior Committee 2025</h2>

                <Row xs={2} md={3} lg={4} className="g-3">
                    {committeeMembers.map((member, index) => (
                        <Col key={index}>
                            <Card className="junior-member-card h-100">
                                <div className="junior-member-image-container mb-0">
                                    <img
                                        src={MemberImage}
                                        alt={member.name}
                                        className="junior-member-image"
                                    />
                                </div>
                                <Card.Body className="text-center d-flex flex-column justify-content-center p-2">
                                    <Card.Title className="junior-member-name mb-0">
                                        <h2 className="m-0">{member.name}</h2>
                                    </Card.Title>
                                    <Card.Text className="junior-member-position m-0">
                                        {member.position}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default JuniorCommittee2025;



