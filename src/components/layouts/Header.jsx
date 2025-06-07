
import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import isvir_logo from '../../assets/images/isvir_logo.svg'
import avtar from '../../assets/images/avtar.png'

function Header() {

    const [openDropdown, setOpenDropdown] = useState(null);
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const toggleDropdown = (menu) => {
        setOpenDropdown((prev) => (prev === menu ? null : menu));
    };


    const sidebarToggle = (value) => {

        if (value == "open") {
            setSidebarVisible(true)
            document.body.style.overflow = "hidden"
        } else if (value == "close") {
            setSidebarVisible(false)
            document.body.style.overflow = "auto"

        }

    };
    return (
        <>
            <header>
                <div className='topBar'></div>
                <section className='sectionPadding smallheaderBar mt-2 mb-2'>
                    <div className="d-flex justify-content-lg-between justify-content-md-between justify-content-sm-between justify-content-center align-items-center flex-column flex-md-row flex-sm-row flex-wrap gap-1">
                        <div className='d-flex align-items-center justify-content-md-start justify-content-sm-start justify-content-center flex-column gap-md-3 text-md-start text-center flex-sm-row'>
                            <div className='text-danger me-3 text-md-start text-center'>
                                <i className="fa-solid fa-envelope"></i>
                                <span className='ms-1'>info.isvir@gmail.com</span>
                            </div>
                            <div className='text-danger text-md-start text-center'>
                                <i className="fa-solid fa-phone"></i>
                                <span className='ms-1'>+91 93191 93560</span>
                            </div>
                        </div>
                        <div className='d-flex justify-content-end gap-3 topBarSocial justify-content-md-end justify-content-sm-end justify-content-center'>
                            <Link className=''><i className="fa-brands fa-facebook text-black"></i></Link>
                            <Link><i className="fa-brands fa-twitter text-black"></i></Link>
                            <Link><i className="fa-brands fa-instagram text-black"></i></Link>
                            <Link><i className="fa-brands fa-linkedin text-black"></i></Link>
                        </div>
                    </div>
                </section>
                <header className='sectionPadding'>
                    <Row>
                        <Navbar bg="light" expand="lg" className="py-3 mt-2 mb-2" >
                            <Container fluid>
                                <Navbar.Brand as={Link} to="/" className="fw-bold">
                                    <img src={isvir_logo} alt="" style={{ width: "210px" }} />
                                </Navbar.Brand>

                                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => { sidebarToggle("open") }} />

                                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end px-3 px-lg-0 justify-content-lg-end gap-4">
                                    <Nav className="text-uppercase align-items-lg-center">
                                        <Nav.Link as={NavLink} to="/" className="px-3 text-black">
                                            Home
                                        </Nav.Link>

                                        <div className="nav-item dropdown px-lg-3 px-lg-1 px-1 ">
                                            <a
                                               
                                                className="text-black dropdown-toggle"
                                                id="aboutDropdown"
                                                role="button"
                                            >
                                                About Us
                                            </a>
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

                                        <Nav.Link as={NavLink} to="/events" className="px-xl-3 px-lg-1 px-1 text-black">
                                            Events
                                        </Nav.Link>

                                        <div className="nav-item dropdown px-xl-3 px-lg-1 px-1 ">
                                            <a
                                                className="text-black dropdown-toggle"
                                                id="aboutDropdown"
                                                role="button"
                                            
                                            >
                                                Career
                                            </a>
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
                                        <Nav.Link as={NavLink} to="/juniorwing" className="px-xl-3 px-lg-1 px-1 text-black">
                                            Junior Wing
                                        </Nav.Link>
                                        <Nav.Link as={NavLink} to="/contactus" className="px-xl-3 px-lg-1 px-1 text-black">
                                            Contact Us
                                        </Nav.Link>
                                    </Nav>
                                    <ul className="navbar-nav flex-lg-row align-items-center list-unstyled ms-3 mt-2 mx-3 mx-lg-0 ms-lg-0 " >
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

            <aside className={`sidebar-wrapper pt-4 ${sidebarVisible ? 'show' : ''}`}>
                <div className="sidebar-header ps-3 pe-0 py-2 w-100 pb-3 ">
                    <div className='d-flex align-items-center gap-4'>
                        <div className="profile-icon">
                            <img src={avtar} alt="Profile" />
                        </div>

                        <div className='d-flex flex-row gap-4'>
                         <div className="profile-name">
                            <h5>DR. P SANTHOSH</h5> <p>Executive Committee Member</p>
                            <div className=''>
                                <button className='btn profileBtn w-100'>Logout</button>
                            </div>
                        </div>
                        <button className='btn close btn-close ' onClick={()=>{sidebarToggle("close")}}><i className="fa-solid fa-x"></i></button>
                       </div>

                        {/* <div className='d-flex flex-row gap-1'>
                            <Link className='btn btn-primary'>Login</Link>
                            <Link className='btn btn-primary'>Join ISVIR</Link>
                            <button className='close btn-close p-2' onClick={() => { sidebarToggle("close") }}><i className="fa-solid fa-x"></i></button>
                        </div> */}
                    </div>
                </div>

                <div className='mainmenu-nav '>
                    <ul className="mainmenu mt-2">
                        <li onClick={() => { sidebarToggle("close") }}><NavLink to="/">Home <i className="fa-solid fa-plus"></i></NavLink></li>
                        <li onClick={() => toggleDropdown('about')}><a>About US <i className="fa-solid fa-plus"></i></a>
                            <div className={`innerDropdown mx-2  ${openDropdown === 'about' ? 'show' : ''}`}>
                                <ul>
                                    <li onClick={() => { sidebarToggle("close") }}>
                                        <NavLink to="/aboutus" className="dropdown-item">
                                            ISVIR History
                                        </NavLink>
                                    </li>
                                    <li onClick={() => { sidebarToggle("close") }}>
                                        <NavLink to="/president" className="dropdown-item">
                                            Presidential Address
                                        </NavLink>
                                    </li>
                                    <li onClick={() => { sidebarToggle("close") }}>
                                        <NavLink to="/newexecutive" className="dropdown-item">
                                            ISVIR New Executive Committee Members
                                        </NavLink>
                                    </li>
                                    <li onClick={() => { sidebarToggle("close") }}>
                                        <NavLink to="/constitutionisvir" className="dropdown-item">
                                            Constitution of ISVIR
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li onClick={() => { sidebarToggle("close") }}><NavLink as={NavLink} to="/events" >Event <i className="fa-solid fa-plus"></i></NavLink></li>
                        <li onClick={() => toggleDropdown('career')}><a >Career <i className="fa-solid fa-plus"></i></a>
                            <div className={`innerDropdown mx-2  ${openDropdown === 'career' ? 'show' : ''}`}>
                                <ul>
                                    <li onClick={() => { sidebarToggle("close") }}>
                                        <NavLink to="/irtrainingcenter" className="dropdown-item">
                                            IR training centers across India
                                        </NavLink>
                                    </li>
                                    <li onClick={() => { sidebarToggle("close") }}>
                                        <NavLink to="/centerofexcellence" className="dropdown-item">
                                            Center of excellence
                                        </NavLink>
                                    </li>
                                    <li onClick={() => { sidebarToggle("close") }}>
                                        <NavLink to="/internationalfellowship" className="dropdown-item">
                                            ISVIR SIR International fellowship
                                        </NavLink>
                                    </li>
                                    <li onClick={() => { sidebarToggle("close") }}>
                                        <NavLink to="/awardrecognition" className="dropdown-item">
                                            Award & Recognition
                                        </NavLink>
                                    </li>
                                    <li onClick={() => { sidebarToggle("close") }}>
                                        <NavLink to="/internationalgrant" className="dropdown-item">
                                            ISVIR International Grant
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>

                        </li>
                        <li><NavLink to="/juniorwing" onClick={() => { sidebarToggle("close") }}>Juinor Wing <i className="fa-solid fa-plus"></i></NavLink></li>
                        <li><NavLink to="/contactus" onClick={() => { sidebarToggle("close") }}>Contact Us<i className="fa-solid fa-plus"></i></NavLink></li>
                        <li><NavLink to="/settings" onClick={() => { sidebarToggle("close") }}>About US <i className="fa-solid fa-plus"></i></NavLink></li>

                    </ul>
                </div>
                <div className="sidebar-footer">
                    <span className="rbt-short-title d-block">Connect With Us</span>
                    <ul className="social-icon social-default ">
                        <li><a href="https://www.facebook.com/">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                        </li>
                        <li><a href="https://www.twitter.com">
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                        </li>
                        <li><a href="https://www.instagram.com/">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        </li>
                        <li><a href="https://www.linkdin.com/">
                            <i className="fa-brands fa-youtube"></i>
                        </a>
                        </li>
                    </ul>
                </div>

            </aside>

            <div onClick={() => { sidebarToggle("close") }} className={`overylay ${sidebarVisible ? 'show' : ''}`}></div>
        </>
    )
}

export default Header