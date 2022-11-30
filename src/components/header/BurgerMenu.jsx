import React from 'react';

const BurgerMenu = ({ menuActive, setMenuActive }) => {
    return (
        <div className='nav__menu'>
            <button className={`open ${menuActive && 'd-none'}`} onClick={() => setMenuActive(true)}>
                <i className="far fa-bars"/>
            </button>
            <button className={`close ${menuActive && 'd-block'}`} onClick={() => setMenuActive(false)}>
                <i className="far fa-times"/>
            </button>
        </div>
    );
};

export default BurgerMenu;
