
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import MemberImage from '../../assets/images/MemberImage.jpg';


function JuniorCommittee2024() {
    const committeeMembers = [
        { name: "Dr. Samarth S Gowda", position: "Coordinator" },
        { name: "Dr. Melia Avinash", position: "Council Member" },
        { name: "Dr. Damandeep Singh", position: "Council Member" },
        { name: "Dr. Darshan Thummer", position: "Council Member" },
        { name: "Dr. Prejwith K J Rol", position: "Council Member" },
        { name: "Dr. Shikhar Garg", position: "Council Member" }
    ];

    return (
        <>
            <section className="sectionPadding" style={{ backgroundColor: 'rgba(95, 32, 237, 0.05)' }}>
                <div
                 className="junior-2024 py-4">
                    <h1 className="junior-2024-heading mt-2">Junior Committee 2024</h1>

                    <Row className="g-4 mb-5">
                        {committeeMembers.map((member, index) => (
                            <Col key={index} xs={12} sm={6} md={4} lg={2} className=''>
                                <Card className="junior-2024-card text-center">
                                    <div className="junior-2024-image-wrapper">
                                        <img
                                            src={MemberImage}
                                            alt={member.name}
                                            className="junior-2024-image"
                                        />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="junior-2024-name">
                                            <h2> {member.name}</h2>
                                        </Card.Title>
                                        <Card.Text className="junior-2024-position">
                                            {member.position}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>

                    <div className="junior-2024-description">
                        <p>
                            Welcome to the official website of the ISVIR Junior Wing, the junior committee of the Indian Society of Vascular and Interventional Radiology (ISVIR). Our goal is to foster and promote the growth and advancement of young professionals in the field of vascular and interventional radiology. With a vision to create a vibrant community of emerging talents, our mission is to provide educational opportunities, mentorship, and networking platforms for aspiring radiologists.
                        </p>
                    </div>

                    <div className="junior-2024-masterclass">
                        <h2 className="junior-2024-subheading">Masterclass Series</h2>
                        <p>
                            We are excited to announce the launch of the ISVIR Masterclass, a weekly webinar series held on the Zoom platform. Join us every week as we delve into diverse topics, featuring renowned experts who will share their insights and expertise in vascular and interventional radiology. Don't miss this incredible opportunity to expand your knowledge and connect with like-minded individuals in the field.We are thrilled to announce that recordings of each masterclass session will be made available on our website after every class. Now you can catch up on the valuable insights and expert knowledge shared by renowned speakers at your convenience. Learn, grow, and broaden your horizons with the ISVIR Masterclass.
                        </p>
              
                        <p className="junior-2024-note">
                            *Note - To access the recording, simply log in to the ISVIR website and visit the library section, where you can watch your favorite masterclass. Please note that only ISVIR members have permission to view the recording.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default JuniorCommittee2024;
