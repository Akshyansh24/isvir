import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap';
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







                    <Navbar bg="light" expand="lg" className="py-3" style={{ borderRadius: "50px" }}>
                        <Container>
                            <Navbar.Brand href="#home" className="fw-bold">
                                ISVIR
                                <span className="d-block small fw-normal">Data Booking by consultor and</span>
                                <span className="d-block small fw-normal">international facilitator</span>
                            </Navbar.Brand>

                            <Navbar.Toggle aria-controls="basic-navbar-nav" />

                            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                                <Nav className="text-uppercase">
                                    <Nav.Link href="#home" className="px-3">Home</Nav.Link>
                                    <Nav.Link href="#about" className="px-3">About Us</Nav.Link>
                                    <Nav.Link href="#events" className="px-3">Events</Nav.Link>
                                    <Nav.Link href="#career" className="px-3">Career</Nav.Link>
                                    <Nav.Link href="#junior" className="px-3">Junior Wing</Nav.Link>
                                    <Nav.Link href="#contact" className="px-3">Contact Us</Nav.Link>
                                    <Nav.Link href="#login" className="px-3">Log-In</Nav.Link>
                                    <Nav.Link href="#join" className="px-3 text-nowrap">Join ISVIR</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>



















                </Row>
            </Container>
        </header>
    )
}

export default Header
