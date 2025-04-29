import React from 'react'
import Logo from "../../assets/images/isvir_logo_white.svg"
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <Container>
                <Row>
                    <Col xl={6} lg={12} md={12} sm={12}>
                        <div className="footerLogo">
                            <Link>
                                <img src={Logo} alt="" srcset="" />
                            </Link>
                        </div>

                        <h3 class="text-white mb-3">Follow Us on</h3>
                        <ul className='social-icon-three'>
                            <li>
                                <Link><i class="fa-brands fa-facebook-f"></i></Link>
                            </li>        <li>
                                <Link><i class="fa-brands fa-twitter"></i></Link>
                            </li>        <li>
                                <Link><i class="fa-brands fa-youtube"></i></Link>
                            </li>        <li>
                                <Link><i class="fa-brands fa-linkedin"></i></Link>
                            </li>        
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer