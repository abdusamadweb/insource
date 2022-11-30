import React from 'react';

const AboutUs = () => {
    return (
        <div className='info'>
            <div className="container">
                <div className="info__inner">
                    <h2 className="info__title">About Us</h2>
                    <div className='info__descs'>
                        <p className="info__desc"><span>Insource</span> опирается на концепцию
                            «индивидуализированных цифровых решений,
                            способствующих развитию бизнеса клиентов».</p>
                        <p className="info__desc">Мы представляем собой преданную команду
                            высококвалифицированных и опытных ИТразработчиков, дизайнеров, руководителей
                            проектов, специалистов по маркетингу и
                            отраслевых консультантов, которые помогают
                            клиентам проектировать, развивать и
                            расширять цифровое присутствие их
                            предприятий и организаций с помощью
                            высококачественных решений, которые мы
                            можем приносить пользу.</p>
                        <p className="info__desc">Благодаря нашим партнерским
                            отношениям с ведущими компаниями,
                            нашему стремлению к открытому и
                            честному общению и нашему стремлению
                            создать рабочую среду, привлекающую
                            лучших специалистов в отрасли, мы
                            постоянно предоставляем решения
                            мирового уровня.</p>
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
            </div>
        </div>
    );
};

export default AboutUs;
