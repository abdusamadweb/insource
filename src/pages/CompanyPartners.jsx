import React from 'react';

import '../components/company/Company.scss'
import PartnersMaterial from "../components/company/partners/PartnersMaterial";
import PartnersEarn from "../components/company/partners/PartnersEarn";

const CompanyPartners = () => {

    return (
        <div className='partners'>
            <div className="partners__inner">
                <div className="container">
                    <div className="partners__titles">
                        <div>
                            <h2 className='partners__title'>Зарабатывайте <br/> до 30% от платежей клиентов</h2>
                            <p className="partners__desc">С нами работают компании из самых разных отраслей, основными направлениями деятельности которых является:</p>
                        </div>
                        <ul className="partners__list row between center">
                            <li className="partners__item">
                                <i className="fal fa-laptop-code"/>
                                <span className='partners__item-desc'>ИТ-интеграторы</span>
                            </li>
                            <li className="partners__item">
                                <i className="fal fa-comments"/>
                                <span className='partners__item-desc'>Консалтинговые компании, агенты и внедренцы обучения</span>
                            </li>
                            <li className="partners__item">
                                <i className="fal fa-file-invoice"/>
                                <span className='partners__item-desc'>Разработчики и поставщики готовых курсов</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <PartnersMaterial />
            <PartnersEarn />
        </div>
    );
};

export default CompanyPartners;
