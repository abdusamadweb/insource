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
                            <img className='item__img' src="https://d7umqicpi7263.cloudfront.net/img/product/8c55aae8-80d4-45d5-a69b-75b6e3e776ac/3f606747-ce97-4684-b683-da16446443f5.png" alt="img"/>
                            <h3 className="item__title">EspoCRM</h3>
                            <p className="item__desc">EspoCRM is an Open Source CRM (Customer Relationship Management) software that allows you to see, enter and evaluate all your company relationships regardless of the type.</p>
                            <a className="item__btn btn btn-green" target='_blank' href='https://www.espocrm.com/'>View more</a>
                        </div>
                        <div className='product__item item'>
                            <img className='item__img' src="https://miro.medium.com/max/2400/1*6mTeYkLSs5pI-Cb_etXAyA@2x.png" alt="img"/>
                            <h3 className="item__title">Mautic</h3>
                            <p className="item__desc">Mautic is marketing automation software. Install on your own website or create a free hosted account.</p>
                            <a className="item__btn btn btn-green" target='_blank' href='https://www.mautic.org/'>View more</a>
                        </div>
                        <div className='product__item item'>
                            <img className='item__img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/CiviCRM.svg/2560px-CiviCRM.svg.png" alt="img"/>
                            <h3 className="item__title">CiviCRM</h3>
                            <p className="item__desc">CiviCRM is an open source and freely downloadable constituent relationship management solution.</p>
                            <a className="item__btn btn btn-green" target='_blank' href='https://civicrm.org/'>View more</a>
                        </div>
                        <div className='product__item item'>
                            <img className='item__img' src="https://cloudconsulting24.com/fileadmin/logo/Salesforce.com_logo.svg" alt="img"/>
                            <h3 className="item__title">SalaesForce</h3>
                            <p className="item__desc">Web-based CRM for sales, service, marketing, and call center operations that allows users to manage customer relationships and customer satisfaction.</p>
                            <a className="item__btn btn btn-green" target='_blank' href='https://www.salesforce.com/'>View more</a>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default ProductSection;
