import React, { useState } from 'react';
import { Container, Row, Col, Form, Card } from 'react-bootstrap';
import UserSidebar from '../../../components/layouts/userSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import BreadCrumb from '../../../components/layouts/BreadCrumb';

const AssociateMembership = () => {
    const [activeChecked, setActiveChecked] = useState(true);
    const [cirseChecked, setCirseChecked] = useState(false);
    const [apsvirChecked, setApsvirChecked] = useState(false);
    const [sirChecked, setSirChecked] = useState(false);

    const [selected, setSelected] = useState({});

    const handleCheckboxChange = (id) => {
        setSelected((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const memberships = [
        {
            id: "active",
            label: "Active",
            period: "Yearly",
            amount: 2000,
            gst: 360,
            total: 2360,
            validity: "2024-Aug-10"
        },
        {
            id: "cirse",
            label: "CIRSE",
            period: "Yearly",
            amount: 4000,
            gst: 720,
            total: 4720
        },
        {
            id: "apscvir",
            label: "APSCVIR",
            period: "Lifetime",
            amount: 1000,
            gst: 180,
            total: 1180
        },
        {
            id: "sir",
            label: "SIR",
            period: "Yearly",
            amount: 4000,
            gst: 720,
            total: 4720
        }
    ];


    return (
        <>

            <BreadCrumb title={"Associative Memberships"} />

            <div fluid className="membership-main py-5 sectionPadding bg-custom">
                <Row>
                      <Col lg={3} md={3} sm={3}  className="mb-4 p-0" style={{
                        border: '2px solid #03a9fa',
                        height: '370px',
                        // width: '320px',
                        marginRight: '40px',
                        backgroundColor:"white"
                    }}>
                        <UserSidebar />
                    </Col>
                    <Col lg={8} md={7}>
                        <Card className='associativeMemebershipCard' style={{ borderRadius: "22px 22px 22px 22px" }}>
                            <Card.Header className='py-3' style={{ borderRadius: "22px 22px 0px 0px" }}>
                                <Card.Title className='mb-0'>Associative Memberships</Card.Title>
                            </Card.Header>

                            <Card.Body style={{ border: "1px solid #03A9F4", borderRadius: "0px 0px 22px 22px" }}>
                                <div className="membership-parent-box p-0"
                                    style={{ border: '0', background: "white", borderRadius: '0px' }}
                                >

                                    <ul className="list-unstyled">
                                        {memberships.map((item) => (
                                            <li key={item.id}>
                                                <div className="membership-item d-flex gap-4 align-items-start">
                                                    <Form.Check
                                                        type="checkbox"
                                                        id={item.id}
                                                        checked={selected[item.id] || false}
                                                        onChange={() => handleCheckboxChange(item.id)}
                                                        className="membership-checkbox"
                                                    />
                                                    <div style={{ width: "10%" }}>
                                                        <span className="statusTag">{item.label}</span>
                                                    </div>
                                                    <div className="membership-content">
                                                        <div className="membership-details mb-0">
                                                            Period: {item.period}, Amount: {item.amount}, GST @ 18%: {item.gst}, Total: ₹ {item.total}
                                                        </div>
                                                        {item.label && (
                                                            <div className="membership-validity">
                                                                (Your {item.label} Membership is Valid Till: {item.validity})
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className='py-4 px-3'>
                                        <h6 className='fw-bold'><FontAwesomeIcon icon={faCircleInfo} /> Term and Condition</h6>
                                        <h6 className='fw-bold' style={{ color: "red" }}>Note: Active Membership is must before any associative memberships.</h6>
                                        <p className='fw-semibold mt-2' style={{ lineHeight: "1.3" }}>      <Form.Check
                                            type="checkbox"
                                            id="active-membership"
                                            checked={activeChecked}
                                            onChange={(e) => setActiveChecked(e.target.checked)}
                                            className="membership-checkbox d-inline" /> I understand that ISVIR accepts membership of Interventional Radiologists only. In case payment done by any other
                                            specialist or by providing false information, membership will be canceled and the amount will not be refunded. All legal
                                            matters will be deal with in the jurisdiction of Delhi high court only.</p>
                                    </div>

                                    <div className='text-center '>
                                        <button className='btn btn-primary'>Process</button>
                                    </div>

                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default AssociateMembership;


