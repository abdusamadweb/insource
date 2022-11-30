import React from 'react';

const AboutSystem = () => {
    return (
        <div className='system'>
            <div className="container">
                <div className="system__inner">
                    <h2 className="system__title">На каких системах мы реализуем проекты?</h2>
                    <ul className='system__list row evenly'>
                        <li className="system__item item">
                            <div className='icon'><i className="fa-brands fa-react"/></div>
                            <h3 className='item__title'>Scrum</h3>
                        </li>
                        <li className="system__item item">
                            <div className='icon'><i className="fal fa-microscope"/></div>
                            <h3 className='item__title'>AGILE</h3>
                        </li>
                        <li className="system__item item">
                            <div className='icon'><i className="far fa-tv"/></div>
                            <h3 className='item__title'>KANBAN</h3>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutSystem;
