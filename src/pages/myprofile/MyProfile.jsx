
// import React from 'react';
// import { Container, Row, Col, Card, Table, Button, Tabs, Tab } from 'react-bootstrap';
// import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarAlt, FaIdCard, FaLock } from 'react-icons/fa';
// import MemberImage from '../../assets/images/MemberImage.jpg';
// import BackgroundImage from '../../assets/images/BackgroundImage.png';

// const MyProfile = () => {
//     return (
//         <>
//             <div
//                 className="junior-header py-5"
//                 style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
//             >
//                 <Container style={{ maxWidth: '1200px' }}>
//                     <div className="text-left text-white">
//                         <h1 className="junior-header-title mb-2">My Profile</h1>
//                         <p className="junior-header-subtitle mb-0">Home - Profile</p>
//                     </div>
//                 </Container>
//             </div>

//             <Container fluid className="profile-main py-5">
//                 <Container>
//                     <Row>
//                         <Col lg={4} md={5} className="mb-4">
//                             <Card className="sidebar-card shadow-sm h-100">
//                                 <Card.Body className="p-4 d-flex flex-column justify-content-between">
//                                     <div>
//                                         <h4 className="sidebar-title mb-4">My Profile</h4>
//                                         <div className="sidebar-menu">
//                                             <Button variant="link" className="w-100 text-start sidebar-menu-item active">
//                                                 <FaUser className="me-2" /> Personal Information
//                                             </Button>
//                                             <Button variant="link" className="w-100 text-start sidebar-menu-item">
//                                                 <FaCalendarAlt className="me-2" /> Appointments
//                                             </Button>
//                                             <Button variant="link" className="w-100 text-start sidebar-menu-item">
//                                                 <FaIdCard className="me-2" /> Documents
//                                             </Button>
//                                             <Button variant="link" className="w-100 text-start sidebar-menu-item">
//                                                 <FaLock className="me-2" /> Change Password
//                                             </Button>
//                                         </div>
//                                     </div>
//                                 </Card.Body>
//                             </Card>
//                         </Col>

//                         <Col lg={8} md={7}>
//                             {/* Profile Card */}
//                             <Card className="profile-card shadow-sm mb-4">
//                                 <Card.Body className="p-4">
//                                     <Row className="align-items-center">
//                                         <Col md={3} className="text-center">
//                                             <img
//                                                 src={MemberImage}
//                                                 alt="Profile"
//                                                 className="profile-image rounded-circle mb-3"
//                                                 style={{ width: '100px', height: '100px', objectFit: 'cover' }}
//                                             />
//                                         </Col>
//                                         <Col md={9}>
//                                             <h3 className="profile-name">Dr. Santosh Kumar</h3>
//                                             <p className="profile-designation text-muted mb-3">Senior Interventional Radiologist</p>
//                                             <div className="profile-info">
//                                                 <div className="profile-info-item d-flex align-items-center mb-2">
//                                                     <FaEnvelope className="profile-icon me-2" />
//                                                     <span>santosh.kumar@example.com</span>
//                                                 </div>
//                                                 <div className="profile-info-item d-flex align-items-center mb-2">
//                                                     <FaPhone className="profile-icon me-2" />
//                                                     <span>+91 98765 43210</span>
//                                                 </div>
//                                                 <div className="profile-info-item d-flex align-items-center">
//                                                     <FaMapMarkerAlt className="profile-icon me-2" />
//                                                     <span>Mumbai, India</span>
//                                                 </div>
//                                             </div>
//                                         </Col>
//                                     </Row>
//                                 </Card.Body>
//                             </Card>

//                             {/* Membership Details */}
//                             <Card className="data-table-card shadow-sm mb-4">
//                                 <Card.Body className="p-4">
//                                     <Tabs defaultActiveKey="active" id="membership-tabs" className="mb-0 bg-primary p-1">
//                                         <Tab eventKey="active" title="Active">
//                                             <div className="table-responsive">
//                                                 <Table bordered className="profile-data-table">
//                                                     <thead>
//                                                         <tr>
//                                                             <th>Member Id</th>
//                                                             <th>Membership</th>
//                                                             <th>Issue Date</th>
//                                                             <th>Valid Till</th>
//                                                         </tr>
//                                                     </thead>
//                                                     <tbody>
//                                                         <tr>
//                                                             <td>ISVIR-LM-1234</td>
//                                                             <td>Membership</td>
//                                                             <td>06-Aug-2019</td>
//                                                             <td>Lifetime</td>
//                                                         </tr>
//                                                     </tbody>
//                                                 </Table>
//                                             </div>
//                                         </Tab>
//                                         <Tab eventKey="associate" title="Associate">
//                                             <div className="table-responsive">
//                                                 <Table bordered className="profile-data-table">
//                                                     <thead>
//                                                         <tr>
//                                                             <th>Membership</th>
//                                                             <th>Issue Date</th>
//                                                             <th>Valid Till</th>
//                                                             <th></th>
//                                                         </tr>
//                                                     </thead>
//                                                     <tbody>
//                                                         <tr>
//                                                             <td>Active</td>
//                                                             <td>10-Aug-2023</td>
//                                                             <td>10-Aug-2024</td>
//                                                             <td></td>
//                                                         </tr>
//                                                     </tbody>
//                                                 </Table>
//                                             </div>
//                                         </Tab>
//                                     </Tabs>
//                                 </Card.Body>
//                             </Card>

//                             {/* Appointments */}
//                             <Card className="data-table-card shadow-sm">
//                                 <Card.Body className="p-4">
//                                     <Tabs defaultActiveKey="active" id="appointments-tabs" className="mb-3">
//                                         <Tab eventKey="active" title="Active">
//                                             <div className="table-responsive">
//                                                 <Table striped bordered hover className="profile-data-table">
//                                                     <thead>
//                                                         <tr>
//                                                             <th>Appt ID</th>
//                                                             <th>Patient Name</th>
//                                                             <th>Procedure</th>
//                                                             <th>Date & Time</th>
//                                                             <th>Status</th>
//                                                             <th>Actions</th>
//                                                         </tr>
//                                                     </thead>
//                                                     <tbody>
//                                                         <tr>
//                                                             <td>#APT-2023-006</td>
//                                                             <td>Neha Desai</td>
//                                                             <td>Consultation</td>
//                                                             <td>30 Jan 2023, 10:00 AM</td>
//                                                             <td><span className="status-confirmed">Confirmed</span></td>
//                                                             <td><Button variant="outline-info" size="sm">View</Button></td>
//                                                         </tr>
//                                                     </tbody>
//                                                 </Table>
//                                             </div>
//                                         </Tab>
//                                         <Tab eventKey="deactive" title="Deactive">
//                                             <div className="table-responsive">
//                                                 <Table striped bordered hover className="profile-data-table">
//                                                     <thead>
//                                                         <tr>
//                                                             <th>Appt ID</th>
//                                                             <th>Patient Name</th>
//                                                             <th>Procedure</th>
//                                                             <th>Date & Time</th>
//                                                             <th>Status</th>
//                                                             <th>Actions</th>
//                                                         </tr>
//                                                     </thead>
//                                                     <tbody>
//                                                         <tr>
//                                                             <td>#APT-2023-010</td>
//                                                             <td>Rohit Sharma</td>
//                                                             <td>Follow-up</td>
//                                                             <td>5 Feb 2023, 11:00 AM</td>
//                                                             <td><span className="status-deactive">Deactive</span></td>
//                                                             <td><Button variant="outline-info" size="sm">View</Button></td>
//                                                         </tr>
//                                                     </tbody>
//                                                 </Table>
//                                             </div>
//                                         </Tab>
//                                     </Tabs>
//                                 </Card.Body>
//                             </Card>
//                         </Col>
//                     </Row>
//                 </Container>
//             </Container>
//         </>
//     );
// };

// export default MyProfile;

// import React from 'react';
// import { Container, Row, Col, Card, Table, Button, Tabs, Tab } from 'react-bootstrap';
// import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarAlt, FaIdCard, FaLock } from 'react-icons/fa';
// import MemberImage from '../../assets/images/MemberImage.jpg';
// import BackgroundImage from '../../assets/images/BackgroundImage.png';

// const MyProfile = () => {
//     return (
//         <>
//             {/* Header Section */}
//             <div
//                 className="junior-header py-5"
//                 style={{
//                     backgroundImage: `url(${BackgroundImage})`,
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                 }}
//             >
//                 <Container style={{ maxWidth: '1200px' }}>
//                     <div className="text-left text-white">
//                         <h1 className="junior-header-title mb-2">My Profile</h1>
//                         <p className="junior-header-subtitle mb-0">Home - Profile</p>
//                     </div>
//                 </Container>
//             </div>

//             {/* Main Profile Section */}
//             <Container fluid className="profile-main py-5">
//                 <Container>
//                     <Row>
//                         {/* Sidebar Menu */}
//                         <Col lg={4} md={5} className="mb-4">
//                             <Card className="sidebar-card shadow-sm" style={{ height: '45%;' }}>
//                                 <Card.Body className="p-4 d-flex flex-column justify-content-between">
//                                     <div>
//                                         <h4 className="sidebar-title mb-4">My Profile</h4>
//                                         <div className="sidebar-menu">
//                                             <Button variant="link" className="w-100 text-start sidebar-menu-item active">
//                                                 <FaUser className="me-2" /> Personal Information
//                                             </Button>
//                                             <Button variant="link" className="w-100 text-start sidebar-menu-item">
//                                                 <FaCalendarAlt className="me-2" /> Appointments
//                                             </Button>
//                                             <Button variant="link" className="w-100 text-start sidebar-menu-item">
//                                                 <FaIdCard className="me-2" /> Documents
//                                             </Button>
//                                             <Button variant="link" className="w-100 text-start sidebar-menu-item">
//                                                 <FaLock className="me-2" /> Change Password
//                                             </Button>
//                                         </div>
//                                     </div>
//                                 </Card.Body>
//                             </Card>
//                         </Col>

//                         {/* Profile Details */}
//                         <Col lg={8} md={7}>
//                             {/* Profile Card */}
//                             <Card className="profile-card shadow-sm mb-4">
//                                 <Card.Body className="p-4">
//                                     <Row className="align-items-center">
//                                         <Col md={3} className="text-center">
//                                             <img
//                                                 src={MemberImage}
//                                                 alt="Profile"
//                                                 className="profile-image rounded-circle mb-3"
//                                                 style={{ width: '100px', height: '100px', objectFit: 'cover' }}
//                                             />
//                                         </Col>
//                                         <Col md={9}>
//                                             <h3 className="profile-name">Dr. Santosh Kumar</h3>
//                                             <p className="profile-designation text-muted mb-3">Senior Interventional Radiologist</p>
//                                             <div className="profile-info">
//                                                 <div className="profile-info-item d-flex align-items-center mb-2">
//                                                     <FaEnvelope className="profile-icon me-2" />
//                                                     <span>santosh.kumar@example.com</span>
//                                                 </div>
//                                                 <div className="profile-info-item d-flex align-items-center mb-2">
//                                                     <FaPhone className="profile-icon me-2" />
//                                                     <span>+91 98765 43210</span>
//                                                 </div>
//                                                 <div className="profile-info-item d-flex align-items-center">
//                                                     <FaMapMarkerAlt className="profile-icon me-2" />
//                                                     <span>Mumbai, India</span>
//                                                 </div>
//                                             </div>
//                                         </Col>
//                                     </Row>
//                                 </Card.Body>
//                             </Card>

//                             {/* Membership Details */}
//                             <Card className="data-table-card shadow-sm mb-4">
//                                 <Card.Body className="p-4">
//                                     <Tabs defaultActiveKey="active" id="membership-tabs" className="mb-0 bg-primary p-1">
//                                         <Tab eventKey="active" title="Active">
//                                             <div className="table-responsive">
//                                                 <Table bordered className="profile-data-table">
//                                                     <thead>
//                                                         <tr>
//                                                             <th>Member Id</th>
//                                                             <th>Membership</th>
//                                                             <th>Issue Date</th>
//                                                             <th>Valid Till</th>
//                                                         </tr>
//                                                     </thead>
//                                                     <tbody>
//                                                         <tr>
//                                                             <td>ISVIR-LM-1234</td>
//                                                             <td>Membership</td>
//                                                             <td>06-Aug-2019</td>
//                                                             <td>Lifetime</td>
//                                                         </tr>
//                                                     </tbody>
//                                                 </Table>
//                                             </div>
//                                         </Tab>
//                                         <Tab eventKey="associate" title="Associate">
//                                             <div className="table-responsive">
//                                                 <Table bordered className="profile-data-table">
//                                                     <thead>
//                                                         <tr>
//                                                             <th>Membership</th>
//                                                             <th>Issue Date</th>
//                                                             <th>Valid Till</th>
//                                                         </tr>
//                                                     </thead>
//                                                     <tbody>
//                                                         <tr>
//                                                             <td>Active</td>
//                                                             <td>10-Aug-2023</td>
//                                                             <td>10-Aug-2024</td>
//                                                         </tr>
//                                                     </tbody>
//                                                 </Table>
//                                             </div>
//                                         </Tab>
//                                     </Tabs>
//                                 </Card.Body>
//                             </Card>

//                             {/* Appointments */}
//                             <Card className="data-table-card shadow-sm">
//                                 <Card.Body className="p-4">
//                                     <Tabs defaultActiveKey="active" id="appointments-tabs" className="mb-3">
//                                         <Tab eventKey="active" title="Active">
//                                             <div className="table-responsive">
//                                                 <Table striped bordered hover className="profile-data-table">
//                                                     <thead>
//                                                         <tr>
//                                                             <th>Appt ID</th>
//                                                             <th>Patient Name</th>
//                                                             <th>Procedure</th>
//                                                             <th>Date & Time</th>
//                                                             <th>Status</th>
//                                                             <th>Actions</th>
//                                                         </tr>
//                                                     </thead>
//                                                     <tbody>
//                                                         <tr>
//                                                             <td>#APT-2023-006</td>
//                                                             <td>Neha Desai</td>
//                                                             <td>Consultation</td>
//                                                             <td>30 Jan 2023, 10:00 AM</td>
//                                                             <td><span className="status-confirmed">Confirmed</span></td>
//                                                             <td><Button variant="outline-info" size="sm">View</Button></td>
//                                                         </tr>
//                                                     </tbody>
//                                                 </Table>
//                                             </div>
//                                         </Tab>
//                                         <Tab eventKey="deactive" title="Deactive">
//                                             <div className="table-responsive">
//                                                 <Table striped bordered hover className="profile-data-table">
//                                                     <thead>
//                                                         <tr>
//                                                             <th>Appt ID</th>
//                                                             <th>Patient Name</th>
//                                                             <th>Procedure</th>
//                                                             <th>Date & Time</th>
//                                                             <th>Status</th>
//                                                             <th>Actions</th>
//                                                         </tr>
//                                                     </thead>
//                                                     <tbody>
//                                                         <tr>
//                                                             <td>#APT-2023-010</td>
//                                                             <td>Rohit Sharma</td>
//                                                             <td>Follow-up</td>
//                                                             <td>5 Feb 2023, 11:00 AM</td>
//                                                             <td><span className="status-deactive">Deactive</span></td>
//                                                             <td><Button variant="outline-info" size="sm">View</Button></td>
//                                                         </tr>
//                                                     </tbody>
//                                                 </Table>
//                                             </div>
//                                         </Tab>
//                                     </Tabs>
//                                 </Card.Body>
//                             </Card>
//                         </Col>
//                     </Row>
//                 </Container>
//             </Container>
//         </>
//     );
// };

// export default MyProfile;



// import React, { useState } from 'react';
// import { Container, Row, Col, Card, Table, Tabs, Tab, Form } from 'react-bootstrap';
// import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarAlt, FaIdCard, FaLock } from 'react-icons/fa';
// import MemberImage from '../../assets/images/MemberImage.jpg';
// import BackgroundImage from '../../assets/images/BackgroundImage.png';

// const MyProfile = () => {
//     const [activeKey, setActiveKey] = useState('personal');

//     return (
//         <>
//             <div
//                 className="junior-header py-5"
//                 style={{
//                     backgroundImage: `url(${BackgroundImage})`,
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                 }}
//             >
//                 <Container style={{ maxWidth: '1200px' }}>
//                     <div className="text-left text-white">
//                         <h1 className="junior-header-title mb-2">My Profile</h1>
//                         <p className="junior-header-subtitle mb-0">Home - Profile</p>
//                     </div>
//                 </Container>
//             </div>

//             <Container fluid className="profile-main py-5" >
//                 <Container>
//                     <Row>
//                         <Col lg={4} md={5} className="mb-4 p-3" style={{ border: '2px solid  #03a9fa', height: '350px', width: '320px', marginRight: '40px' }}>
//                             <Tabs
//                                 activeKey={activeKey}
//                                 onSelect={(k) => setActiveKey(k)}
//                                 id="vertical-tab"
//                                 className="flex-column nav-pills"
//                                 mountOnEnter
//                                 unmountOnExit
//                                 variant="pills"
//                                 style={{ width: '100%' }}

//                             >
//                                 <Tab
//                                     eventKey="personal"
//                                     title={
//                                         <span>

//                                             Personal Information
//                                         </span>
//                                     }
//                                     tabClassName="text-start"
//                                 />
//                                 <Tab
//                                     eventKey="appointments"
//                                     title={
//                                         <span>

//                                             Appointments
//                                         </span>
//                                     }
//                                     tabClassName="text-start"
//                                 />
//                                 <Tab
//                                     eventKey="documents"
//                                     title={
//                                         <span>

//                                             Documents
//                                         </span>
//                                     }
//                                     tabClassName="text-start"
//                                 />
//                                 <Tab
//                                     eventKey="changepassword"
//                                     title={
//                                         <span>

//                                             Change Password
//                                         </span>
//                                     }
//                                     tabClassName="text-start"
//                                 />
//                             </Tabs>
//                         </Col>

//                         <Col lg={8} md={7}>
//                             <Tabs
//                                 activeKey={activeKey}
//                                 onSelect={(k) => setActiveKey(k)}
//                                 id="profile-content-tabs"
//                                 mountOnEnter
//                                 unmountOnExit
//                                 className="d-none"
//                             >
//                                 <Tab eventKey="personal" tabClassName="d-none">
//                                     {/* Personal Info Content */}

//                                     {/* First box: Profile info */}
//                                     {/* <Card className="profile-card shadow-sm mb-4">
//                                         <Card.Body className="p-4">

//                                             <Row>
//                                                 <Col md={6} className="mb-4">
//                                                     <Card className="award-card h-100">
//                                                         <Row noGutters className="g-0">
//                                                             <Col xs={4}>
//                                                                 <Card.Img
//                                                                     src="https://via.placeholder.com/150"
//                                                                     alt="Awardee"
//                                                                     className="h-100"
//                                                                     style={{ objectFit: 'cover', borderTopLeftRadius: '0.375rem', borderBottomLeftRadius: '0.375rem' }}
//                                                                 />
//                                                             </Col>
//                                                             <Col xs={8}>
//                                                                 <Card.Body className="d-flex flex-column justify-content-center">
//                                                                     <h5 className="fw-bold mb-2">Prof NAVEEN KALRA</h5>
//                                                                     <p className="mb-2">#1584, SECTOR 49 B, CHANDIGARH Pushpac Complex, Chandigarh, UT, 160047</p>
//                                                                     <p className="mb-2">
//                                                                         <a href="mailto:navkal2004@yahoo.com" className="text-decoration-none">
//                                                                             navkal2004@yahoo.com
//                                                                         </a>
//                                                                     </p>
//                                                                     <p className="fw-bold mb-0">National - 2025</p>
//                                                                 </Card.Body>
//                                                             </Col>
//                                                         </Row>
//                                                     </Card>
//                                                 </Col>
//                                             </Row>



//                                         </Card.Body>
//                                     </Card> */}

//                                     <Card className="profile-card shadow-sm mb-0">
//                                         <Card.Body className="p-0">
//                                             <Row className="m-0 w-100">
//                                                 <Col md={12} className="p-0">
//                                                     <Card className="award-card h-100 w-100 border-0 rounded-0">
//                                                         <Row className="g-0">
//                                                             <Col xs={4}>
//                                                                 <Card.Img
//                                                                     src={MemberImage}
//                                                                     alt="Awardee"
//                                                                     className="h-100"
//                                                                     style={{
//                                                                         objectFit: 'cover',
//                                                                         borderTopLeftRadius: '0.375rem',
//                                                                         borderBottomLeftRadius: '0.375rem',
//                                                                     }}
//                                                                 />
//                                                             </Col>
//                                                             <Col xs={8}>
//                                                                 <Card.Body className="d-flex flex-column justify-content-center">
//                                                                     <h5 className="fw-bold mb-2">Prof NAVEEN KALRA</h5>
//                                                                     <p className="mb-2">#1584, SECTOR 49 B, CHANDIGARH Pushpac Complex, Chandigarh, UT, 160047</p>
//                                                                     <p className="mb-2">
//                                                                         <a href="mailto:navkal2004@yahoo.com" className="text-decoration-none">
//                                                                             navkal2004@yahoo.com
//                                                                         </a>
//                                                                     </p>
//                                                                     <p className="fw-bold mb-0">National - 2025</p>
//                                                                 </Card.Body>
//                                                             </Col>
//                                                         </Row>
//                                                     </Card>
//                                                 </Col>
//                                             </Row>
//                                         </Card.Body>
//                                     </Card>


//                                     {/* Second box: Membership table */}
//                                     <Card className="medicaldetails shadow-sm mt-3">
//                                         <Card.Body className="p-0">

//                                             <Tabs defaultActiveKey="active" id="membership-tabs" className="bg-primary p-1  mb-0 text-white rounded">
//                                                 <Tab eventKey="active" title="Active">
//                                                     <Table bordered striped size="sm" responsive>
//                                                         <thead>
//                                                             <tr>
//                                                                 <th>Member Id</th>
//                                                                 <th>Membership</th>
//                                                                 <th>Issue Date</th>
//                                                                 <th>Valid Till</th>
//                                                             </tr>
//                                                         </thead>
//                                                         <tbody>
//                                                             <tr>
//                                                                 <td>ISVIR-LM-1234</td>
//                                                                 <td>Membership</td>
//                                                                 <td>06-Aug-2019</td>
//                                                                 <td>Lifetime</td>
//                                                             </tr>
//                                                         </tbody>

//                                                         <thead>
//                                                             <tr>
//                                                                 <th>Member Id</th>
//                                                                 <th>Membership</th>
//                                                                 <th>Issue Date</th>
//                                                                 <th>Valid Till</th>
//                                                             </tr>
//                                                         </thead>
//                                                         <tbody>
//                                                             <tr>
//                                                                 <td>ISVIR-LM-1234</td>
//                                                                 <td>Membership</td>
//                                                                 <td>06-Aug-2019</td>
//                                                                 <td>Lifetime</td>
//                                                             </tr>
//                                                         </tbody>
//                                                     </Table>
//                                                 </Tab>
//                                                 <Tab eventKey="associate" title="Associate">
//                                                     <Table bordered striped size="sm" responsive>
//                                                         <thead>
//                                                             <tr>
//                                                                 <th>Membership</th>
//                                                                 <th>Issue Date</th>
//                                                                 <th>Valid Till</th>
//                                                             </tr>
//                                                         </thead>
//                                                         <tbody>
//                                                             <tr>
//                                                                 <td>Active</td>
//                                                                 <td>10-Aug-2023</td>
//                                                                 <td>10-Aug-2024</td>
//                                                             </tr>
//                                                         </tbody>
//                                                         <thead>
//                                                             <tr>
//                                                                 <th>Member Id</th>
//                                                                 <th>Membership</th>
//                                                                 <th>Issue Date</th>
//                                                                 <th>Valid Till</th>
//                                                             </tr>
//                                                         </thead>
//                                                         <tbody>
//                                                             <tr>
//                                                                 <td>ISVIR-LM-1234</td>
//                                                                 <td>Membership</td>
//                                                                 <td>06-Aug-2019</td>
//                                                                 <td>Lifetime</td>
//                                                             </tr>
//                                                         </tbody>
//                                                     </Table>
//                                                 </Tab>
//                                             </Tabs>
//                                         </Card.Body>
//                                     </Card>
//                                     <Card className="medicaldetails shadow-sm mt-5">
//                                         <Card.Body className="p-0">

//                                             <Tabs defaultActiveKey="active" id="membership-tabs" className="bg-primary p-1 mb-0  text-white rounded">
//                                                 <Tab eventKey="active" title="Active">
//                                                     <Table bordered striped size="sm" responsive>
//                                                         <thead>
//                                                             <tr>
//                                                                 <th>Member Id</th>
//                                                                 <th>Membership</th>
//                                                                 <th>Issue Date</th>
//                                                                 <th>Valid Till</th>
//                                                             </tr>
//                                                         </thead>
//                                                         <tbody>
//                                                             <tr>
//                                                                 <td>ISVIR-LM-1234</td>
//                                                                 <td>Membership</td>
//                                                                 <td>06-Aug-2019</td>
//                                                                 <td>Lifetime</td>
//                                                             </tr>
//                                                         </tbody>
//                                                         <thead>
//                                                             <tr>
//                                                                 <th>Member Id</th>
//                                                                 <th>Membership</th>
//                                                                 <th>Issue Date</th>
//                                                                 <th>Valid Till</th>
//                                                             </tr>
//                                                         </thead>
//                                                         <tbody>
//                                                             <tr>
//                                                                 <td>ISVIR-LM-1234</td>
//                                                                 <td>Membership</td>
//                                                                 <td>06-Aug-2019</td>
//                                                                 <td>Lifetime</td>
//                                                             </tr>
//                                                         </tbody>
//                                                     </Table>
//                                                 </Tab>
//                                                 <Tab eventKey="associate" title="Associate">
//                                                     <Table bordered striped size="sm" responsive>
//                                                         <thead>
//                                                             <tr>
//                                                                 <th>Membership</th>
//                                                                 <th>Issue Date</th>
//                                                                 <th>Valid Till</th>
//                                                             </tr>
//                                                         </thead>
//                                                         <tbody>
//                                                             <tr>
//                                                                 <td>Active</td>
//                                                                 <td>10-Aug-2023</td>
//                                                                 <td>10-Aug-2024</td>
//                                                             </tr>
//                                                         </tbody>
//                                                         <thead>
//                                                             <tr>
//                                                                 <th>Member Id</th>
//                                                                 <th>Membership</th>
//                                                                 <th>Issue Date</th>
//                                                                 <th>Valid Till</th>
//                                                             </tr>
//                                                         </thead>
//                                                         <tbody>
//                                                             <tr>
//                                                                 <td>ISVIR-LM-1234</td>
//                                                                 <td>Membership</td>
//                                                                 <td>06-Aug-2019</td>
//                                                                 <td>Lifetime</td>
//                                                             </tr>
//                                                         </tbody>
//                                                     </Table>
//                                                 </Tab>
//                                             </Tabs>
//                                         </Card.Body>
//                                     </Card>
//                                 </Tab>

//                                 <Tab eventKey="appointments" tabClassName="d-none">
//                                     {/* Appointments Content */}
//                                     <Card className="profile-card shadow-sm mb-4">
//                                         <Card.Body className="p-4">
//                                             <Table striped bordered hover size="sm" responsive>
//                                                 <thead>
//                                                     <tr>
//                                                         <th>Appt ID</th>
//                                                         <th>Patient Name</th>
//                                                         <th>Procedure</th>
//                                                         <th>Date & Time</th>
//                                                         <th>Status</th>
//                                                     </tr>
//                                                 </thead>
//                                                 <tbody>
//                                                     <tr>
//                                                         <td>#APT-2023-006</td>
//                                                         <td>Neha Desai</td>
//                                                         <td>Consultation</td>
//                                                         <td>30 Jan 2023, 10:00 AM</td>
//                                                         <td><span className="status-confirmed">Confirmed</span></td>
//                                                     </tr>
//                                                 </tbody>
//                                             </Table>

//                                         </Card.Body>
//                                     </Card>
//                                 </Tab>

//                                 <Tab eventKey="documents" tabClassName="d-none">
//                                     {/* Documents Content */}
//                                     <Card className="profile-card shadow-sm mb-4">
//                                         <Card.Body className="p-4">
//                                             <Table bordered striped size="sm" responsive>
//                                                 <thead>
//                                                     <tr>
//                                                         <th>Document Type</th>
//                                                         <th>Document Name</th>
//                                                         <th>Status</th>
//                                                         <th>Uploaded Date</th>
//                                                     </tr>
//                                                 </thead>
//                                                 <tbody>
//                                                     <tr>
//                                                         <td>ID Proof</td>
//                                                         <td>Aadhar Card</td>
//                                                         <td>Verified</td>
//                                                         <td>12-May-2023</td>
//                                                     </tr>
//                                                     <tr>
//                                                         <td>Medical License</td>
//                                                         <td>License 2023</td>
//                                                         <td>Pending</td>
//                                                         <td>15-May-2023</td>
//                                                     </tr>
//                                                 </tbody>
//                                             </Table>
//                                         </Card.Body>
//                                     </Card>
//                                 </Tab>

//                                 <Tab eventKey="changepassword" tabClassName="d-none">
//                                     {/* Change Password Content */}
//                                     <Card className="profile-card shadow-sm mb-4">
//                                         <Card.Body className="p-4">
//                                             <Form>
//                                                 <Form.Group controlId="currentPassword" className="mb-3">
//                                                     <Form.Label>Current Password</Form.Label>
//                                                     <Form.Control type="password" placeholder="Enter current password" />
//                                                 </Form.Group>
//                                                 <Form.Group controlId="newPassword" className="mb-3">
//                                                     <Form.Label>New Password</Form.Label>
//                                                     <Form.Control type="password" placeholder="Enter new password" />
//                                                 </Form.Group>
//                                                 <Form.Group controlId="confirmPassword" className="mb-3">
//                                                     <Form.Label>Confirm New Password</Form.Label>
//                                                     <Form.Control type="password" placeholder="Confirm new password" />
//                                                 </Form.Group>
//                                                 <button className="btn btn-primary" type="submit">Update Password</button>
//                                             </Form>
//                                         </Card.Body>
//                                     </Card>
//                                 </Tab>
//                             </Tabs>
//                         </Col>
//                     </Row>
//                 </Container>
//             </Container>
//         </>
//     );
// };

// export default MyProfile;   



import React, { useState } from 'react';
import { Container, Row, Col, Card, Table, Tabs, Tab, Form } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarAlt, FaIdCard, FaLock } from 'react-icons/fa';
import MemberImage from '../../assets/images/MemberImage.jpg';
import BackgroundImage from '../../assets/images/BackgroundImage.png';

const MyProfile = () => {
    const [activeKey, setActiveKey] = useState('personal');

    return (
        <>
            <section
                className="junior-header py-5 sectionPadding"
                style={{
                    backgroundImage: `url(${BackgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div className="text-left text-white">
                        <h1 className="junior-header-title mb-2">My Profile</h1>
                        <p className="junior-header-subtitle mb-0">Home - Profile</p>
                    </div>
                </div>
            </section>

            <section className="profile-main py-5 sectionPadding">
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <Row>
                        <Col lg={4} md={5} className="mb-4 p-3" style={{ border: '2px solid  #03a9fa', height: '350px', width: '320px', marginRight: '40px' }}>
                            <Tabs
                                activeKey={activeKey}
                                onSelect={(k) => setActiveKey(k)}
                                id="vertical-tab"
                                className="flex-column nav-pills"
                                mountOnEnter
                                unmountOnExit
                                variant="pills"
                                style={{ width: '100%' }}
                            >
                                <Tab
                                    eventKey="personal"
                                    title={
                                        <span>
                                            Personal Information
                                        </span>
                                    }
                                    tabClassName="text-start"
                                />
                                <Tab
                                    eventKey="appointments"
                                    title={
                                        <span>
                                            Appointments
                                        </span>
                                    }
                                    tabClassName="text-start"
                                />
                                <Tab
                                    eventKey="documents"
                                    title={
                                        <span>
                                            Documents
                                        </span>
                                    }
                                    tabClassName="text-start"
                                />
                                <Tab
                                    eventKey="changepassword"
                                    title={
                                        <span>
                                            Change Password
                                        </span>
                                    }
                                    tabClassName="text-start"
                                />
                            </Tabs>
                        </Col>

                        <Col lg={8} md={7}>
                            <Tabs
                                activeKey={activeKey}
                                onSelect={(k) => setActiveKey(k)}
                                id="profile-content-tabs"
                                mountOnEnter
                                unmountOnExit
                                className="d-none"
                            >
                                <Tab eventKey="personal" tabClassName="d-none">
                                    <Card className="profile-card shadow-sm mb-0">
                                        <Card.Body className="p-0">
                                            <Row className="m-0 w-100">
                                                <Col md={12} className="p-0">
                                                    <Card className="award-card h-100 w-100 border-0 rounded-0">
                                                        <Row className="g-0">
                                                            <Col xs={4}>
                                                                <Card.Img
                                                                    src={MemberImage}
                                                                    alt="Awardee"
                                                                    className="h-100"
                                                                    style={{
                                                                        objectFit: 'cover',
                                                                        borderTopLeftRadius: '0.375rem',
                                                                        borderBottomLeftRadius: '0.375rem',
                                                                    }}
                                                                />
                                                            </Col>
                                                            <Col xs={8}>
                                                                <Card.Body className="d-flex flex-column justify-content-center">
                                                                    <h5 className="fw-bold mb-2">Prof NAVEEN KALRA</h5>
                                                                    <p className="mb-2">#1584, SECTOR 49 B, CHANDIGARH Pushpac Complex, Chandigarh, UT, 160047</p>
                                                                    <p className="mb-2">
                                                                        <a href="mailto:navkal2004@yahoo.com" className="text-decoration-none">
                                                                            navkal2004@yahoo.com
                                                                        </a>
                                                                    </p>
                                                                    <p className="fw-bold mb-0">National - 2025</p>
                                                                </Card.Body>
                                                            </Col>
                                                        </Row>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>

                                    <Card className="medicaldetails shadow-sm mt-3">
                                        <Card.Body className="p-0">
                                            <Tabs defaultActiveKey="active" id="membership-tabs" className="bg-primary p-1  mb-0 text-white rounded">

                                                <Tab eventKey="active" title="Active">
                                                    <Table bordered striped size="sm" responsive>
                                                        <thead>
                                                            <tr>
                                                                <th>Member Id</th>
                                                                <th>Membership</th>
                                                                <th>Issue Date</th>
                                                                <th>Valid Till</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>ISVIR-LM-1234</td>
                                                                <td>Membership</td>
                                                                <td>06-Aug-2019</td>
                                                                <td>Lifetime</td>
                                                            </tr>
                                                        </tbody>

                                                        <thead>
                                                            <tr>
                                                                <th>Member Id</th>
                                                                <th>Membership</th>
                                                                <th>Issue Date</th>
                                                                <th>Valid Till</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>ISVIR-LM-1234</td>
                                                                <td>Membership</td>
                                                                <td>06-Aug-2019</td>
                                                                <td>Lifetime</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </Tab>
                                                <Tab eventKey="associate" title="Associate">
                                                    <Table bordered striped size="sm" responsive>
                                                        <thead>
                                                            <tr>
                                                                <th>Membership</th>
                                                                <th>Issue Date</th>
                                                                <th>Valid Till</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Active</td>
                                                                <td>10-Aug-2023</td>
                                                                <td>10-Aug-2024</td>
                                                            </tr>
                                                        </tbody>
                                                        <thead>
                                                            <tr>
                                                                <th>Member Id</th>
                                                                <th>Membership</th>
                                                                <th>Issue Date</th>
                                                                <th>Valid Till</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>ISVIR-LM-1234</td>
                                                                <td>Membership</td>
                                                                <td>06-Aug-2019</td>
                                                                <td>Lifetime</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </Tab>
                                            </Tabs>
                                        </Card.Body>
                                    </Card>
                                    <Card className="medicaldetails shadow-sm mt-5">
                                        <Card.Body className="p-0">
                                            <Tabs defaultActiveKey="active" id="membership-tabs" className="bg-primary p-1 mb-0  text-white rounded">
                                                <Tab eventKey="active" title="Active">
                                                    <Table bordered striped size="sm" responsive>
                                                        <thead>
                                                            <tr>
                                                                <th>Member Id</th>
                                                                <th>Membership</th>
                                                                <th>Issue Date</th>
                                                                <th>Valid Till</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>ISVIR-LM-1234</td>
                                                                <td>Membership</td>
                                                                <td>06-Aug-2019</td>
                                                                <td>Lifetime</td>
                                                            </tr>
                                                        </tbody>
                                                        <thead>
                                                            <tr>
                                                                <th>Member Id</th>
                                                                <th>Membership</th>
                                                                <th>Issue Date</th>
                                                                <th>Valid Till</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>ISVIR-LM-1234</td>
                                                                <td>Membership</td>
                                                                <td>06-Aug-2019</td>
                                                                <td>Lifetime</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </Tab>
                                                <Tab eventKey="associate" title="Associate">
                                                    <Table bordered striped size="sm" responsive>
                                                        <thead>
                                                            <tr>
                                                                <th>Membership</th>
                                                                <th>Issue Date</th>
                                                                <th>Valid Till</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Active</td>
                                                                <td>10-Aug-2023</td>
                                                                <td>10-Aug-2024</td>
                                                            </tr>
                                                        </tbody>
                                                        <thead>
                                                            <tr>
                                                                <th>Member Id</th>
                                                                <th>Membership</th>
                                                                <th>Issue Date</th>
                                                                <th>Valid Till</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>ISVIR-LM-1234</td>
                                                                <td>Membership</td>
                                                                <td>06-Aug-2019</td>
                                                                <td>Lifetime</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </Tab>
                                            </Tabs>
                                        </Card.Body>
                                    </Card>
                                </Tab>

                                <Tab eventKey="appointments" tabClassName="d-none">
                                    <Card className="profile-card shadow-sm mb-4">
                                        <Card.Body className="p-4">
                                            <Table striped bordered hover size="sm" responsive>
                                                <thead>
                                                    <tr>
                                                        <th>Appt ID</th>
                                                        <th>Patient Name</th>
                                                        <th>Procedure</th>
                                                        <th>Date & Time</th>
                                                        <th>Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>#APT-2023-006</td>
                                                        <td>Neha Desai</td>
                                                        <td>Consultation</td>
                                                        <td>30 Jan 2023, 10:00 AM</td>
                                                        <td><span className="status-confirmed">Confirmed</span></td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Card.Body>
                                    </Card>
                                </Tab>

                                <Tab eventKey="documents" tabClassName="d-none">
                                    <Card className="profile-card shadow-sm mb-4">
                                        <Card.Body className="p-4">
                                            <Table bordered striped size="sm" responsive>
                                                <thead>
                                                    <tr>
                                                        <th>Document Type</th>
                                                        <th>Document Name</th>
                                                        <th>Status</th>
                                                        <th>Uploaded Date</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>ID Proof</td>
                                                        <td>Aadhar Card</td>
                                                        <td>Verified</td>
                                                        <td>12-May-2023</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Medical License</td>
                                                        <td>License 2023</td>
                                                        <td>Pending</td>
                                                        <td>15-May-2023</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Card.Body>
                                    </Card>
                                </Tab>

                                <Tab eventKey="changepassword" tabClassName="d-none">
                                    <Card className="profile-card shadow-sm mb-4">
                                        <Card.Body className="p-4">
                                            <Form>
                                                <Form.Group controlId="currentPassword" className="mb-3">
                                                    <Form.Label>Current Password</Form.Label>
                                                    <Form.Control type="password" placeholder="Enter current password" />
                                                </Form.Group>
                                                <Form.Group controlId="newPassword" className="mb-3">
                                                    <Form.Label>New Password</Form.Label>
                                                    <Form.Control type="password" placeholder="Enter new password" />
                                                </Form.Group>
                                                <Form.Group controlId="confirmPassword" className="mb-3">
                                                    <Form.Label>Confirm New Password</Form.Label>
                                                    <Form.Control type="password" placeholder="Confirm new password" />
                                                </Form.Group>
                                                <button className="btn btn-primary" type="submit">Update Password</button>
                                            </Form>
                                        </Card.Body>
                                    </Card>
                                </Tab>
                            </Tabs>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    );
};

export default MyProfile;