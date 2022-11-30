import './PortfolioSection.scss'
import React, {useEffect} from 'react';
import {useRef, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = ({ className, style, onClick }) => {
    return (
        <div className={className} onClick={onClick}>
            <i className="far fa-arrow-alt-right"/>
        </div>
    );
}

const PrevArrow = ({ className, style, onClick }) => {
    return (
        <div className={className} onClick={onClick}>
            <i className="far fa-arrow-alt-left"/>
        </div>
    );
}

const PortfolioSection = () => {

    const settings = {
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const slider1 = useRef(null);
    const slider2 = useRef(null);

    useEffect(() => {
        setNav1(slider1.current);
        setNav2(slider2.current);
    }, []);

    return (
        <div className='portfolio'>
            <div className="container">
                <div className="portfolio__inner">
                    <h2 className="portfolio__title">Portfolio</h2>
                    <div className='portfolio__slider slider row align-center'>
                        <div className='slider__wrapper'>
                            <img className='slider__mac' src="https://obeb4.mattmct.com/images/tools/screengrab-comps-tool/macbook-pro-viewport-size-1427x895.png" alt="img"/>
                            <div className='slider__imgs'>
                                <Slider asNavFor={nav2} ref={slider1} {...settings}>
                                    <img className='slider__img' src="https://datasite.uz/images/image/image-1549527901-600790.jpg" alt="img"/>
                                    <img className='slider__img' src="https://datasite.uz/images/image/image-1549527723-9165.jpg" alt="img"/>
                                    <img className='slider__img' src="https://datasite.uz/images/image/image-1559393367-118675.png" alt="img"/>
                                </Slider>
                            </div>
                        </div>
                        <div className='slider__titles'>
                            <Slider asNavFor={nav1} ref={slider2} {...settings}>
                                <h3 className="slider__title">Инвестиционный портал  города Ташкента</h3>
                                <h3 className="slider__title">Страховая компания "Alfa Life"</h3>
                                <h3 className="slider__title">Tashkent Ulugbek International School</h3>
                            </Slider>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default PortfolioSection;
