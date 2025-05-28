
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import isvir_logo from '../../assets/images/isvir_logo.svg'

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
                        <Link className=''><i className="fa-brands fa-facebook text-black"></i></Link>
                        <Link><i className="fa-brands fa-twitter text-black"></i></Link>
                        <Link><i className="fa-brands fa-instagram text-black"></i></Link>
                        <Link><i className="fa-brands fa-linkedin text-black"></i></Link>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Navbar bg="light" expand="lg" className="py-3 mt-2 mb-2" style={{ borderRadius: "50px", height: "80px" }}>
                        <Container>
                            <Navbar.Brand as={Link} to="/" className="fw-bold">
                                <img src={isvir_logo} alt="" style={{ width: "210px" }} />
                            </Navbar.Brand>

                            <Navbar.Toggle aria-controls="basic-navbar-nav" />

                            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                                <Nav className="text-uppercase align-items-center">
                                    <Nav.Link as={NavLink} to="/" className="px-3 text-black">
                                        Home
                                    </Nav.Link>
                                    <Nav.Link as={NavLink} to="/aboutus" className="px-3 text-black">
                                        About Us
                                    </Nav.Link>
                                    <Nav.Link as={NavLink} to="/events" className="px-3 text-black">
                                        Events
                                    </Nav.Link>
                                    <Nav.Link as={NavLink} to="/career" className="px-3 text-black">
                                        Career
                                    </Nav.Link>
                                    <Nav.Link as={NavLink} to="/juniorwing" className="px-3 text-black">
                                        Junior Wing
                                    </Nav.Link>
                                    <Nav.Link as={NavLink} to="/contactus" className="px-3 text-black">
                                        Contact Us
                                    </Nav.Link>
                                </Nav>

                                <ul className="navbar-nav flex-row align-items-center list-unstyled ms-3">
                                    <li className="nav-item me-2">
                                        <button className="btn btn-primary">Login</button>
                                    </li>
                                    <li className="nav-item">
                                        <button className="btn btn-primary">Join ISVIR</button>
                                    </li>
                                </ul>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Row>
            </Container>
        </header>
    )
}

export default Header