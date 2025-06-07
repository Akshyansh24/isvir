import React, { useState } from 'react';
import { Container, Row, Col, Card, Table, Tabs, Tab, Accordion } from 'react-bootstrap';
import { FaFileInvoice, FaCalendarAlt, FaMoneyBillWave } from 'react-icons/fa';
import BreadCrumb from '../../../components/layouts/BreadCrumb';
import UserSidebar from '../../../components/layouts/userSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
function Invoices() {
    const [activeKey, setActiveKey] = useState('isvir2024');
    return (
        <>
            <BreadCrumb title={"Invoices"} />
            <div className="sectionPadding invoice-main py-5">
                <Row className='justify-content-between'>
                    <Col lg={3} md={3} sm={3}  className="mb-4 p-0" style={{
                        border: '2px solid #03a9fa',
                        height: '370px',
                        background:"white !important", }}>
                        <UserSidebar />
                    </Col>

                    <Col lg={9} md={9} sm={9} >
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
                                                        <td className='text-danger fw-semibold'><FontAwesomeIcon icon={faFile} className='me-2' /> Invoice</td>
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
    )
}

export default Invoices;
