import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import videoIcon from '../../assets/images/videoIcon.svg'
import videoSlider from "../../assets/images/videoSlider.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';


function SliderVideoLibrary() {
    return (
        <div className='sliderVideoCard-Section pt-90 pb-90 sectionPadding'>
            <div>
                <div className='isvirVideoLibrary'>
                    <Row className='d-flex align-items-center'>
                        <Col md={5}>
                            <h5>ISVIR Video <img src={videoIcon} alt="Video Icon" /> LIBRARY</h5>
                            <p>Explore our Video Library for Interventional Radiology</p>
                            <Link className="btn btn-primary" to="#">Explore More</Link>
                        </Col>
                        <Col md={7}>
                            <div>
                                <Swiper
                                    slidesPerView={2}
                                    spaceBetween={30}
                                    grabCursor={true}
                                    loop={true} // loop on
                                    autoplay={{
                                        delay: 2500, // 2.5 seconds delay
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{ clickable: true }}
                                    modules={[Autoplay, Pagination]}
                                    navigation={true}
                                    className="mySwiper"
                                    breakpoints={{
                                        // when window width is >= 320px
                                        320: {
                                            slidesPerView: 1,
                                            spaceBetween: 20,
                                        },
                                        // when window width is >= 768px
                                        768: {
                                            slidesPerView: 2,
                                            spaceBetween: 30,
                                        },
                                        // when window width is >= 1024px
                                        1024: {
                                            slidesPerView: 3,
                                            spaceBetween: 40,
                                        },
                                    }}
                                >
                                    <SwiperSlide>
                                        <img src={videoSlider} alt="ISVIR 2024" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={videoSlider} alt="ISVIR 2023" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={videoSlider} alt="ISVIR 2022" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={videoSlider} alt="ISVIR 2021" />
                                    </SwiperSlide>
                                    {/* Add more slides if you want */}
                                </Swiper>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default SliderVideoLibrary
