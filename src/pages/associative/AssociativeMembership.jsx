


// import React, { useState } from 'react';
// import { Container, Row, Col, Form } from 'react-bootstrap';
// import BackgroundImage from '../../assets/images/BackgroundImage.png';
// import Sidebar from '../../components/layouts/Sidebar';


// const AssociateMembership = () => {
//     const [activeChecked, setActiveChecked] = useState(true);
//     const [cirseChecked, setCirseChecked] = useState(false);
//     const [apsvirChecked, setApsvirChecked] = useState(false);
//     const [sirChecked, setSirChecked] = useState(false);

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
//                         <h1 className="junior-header-title mb-2">Associate Memberships</h1>
//                         <p className="junior-header-subtitle mb-0">Home - Associate Memberships</p>
//                     </div>
//                 </Container>
//             </div>

//             <Container fluid className="membership-main py-5">
//                 <Container>
//                     <Row>
//                         <Col lg={4} md={5} className="mb-4 p-3" style={{ border: '2px solid #03a9fa', height: '370px', width: '320px', marginRight: '40px' }}>
//                             <Sidebar />
//                         </Col>

//                         <Col lg={8} md={7}>
//                             <div className="membership-parent-box">
//                                 <h2 className="membership-title">Associative Memberships</h2>

//                                 <div className="membership-item d-flex">
//                                     <Form.Check
//                                         type="checkbox"
//                                         id="active-membership"
//                                         checked={activeChecked}
//                                         onChange={(e) => setActiveChecked(e.target.checked)}
//                                         className="membership-checkbox"
//                                     />
//                                     <div className="membership-content">
//                                         <div className="membership-name">Active</div>
//                                         <div className="membership-details">
//                                             Period: Yearly, Amount: 2000, GST @ 18%: 360, Total: ₹ 2360
//                                         </div>
//                                         <div className="membership-validity">
//                                             (Your Active Membership is Valid Till: 2024-Aug-10)
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="membership-item">
//                                     <Form.Check
//                                         type="checkbox"
//                                         id="cirse-membership"
//                                         checked={cirseChecked}
//                                         onChange={(e) => setCirseChecked(e.target.checked)}
//                                         className="membership-checkbox"
//                                     />
//                                     <div className="membership-content">
//                                         <div className="membership-name">CIRSE</div>
//                                         <div className="membership-details">
//                                             Period: Yearly, Amount: 4000, GST @ 18%: 720, Total: ₹ 4720
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="membership-item">
//                                     <Form.Check
//                                         type="checkbox"
//                                         id="apsvir-membership"
//                                         checked={apsvirChecked}
//                                         onChange={(e) => setApsvirChecked(e.target.checked)}
//                                         className="membership-checkbox"
//                                     />
//                                     <div className="membership-content">
//                                         <div className="membership-name">APSCVIR</div>
//                                         <div className="membership-details">
//                                             Period: Lifetime, Amount: 1000, GST @ 18%: 180, Total: ₹ 1180
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="membership-item">
//                                     <Form.Check
//                                         type="checkbox"
//                                         id="sir-membership"
//                                         checked={sirChecked}
//                                         onChange={(e) => setSirChecked(e.target.checked)}
//                                         className="membership-checkbox"
//                                     />
//                                     <div className="membership-content">
//                                         <div className="membership-name">SIR</div>
//                                         <div className="membership-details">
//                                             Period: Yearly, Amount: 4000, GST @ 18%: 720, Total: ₹ 4720
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="terms-box">
//                                     <h3 className="terms-title">Terms and Conditions</h3>
//                                     <p className="terms-note">
//                                         <strong>Note:</strong> Active Membership is must before any associative memberships.
//                                     </p>
//                                     <p className="terms-text">
//                                         I understand that ISVIR accepts membership of Interventional Radiologists only. In case payment done by any other specialist or by providing false information, membership will be canceled and the amount will not be refunded. All legal matters will be dealt with in the jurisdiction of Delhi high court only.
//                                     </p>
//                                 </div>
//                             </div>
//                         </Col>
//                     </Row>
//                 </Container>
//             </Container>
//         </>
//     );
// };

// export default AssociateMembership;





import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import BackgroundImage from '../../assets/images/BackgroundImage.png';
import Sidebar from '../../components/layouts/Sidebar';

const AssociateMembership = () => {
    const [activeChecked, setActiveChecked] = useState(true);
    const [cirseChecked, setCirseChecked] = useState(false);
    const [apsvirChecked, setApsvirChecked] = useState(false);
    const [sirChecked, setSirChecked] = useState(false);

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
                        <h1 className="junior-header-title mb-2">Associate Memberships</h1>
                        <p className="junior-header-subtitle mb-0">Home - Associate Memberships</p>
                    </div>
                </Container>
            </div>

            <Container fluid className="membership-main py-5">
                <Container>
                    <Row>
                        <Col lg={4} md={5} className="mb-4 p-3" style={{ border: '2px solid #03a9fa', height: '370px', width: '320px', marginRight: '40px' }}>
                            <Sidebar />
                        </Col>

                        <Col lg={8} md={7}>

                            <h2 className="membership-title mb-3">Associative Memberships</h2>

                            <div
                                className="membership-parent-box p-0"
                                style={{ border: '1px solid #03a9fa', borderRadius: '8px' }}
                            >

                                <div className="membership-item d-flex gap-2">
                                    <Form.Check
                                        type="checkbox"
                                        id="active-membership"
                                        checked={activeChecked}
                                        onChange={(e) => setActiveChecked(e.target.checked)}
                                        className="membership-checkbox"
                                    />
                                    <div className="membership-name" style={{ width: "60px" }}>Active</div>
                                    <div className="membership-content">
                                        <div className="membership-details mb-0">
                                            Period: Yearly, Amount: 2000, GST @ 18%: 360, Total: ₹ 2360
                                        </div>
                                        <div className="membership-validity">
                                            (Your Active Membership is Valid Till: 2024-Aug-10)
                                        </div>
                                    </div>
                                </div>

                                <div className="membership-item d-flex">
                                    <Form.Check
                                        type="checkbox"
                                        id="cirse-membership"
                                        checked={cirseChecked}
                                        onChange={(e) => setCirseChecked(e.target.checked)}
                                        className="membership-checkbox"
                                    />
                                    <div className="membership-content">
                                        <div className="membership-name">CIRSE</div>
                                        <div className="membership-details">
                                            Period: Yearly, Amount: 4000, GST @ 18%: 720, Total: ₹ 4720
                                        </div>
                                    </div>
                                </div>

                                <div className="membership-item d-flex">
                                    <Form.Check
                                        type="checkbox"
                                        id="apsvir-membership"
                                        checked={apsvirChecked}
                                        onChange={(e) => setApsvirChecked(e.target.checked)}
                                        className="membership-checkbox"
                                    />
                                    <div className="membership-content">
                                        <div className="membership-name">APSCVIR</div>
                                        <div className="membership-details">
                                            Period: Lifetime, Amount: 1000, GST @ 18%: 180, Total: ₹ 1180
                                        </div>
                                    </div>
                                </div>

                                <div className="membership-item d-flex">
                                    <Form.Check
                                        type="checkbox"
                                        id="sir-membership"
                                        checked={sirChecked}
                                        onChange={(e) => setSirChecked(e.target.checked)}
                                        className="membership-checkbox"
                                    />
                                    <div className="membership-content">
                                        <div className="membership-name">SIR</div>
                                        <div className="membership-details">
                                            Period: Yearly, Amount: 4000, GST @ 18%: 720, Total: ₹ 4720
                                        </div>
                                    </div>
                                </div>


                                <div className="terms-box mt-4">
                                    <h3 className="terms-title">Terms and Conditions</h3>
                                    <p className="terms-note">
                                        <strong>Note:</strong> Active Membership is must before any associative memberships.
                                    </p>
                                    <p className="terms-text">
                                        I understand that ISVIR accepts membership of Interventional Radiologists only. In case payment done by any other specialist or by providing false information, membership will be canceled and the amount will not be refunded. All legal matters will be dealt with in the jurisdiction of Delhi high court only.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
};

export default AssociateMembership;


