import React from 'react'
import BannerImage from '../../assets/images/banner.png'
import BannerImageSec from '../../assets/images/banner2.png'
import BannerImageThird from '../../assets/images/banner3.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

function Banner() {
  return (
    <div>
      {/* <img src={BannerImage} className='w-100' alt="" srcset="" /> */}
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        grabCursor={true}
        autoHeight={true}
        loop={true} // loop on
        autoplay={{
          delay: 2500, // 2.5 seconds delay
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={BannerImage} className='bannerImage' alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BannerImageSec} className='bannerImage' alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BannerImageThird} className='bannerImage' alt="" srcset="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}


export default Banner