import React, { useState } from 'react';
import { FaBook, FaCalendarAlt, FaUsers } from 'react-icons/fa';
import BackgroundImage from '../../assets/images/BackgroundImage.png';
import Sidebar from '../../components/layouts/Sidebar';
import AnnualImage from '../../assets/images/AnnualImage.png';
import Certificate from '../../assets/images/Certificate.png';
import MasterclassImage from '../../assets/images/MasterclassImage.png'
import { Container, Row, Col, Card, Table, Tabs, Tab, Accordion, CardTitle, CardBody, CardSubtitle } from 'react-bootstrap';
const Library = () => {
    const [activeKey, setActiveKey] = useState('masterclasses');
    const [activeYear, setActiveYear] = useState('2022');

    return (
        <>
            <div
                className="junior-header py-5"
                style={{
                    backgroundImage: `url(${BackgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <Container style={{ maxWidth: '1200px' }}>
                    <div className="text-left text-white">
                        <h1 className="junior-header-title mb-2">Library</h1>
                        <p className="junior-header-subtitle mb-0">Home - Library</p>
                    </div>
                </Container>
            </div>


            <div className="library-main py-5 bg-custom sectionPadding">
                <Row>
                    <Col lg={4} md={5} className="mb-4 p-3" style={{
                        border: '2px solid #03a9fa',
                        height: '370px',
                        width: '320px',
                        marginRight: '40px',


                    }}>
                        <Sidebar />
                    </Col>

                    <Col lg={8} md={7}>
                        <Tabs
                            activeKey={activeKey}
                            onSelect={(k) => setActiveKey(k)}
                            id="library-content-tabs"
                            className="mb-0 library-annual gap-2 fw-bold"
                        >
                            <Tab eventKey="masterclasses" title="Masterclasses">


                                <Row>
                                    {/* <Col md={4}>
                                            <Card className="mb-4 masterclass">
                                                <Card.Body>
                                                    <Card.Img variant="top" src={MasterclassImage} alt="Image 1" style={{ height: '300px' }} />
                                                    <Card.Title>ISVIR GFA2_22</Card.Title>
                                                    <Card.Text>

                                                        <div>PORTAL HYPERTENSION</div>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col> */}



                                    <Col md={4}>
                                        <Card className="mb-4 masterclass" style={{ boxShadow: '0 4px 8px rgba(249, 118, 118, 0.15)', border: '1px solid #fff' }}>
                                            <Card.Body className="p-3">
                                                <Card.Img variant="top" src={MasterclassImage} alt="Image 1" style={{ height: '300px', objectFit: 'cover' }} />

                                                <Card.Text className="text-start">
                                                    CT GUIDED LUMBAR SYMPATHOLYSIS, USG GUIDED STELLATE GANGLION BLOCK AND COELIAC PLEXUS BLOCK
                                                </Card.Text>
                                                <Card.Text className="masterclassname text-start fw-bold">
                                                    DR. PRASHANT SARDA
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col md={4}>
                                        <Card className="mb-4 masterclass" style={{ boxShadow: '0 4px 8px rgba(249, 118, 118, 0.15)', border: '1px solid #fff' }}>
                                            <Card.Body className="p-3">
                                                <Card.Img variant="top" src={MasterclassImage} alt="Image 1" style={{ height: '300px', objectFit: 'cover' }} />

                                                <Card.Text className="text-start">
                                                    CT GUIDED LUMBAR SYMPATHOLYSIS, USG GUIDED STELLATE GANGLION BLOCK AND COELIAC PLEXUS BLOCK
                                                </Card.Text>
                                                <Card.Text className="masterclassname text-start fw-bold">
                                                    DR. PRASHANT SARDA
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>


                                    <Col md={4}>
                                        <Card className="mb-4 masterclass" style={{ boxShadow: '0 4px 8px rgba(249, 118, 118, 0.15)', border: '1px solid #fff' }}>
                                            <Card.Body className="p-3">
                                                <Card.Img variant="top" src={MasterclassImage} alt="Image 1" style={{ height: '300px', objectFit: 'cover' }} />

                                                <Card.Text className="text-start">
                                                    CT GUIDED LUMBAR SYMPATHOLYSIS, USG GUIDED STELLATE GANGLION BLOCK AND COELIAC PLEXUS BLOCK
                                                </Card.Text>
                                                <Card.Text className="masterclassname text-start fw-bold">
                                                    DR. PRASHANT SARDA
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>

                                <div className="libraryloadbtn d-flex justify-content-center mt-4">
                                    <button className="loadmore">
                                        Load More...
                                    </button>
                                </div>



                            </Tab>

                            <Tab eventKey="annual-conference" title="Annual Conference">
                                <Accordion defaultActiveKey={activeYear}>
                                    <AccordionYearItem year="2022" activeYear={activeYear} setActiveYear={setActiveYear}>
                                        <Row>
                                            <Col md={4}>
                                                <Card className="mb-4">
                                                    <Card.Img variant="top" src={AnnualImage} alt="Image 1" />

                                                </Card>
                                            </Col>
                                            <Col md={4}>
                                                <Card className="mb-4">
                                                    <Card.Img variant="top" src={AnnualImage} alt="Image 1" />

                                                </Card>
                                            </Col>
                                            <Col md={4}>
                                                <Card className="mb-4">
                                                    <Card.Img variant="top" src={AnnualImage} alt="Image 1" />

                                                </Card>
                                            </Col>
                                        </Row>
                                    </AccordionYearItem>

                                    <AccordionYearItem year="2023" activeYear={activeYear} setActiveYear={setActiveYear}>


                                        <Row>
                                            <Col md={4}>
                                                <Card className="mb-4">
                                                    <Card.Img variant="top" src={AnnualImage} alt="Image 1" />

                                                </Card>
                                            </Col>
                                            <Col md={4}>
                                                <Card className="mb-4">
                                                    <Card.Img variant="top" src={AnnualImage} alt="Image 1" />

                                                </Card>
                                            </Col>
                                            <Col md={4}>
                                                <Card className="mb-4">
                                                    <Card.Img variant="top" src={AnnualImage} alt="Image 1" />

                                                </Card>
                                            </Col>
                                        </Row>


                                    </AccordionYearItem>

                                    <AccordionYearItem year="2024" activeYear={activeYear} setActiveYear={setActiveYear}>
                                        <Row>
                                            <Col md={4}>
                                                <Card className="mb-4">
                                                    <Card.Img variant="top" src={AnnualImage} alt="Image 1" />

                                                </Card>
                                            </Col>
                                            <Col md={4}>
                                                <Card className="mb-4">
                                                    <Card.Img variant="top" src={AnnualImage} alt="Image 1" />

                                                </Card>
                                            </Col>
                                            <Col md={4}>
                                                <Card className="mb-4">
                                                    <Card.Img variant="top" src={AnnualImage} alt="Image 1" />

                                                </Card>
                                            </Col>
                                        </Row>
                                    </AccordionYearItem>

                                    <AccordionYearItem year="2025" activeYear={activeYear} setActiveYear={setActiveYear}>
                                        <Row>
                                            <Col md={4}>
                                                <Card className="mb-4">
                                                    <Card.Img variant="top" src={AnnualImage} alt="Image 1" />

                                                </Card>
                                            </Col>
                                            <Col md={4}>
                                                <Card className="mb-4">
                                                    <Card.Img variant="top" src={AnnualImage} alt="Image 1" />

                                                </Card>
                                            </Col>
                                            <Col md={4}>
                                                <Card className="mb-4">
                                                    <Card.Img variant="top" src={AnnualImage} alt="Image 1" />

                                                </Card>
                                            </Col>
                                        </Row>
                                    </AccordionYearItem>
                                </Accordion>
                            </Tab>

                            <Tab eventKey="mid-term-meet" title="Mid Term Meet">
                                <Accordion defaultActiveKey={activeYear}>
                                    <AccordionYearItem year="2022" activeYear={activeYear} setActiveYear={setActiveYear}>
                                        <Row>
                                            <Col md={4}>
                                                <Card className="mb-4">
                                                    <Card.Body>
                                                        <Card.Title>ISYIR GFA2_22</Card.Title>
                                                        <Card.Text>
                                                            <div>DAY - 3</div>
                                                            <div>MAIL - PARALLEL SESSION - 3</div>
                                                            <div>THROMBECTONY DEVICES IN PERIPHERAL VESSELS</div>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </AccordionYearItem>


                                </Accordion>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </div>

        </>
    );
};


const AccordionYearItem = ({ year, activeYear, setActiveYear, children }) => {
    return (
        <Accordion.Item
            eventKey={year}
            className='accordian-button'
            style={{
                // backgroundColor: '#E3EFFD',
                marginBottom: '10px',
            }}
        >
            <Accordion.Header onClick={() => setActiveYear(year)}>
                <span style={{ fontSize: '20px' }}>
                    {year}
                </span>
            </Accordion.Header>
            <Accordion.Body>
                {children}
            </Accordion.Body>
        </Accordion.Item>
    );
};

export default Library;