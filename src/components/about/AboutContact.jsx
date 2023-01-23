import './AboutPage.scss'
import React from 'react';

const AboutContact = () => {
    return (
        <div className='page'>
            <div className="container">
                <div className="page__inner">
                    <h3 className="page__title">Контакты</h3>
                    <div className='page__contact contact'>
                        <div>
                            <span className='contact__title'>Режим работы:</span>
                            <span className='contact__txt'>Пн-Пт с 09   :00 до 18:30</span>
                        </div>
                        <div>
                            <a className='contact__link' href='tel:+998336567770'>
                                <span className='contact__title contact__hover'>Телефон:</span>
                                <span className='contact__txt'>+998 (33) 656 77 70</span>
                            </a>
                        </div>
                        <div>
                            <a className='contact__link' href='mailto:insource@gmail.com'>
                                <span className='contact__title contact__hover'>Email:</span>
                                <span className='contact__txt'>insource@gmail.com</span>
                            </a>
                        </div>
                        <div className='row'>
                            <span className='contact__title contact__hover'>Адрес:</span>
                            <address className='contact__address'>Сергелийский район,Ташкент, Узбекистан</address>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutContact;
