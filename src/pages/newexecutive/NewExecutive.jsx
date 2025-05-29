
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import MemberImage from '../../assets/images/MemberImage.jpg';
import BreadCrumb from '../../components/layouts/BreadCrumb';
import MembersCard from '../../components/layouts/MembersCard';

const NewExecutive = () => {
    const data = [{
        id:"1",
        name:"Akshyansh",
        designation:"Doctor",
        phoneNumber:"987654321",
        email:"abc@gmail.com",
        image:MemberImage
    }]
    return (
        <>
       <BreadCrumb title={"ISVIR New Executive Committee Members"} />
            <div  className="executive-page py-5 sectionPadding">
                    <Row>
                        {data.map((member, index) => (
                            <Col key={index} xs={6} md={4} lg={3} className="mb-4">
                                <MembersCard memberImage={member.image} memberDesignation={member.designation} memberName={member.name} membersPhone={member.phoneNumber} membersEmail={member.email}/>
                            </Col>
                        ))}
                    </Row>
            </div>

        </>
    );
};

export default NewExecutive;




