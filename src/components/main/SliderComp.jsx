import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import thumb1 from './banners/banner1.png'
import thumb2 from './banners/banner2.png'
import thumb3 from './banners/banner3.png'

function SliderComp() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <div className="sliderCompWrapper">
            <Slider {...settings}>
                <div className="slider-item">
                    <a href="#">
                        <img src={thumb1} alt="" />
                    </a>
                </div>

                <div className="slider-item">
                    <a href="#">
                        <img src={thumb2} alt="" />
                    </a>
                </div>

                <div className="slider-item">
                    <a href="#">
                        <img src={thumb3} alt="" />
                    </a>
                </div>
            </Slider>
        </div>
    )
}

export default SliderComp