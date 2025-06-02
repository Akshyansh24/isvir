
import React, { useState } from 'react';
import { Container, Row, Col, Card, Table, Tabs, Tab, Form } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarAlt, FaIdCard, FaLock } from 'react-icons/fa';
import MemberImage from '../../../assets/images/MemberImage.jpg';
import AwardImage from '../../../assets/images/awardimg.png';
import phoneIcon from '../../../assets/images/icon/phone.svg';
import locationIcon from '../../../assets/images/icon/location.svg';
import mailIcon from '../../../assets/images/icon/mail.svg';
import cakeIcon from '../../../assets/images/icon/cake.svg';
import BreadCrumb from '../../../components/layouts/BreadCrumb';
import UserSidebar from '../../../components/layouts/userSidebar';

const MyProfile = () => {
    const [activeKey, setActiveKey] = useState('personal');

    return (
        <>
            <BreadCrumb title={"My Profile"} />

            <section className="profile-main py-5 sectionPadding bg-custom">
                <div>
                    <Row>

                        <Col lg={3} md={3} className="mb-4 p-3" style={{
                            border: '2px solid #03a9fa',
                            height: '370px',
                            width: '320px',
                            background: "white",
                            marginRight: '40px'
                        }}>
                            <UserSidebar />
                        </Col>

                        <Col lg={8} md={7}>
                            <Card className="award-card border-0 w-75"
                                style={{ borderRadius: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', }} >
                                <div className="award-content d-flex" >
                                    <div className="award-img-container"
                                        style={{
                                            borderTopLeftRadius: '15px', borderBottomLeftRadius: '15px', overflow: 'hidden',
                                        }} >
                                        <Card.Img
                                            variant="top"
                                            src={MemberImage}
                                            className="award-img h-100"
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div>

                                    <Card.Body className="award-text p-0 d-flex flex-column">
                                        <div className='p-3'>            <h5 className="fw-bold mb-1 text-start">Dr P Santhosh</h5>
                                            <p className=" mb-0 text-start fw-bold" style={{ whiteSpace: 'pre-line' }}>
                                                Executive Committee Member
                                            </p></div>
                                        <hr className="line my-2" style={{ borderTop: '1px solid #dc3545', width: '100%' }} />
                                        <div className='d-flex p-3' style={{ height: "100%" }}>
                                            <div className='w-75 position-relative'>
                                                <p className="mb-1 text-start d-flex align-items-center">
                                                    <i><img src={phoneIcon} alt="" srcset="" className='me-2' style={{ width: "20px" }} /></i>
                                                    <span
                                                        className="text-decoration-none"
                                                        style={{ color: 'black', fontWeight: "600" }}
                                                    >
                                                        9654466159
                                                    </span>
                                                </p>
                                                <p className="mb-1 text-start d-flex align-items-center">
                                                    <i><img src={mailIcon} alt="" srcset="" className='me-2' style={{ width: "20px" }} /></i>
                                                    <a
                                                        href={`mailto:santhoshpdr@gmail.com`}
                                                        className="text-decoration-none"
                                                        style={{ color: 'black', fontWeight: "600" }}
                                                    >
                                                        santhoshpdr@gmail.com
                                                    </a>
                                                </p>

                                                <p className="mb-1 text-start d-flex align-items-center">
                                                    <i><img src={cakeIcon} alt="" srcset="" className='me-2' style={{ width: "20px" }} /></i>
                                                    <span
                                                        className="text-decoration-none"
                                                        style={{ color: 'black', fontWeight: "600" }}
                                                    >
                                                        25-Aug-1982
                                                    </span>
                                                </p>
                                                <p className="mb-1 text-start d-flex align-items-center">
                                                    <i><img src={locationIcon} alt="" srcset="" className='me-2' style={{ width: "20px" }} /></i>
                                                    <span
                                                        className="text-decoration-none"
                                                        style={{ color: 'black', fontWeight: "600" }}
                                                    >
                                                        Delhi
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="w-25 d-flex align-items-center">
                                                <img
                                                    src={AwardImage}
                                                    alt="Award"
                                                    style={{ width: '70px', height: '70px' }}
                                                />
                                            </div>

                                        </div>
                                    </Card.Body>


                                </div>
                            </Card>

                            <Tabs defaultActiveKey="active" id="membership-tabs" className="bg-primary py-2 px-2 mt-4  membership mb-0 text-white rounded fw-bold gap-2">

                                <Tab eventKey="active" title="Active">
                                    <Table striped size="sm" className='memberShipTableUser profileTables' responsive>
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
                                    <Table striped size="sm" className='memberShipTableUser profileTables' responsive>

                                        <thead>
                                            <tr>
                                                <th >Membership</th>
                                                <th>Issue Date</th>
                                                <th>Valid Till</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Membership</td>
                                                <td>06-Aug-2019</td>
                                                <td>Lifetime</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Tab>
                                <Tab eventKey="associate" title="Associate">
                                    <Table bordered striped size="sm" className='memberShipTableUser profileTables' responsive>
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
                                    </Table>

                                    <Table bordered striped size="sm" className='memberShipTableUser profileTables' responsive>
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

                            <Tabs defaultActiveKey="active" id="membership-tabs" className="bg-primary py-2 px-2 mt-4  membership mb-0 text-white rounded fw-bold gap-2">

                                <Tab eventKey="active" title="Active">
                                    <Table bordered striped size="sm" className='memberShipTableUser profileTables text-left' responsive>
                                        <tbody>
                                            <tr>
                                                <td className='text-start px-4 fw-semibold'>Designation</td>
                                                <td className='text-start px-4'>Executive Committee Member</td>
                                            </tr>
                                            <tr>
                                                <td className='text-start px-4 fw-semibold'>Affilated Hospital</td>
                                                <td className='text-start px-4'>Sir Ganga Nagar Hospital</td>
                                            </tr>
                                            <tr>
                                                <td className='text-start px-4 fw-semibold'>Medical Registration No</td>
                                                <td className='text-start px-4'>DMC-36828</td>
                                            </tr>
                                            <tr>
                                                <td className='text-start px-4 fw-semibold'>Signature</td>
                                                <td className='text-start px-4'></td>
                                            </tr>
                                        </tbody>

                                        <thead>

                                        </thead>
                                    </Table>
                                </Tab>
                                <Tab eventKey="associate" title="Associate">
                                    <Table bordered striped size="sm" className='memberShipTableUser profileTables' responsive>
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
                        </Col>
                        {/* <Col lg={8} md={7}>
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
                        </Col> */}
                    </Row>
                </div>
            </section>
        </>
    );
};

export default MyProfile;