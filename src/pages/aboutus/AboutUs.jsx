
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaBullseye, FaEye, FaStar } from 'react-icons/fa';
import BackgroundImage from '../../assets/images/BackgroundImage.png';
const AboutUs = () => {
    return (
        <>
            <div
                className="junior-header py-5"
                style={{ backgroundImage: `url(${BackgroundImage})` }}
            >
                <Container style={{ maxWidth: '1200px' }}>
                    <div className="text-left">
                        <h1 className="junior-header-title mb-2">
                            Our History
                        </h1>
                        <p className="junior-header-subtitle mb-0">
                            Home - About
                        </p>
                    </div>
                </Container>
            </div>
            <Container fluid className="about-main py-5">
                <Container>
                    <Row>
                        <Col>
                            <Card className="about-card shadow-sm p-4 mb-4">
                                <h4 className="mb-3 fw-bold text-center">About Us</h4>
                                <div className="black-bar mx-auto mb-3"></div>
                                <p>
                                    The practice of Cardiovascular and Interventional Radiology (CVIR) in India began in the early 1970s at a few isolated centres of excellence providing tertiary care. Non-availability of hardware and trained personnel, lack of familiarity with techniques and international facilities were major obstacles to its growth in those early years.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                                </p>

                            </Card>
                        </Col>
                    </Row>

                    <Row className="g-4">
                        <Col md={4}>
                            <Card className="h-100 about-info-card shadow-sm p-4 ml-2 ms-4">
                                <div className="text-center">
                                    <FaBullseye size={40} className="text-danger mb-3" />
                                    <div className="blue-bar mx-auto mb-3"></div>
                                    <h5 className="fw-bold mb-3 text-black">Our Mission</h5>
                                    <p>ISVIR is a non-profit making society of interventional radiologists. It has been located in remote a platform for education and training for its members. It also provides opportunities for enduring private and international reporting offered practice, patient care and future of endovascular and international radiology.</p>
                                </div>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="h-100 about-info-card shadow-sm p-4">
                                <div className="text-center">
                                    <FaEye size={40} className="text-danger mb-3" />
                                    <div className="blue-bar mx-auto mb-3"></div>
                                    <h5 className="fw-bold mb-3 text-black">Our Vision</h5>
                                    <p>Our vision is to assess the content care of our patients and provide the best practices in the field of interventional radiology with the use of best treatment and enhancing satisfaction needs of the patients. Also to develop training opportunities for the residents and building international radiologists.</p>
                                </div>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="h-100 about-info-card shadow-sm p-4 mr-2 me-4">
                                <div className="text-center">
                                    <FaStar size={40} className="text-danger mb-3" />
                                    <div className="blue-bar mx-auto mb-3 text-black"></div>
                                    <h5 className="fw-bold mb-3 text-black">Our Values</h5>
                                    <p>We strive for excellence in patient care, research, education, and the advancement of our field. Through modern health learning calculations, and the application of cutting-edge technologies, we aim to provide the highest quality of care to those who contact their well-being in us.</p>
                                </div>
                            </Card>
                        </Col>
                    </Row>



                    <Row className="bg-white py-4 mx-0 my-4 rounded">
                        <Col md={4} className="text-center">
                            <div className="p-3">
                                <FaBullseye size={40} className="text-danger mb-3" />

                                <p className="text-muted mb-0">Years of Experience</p>
                                <h2 className="text-black mb-1">25+</h2>
                            </div>
                        </Col>
                        <Col md={4} className="text-center">
                            <div className="p-3">
                                <FaBullseye size={40} className="text-danger mb-3" />
                                <p className="text-muted mb-0">Members</p>
                                <h2 className="text-black mb-1">1300+</h2>
                            </div>
                        </Col>
                        <Col md={4} className="text-center">
                            <div className="p-3">
                                <FaBullseye size={40} className="text-danger mb-3" />
                                <p className="text-muted mb-0">National Meetings</p>
                                <h2 className="text-black mb-1">120+</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
};

export default AboutUs;