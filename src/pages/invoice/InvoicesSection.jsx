
import React, { useState } from 'react';
import { Container, Row, Col, Card, Table, Tabs, Tab, Accordion } from 'react-bootstrap';
import { FaFileInvoice, FaCalendarAlt, FaMoneyBillWave } from 'react-icons/fa';
import BackgroundImage from '../../assets/images/BackgroundImage.png';
import Sidebar from '../../components/layouts/Sidebar';

const InvoicesSection = () => {
    const [activeKey, setActiveKey] = useState('isvir2024');

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
                        <h1 className="junior-header-title mb-2">Invoices</h1>
                        <p className="junior-header-subtitle mb-0">Home - Invoices</p>
                    </div>
                </Container>
            </div>




            <div className="sectionPadding invoice-main py-5">
                <Row>
                    <Col lg={4} md={5} className="mb-4 p-3" style={{
                        border: '2px solid #03a9fa',
                        height: '370px',
                        width: '320px',
                        marginRight: '40px'
                    }}>
                        <Sidebar />
                    </Col>

                    <Col lg={8} md={7}>
                        <Tabs
                            activeKey={activeKey}
                            onSelect={(k) => setActiveKey(k)}
                            id="invoice-content-tabs"
                            mountOnEnter
                            unmountOnExit
                            className="d-none"
                        >
                            <Tab eventKey="isvir2024" tabClassName="d-none">
                                <Accordion defaultActiveKey="0" style={{ width: '100%' }}>
                                    <Accordion.Item
                                        eventKey="0"
                                        className='accordian-button'
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
                                            <Table bordered responsive style={{
                                                width: '100%',
                                                margin: '0',
                                                borderColor: '#03A9F4'
                                            }}>
                                                <thead>
                                                    <tr>
                                                        <th style={{ backgroundColor: '#0E8BDF', color: 'black' }}>#</th>
                                                        <th style={{ backgroundColor: '#0E8BDF', color: 'black' }}>Event</th>
                                                        <th style={{ backgroundColor: '#0E8BDF', color: 'black' }}>Total Amount</th>
                                                        <th style={{ backgroundColor: '#0E8BDF', color: 'black' }}>View</th>
                                                    </tr>
                                                </thead>
                                                <tbody style={{ backgroundColor: 'white', color: 'black', border: 'transparent' }}>
                                                    <tr>
                                                        <td>01</td>
                                                        <td>ISVIR 2024</td>
                                                        <td>15340</td>
                                                        <td>Invoice</td>
                                                    </tr>

                                                </tbody>
                                            </Table>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item
                                        eventKey="1"
                                        className='accordian-button'
                                        style={{
                                            backgroundColor: '#E3EFFD',
                                            marginBottom: '10px',

                                        }}
                                    >

                                        <Accordion.Header>
                                            <span style={{
                                                fontSize: '20px'
                                            }}>
                                                ISVIR Mid Term CME 2023
                                            </span>
                                        </Accordion.Header>

                                        <Accordion.Body style={{ padding: '0' }}>
                                            <Table bordered responsive style={{
                                                width: '100%',
                                                margin: '0',
                                                borderColor: '#03A9F4'
                                            }}>
                                                <thead>
                                                    <tr>
                                                        <th style={{ backgroundColor: '#0E8BDF', color: 'black' }}>#</th>
                                                        <th style={{ backgroundColor: '#0E8BDF', color: 'black' }}>Event</th>
                                                        <th style={{ backgroundColor: '#0E8BDF', color: 'black' }}>Total Amount</th>
                                                        <th style={{ backgroundColor: '#0E8BDF', color: 'black' }}>View</th>
                                                    </tr>
                                                </thead>
                                                <tbody style={{ backgroundColor: 'white', color: 'black', border: 'transparent' }}>
                                                    <tr>
                                                        <td>01</td>
                                                        <td>ISVIR 2024</td>
                                                        <td>15340</td>
                                                        <td>Invoice</td>
                                                    </tr>

                                                </tbody>
                                            </Table>
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
                                                ISVIR 2023
                                            </span>
                                        </Accordion.Header>

                                        <Accordion.Body style={{ padding: '0' }}>
                                            <Table bordered responsive style={{
                                                width: '100%',
                                                margin: '0',
                                                borderColor: '#03A9F4'
                                            }}>
                                                <thead>
                                                    <tr>
                                                        <th style={{ backgroundColor: '#0E8BDF', color: 'black' }}>#</th>
                                                        <th style={{ backgroundColor: '#0E8BDF', color: 'black' }}>Event</th>
                                                        <th style={{ backgroundColor: '#0E8BDF', color: 'black' }}>Total Amount</th>
                                                        <th style={{ backgroundColor: '#0E8BDF', color: 'black' }}>View</th>
                                                    </tr>
                                                </thead>
                                                <tbody style={{ backgroundColor: 'white', color: 'black', border: 'transparent' }}>
                                                    <tr>
                                                        <td>01</td>
                                                        <td>ISVIR 2024</td>
                                                        <td>15340</td>
                                                        <td>Invoice</td>
                                                    </tr>

                                                </tbody>
                                            </Table>
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
                                                Active Membership Invoices
                                            </span>
                                        </Accordion.Header>

                                        <Accordion.Body style={{ padding: '0' }}>
                                            <Table bordered responsive style={{
                                                width: '100%',
                                                margin: '0',
                                                borderColor: '#03A9F4'
                                            }}>
                                                <thead>
                                                    <tr>
                                                        <th style={{ backgroundColor: '#0E8BDF', color: 'black' }}>#</th>
                                                        <th style={{ backgroundColor: '#0E8BDF', color: 'black' }}>Event</th>
                                                        <th style={{ backgroundColor: '#0E8BDF', color: 'black' }}>Total Amount</th>
                                                        <th style={{ backgroundColor: '#0E8BDF', color: 'black' }}>View</th>
                                                    </tr>
                                                </thead>
                                                <tbody style={{ backgroundColor: 'white', color: 'black', border: 'transparent' }}>
                                                    <tr>
                                                        <td>01</td>
                                                        <td>ISVIR 2024</td>
                                                        <td>15340</td>
                                                        <td>Invoice</td>
                                                    </tr>

                                                </tbody>
                                            </Table>
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
                                                Associative Membership invoices
                                            </span>
                                        </Accordion.Header>

                                        <Accordion.Body style={{ padding: '0' }}>
                                            <Table bordered responsive style={{
                                                width: '100%',
                                                margin: '0',
                                                borderColor: '#03A9F4'
                                            }}>
                                                <thead>
                                                    <tr>
                                                        <th style={{ backgroundColor: '#0E8BDF', color: 'black' }}>#</th>
                                                        <th style={{ backgroundColor: '#0E8BDF', color: 'black' }}>Event</th>
                                                        <th style={{ backgroundColor: '#0E8BDF', color: 'black' }}>Total Amount</th>
                                                        <th style={{ backgroundColor: '#0E8BDF', color: 'black' }}>View</th>
                                                    </tr>
                                                </thead>
                                                <tbody style={{ backgroundColor: 'white', color: 'black', border: 'transparent' }}>
                                                    <tr>
                                                        <td>01</td>
                                                        <td>ISVIR 2024</td>
                                                        <td>15340</td>
                                                        <td>Invoice</td>
                                                    </tr>

                                                </tbody>
                                            </Table>
                                        </Accordion.Body>
                                    </Accordion.Item>


                                    <Accordion.Item
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
                                                Registration Invoices
                                            </span>
                                        </Accordion.Header>

                                        <Accordion.Body style={{ padding: '0' }}>
                                            <Table bordered responsive style={{
                                                width: '100%',
                                                margin: '0',
                                                borderColor: '#03A9F4'
                                            }}>
                                                <thead>
                                                    <tr>
                                                        <th style={{ backgroundColor: '#0E8BDF', color: 'black' }}>#</th>
                                                        <th style={{ backgroundColor: '#0E8BDF', color: 'black' }}>Event</th>
                                                        <th style={{ backgroundColor: '#0E8BDF', color: 'black' }}>Total Amount</th>
                                                        <th style={{ backgroundColor: '#0E8BDF', color: 'black' }}>View</th>
                                                    </tr>
                                                </thead>
                                                <tbody style={{ backgroundColor: 'white', color: 'black', border: 'transparent' }}>
                                                    <tr>
                                                        <td>01</td>
                                                        <td>ISVIR 2024</td>
                                                        <td>15340</td>
                                                        <td>Invoice</td>
                                                    </tr>

                                                </tbody>
                                            </Table>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </div>

        </>
    );
};

export default InvoicesSection;