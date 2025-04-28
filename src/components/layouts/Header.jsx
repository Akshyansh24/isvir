import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <div className='topBar'></div>
            <Container>
                <div className='d-flex mt-2 mb-2'>
                    <div className='text-danger'>
                        <i className="fa-solid fa-envelope"></i>
                        <span className='ms-1'>info.isvir@gmail.com</span>
                    </div>
                    <div className='text-danger ms-3'>
                        <i className="fa-solid fa-phone"></i>
                        <span className='ms-1'>+91 93191 93560</span>
                    </div>
                </div>

                <div className='d-flex mt-2 mb-2'>
                    <Link><i className="fa-brands fa-facebook"></i></Link>
                    <Link><i className="fa-brands fa-twitter"></i></Link>
                </div>
            </Container>
        </header>
    )
}

export default Header