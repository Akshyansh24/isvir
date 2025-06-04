
import React, { useState } from 'react';
import { Container, Row, Col, Card, Table, Tabs, Tab, Accordion, CardTitle, CardBody, CardSubtitle } from 'react-bootstrap';
import { FaFileInvoice, FaCalendarAlt, FaMoneyBillWave } from 'react-icons/fa';

import Certificate from '../../../assets/images/Certificate.png';
import Banner from '../../../assets/images/bannerconference.png';
import BreadCrumb from '../../../components/layouts/BreadCrumb';
import UserSidebar from '../../../components/layouts/userSidebar';
const ConferenceandCertificates = () => {
    const [activeKey, setActiveKey] = useState('isvir2024');

    return (
        <>
            <BreadCrumb title={"Invoices"} />


            <div className="sectionPadding conference-main py-5">
                <Row>
                    <Col lg={3} md={3} className="mb-4 p-3" style={{
                        border: '2px solid #03a9fa',
                        height: '370px',
                        width: '320px',
                        marginRight: '40px'
                    }}>
                        <UserSidebar />
                    </Col>

                    <Col lg={8} md={7}>
                        <Tabs
                            activeKey={activeKey}
                            onSelect={(k) => setActiveKey(k)}
                            id="conference-content-tabs"
                            mountOnEnter
                            unmountOnExit
                            className="d-none"
                        >
                            <Tab eventKey="isvir2024" tabClassName="d-none">
                                <Accordion defaultActiveKey="0" style={{ width: '100%' }}>
                                    <Accordion.Item eventKey="0" style={{ backgroundColor: '#E3EFFD', marginBottom: '10px', }}>
                                        <Accordion.Header>
                                            <span style={{
                                                fontSize: '20px'
                                            }}>
                                                Midterm Complication Meet 2024
                                            </span>
                                        </Accordion.Header>

                                        <Accordion.Body style={{ padding: '0' }}>

                                            <Row>
                                                <Col md={6} className="mb-0">
                                                    <Card className="shadow-sm m-3" style={{ boxShadow: '0 4px 8px rgba(249, 118, 118, 0.15)', border: '1px solid #fff' }}>
                                                        <Card.Img variant="top" style={{ height: '240px' }} src={Banner} alt="Invoice 1" />
                                                        <div className='p-2'>  
                                                                 <CardTitle className="text-center fw-bold">ISVIR 2024 Aurangabad -Faculty</CardTitle>
                                                            <CardSubtitle className='text-center mb-3'>MIDTERM COMPLICATION MEET 2024</CardSubtitle>
                                                            <div className="">
                                                                <a
                                                                    href={Certificate}
                                                                    download
                                                                    className="btn btn-success btn-sm w-100 rounded-3"
                                                                >
                                                                    <i className="fas fa-download me-1"></i>
                                                                </a>
                                                            </div></div>
                                                    </Card>
                                                </Col>
                                                      <Col md={6} className="mb-0">
                                                    <Card className="shadow-sm m-3" style={{ boxShadow: '0 4px 8px rgba(249, 118, 118, 0.15)', border: '1px solid #fff' }}>
                                                        <Card.Img variant="top" style={{ height: '240px' }} src={Banner} alt="Invoice 1" />
                                                        <div className='p-2'>  
                                                                 <CardTitle className="text-center fw-bold">ISVIR 2024 Aurangabad -Faculty</CardTitle>
                                                            <CardSubtitle className='text-center mb-3'>MIDTERM COMPLICATION MEET 2024</CardSubtitle>
                                                            <div className="">
                                                                <a
                                                                    href={Certificate}
                                                                    download
                                                                    className="btn btn-success btn-sm w-100 rounded-3"
                                                                >
                                                                    <i className="fas fa-download me-1"></i>
                                                                </a>
                                                            </div></div>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item
                                        eventKey="1"
                                        style={{
                                            backgroundColor: '#E3EFFD',
                                            marginBottom: '10px',

                                        }}
                                    >

                                        <Accordion.Header>
                                            <span style={{
                                                fontSize: '20px'
                                            }}>
                                                ISVIR 2023
                                            </span>
                                        </Accordion.Header>

                                        <Accordion.Body style={{ padding: '0' }}>

                                            <Row>
                                                <Col md={6} className="mb-0">
                                                    <Card className="shadow-sm m-3" style={{ boxShadow: '0 4px 8px rgba(249, 118, 118, 0.15)', border: '1px solid #fff' }}>
                                                        <Card.Img variant="top" style={{ height: '240px' }} src={Banner} alt="Invoice 1" />
                                                        <div className='p-2'>  
                                                                 <CardTitle className="text-center fw-bold">ISVIR 2024 Aurangabad -Faculty</CardTitle>
                                                            <CardSubtitle className='text-center mb-3'>MIDTERM COMPLICATION MEET 2024</CardSubtitle>
                                                            <div className="">
                                                                <a
                                                                    href={Certificate}
                                                                    download
                                                                    className="btn btn-success btn-sm w-100 rounded-3"
                                                                >
                                                                    <i className="fas fa-download me-1"></i>
                                                                </a>
                                                            </div></div>
                                                    </Card>
                                                </Col>
                                                      <Col md={6} className="mb-0">
                                                    <Card className="shadow-sm m-3" style={{ boxShadow: '0 4px 8px rgba(249, 118, 118, 0.15)', border: '1px solid #fff' }}>
                                                        <Card.Img variant="top" style={{ height: '240px' }} src={Banner} alt="Invoice 1" />
                                                        <div className='p-2'>  
                                                                 <CardTitle className="text-center fw-bold">ISVIR 2024 Aurangabad -Faculty</CardTitle>
                                                            <CardSubtitle className='text-center mb-3'>MIDTERM COMPLICATION MEET 2024</CardSubtitle>
                                                            <div className="">
                                                                <a
                                                                    href={Certificate}
                                                                    download
                                                                    className="btn btn-success btn-sm w-100 rounded-3"
                                                                >
                                                                    <i className="fas fa-download me-1"></i>
                                                                </a>
                                                            </div></div>
                                                    </Card>
                                                </Col>
                                            </Row>

                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item
                                        eventKey="2"
                                        style={{
                                            backgroundColor: '#E3EFFD',
                                            marginBottom: '10px'
                                        }}
                                    >

                                        <Accordion.Header>
                                            <span style={{
                                                fontSize: '20px'
                                            }}>
                                                Active Membership Invoices
                                            </span>
                                        </Accordion.Header>

                                        <Accordion.Body style={{ padding: '0' }}>
                                             <Row>
                                                <Col md={6} className="mb-0">
                                                    <Card className="shadow-sm m-3" style={{ boxShadow: '0 4px 8px rgba(249, 118, 118, 0.15)', border: '1px solid #fff' }}>
                                                        <Card.Img variant="top" style={{ height: '240px' }} src={Banner} alt="Invoice 1" />
                                                        <div className='p-2'>  
                                                                 <CardTitle className="text-center fw-bold">ISVIR 2024 Aurangabad -Faculty</CardTitle>
                                                            <CardSubtitle className='text-center mb-3'>MIDTERM COMPLICATION MEET 2024</CardSubtitle>
                                                            <div className="">
                                                                <a
                                                                    href={Certificate}
                                                                    download
                                                                    className="btn btn-success btn-sm w-100 rounded-3"
                                                                >
                                                                    <i className="fas fa-download me-1"></i>
                                                                </a>
                                                            </div></div>
                                                    </Card>
                                                </Col>
                                                      <Col md={6} className="mb-0">
                                                    <Card className="shadow-sm m-3" style={{ boxShadow: '0 4px 8px rgba(249, 118, 118, 0.15)', border: '1px solid #fff' }}>
                                                        <Card.Img variant="top" style={{ height: '240px' }} src={Banner} alt="Invoice 1" />
                                                        <div className='p-2'>  
                                                                 <CardTitle className="text-center fw-bold">ISVIR 2024 Aurangabad -Faculty</CardTitle>
                                                            <CardSubtitle className='text-center mb-3'>MIDTERM COMPLICATION MEET 2024</CardSubtitle>
                                                            <div className="">
                                                                <a
                                                                    href={Certificate}
                                                                    download
                                                                    className="btn btn-success btn-sm w-100 rounded-3"
                                                                >
                                                                    <i className="fas fa-download me-1"></i>
                                                                </a>
                                                            </div></div>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </Accordion.Body>

                                    </Accordion.Item>

                                    <Accordion.Item
                                        eventKey="3"
                                        style={{
                                            backgroundColor: '#E3EFFD',
                                            marginBottom: '10px'
                                        }}
                                    >

                                        <Accordion.Header>
                                            <span style={{
                                                fontSize: '20px'
                                            }}>
                                                Associative Membership invoices
                                            </span>
                                        </Accordion.Header>

                                        <Accordion.Body style={{ padding: '0' }}>
                                               <Row>
                                                <Col md={6} className="mb-0">
                                                    <Card className="shadow-sm m-3" style={{ boxShadow: '0 4px 8px rgba(249, 118, 118, 0.15)', border: '1px solid #fff' }}>
                                                        <Card.Img variant="top" style={{ height: '240px' }} src={Banner} alt="Invoice 1" />
                                                        <div className='p-2'>  
                                                                 <CardTitle className="text-center fw-bold">ISVIR 2024 Aurangabad -Faculty</CardTitle>
                                                            <CardSubtitle className='text-center mb-3'>MIDTERM COMPLICATION MEET 2024</CardSubtitle>
                                                            <div className="">
                                                                <a
                                                                    href={Certificate}
                                                                    download
                                                                    className="btn btn-success btn-sm w-100 rounded-3"
                                                                >
                                                                    <i className="fas fa-download me-1"></i>
                                                                </a>
                                                            </div></div>
                                                    </Card>
                                                </Col>
                                                      <Col md={6} className="mb-0">
                                                    <Card className="shadow-sm m-3" style={{ boxShadow: '0 4px 8px rgba(249, 118, 118, 0.15)', border: '1px solid #fff' }}>
                                                        <Card.Img variant="top" style={{ height: '240px' }} src={Banner} alt="Invoice 1" />
                                                        <div className='p-2'>  
                                                                 <CardTitle className="text-center fw-bold">ISVIR 2024 Aurangabad -Faculty</CardTitle>
                                                            <CardSubtitle className='text-center mb-3'>MIDTERM COMPLICATION MEET 2024</CardSubtitle>
                                                            <div className="">
                                                                <a
                                                                    href={Certificate}
                                                                    download
                                                                    className="btn btn-success btn-sm w-100 rounded-3"
                                                                >
                                                                    <i className="fas fa-download me-1"></i>
                                                                </a>
                                                            </div></div>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item
                                        eventKey="4"
                                        style={{
                                            backgroundColor: '#E3EFFD',
                                            marginBottom: '10px',

                                        }}
                                    >
                                        <Accordion.Header>
                                            <span style={{
                                                fontSize: '20px'
                                            }}>
                                                Registration Invoices
                                            </span>
                                        </Accordion.Header>

                                        <Accordion.Body style={{ padding: '0' }}>
                                             <Row>
                                                <Col md={6} className="mb-0">
                                                    <Card className="shadow-sm m-3" style={{ boxShadow: '0 4px 8px rgba(249, 118, 118, 0.15)', border: '1px solid #fff' }}>
                                                        <Card.Img variant="top" style={{ height: '240px' }} src={Banner} alt="Invoice 1" />
                                                        <div className='p-2'>  
                                                                 <CardTitle className="text-center fw-bold">ISVIR 2024 Aurangabad -Faculty</CardTitle>
                                                            <CardSubtitle className='text-center mb-3'>MIDTERM COMPLICATION MEET 2024</CardSubtitle>
                                                            <div className="">
                                                                <a
                                                                    href={Certificate}
                                                                    download
                                                                    className="btn btn-success btn-sm w-100 rounded-3"
                                                                >
                                                                    <i className="fas fa-download me-1"></i>
                                                                </a>
                                                            </div></div>
                                                    </Card>
                                                </Col>
                                                      <Col md={6} className="mb-0">
                                                    <Card className="shadow-sm m-3" style={{ boxShadow: '0 4px 8px rgba(249, 118, 118, 0.15)', border: '1px solid #fff' }}>
                                                        <Card.Img variant="top" style={{ height: '240px' }} src={Banner} alt="Invoice 1" />
                                                        <div className='p-2'>  
                                                                 <CardTitle className="text-center fw-bold">ISVIR 2024 Aurangabad -Faculty</CardTitle>
                                                            <CardSubtitle className='text-center mb-3'>MIDTERM COMPLICATION MEET 2024</CardSubtitle>
                                                            <div className="">
                                                                <a
                                                                    href={Certificate}
                                                                    download
                                                                    className="btn btn-success btn-sm w-100 rounded-3"
                                                                >
                                                                    <i className="fas fa-download me-1"></i>
                                                                </a>
                                                            </div></div>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </Accordion.Body>
                                    </Accordion.Item>


                                    {/* <Accordion.Item
                                            eventKey="5"
                                            style={{
                                                backgroundColor: '#E3EFFD',
                                                marginBottom: '10px',

                                            }}
                                        >
                                            <Accordion.Header>
                                                <span style={{
                                                    fontSize: '20px'
                                                }}>
                                                    ISVIR 2024
                                                </span>
                                            </Accordion.Header>

                                            <Accordion.Body style={{ padding: '0' }}>
                                                <Row>
                                                    <Col md={6} className="mb-3">
                                                        <Card className="shadow-sm m-3">
                                                            <Card.Img variant="top" style={{ height: '240px' }} src={Certificate} alt="Invoice 1" />
                                                            <CardTitle className="text-center fw-bold">ISVIR 2024 Aurangabad -Faculty</CardTitle>
                                                            <CardSubtitle className='text-center mb-3'>MIDTERM COMPLICATION MEET 2024</CardSubtitle>
                                                            <div className="p-3 pt-0">
                                                                <a
                                                                    href={Certificate}
                                                                    download
                                                                    className="btn btn-success btn-sm w-100 rounded-3"
                                                                >
                                                                    <i className="fas fa-download me-1"></i>
                                                                </a>
                                                            </div>
                                                        </Card>
                                                    </Col>
                                                    <Col md={6} className="mb-3">
                                                        <Card className="shadow-sm m-3">
                                                            <Card.Img variant="top" style={{ height: '240px' }} src={Certificate} alt="Invoice 1" />
                                                            <CardTitle className="text-center fw-bold">ISVIR 2024 Aurangabad -Faculty</CardTitle>
                                                            <CardSubtitle className='text-center mb-3'>MIDTERM COMPLICATION MEET 2024</CardSubtitle>


                                                            <div className="p-3 pt-0">
                                                                <a
                                                                    href={Certificate}
                                                                    download
                                                                    className="btn btn-success btn-sm w-100 rounded-3"
                                                                >
                                                                    <i className="fas fa-download me-1"></i>
                                                                </a>
                                                            </div>
                                                        </Card>
                                                    </Col>
                                                </Row>
                                            </Accordion.Body>
                                        </Accordion.Item> */}
                                </Accordion>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </div>


        </>
    );
};

export default ConferenceandCertificates;