
// import React from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';
// import MemberImage from '../../assets/images/MemberImage.jpg';


// function JuniorCommittee2025() {
//     const committeeMembers = [
//         { name: "Dr. Adarsh Anil", position: "Coordinator" },
//         { name: "Dr. Ujjwal Agarwal", position: "Council Member" },
//         { name: "Dr. T Seetam Kumar", position: "Council Member" },
//         { name: "Dr. Rajat Singhal", position: "Council Member" },
//         { name: "Dr. Shreya Garg", position: "Council Member" },
//         { name: "Dr. Apratim Roy Choudhury", position: "Council Member" },
//         { name: "Dr. M Pooja Sai", position: "Council Member" },
//         { name: "Dr. Vikas H P", position: "Council Member" }
//     ];

//     return (
//         <div>
//             <Container className="junior-container py-5">
//                 <h2 className="junior-heading">Junior Committee 2025</h2>

//                 <Row xs={2} md={3} lg={4} className="g-3">
//                     {committeeMembers.map((member, index) => (
//                         <Col key={index}>
//                             <Card className="junior-member-card h-100">
//                                 <div className="junior-member-image-container mb-0">
//                                     <img
//                                         src={MemberImage}
//                                         alt={member.name}
//                                         className="junior-member-image"
//                                     />
//                                 </div>
//                                 <Card.Body className="text-center justify-content-center pt-3 pb-2">
//                                     <Card.Title className="junior-member-name mb-0">
//                                         <h2 className="m-0">{member.name}</h2>
//                                     </Card.Title>
//                                     <Card.Text className="junior-member-position m-0">
//                                         {member.position}
//                                     </Card.Text>
//                                 </Card.Body>
//                             </Card>
//                         </Col>
//                     ))}
//                 </Row>
//             </Container>
//         </div>
//     );
// }

// export default JuniorCommittee2025;



import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import MemberImage from '../../assets/images/MemberImage.jpg';

function JuniorCommittee2025() {
    const committeeMembers = [
        { id: 1, name: "Dr. Adarsh Anil", position: "Coordinator" },
        { name: "Dr. Ujjwal Agarwal", position: "Council Member" },
        { name: "Dr. T Seetam Kumar", position: "Council Member" },
        { name: "Dr. Rajat Singhal", position: "Council Member" },
        { name: "Dr. Shreya Garg", position: "Council Member" },
        { name: "Dr. Apratim Roy Choudhury", position: "Council Member" },
        { name: "Dr. M Pooja Sai", position: "Council Member" },
        { name: "Dr. Vikas H P", position: "Council Member" }
    ];

    return (
        <div>
            <Container className="junior-container py-5">
                <h2 className="junior-heading">Junior Committee 2025</h2>
                <Row className="g-4">
                    {committeeMembers.map((member, index) => (
                        <Col key={index} xs={12} sm={6} md={4} lg={3}>
                            <Card className="junior-member-card text-center h-100">
                                <div className="junior-member-image-container">
                                    <img
                                        src={MemberImage}
                                        alt={member.name}
                                        className="junior-member-image"
                                    />
                                </div>
                                <Card.Body className="pt-3 pb-2">
                                    <h2 className="junior-member-name">{member.name}</h2>
                                    <p className="junior-member-position">{member.position}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default JuniorCommittee2025;
