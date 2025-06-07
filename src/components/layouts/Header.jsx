
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
                    <Col lg={6} md={6} sm={6} className='d-flex contantDetail flex-column flex-md-row flex-lg-row flex-row justify-content-center'>
                        <div className='text-danger me-3 text-md-start text-center'>
                            <i className="fa-solid fa-envelope"></i>
                            <span className='ms-1'>info.isvir@gmail.com</span>
                        </div>
                        <div className='text-danger text-md-start text-center'>
                            <i className="fa-solid fa-phone"></i>
                            <span className='ms-1'>+91 93191 93560</span>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={6} className='d-flex justify-content-end gap-3 topBarSocial justify-content-md-end justify-content-center'>
                        <Link className=''><i className="fa-brands fa-facebook text-black"></i></Link>
                        <Link><i className="fa-brands fa-twitter text-black"></i></Link>
                        <Link><i className="fa-brands fa-instagram text-black"></i></Link>
                        <Link><i className="fa-brands fa-linkedin text-black"></i></Link>
                    </Col>
                </Row>
            </section>
            <header className='sectionPadding'>
                <Row>
                    <Navbar bg="light" expand="lg" className="py-3 mt-2 mb-2" >
                        <Container fluid>
                            <Navbar.Brand as={Link} to="/" className="fw-bold">
                                <img src={isvir_logo} alt="" style={{ width: "210px" }} />
                            </Navbar.Brand>

                            <Navbar.Toggle aria-controls="basic-navbar-nav" />

                            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end px-3 px-lg-0 justify-content-lg-end gap-4">
                                <Nav className="text-uppercase align-items-lg-center">
                                    <Nav.Link as={NavLink} to="/" className="px-3 text-black">
                                        Home
                                    </Nav.Link>

                                    <div className="nav-item dropdown px-lg-3 px-1 ">
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
                                                <NavLink to="/aboutus" className="dropdown-item">
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

                                    <Nav.Link as={NavLink} to="/events" className="px-xl-3 px-1 text-black">
                                        Events
                                    </Nav.Link>

                                    <div className="nav-item dropdown px-lg-3 px-1 ">
                                        <Nav.Link
                                            as={NavLink}
                                            className="text-black dropdown-toggle"
                                            id="aboutDropdown"
                                            role="button"
                                            to={"/education"}
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
                                    <Nav.Link as={NavLink} to="/juniorwing" className="px-xl-3 px-1 text-black">
                                        Junior Wing
                                    </Nav.Link>
                                    <Nav.Link as={NavLink} to="/contactus" className="px-xl-3 px-1 text-black">
                                        Contact Us
                                    </Nav.Link>
                                </Nav>
                                <ul className="navbar-nav flex-lg-row align-items-center list-unstyled ms-3 mt-2 mb-3 mx-3 mx-lg-0 ms-lg-0 " >
                                    <li className="nav-item me-lg-2 w-100">
                                        <Link className="btn btn-primary w-100" to={'/login'}>Login</Link>
                                    </li>
                                    <li className="nav-item w-100 mt-lg-0 mt-2">
                                        <Link className="btn btn-primary w-100" to={'/join'}>Join ISVIR</Link>
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