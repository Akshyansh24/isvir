import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import icon1Experince from '../../assets/images/icon1Experince.png'
import icon1Member from '../../assets/images/icon1Member.png'
import icon1Specilist from '../../assets/images/icon1Specilist.png'
function CounterBox() {

    const counterData = [ 
        {
            id:"1",
            title: "Years of Experience",
            count: "25",
            img: icon1Experince
        },
        {
            id:"2",
            title: "Members",
            count: "1300",
            img:icon1Member
        },
        {
            id:"3",
            title: "Medical Specialities",
            count: "120",
            img:icon1Specilist
        }
    ]

  return (
    <div className="counter-section-home">
            <Container>
            <Row>

                {counterData.map((counterCard)=>(
                    <Col xl={4}>
                    <div className="count-box">
                        <div class="icon-box">
                            <img src={counterCard.img} alt="" srcset="" />
                        </div>
                        <h4 class="counter-title">{counterCard.title}</h4>
                        <h3><span>{counterCard.count}</span>+</h3>
                    </div>
                    </Col>
                ))}
            </Row>
    </Container>
    </div>
  )
}

export default CounterBox