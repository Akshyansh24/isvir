
import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import BackgroundImage from '../../assets/images/BackgroundImage.png';
import BreadCrumb from '../../components/layouts/BreadCrumb';
function ContactUs() {
    return (

        <>
            <BreadCrumb title={"Contact Us"} />


            <div style={{ backgroundColor: 'rgba(95, 32, 237, 0.05)' }}>
                <Container fluid className="py-5">
                    <div>
                        <h3 className="text-start fw-bold mb-1">Get in touch with us</h3>
                        <p className="contactindian text-start fw-bold" style={{ maxWidth: "846px" }}>
                            The Indian Society of Vascular & Interventional Radiology (ISVIR) serves as a platform for sharing knowledge on catheter-based radiological procedures and was formed in Trivandrum in 1997.
                        </p>

                        <Row className="mt-2 align-items-stretch">
                            <Col md={6} className="d-flex contactsection" style={{ maxHeight: "450px" }}>
                                <iframe
                                    title="map"
                                    src="https://maps.google.com/maps?q=london&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{
                                        border: "0",
                                        borderRadius: "8px",
                                        flexGrow: 1
                                    }}
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                            </Col>

                            <Col md={6} className="d-flex contactsection" style={{ maxHeight: "450px" }}>
                                <Card className="shadow-sm p-4 w-100" style={{ border: 'none' }}>
                                    <h5 className="mb-1 fw-bold">Get in touch</h5>
                                    <p>We are here for you! How can we help?</p>
                                    <Form>
                                        <Form.Group className="mb-0" controlId="formName">
                                            <Form.Label className="fw-bold">Name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter your name" />
                                        </Form.Group>

                                        <Form.Group className="mb-0 mt-2" controlId="formEmail">
                                            <Form.Label className="fw-bold">Email</Form.Label>
                                            <Form.Control type="email" placeholder="Enter your email" />
                                        </Form.Group>

                                        <Form.Group className="mb-0 mt-2" controlId="formPhone">
                                            <Form.Label className="fw-bold">Phone</Form.Label>
                                            <Form.Control type="text" placeholder="Enter your phone number" />
                                        </Form.Group>

                                        <Form.Group className="mb-0 mt-2" controlId="formMessage">
                                            <Form.Label className="fw-bold">Message</Form.Label>
                                            <Form.Control as="textarea" rows={2} placeholder="Type your message" />
                                        </Form.Group>

                                        <Button
                                            type="submit"
                                            className="w-100 mt-3 customcontactbtn"
                                            style={{
                                                background: 'linear-gradient(to right, #1da1f2, #0e76ec)',
                                                borderRadius: '25px',
                                                padding: '10px 0',
                                                fontWeight: 'bold',
                                                border: '1px solid #0e76ec'
                                            }}
                                        >
                                            Submit
                                        </Button>
                                    </Form>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>

            {/* 
            <Container fluid className="contact-main py-2">
                <Container>
                    <Row className="mt-5 text-start">
                        <Col md={4} className="mb-4">
                            <Card className="p-3 contactbottomcards" style={{ maxWidth: "846px", minHeight: "280px" }}>
                                <h6>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-danger me-2 mt-3" />
                                    Address:
                                </h6>
                                <p className="contactbottomaddress">3, 302, DDA Building, V-3S Mall Laxmi Nagar, East Delhi - 110092</p>

                                <h6>
                                    <FontAwesomeIcon icon={faPhone} className="text-danger me-2" />
                                    Office Executive
                                </h6>
                                <p>
                                    Gaurav Kumar<br />
                                    <a href="tel:+919319159560">+91 93191 59560</a><br />
                                    <a href="mailto:officeexecutive@isvirindia.org">officeexecutive@isvirindia.org</a>
                                </p>
                            </Card>
                        </Col>

                        <Col md={8} className="mb-2">
                            <Card className="p-3 contactbottomcards" style={{ maxWidth: "846px", minHeight: "280px" }}>
                                <Row>
                                    <Col md={4} className="mb-3 mt-3">
                                        <h6>
                                            <FontAwesomeIcon icon={faPhone} className="text-danger me-2" />
                                            Express Helpline
                                        </h6>
                                        <p>
                                            <a href="tel:+919319133560">+91 93191 33560</a><br />
                                            <a href="mailto:info.isvir@gmail.com">info.isvir@gmail.com</a>
                                        </p>

                                        <h6>
                                            <FontAwesomeIcon icon={faPhone} className="text-danger me-2" />
                                            ISVIR Secretary
                                        </h6>
                                        <p>
                                            <a href="mailto:secretaryisvir@gmail.com">secretaryisvir@gmail.com</a>
                                        </p>
                                    </Col>

                                    <Col md={4} className="mb-3 mt-3">
                                        <h6>
                                            <FontAwesomeIcon icon={faPhone} className="text-danger me-2" />
                                            Co-ordinator
                                        </h6>
                                        <p>
                                            <span className="contact-name-bold">Pankaj</span><br />
                                            <a href="tel:+919958474870">+91 99584 74870</a>
                                        </p>
                                        <h6>
                                            <FontAwesomeIcon icon={faPhone} className="text-danger me-2" />
                                            IT Manager
                                        </h6>
                                        <p>
                                            <span className="contact-name-bold"> Padam Yadav</span><br />
                                            <a href="tel:+919319133556">+91 93191 33556</a><br />
                                            <a href="mailto:technical-support@isvirindia.org">technical-support@isvirindia.org</a>
                                        </p>
                                    </Col>

                                    <Col md={4} className="mb-3 mt-3">
                                        <h6>
                                            <FontAwesomeIcon icon={faPhone} className="text-danger me-2" />
                                            Official Travel Agent
                                        </h6>
                                        <p>
                                            <span className="contact-name-bold">Dushyant Singh</span><br />
                                            <a href="tel:+919953146444">+91 99531 46444</a><br />
                                            <a href="mailto:packnbags21@gmail.com">packnbags21@gmail.com</a>
                                        </p>

                                        <h6>
                                            <FontAwesomeIcon icon={faPhone} className="text-danger me-2" />
                                            Express Helpline
                                        </h6>
                                        <p>
                                            <a href="tel:+919953146444">+91 9319193560</a><br />
                                            <a href="mailto:packnbags21@gmail.com">packnbags21@gmail.com</a>
                                        </p>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container> */}




            <Row className="mt-5 text-start px-4 overflow-hidden">
                <Col md={4} className="mb-4">
                    <Card className="p-3 contactbottomcards" style={{ minHeight: "280px" }}>
                        <div className="d-flex align-items-start mb-2">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-danger me-2 mt-1 contacticon" />
                            <div>
                                <h6 className="fw-bold mb-1">Address:</h6>
                                <p className="contactbottomaddress mb-0">
                                    3, 302, DDA Building, V-3S Mall Laxmi Nagar, East Delhi - 110092
                                </p>
                            </div>
                        </div>

                        <div className="d-flex align-items-start">
                            <FontAwesomeIcon icon={faPhone} className="text-danger me-2 mt-1 contacticon" />
                            <div>
                                <h6 className="fw-bold mb-1">Office Executive</h6>
                                <p className="mb-0">
                                    Gaurav Kumar<br />
                                    <a href="tel:+919319159560">+91 93191 59560</a><br />
                                    <a href="mailto:officeexecutive@isvirindia.org">officeexecutive@isvirindia.org</a>
                                </p>
                            </div>
                        </div>
                    </Card>
                </Col>

                <Col md={8} className="mb-2">
                    <Card className="p-3 contactbottomcards" style={{ minHeight: "280px" }}>
                        <Row>
                            <Col md={4} className="mb-3">
                                <div className="d-flex align-items-start mb-2">
                                    <FontAwesomeIcon icon={faPhone} className="text-danger me-2 mt-1 contacticon" />
                                    <div>
                                        <h6 className="fw-bold mb-1">Express Helpline</h6>
                                        <p className="mb-0">
                                            <a href="tel:+919319133560">+91 93191 33560</a><br />
                                            <a href="mailto:info.isvir@gmail.com">info.isvir@gmail.com</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="d-flex align-items-start">
                                    <FontAwesomeIcon icon={faPhone} className="text-danger me-2 mt-1 contacticon" />
                                    <div>
                                        <h6 className="fw-bold mb-1">ISVIR Secretary</h6>
                                        <p className="mb-0">
                                            <a href="mailto:secretaryisvir@gmail.com">secretaryisvir@gmail.com</a>
                                        </p>
                                    </div>
                                </div>
                            </Col>

                            <Col md={4} className="mb-3">
                                <div className="d-flex align-items-start mb-2">
                                    <FontAwesomeIcon icon={faPhone} className="text-danger me-2 mt-1 contacticon" />
                                    <div>
                                        <h6 className="fw-bold mb-1">Co-ordinator</h6>
                                        <p className="mb-0">
                                            <span className="contact-name-bold">Pankaj</span><br />
                                            <a href="tel:+919958474870">+91 99584 74870</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="d-flex align-items-start">
                                    <FontAwesomeIcon icon={faPhone} className="text-danger me-2 mt-1 contacticon" />
                                    <div>
                                        <h6 className="fw-bold mb-1">IT Manager</h6>
                                        <p className="mb-0">
                                            <span className="contact-name-bold">Padam Yadav</span><br />
                                            <a href="tel:+919319133556">+91 93191 33556</a><br />
                                            <a href="mailto:technical-support@isvirindia.org">technical-support@isvirindia.org</a>
                                        </p>
                                    </div>
                                </div>
                            </Col>

                            <Col md={4} className="mb-3">
                                <div className="d-flex align-items-start mb-2">
                                    <FontAwesomeIcon icon={faPhone} className="text-danger me-2 mt-1 contacticon" />
                                    <div>
                                        <h6 className="fw-bold mb-1">Official Travel Agent</h6>
                                        <p className="mb-0">
                                            <span className="contact-name-bold">Dushyant Singh</span><br />
                                            <a href="tel:+919953146444">+91 99531 46444</a><br />
                                            <a href="mailto:packnbags21@gmail.com">packnbags21@gmail.com</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="d-flex align-items-start">
                                    <FontAwesomeIcon icon={faPhone} className="text-danger me-2 mt-1 contacticon" />
                                    <div>
                                        <h6 className="fw-bold mb-1">Express Helpline</h6>
                                        <p className="mb-0">
                                            <a href="tel:+91953146444">+91 9319193560</a><br />
                                            <a href="mailto:packnbags21@gmail.com">packnbags21@gmail.com</a>
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>

        </>

    )
}

export default ContactUs
