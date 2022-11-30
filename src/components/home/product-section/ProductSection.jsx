import './ProductSection.scss'
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

const ProductSection = () => {

    const settings = {
        className: 'product__list',
        infinite: true,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }]
    };

    return (
        <div className='product'>
            <div className="container">
                <div className="product__inner">
                    <h2 className="product__title">Products</h2>
                    <Slider {...settings}>
                        <div className='product__item item'>
                            <img className='item__img' src="https://datasite.uz/images/image/image-1549022682-654861.png" alt="img"/>
                            <h3 className="item__title">KPI.COM</h3>
                            <p className="item__desc">Комплексное программное обеспечение, предназначенное для управления малым и средним бизнесом</p>
                            <button className="item__btn btn btn-green">View more</button>
                        </div>
                        <div className='product__item item'>
                            <img className='item__img' src="https://datasite.uz/images/image/image-1573733518-679334.png" alt="img"/>
                            <h3 className="item__title">KPI.COM</h3>
                            <p className="item__desc">Комплексное программное обеспечение, предназначенное для управления малым и средним бизнесом</p>
                            <button className="item__btn btn btn-green">View more</button>
                        </div>
                        <div className='product__item item'>
                            <img className='item__img' src="https://datasite.uz/images/image/image-1549104090-994612.png" alt="img"/>
                            <h3 className="item__title">KPI.COM</h3>
                            <p className="item__desc">Комплексное программное обеспечение, предназначенное для управления малым и средним бизнесом</p>
                            <button className="item__btn btn btn-green">View more</button>
                        </div>
                        <div className='product__item item'>
                            <img className='item__img' src="https://datasite.uz/images/image/image-1573733518-679334.png" alt="img"/>
                            <h3 className="item__title">KPI.COM</h3>
                            <p className="item__desc">Комплексное программное обеспечение, предназначенное для управления малым и средним бизнесом</p>
                            <button className="item__btn btn btn-green">View more</button>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default ProductSection;
