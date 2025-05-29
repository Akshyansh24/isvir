import React from 'react'
import BackgroundImage from '../../assets/images/BackgroundImage.png';
import logo from '../../assets/images/breadcrumb.svg';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function BreadCrumb({ title }) {
    return (
        <div
            className="breadCrumb-header py-5 overflow-hidden"
            style={{ backgroundImage: `url(${BackgroundImage})` }}
        >
            <div className='sectionPadding' >
                <div className="text-left">
                    <h1 className="breadCrumb-header-title mb-2">
                        {title}
                    </h1>
                    <p className="breadCrumb-header-subtitle mb-0">
                        <Link style={{ color: "black" }} to={"/"}>Home</Link> - {title}
                    </p>
                </div>
                <div className="right">
                    <img src={logo} alt="" srcSet="" />
                </div>
            </div>
        </div>
    )
}

export default BreadCrumb