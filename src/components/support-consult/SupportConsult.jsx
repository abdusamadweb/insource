import React from 'react';

const SupportConsult = () => {
    return (
        <div className='support__consult consult'>
            <div className="container">
                <div className="consult__inner row relative-p">
                    <div className="consult__titles">
                        <h3 className="consult__title">Если вы хотите стать нашим клиентом, получите от нас бесплатную консультацию</h3>
                        {/*<button className="consult__btn btn btn-green">Заявка </button>*/}
                        <p className="consult__desc">Позвоните по телефону <span>+998 (33) 782 00 90</span></p>
                    </div>
                    <img className='consult__img' src="https://www.unicraft.org/wp-content/themes/unicraft-twentynineteen/img/consult.png" alt="img"/>
                </div>
            </div>
        </div>
    );
};

export default SupportConsult;
