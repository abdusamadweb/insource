import React, {useEffect, useState} from 'react';
import './Header.scss'
import {Link} from "react-router-dom";
import Nav from "./Nav";
import BurgerMenu from "./BurgerMenu";

const Header = () => {

    const [menuActive, setMenuActive] = useState(false)

    const [show, setShow] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY < lastScrollY || window.screen.width < 1024) {
                setShow(false);
            } else if (window.scrollY > 180) {
                setShow(true)
            }
            setLastScrollY(window.scrollY);
        }
    };
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    return (
        <div className={`header ${show && 'hide'}`} id='header'>
            <div className="container">
                <div className="header__inner row between align-center">
                    <div className='row align-center'>
                        <Link to='/'>
                            <h1 className="header__logo">Insource</h1>
                        </Link>
                        {/*<p className='header__logo-text'>Insource System</p>*/}
                    </div>
                    <Nav menuActive={menuActive} setMenuActive={setMenuActive} child={<BurgerMenu menuActive={menuActive} setMenuActive={setMenuActive} />} />
                </div>
            </div>
        </div>
    );
};

export default Header;
