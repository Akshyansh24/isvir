import React from 'react';
import { Container } from 'react-bootstrap';
import BackgroundImage from '../../assets/images/BackgroundImage.png';

function BackgroundImages({ title, subtitle }) {
    return (
        <div
            className="py-5"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BackgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
                width: '100%',
                marginLeft: 'calc(-50vw + 50%)',
                marginRight: 'calc(-50vw + 50%)',
                paddingLeft: 'calc(50vw - 50%)',
                paddingRight: 'calc(50vw - 50%)'
            }}
        >
            <Container style={{ maxWidth: '1200px' }}>
                <div className="text-left">
                    <h1
                        className="mb-2"
                        style={{
                            fontSize: '2rem',
                            fontWeight: 'bold',
                            textShadow: '2px 2px 4px rgba(63, 41, 41, 0.5)',
                        }}
                    >
                        {title}
                    </h1>
                    <p
                        className="mb-0"
                        style={{
                            fontSize: '1rem',
                            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
                        }}
                    >
                        {subtitle}
                    </p>
                </div>
            </Container>
        </div>
    );
}

export default BackgroundImages;