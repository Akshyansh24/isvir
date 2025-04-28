import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <div className='topBar'></div>
            <Container>
                <Row className='mt-2 mb-2'>
                    <Col md={6} className='d-flex contantDetail'>
                        <div className='text-danger me-3'>
                            <i className="fa-solid fa-envelope"></i>
                            <span className='ms-1'>info.isvir@gmail.com</span>
                        </div>
                        <div className='text-danger'>
                            <i className="fa-solid fa-phone"></i>
                            <span className='ms-1'>+91 93191 93560</span>
                        </div>
                    </Col>
                    <Col md={6} className='d-flex justify-content-end gap-3 topBarSocial'>
                        <Link className=''><i className="fa-brands fa-facebook"></i></Link>
                        <Link><i className="fa-brands fa-twitter"></i></Link>
                        <Link><i class="fa-brands fa-instagram"></i></Link>
                        <Link><i class="fa-brands fa-linkedin"></i></Link>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    
                </Row>
            </Container>
        </header>
    )
}

export default Header
