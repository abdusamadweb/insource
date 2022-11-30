import './ServicesSection.scss'
import React from 'react';
import {Link} from "react-router-dom";
import servicesList from "../../../api/servicesList";

const ServicesSection = () => {

    const scrolltoTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <div className='services'>
            <div className="container">
                <div className="services__inner">
                    <h2 className="services__title">Our Services</h2>
                    <ul className="services__list row center">
                        {
                            servicesList.map((item, i) => (
                                <li className='services__item item' key={i}>
                                    <Link to={item.url} onClick={scrolltoTop}>
                                        <i className={item.icon}/>
                                        <span className='item__title'>{ item.title }</span>
                                        <span className='item__txt'>More</span>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;
