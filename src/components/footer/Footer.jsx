import React from 'react';

import './Footer.scss'
import navList from "../../api/navList";
import {NavLink} from "react-router-dom";
import Nav from "../header/Nav";

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer__inner center">
                    <div className="footer__head">
                        <div className="footer__titles">
                            <span className='footer__title'>Есть вопросы? Звоните!</span>
                            <a className="footer__call" href="tel:+998">+998 (33) 656 77 70</a>
                        </div>
                        {/*<div className="footer__imgs">*/}
                        {/*    <ul className='footer__imgs-list row center align-center'>*/}
                        {/*        <li>*/}
                        {/*            <img src="https://www.unicraft.org/static/logos/partners/tpstrogino.png" alt="partner"/>*/}
                        {/*        </li>*/}
                        {/*        <li>*/}
                        {/*            <img src="https://www.unicraft.org/static/logos/partners/frii.png" alt="partner"/>*/}
                        {/*        </li>*/}
                        {/*        <li>*/}
                        {/*            <img src="https://www.unicraft.org/static/logos/partners/edtech.png" alt="partner"/>*/}
                        {/*        </li>*/}
                        {/*    </ul>*/}
                        {/*</div>*/}
                    </div>
                    <div className="footer__body">
                        <Nav />
                        <div className="footer__social">
                            <ul className='footer__social-list row center align-center'>
                                <li>
                                    <a href="https://t.me/insourceuz" target='_blank'><i className="fab fa-telegram"/></a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/insource.uz/" target='_blank'><i className="fab fa-instagram"/></a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/profile.php?id=100088165359409" target='_blank'><i className="fab fa-facebook"/></a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/insourceuz/" target='_blank'><i className="fab fa-linkedin"/></a>
                                </li>
                            </ul>
                            <span className='footer__social-txt'>Insource System © 2022</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
