import React from 'react'
import Logo from "../../assets/images/isvir_logo_white.svg"
import ChinaFlag from "../../assets/images/flags/china.svg"
import franceFlag from "../../assets/images/flags/france.svg"
import germanyFlag from "../../assets/images/flags/germany.svg"
import indiaFlag from "../../assets/images/flags/in.svg"
import netherlandFlag from "../../assets/images/flags/netherlands.svg"
import russiaFlag from "../../assets/images/flags/russia.svg"
import singaporeFlag from "../../assets/images/flags/singapore.svg"
import ukFlag from "../../assets/images/flags/uk.svg"
import uSFlag from "../../assets/images/flags/us.svg"
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {

    const counterData = [
        {
            id: '1',
            name:"india",
            img: indiaFlag,
            count: "16840"
        },
        {
            id: '2',
            name:"us",
            img: uSFlag,
            count: "4555"
        },
        {
            id: '3',
            name:"china",
            img: ChinaFlag,
            count: "2253"
        },
        {
            id: '4',
            name:"Russia",
            img: russiaFlag,
            count: "684"
        },
        {
            id: '5',
            name:"France",
            img: franceFlag,
            count: "539"
        },

    ]
    return (
        <footer>
            <Container>
                <Row>
                    <Col xl={7} lg={12} md={12} sm={12}>
                        <Row>
                            <Col xl={6}>
                                <div className="footerLogo">
                                    <Link>
                                        <img src={Logo} alt="" srcset="" />
                                    </Link>
                                </div>

                                <h3 class="text-white mb-3 followUsText">Follow Us on</h3>
                                <ul className='social-icon-three'>
                                <li>
                                        <Link><i class="fa-brands fa-linkedin"></i></Link>
                                    </li>
                                    <li>
                                        <Link><i class="fa-brands fa-square-facebook"></i></Link>
                                    </li>        
                                    <li>
                                        <Link><i class="fa-brands fa-square-x-twitter"></i></Link>
                                    </li>        
                                    <li>
                                        <Link><i class="fa-brands fa-youtube"></i></Link>
                                    </li>       
                              
                                </ul>
                                <hr />
                                <div>
                                    <h4 className='text-white'>Total Visitors</h4>
                                    <Row>

                                        {counterData.map((count) => (
                                            <Col xl={3}>
                                                <div className='countBox d-flex align-items-center mt-2'><img src={count.img} alt="" srcset="" /> <span>{count.count}+</span></div>
                                            </Col>
                                        ))}
                                    </Row>
                                    {/* <ul className='d-flex flex-wrap gap-2'>
                                {counterData.map((count)=>(
                                    <li className='countBox'><img src={count.img} alt="" srcset="" /> <span>{count.count}+</span></li>
                                ))}
                            </ul> */}
                                </div>
                            </Col>

                            <Col xl={6}>
                                <div className="footer-column">
                                    <h2 className='widget-title'>Important Links</h2>
                                    <ul class="user-links">
                                        <li><Link to="https://www.thieme.in/jcir" target="_blank">JCIR Research &amp; Publication</Link></li>
                                        <li><Link to="https://iria.org.in/" target="_blank">IRIA</Link></li>
                                        <li><Link to="https://www.sirweb.org/" target="_blank">SIR</Link></li>
                                        <li><Link to="https://www.cirse.org/" target="_blank">CIRSE</Link></li>
                                        <li><Link to="http://apscvir.com/" target="_blank"> APSCVIR</Link></li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={5} lg={12} md={12} sm={12}>
                        <Row>
                            <Col xl={6}>
                                <div className="footer-column">
                                    <h2 className='widget-title'>Quick Links</h2>
                                    <ul class="user-links">
                                        <li><Link to="https://www.thieme.in/jcir" target="_blank">History</Link></li>
                                        <li><Link to="https://iria.org.in/" target="_blank">Event</Link></li>
                                        <li><Link to="https://www.sirweb.org/" target="_blank">FAQ</Link></li>
                                        <li><Link to="https://www.cirse.org/" target="_blank">Privacy & Policy</Link></li>
                                        <li><Link to="http://apscvir.com/" target="_blank">Term & Condition</Link></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col xl={6}>
                                <div className="footer-column">
                                    <h2 className='widget-title'>Contact Us</h2>
                                    <ul className='contact-list'>
                                        <li className='position-relative'>
                                            <span className='icon' ><i class="fa-solid fa-location-dot"></i></span>
                                            <div class="text" >
                                                3, 302, DDA Building, V-3S Mall Laxmi Nagar, East Delhi - 110092
                                            </div>
                                        </li>
                                        <li>
                                            <span class="icon"><i class="fa-solid fa-phone-volume"></i></span>
                                            <div>
                                                <div class="text">Call Us : 24/7</div>
                                                <Link to="tel:+91 9319193560"><strong>+91 93191 93560</strong></Link>
                                            </div>
                                        </li>
                                        <li>
                                            <span class="icon"><i class="fa-solid fa-envelope"></i></span>
                                            <div>
                                                <div class="text">Do you have a Question?
                                                </div>
                                                <Link to="mailto:info.isvir@gmail.com"><strong>info.isvir@gmail.com</strong></Link>
                                            </div>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer