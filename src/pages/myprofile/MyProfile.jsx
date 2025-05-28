import React from 'react';
import { Container, Row, Col, Card, Table, Button, Tabs, Tab } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarAlt, FaIdCard, FaLock } from 'react-icons/fa';
import MemberImage from '../../assets/images/MemberImage.jpg';
import BackgroundImage from '../../assets/images/BackgroundImage.png';

const MyProfile = () => {
    return (
        <>
            <div
                className="junior-header py-5"
                style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <Container style={{ maxWidth: '1200px' }}>
                    <div className="text-left text-white">
                        <h1 className="junior-header-title mb-2">My Profile</h1>
                        <p className="junior-header-subtitle mb-0">Home - Profile</p>
                    </div>
                </Container>
            </div>

            <Container fluid className="profile-main py-5">
                <Container>
                    <Row>

                        <Col lg={4} md={5} className="mb-4">
                            <Card className="sidebar-card shadow-sm h-100">
                                <Card.Body className="p-4 d-flex flex-column justify-content-between">
                                    <div>
                                        <h4 className="sidebar-title mb-4">My Profile</h4>
                                        <div className="sidebar-menu">
                                            <Button variant="link" className="w-100 text-start sidebar-menu-item active">
                                                <FaUser className="me-2" /> Personal Information
                                            </Button>
                                            <Button variant="link" className="w-100 text-start sidebar-menu-item">
                                                <FaCalendarAlt className="me-2" /> Appointments
                                            </Button>
                                            <Button variant="link" className="w-100 text-start sidebar-menu-item">
                                                <FaIdCard className="me-2" /> Documents
                                            </Button>
                                            <Button variant="link" className="w-100 text-start sidebar-menu-item">
                                                <FaLock className="me-2" /> Change Password
                                            </Button>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>


                        <Col lg={8} md={7}>

                            <Card className="profile-card shadow-sm mb-4">
                                <Card.Body className="p-4">
                                    <Row className="align-items-center">
                                        <Col md={3} className="text-center">
                                            <img
                                                src={MemberImage}
                                                alt="Profile"
                                                className="profile-image rounded-circle mb-3"
                                            />
                                        </Col>
                                        <Col md={9}>
                                            <h3 className="profile-name">Dr. Santosh Kumar</h3>
                                            <p className="profile-designation text-muted mb-3">Senior Interventional Radiologist</p>
                                            <div className="profile-info">
                                                <div className="profile-info-item d-flex align-items-center mb-2">
                                                    <FaEnvelope className="profile-icon me-2" />
                                                    <span>santosh.kumar@example.com</span>
                                                </div>
                                                <div className="profile-info-item d-flex align-items-center mb-2">
                                                    <FaPhone className="profile-icon me-2" />
                                                    <span>+91 98765 43210</span>
                                                </div>
                                                <div className="profile-info-item d-flex align-items-center">
                                                    <FaMapMarkerAlt className="profile-icon me-2" />
                                                    <span>Mumbai, India</span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>

                            {/* <Card className="data-table-card shadow-sm mb-4">
                                <Card.Body className="p-4">
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <h4 className="table-title mb-0">Recent Cases</h4>
                                        <Button variant="primary">Add New Case</Button>
                                    </div>
                                    <div className="table-responsive">
                                        <Table striped bordered hover className="profile-data-table">
                                            <thead>
                                                <tr>
                                                    <th>Case ID</th>
                                                    <th>Patient Name</th>
                                                    <th>Procedure</th>
                                                    <th>Date</th>
                                                    <th>Status</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>#IR-2023-001</td>
                                                    <td>Rahul Sharma</td>
                                                    <td>Angioplasty</td>
                                                    <td>15 Jan 2023</td>
                                                    <td><span className="status-completed">Completed</span></td>
                                                    <td><Button variant="outline-info" size="sm">View</Button></td>
                                                </tr>
                                                <tr>
                                                    <td>#IR-2023-002</td>
                                                    <td>Priya Patel</td>
                                                    <td>Embolization</td>
                                                    <td>18 Jan 2023</td>
                                                    <td><span className="status-completed">Completed</span></td>
                                                    <td><Button variant="outline-info" size="sm">View</Button></td>
                                                </tr>
                                                <tr>
                                                    <td>#IR-2023-003</td>
                                                    <td>Vikram Singh</td>
                                                    <td>Biopsy</td>
                                                    <td>22 Jan 2023</td>
                                                    <td><span className="status-pending">Pending</span></td>
                                                    <td><Button variant="outline-info" size="sm">View</Button></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Card.Body>
                            </Card>

                           
                            <Card className="data-table-card shadow-sm">
                                <Card.Body className="p-4">
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <h4 className="table-title mb-0">Upcoming Appointments</h4>
                                        <Button variant="primary">Schedule New</Button>
                                    </div>
                                    <div className="table-responsive">
                                        <Table striped bordered hover className="profile-data-table">
                                            <thead>
                                                <tr>
                                                    <th>Appt ID</th>
                                                    <th>Patient Name</th>
                                                    <th>Procedure</th>
                                                    <th>Date & Time</th>
                                                    <th>Status</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>#APT-2023-006</td>
                                                    <td>Neha Desai</td>
                                                    <td>Consultation</td>
                                                    <td>30 Jan 2023, 10:00 AM</td>
                                                    <td><span className="status-confirmed">Confirmed</span></td>
                                                    <td><Button variant="outline-info" size="sm">View</Button></td>
                                                </tr>
                                                <tr>
                                                    <td>#APT-2023-007</td>
                                                    <td>Rajiv Mehta</td>
                                                    <td>Follow-up</td>
                                                    <td>1 Feb 2023, 2:30 PM</td>
                                                    <td><span className="status-confirmed">Confirmed</span></td>
                                                    <td><Button variant="outline-info" size="sm">View</Button></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Card.Body>
                            </Card> */}


                            <Card className="data-table-card shadow-sm mb-4">
                                <Card.Body className="p-4">
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <h4 className="table-title mb-0">Recent Cases</h4>
                                        <Button variant="primary">Add New Case</Button>
                                    </div>

                                    <Tabs defaultActiveKey="active" id="recent-cases-tabs" className="mb-3">
                                        <Tab eventKey="active" title="Active">
                                            <div className="table-responsive">
                                                <Table striped bordered hover className="profile-data-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Case ID</th>
                                                            <th>Patient Name</th>
                                                            <th>Procedure</th>
                                                            <th>Date</th>
                                                            <th>Status</th>
                                                            <th>Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>#IR-2023-001</td>
                                                            <td>Rahul Sharma</td>
                                                            <td>Angioplasty</td>
                                                            <td>15 Jan 2023</td>
                                                            <td><span className="status-completed">Completed</span></td>
                                                            <td><Button variant="outline-info" size="sm">View</Button></td>
                                                        </tr>

                                                    </tbody>
                                                </Table>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="deactive" title="Deactive">
                                            <div className="table-responsive">
                                                <Table striped bordered hover className="profile-data-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Case ID</th>
                                                            <th>Patient Name</th>
                                                            <th>Procedure</th>
                                                            <th>Date</th>
                                                            <th>Status</th>
                                                            <th>Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>#IR-2023-010</td>
                                                            <td>Alok Verma</td>
                                                            <td>Stenting</td>
                                                            <td>10 Feb 2023</td>
                                                            <td><span className="status-deactive">Deactive</span></td>
                                                            <td><Button variant="outline-info" size="sm">View</Button></td>
                                                        </tr>

                                                    </tbody>
                                                </Table>
                                            </div>
                                        </Tab>
                                    </Tabs>
                                </Card.Body>
                            </Card>


                            <Card className="data-table-card shadow-sm">
                                <Card.Body className="p-4">
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <h4 className="table-title mb-0">Upcoming Appointments</h4>
                                        <Button variant="primary">Schedule New</Button>
                                    </div>

                                    <Tabs defaultActiveKey="active" id="appointments-tabs" className="mb-3">
                                        <Tab eventKey="active" title="Active">
                                            <div className="table-responsive">
                                                <Table striped bordered hover className="profile-data-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Appt ID</th>
                                                            <th>Patient Name</th>
                                                            <th>Procedure</th>
                                                            <th>Date & Time</th>
                                                            <th>Status</th>
                                                            <th>Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>#APT-2023-006</td>
                                                            <td>Neha Desai</td>
                                                            <td>Consultation</td>
                                                            <td>30 Jan 2023, 10:00 AM</td>
                                                            <td><span className="status-confirmed">Confirmed</span></td>
                                                            <td><Button variant="outline-info" size="sm">View</Button></td>
                                                        </tr>

                                                    </tbody>
                                                </Table>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="deactive" title="Deactive">
                                            <div className="table-responsive">
                                                <Table striped bordered hover className="profile-data-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Appt ID</th>
                                                            <th>Patient Name</th>
                                                            <th>Procedure</th>
                                                            <th>Date & Time</th>
                                                            <th>Status</th>
                                                            <th>Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>#APT-2023-010</td>
                                                            <td>Rohit Sharma</td>
                                                            <td>Follow-up</td>
                                                            <td>5 Feb 2023, 11:00 AM</td>
                                                            <td><span className="status-deactive">Deactive</span></td>
                                                            <td><Button variant="outline-info" size="sm">View</Button></td>
                                                        </tr>

                                                    </tbody>
                                                </Table>
                                            </div>
                                        </Tab>
                                    </Tabs>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
};

export default MyProfile;






