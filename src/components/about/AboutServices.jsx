import React from 'react';
import servicesList from "../../api/servicesList";
import {Link} from "react-router-dom";

const AboutServices = () => {

    const scrolltoTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <div className='services'>
            <div className="container">
                <div className="services__title">Our Services</div>
                <ul className="services__list row center">
                    {
                        servicesList.map((item, i) => (
                            <li className='services__item item itemm' key={i}>
                                <Link to={item.url} onClick={scrolltoTop}>
                                    <i className={item.icon}/>
                                    <span className='item__title'>{ item.title }</span>
                                    <span className='item__txt'>More</span>
                                    <p className="itemm__desc">{ item.desc }</p>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default AboutServices;
