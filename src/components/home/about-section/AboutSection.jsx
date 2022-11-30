import './AboutSection.scss'
import React from 'react';

import iphone from '../../../assets/images/iphone.png'

const AboutSection = () => {
    return (
        <div id='about' className='about'>
            <div className="container">
                <div className="about__inner row align-center">
                    <div className='about__wrapper'>
                        <div className="about__titles">
                            <h2 className="about__title">About Us</h2>
                            <p className="about__desc">Insource Technology - ташкентская компания, осуществляющая поддержку бизнеса клиентов на долгосрочной основе: IT-консалтинг, брендинговые технологии, дизайнерские решения, разработка и сопровождение интернет-проектов, интернет-маркетинг, дизайн и разработка сайтов, а также их поддержка и развитие.</p>
                        </div>
                        <ul className='about__list'>
                            <li className="about__item row align-center">
                                <i className="fal fa-check"/>
                                <span className='about__item-txt'>Более 10 сданных проектов</span>
                            </li>
                            <li className="about__item row align-center">
                                <i className="fal fa-check"/>
                                <span className='about__item-txt'>Международная практика проектов</span>
                            </li>
                            <li className="about__item row align-center">
                                <i className="fal fa-check"/>
                                <span className='about__item-txt'>Свыше 10 сотрудников</span>
                            </li>
                            <li className="about__item row align-center">
                                <i className="fal fa-check"/>
                                <span className='about__item-txt'>Проекты любой сложности</span>
                            </li>
                        </ul>
                    </div>
                    <div className='about__imgs'>
                        <img className='about__img' src={iphone} alt="phone"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
