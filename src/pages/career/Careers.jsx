import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import MemberImage from '../../assets/images/MemberImage.jpg';
import BackgroundImage from '../../assets/images/BackgroundImage.png';

const Careers = () => {
    return (
        <>
        
            <div
                className="junior-header py-5"
                style={{ backgroundImage: `url(${BackgroundImage})` }}
            >
                <Container style={{ maxWidth: '1200px' }}>
                    <div className="text-left">
                        <h1 className="junior-header-title mb-2">
                            ISVIR New Executive Committee Members
                        </h1>
                        <p className="junior-header-subtitle mb-0">
                            Home - ISVIR New Executive Committee Members
                        </p>
                    </div>
                </Container>
            </div>
           
            <Container fluid className="executive-page py-5">
                <Container>
                    <Row>
                        {Array(18).fill(0).map((_, index) => (
                            <Col key={index} xs={6} md={4} lg={3} className="mb-4">
                                <Card className="executive-card border border-primary text-center">
                                    <Card.Img
                                        variant="top"
                                        src={MemberImage}
                                        className="executive-img"
                                        style={{ margin: 0, padding: 0 }}
                                    />
                                    <Card.Body>
                                        <h5 className="mb-2">Dr Shyamkumar K Keshava</h5>
                                        <p className="newexecutivedesignation small mb-2">
                                            President
                                        </p>
                                        <hr className="my-3" />
                                        <p className="newexecutivenumber small mb-2">
                                            <FontAwesomeIcon icon={faPhone} className="newexecutivedesignation me-2" /> +91 9999999999
                                        </p>
                                        <p className="text-muted small mb-1">
                                            <FontAwesomeIcon icon={faEnvelope} className="newexecutivedesignation me-2" /> shyamkumar.k@abc.com
                                        </p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Container>
            
        </>
    );
};

export default Careers;








// import React, { useState } from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import MemberImage from '../../assets/images/MemberImage.jpg';

// const Careers = () => {
//     const [activeTab, setActiveTab] = useState('Gold Medal');

//     const tabs = [
//         'Gold Medal',
//         'Orator',
//         'Best Trainee',
//         'Young Investigator',
//         'Best Publication Of Year',
//         'Best JCIR Reviewer',
//         'Abstract Winners',
//         'Neuro Quiz Winners',
//         'Neuro',
//     ];

  
//     const tabContents = {
//         'Gold Medal': [
//             {
//                 name: 'Prof NAVEEN KALRA',
//                 address: '#154, SECTOR #9 & CHANDIGARH\nPushpac Complex, Chandigarh, UT, 160047',
//                 email: 'navlad2004@yahoo.com',
//                 year: 'National - 2025',
//             },
//             {
//                 name: 'Dr JOHN DOE',
//                 address: '123, SOME STREET, SOME CITY',
//                 email: 'john.doe@example.com',
//                 year: 'National - 2024',
//             },
//         ],
//         Orator: [
//             {
//                 name: 'Ms JANE SMITH',
//                 address: '456, ANOTHER STREET, CITY',
//                 email: 'jane.smith@example.com',
//                 year: 'National - 2025',
//             },
//         ],
        
//     };

    
//     const currentContent = tabContents[activeTab] || [];

//     return (
//         <Container fluid className="award-main py-4" style={{ backgroundColor: '#f8f9fa' }}>
//             <Container>
//                 <h3 className="text-start fw-bold mb-3">Award & Recognition</h3>
//                 <p className="text-start mb-4">Home - Award & Recognition</p>

//                 <div
//                     className="custom-tabs-scroll-container d-flex overflow-auto mb-4 p-1 gap-2"
//                     style={{
//                         background: 'linear-gradient(90deg, #0E8BDF, #37B6F2, #3CBBF4)',
//                         borderRadius: '25px',
//                     }}
//                 >
//                     {tabs.map((tab) => (
//                         <button
//                             key={tab}
//                             className={`custom-tab ${activeTab === tab ? 'active' : ''} flex-shrink-0 border px-3 py-2`}
//                             onClick={() => setActiveTab(tab)}
//                             style={{
//                                 backgroundColor: activeTab === tab ? 'white' : 'transparent',
//                                 color: activeTab === tab ? '#0e76ec' : 'white',
//                                 borderColor: 'white',
//                                 fontWeight: 'bold',
//                                 whiteSpace: 'nowrap',
//                                 minWidth: '120px',
//                                 borderRadius: '20px',
//                                 transition: 'background-color 0.3s, color 0.3s',
//                                 cursor: 'pointer',
//                             }}
//                         >
//                             {tab}
//                         </button>
//                     ))}
//                 </div>

//                 <div
//                     className="award-years mb-4 d-flex gap-2"
//                     style={{
//                         borderRadius: '8px',
//                         padding: '8px',
//                         width: 'fit-content',
//                     }}
//                 >
//                     {['ISVIR 2025', 'ISVIR 2024', 'ISVIR 2023'].map((year) => {
//                         const isActive = year === 'ISVIR 2025';
//                         return (
//                             <button
//                                 key={year}
//                                 className="custom-tab"
//                                 style={{
//                                     backgroundColor: isActive ? 'white' : 'transparent',
//                                     color: isActive ? '#0e76ec' : 'white',
//                                     border: '1.5px solid white',
//                                     borderRadius: '20px',
//                                     padding: '6px 16px',
//                                     fontWeight: 'bold',
//                                     whiteSpace: 'nowrap',
//                                     cursor: 'pointer',
//                                     transition: 'background-color 0.3s, color 0.3s',
//                                     minWidth: '110px',
//                                 }}
//                             >
//                                 {year}
//                             </button>
//                         );
//                     })}
//                 </div>

//                 <Row className="justify-content-center g-4">
//                     {currentContent.length === 0 && (
//                         <p className="text-center">No content available for "{activeTab}"</p>
//                     )}

//                     {currentContent.map((item, index) => (
//                         <Col md={6} key={index}>
//                             <Card
//                                 className="award-card h-100 border-0"
//                                 style={{ borderRadius: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
//                             >
//                                 <div
//                                     className="award-content d-flex"
//                                     style={{ minHeight: '215px' }}
//                                 >
//                                     <div
//                                         className="award-img-container"
//                                         style={{
//                                             width: '210px',
//                                             borderTopLeftRadius: '15px',
//                                             borderBottomLeftRadius: '15px',
//                                             overflow: 'hidden',
//                                         }}
//                                     >
//                                         <Card.Img
//                                             variant="top"
//                                             src={MemberImage}
//                                             className="award-img h-100"
//                                             style={{ objectFit: 'cover' }}
//                                         />
//                                     </div>
//                                     <Card.Body className="award-text p-3 d-flex flex-column">
//                                         <h5 className="fw-bold mb-2 text-start">{item.name}</h5>
//                                         <p className="mb-2 text-start fw-bold" style={{ whiteSpace: 'pre-line' }}>
//                                             {item.address}
//                                         </p>
//                                         <hr
//                                             className="line my-2 mb-4"
//                                             style={{ borderTop: '1px solid #dc3545', width: '100%' }}
//                                         />
//                                         <p className="mb-2 text-start">
//                                             <FontAwesomeIcon
//                                                 icon={faEnvelope}
//                                                 className="me-2"
//                                                 style={{ color: '#dc3545' }}
//                                             />
//                                             <a
//                                                 href={`mailto:${item.email}`}
//                                                 className="text-decoration-none"
//                                                 style={{ color: 'black' }}
//                                             >
//                                                 {item.email}
//                                             </a>
//                                         </p>
//                                         <div className="mt-auto nationalaward">
//                                             <p className="fw-bold text-black mb-0">{item.year}</p>
//                                         </div>
//                                     </Card.Body>
//                                 </div>
//                             </Card>
//                         </Col>
//                     ))}
//                 </Row>
//             </Container>
//         </Container>
//     );
// };

// export default Careers;

