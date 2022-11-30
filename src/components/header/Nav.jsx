import React, {useState} from 'react';
import {NavLink, useParams,} from "react-router-dom";
import navList from "../../api/navList";
import BurgerMenu from "./BurgerMenu";

const Nav = ({ child, menuActive, setMenuActive }) => {

    return (
        <nav className='nav'>
            <ul className={`nav__list row ${menuActive && 'd-block'}`}>
                {
                    navList.map((item, i) => (
                        <li className='nav__item item' key={i}>
                            <NavLink className='item__link' to={item.link} onClick={() => setMenuActive(false)}>{ item.name }</NavLink>
                            { item.ul !== null && (
                                <ul className='item__inner-list'>
                                    {
                                        item.ul.map((sItem, sI) => (
                                            <li className='item__inner-item' key={sI}>
                                                <NavLink className={`item__inner-link`} to={sItem.link} onClick={() => setMenuActive(false)}>{ sItem.name }</NavLink>
                                            </li>
                                        ))
                                    }
                                </ul>
                            ) }
                        </li>
                    ))
                }
            </ul>
            { child }
        </nav>
    );
};

export default Nav;
