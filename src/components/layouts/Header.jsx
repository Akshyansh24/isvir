
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import isvir_logo from '../../assets/images/isvir_logo.svg'
import avtar from '../../assets/images/avtar.png'

function Header() {
    return (
        <header>
            <div className='topBar'></div>
            <section className='sectionPadding smallheaderBar'>
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
            </section>
            <header className='sectionPadding'>
                <Row>
                    <Navbar bg="light" expand="lg" className="py-3 mt-2 mb-2" style={{ borderRadius: "50px", height: "110px" }}>
                        <Container fluid>
                            <Navbar.Brand as={Link} to="/" className="fw-bold">
                                <img src={isvir_logo} alt="" style={{ width: "210px" }} />
                            </Navbar.Brand>

                            <Navbar.Toggle aria-controls="basic-navbar-nav" />

                            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                                <Nav className="text-uppercase align-items-center">
                                    <Nav.Link as={NavLink} to="/" className="px-3 text-black">
                                        Home
                                    </Nav.Link>

                                    <div className="nav-item dropdown px-3">
                                        <Nav.Link
                                            as={NavLink}
                                            to="/aboutus"
                                            className="text-black dropdown-toggle"
                                            id="aboutDropdown"
                                            role="button"
                                        >
                                            About Us
                                        </Nav.Link>
                                        <ul className="dropdown-menu border-0 shadow" aria-labelledby="aboutDropdown">
                                            <li>
                                                <NavLink to="/aboutus/vision" className="dropdown-item">
                                                    ISVIR History
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/president" className="dropdown-item">
                                                    Presidential Address
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/newexecutive" className="dropdown-item">
                                                    ISVIR New Executive Committee Members
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/constitutionisvir" className="dropdown-item">
                                                    Constitution of ISVIR
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>

                                    <Nav.Link as={NavLink} to="/events" className="px-3 text-black">
                                        Events
                                    </Nav.Link>

                                    <div className="nav-item dropdown px-3">
                                        <Nav.Link
                                            as={NavLink} to="/career"
                                            className="text-black dropdown-toggle"
                                            id="aboutDropdown"
                                            role="button"
                                        >
                                            Career
                                        </Nav.Link>
                                        <ul className="dropdown-menu border-0 shadow" aria-labelledby="aboutDropdown">
                                            <li>
                                                <NavLink to="/irtrainingcenter" className="dropdown-item">
                                                    IR training centers across India
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/centerofexcellence" className="dropdown-item">
                                                    Center of excellence
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/internationalfellowship" className="dropdown-item">
                                                    ISVIR SIR International fellowship
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/awardrecognition" className="dropdown-item">
                                                    Award & Recognition
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/internationalgrant" className="dropdown-item">
                                                    ISVIR International Grant
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                    <Nav.Link as={NavLink} to="/juniorwing" className="px-3 text-black">
                                        Junior Wing
                                    </Nav.Link>
                                    <Nav.Link as={NavLink} to="/contactus" className="px-3 text-black">
                                        Contact Us
                                    </Nav.Link>
                                </Nav>
                                <ul className="navbar-nav flex-row align-items-center list-unstyled ms-3" style={{ width: "250px" }}>
                                    <li className="nav-item me-2">
                                        <Link className="btn btn-primary" to={'/login'}>Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <button className="btn btn-primary">Join ISVIR</button>
                                    </li>
                                </ul>
                                {/* <div className='headerProfile' style={{width:"250px"}}>
                                    <h5>DR. P SANTHOSH</h5>
                                    <img src={avtar} alt="" srcset="" />
                                </div> */}
                            </Navbar.Collapse>

                        </Container>
                    </Navbar>
                </Row>
            </header>
        </header>
    )
}

export default Header