import './PartnerSection.scss'
import React from 'react';

import Slider from "react-slick";

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

const PartnerSection = () => {

    const settings = {
        infinite: true,
        className: "center",
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }]
    }

    const partnersList = [
        {
            name: 'it-park',
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Logo_IT_Park_Uzbekistan.svg/2560px-Logo_IT_Park_Uzbekistan.png'
        },
        {
            name: 'frolkov',
            src: 'https://cdn-bejdi.nitrocdn.com/JfYsxiGleSWSjVdqpiMdxKosrlRYQOzl/assets/static/optimized/rev-7c1b4b8/wp-content/uploads/2020/05/header-log.svg'
        },
        {
            name: 'kapital-bank',
            src: 'https://logobank.uz:8005/media/logos_png/KAPITALBANK-01.png'
        },
        {
            name: 'data-site',
            src: 'https://avatars.mds.yandex.net/get-altay/5498343/2a0000017fb5e5caa650cb8d0474e23ce622/XXXL'
        },
        {
            name: 'pdp-academy',
            src: 'https://logobank.uz:8005/media/logos_preview/PDP_IT_Academy-01.png'
        },
    ]

    return (
        <div className='partner'>
            <div className="container">
                <div className="partner__inner">
                    <h2 className="partner__title">Clients and Partners</h2>
                    <Slider {...settings}>
                        {
                            partnersList.map((item, i) => (
                                <div className='partner__item' key={i}>
                                    <img className='partner__img' src={item.src} alt="partners-img"/>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default PartnerSection;
