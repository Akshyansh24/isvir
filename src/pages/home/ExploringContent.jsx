import React from 'react'
import Heading from '../../components/layouts/Heading'
import { Col, Container, Row, Card } from 'react-bootstrap'
import Excard from "../../assets/images/excard1.png"
import ExcardTwo from "../../assets/images/excard1.png"

function ExploringContent() {
    const data = [{
        id: "1",
        title: "Upcoming International Events",
        tag: "Events",
        img: Excard,
        content: "Embark on a global journey of knowledge and discovery. Explore our lineup of upcoming international events, where you can connect with experts, share ideas, and expand your horizons."

    },
    {
        id: "1",
        title: "Upcoming International Events",
        tag: "FellowShip",
        img: ExcardTwo,
        content: "Embark on a global journey of knowledge and discovery. Explore our lineup of upcoming international events, where you can connect with experts, share ideas, and expand your horizons."

    },
    {
        id: "1",
        title: "Upcoming International Events",
        tag: "Events",
        img: Excard,
        content: "Embark on a global journey of knowledge and discovery. Explore our lineup of upcoming international events, where you can connect with experts, share ideas, and expand your horizons."

    }]
    return (
        <div className='exploring-home pt-90 pb-90'>
            <Heading title="ISVIR" subtitle="Explore our New Experience" />
            <Row className='mt-lg-5 mt-3'>

                {data.map((item) => (
               <Col lg={4} md={6} key={item.id} className='mb-4'>
                    <Card className="h-100 shadow-sm rounded p-3 " style={{ border: 'none', borderRadius: '12px', overflow: 'hidden', transition: 'transform 0.3s ease' }}>
                        <div className='position-relative'>
                            <div className="d-flex align-items-center justify-content-between position-absolute w-100 px-2 py-2">
                                <span className='tag' style={{ color: "white", backgroundColor: "red" }}>{item.tag}</span>
                                <button className='btn-semiTransparent likeBtn'><i class="fa-solid fa-heart"></i></button>
                            </div>
                            <Card.Img
                                variant="top"
                                src={item.img}
                                alt="Upcoming International Events"
                                style={{ height: "220px", objectFit: "cover" }}
                            />
                        </div>
                        <Card.Body>
                            <Card.Title className="my-3">
                               {item.title}
                            </Card.Title>

                            <Card.Text style={{ color: "grey", textAlign: "justify" }}>
                                {item.content}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                ))}
 
            </Row>

        </div>
    )
}

export default ExploringContent
