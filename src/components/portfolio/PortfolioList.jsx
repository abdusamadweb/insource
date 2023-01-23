import React from 'react';
import {Link} from "react-router-dom";

const PortfolioList = () => {

    const testList = [
        {
            title: 'Бутик Podium Italia',
            desc1: 'Сегодня Department Store Podium Italia – это первый и крупнейший в стране luxury Department Store. Здесь есть все, что нужно женщине или мужчине – от носков и нижнего белья до пальто и шуб; от брендов-синонимов сдержанной консервативной классики до марок, которые сегодня являются топовыми среди самых модных, которые диктует стритстайл.',
            desc2: 'Для их юбилейного журнала "MODA" наша компания создала приложение для инфокиосков, где любой пользователь может прочитать журнал и ознакомиться со всеми брендами и бутиками компании.',
            img1: 'https://datasite.uz/images/logo/logo-1566305743-877063.jpg',
            img2: 'https://datasite.uz/images/image/image-1566305737-36559.png',
            link: null
        },
        {
            title: 'Страховая компания "ИНГО Узбекистан"',
            desc1: 'Сегодня компания ИНГО-УЗБЕКИСТАН – один из крупнейших страховщиков Узбекистана с универсальным портфелем услуг, включающим как комплексные программы защиты интересов бизнеса, так и широкий спектр страховых продуктов для частных лиц.',
            desc2: null,
            img1: 'https://datasite.uz/images/logo/logo-1549286978-519821.jpg',
            img2: 'https://datasite.uz/images/image/image-1549527901-600790.jpg',
            link: null
        },
        {
            title: 'Курортный комплекс Layner',
            desc1: 'Сегодня Department Store Podium Italia – это первый и крупнейший в стране luxury Department Store. Здесь есть все, что нужно женщине или мужчине – от носков и нижнего белья до пальто и шуб; от брендов-синонимов сдержанной консервативной классики до марок, которые сегодня являются топовыми среди самых модных, которые диктует стритстайл.',
            desc2: 'Для их юбилейного журнала "MODA" наша компания создала приложение для инфокиосков, где любой пользователь может прочитать журнал и ознакомиться со всеми брендами и бутиками компании.',
            img1: 'https://datasite.uz/images/logo/logo-1566305743-877063.jpg',
            img2: 'https://datasite.uz/images/image/image-1566305737-36559.png',
            link: null
        },
        {
            title: 'Компания "Atlas Group"',
            desc1: 'Сегодня Department Store Podium Italia – это первый и крупнейший в стране luxury Department Store. Здесь есть все, что нужно женщине или мужчине – от носков и нижнего белья до пальто и шуб; от брендов-синонимов сдержанной консервативной классики до марок, которые сегодня являются топовыми среди самых модных, которые диктует стритстайл.',
            desc2: 'Для их юбилейного журнала "MODA" наша компания создала приложение для инфокиосков, где любой пользователь может прочитать журнал и ознакомиться со всеми брендами и бутиками компании.',
            img1: 'https://datasite.uz/images/logo/logo-1549292237-645335.png',
            img2: 'https://datasite.uz/images/image/image-1566305737-36559.png',
            link: null
        },
    ]

    return (
        <div className='gallery'>
            <div className="container">
                <div className="gallery__inner">
                    <h2 className="gallery__title">Our Portfolio</h2>
                    <ul className="gallery__list">
                        {
                            testList.map((item, i) => (
                                <li className="gallery__item item" key={i}>
                                    <h3 className="item__title">{ item.title }</h3>
                                    <img className='item__img' src={item.img1} alt="img"/>
                                    <p className='item__desc'>{ item.desc1 }</p>
                                    <Link className='item__link' to={ item.link }>
                                        <button className='btn btn-blue item__btn'>Подробнее</button>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PortfolioList;
