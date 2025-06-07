import React, { useState } from 'react';
import { FaBook, FaCalendarAlt, FaUsers } from 'react-icons/fa';
import AnnualImage from '../../../assets/images/AnnualImage.png';
import Certificate from '../../../assets/images/Certificate.png';
import MasterclassImage from '../../../assets/images/MasterclassImage.png'
import { Container, Row, Col, Card, Table, Tabs, Tab, Accordion, CardTitle, CardBody, CardSubtitle, Breadcrumb, Dropdown, Form } from 'react-bootstrap';
import UserSidebar from '../../../components/layouts/userSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import BreadCrumb from '../../../components/layouts/BreadCrumb';
const Library = () => {
    const [activeKey, setActiveKey] = useState('masterclasses');
    const [activeYear, setActiveYear] = useState('2022');
    const filterCategories = [
        { id: "generalIR", name: "General IR" },
        { id: "gastrointestinalIR", name: "Gastrointestinal IR" },
        { id: "oncoIR", name: "Onco IR" },
        { id: "neuroIntervention", name: "Neuro Intervention" },
        { id: "aorticIR", name: "Aortic IR" },
        { id: "mskIR", name: "MSK IR" },
        { id: "peripheralArterial", name: "Peripheral Arterial" },
        { id: "interventions", name: "Interventions" },
    ];

    return (
        <>
            <BreadCrumb title={"Library"} />
            <div className="library-main py-5 bg-custom sectionPadding">
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
                        <div className="position-relative">
                            <Dropdown className="position-absolute top-10px end-0 m-2">
                                <Dropdown.Toggle variant="outline-secondary" id="filterBtn">
                                    <FontAwesomeIcon icon={faFilter} />
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='filterDropdown'>
                                    <h4>Filters</h4>
                                    <h6 className='px-3'>Select Category</h6>
                                    {filterCategories.map((item) => (
                                        <Dropdown.Item href="#/action-1">
                                            <div>
                                                <Form>
                                                    {['checkbox'].map((type) => (
                                                        <div key={item.id} className="">
                                                            <Form.Check // prettier-ignore
                                                                type={type}
                                                                id={item.id}
                                                                label={item.name}
                                                            />

                                                        </div>
                                                    ))}
                                                </Form>
                                            </div>
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                            <Tabs
                                activeKey={activeKey}
                                onSelect={(k) => setActiveKey(k)}
                                id="library-content-tabs"
                                className="mb-0 library-annual py-2 px-2 gap-2 fw-bold"
                            >

                                <Tab eventKey="masterclasses" title="Masterclasses">
                                    <Row className='mt-2'>
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

                                                    <Card.Text className="text-start content">
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
                                    <Accordion defaultActiveKey={activeYear} className='mt-2'>
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
                                    <Accordion defaultActiveKey={activeYear} className='mt-2'>
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
                        </div>
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