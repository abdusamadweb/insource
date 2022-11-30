import React from 'react';

const PartnersMaterial = () => {

    const materialList = [
        {
            img: 'https://www.unicraft.org/page/partners/images/materials.png',
            title: 'Рекламные материалы',
            desc: 'Полный набор для продвижения продукта в интернете и оффлайн',
            more: [
                'Иллюстрации',
                'Буклеты',
                'Фирменные бланки'
            ]
        },
        {
            img: 'https://www.unicraft.org/page/partners/images/presentation.png',
            title: 'Совместное проведение первых презентаций',
            desc: 'Покажем, расскажем и научим как провести презентацию лучшим образом',
            more: null
        },
        {
            img: 'https://www.unicraft.org/page/partners/images/demo.png',
            title: 'Демо-доступы',
            desc: 'Для демонтрации возможностей платформы предоставляются демо-версии площадок',
            more: null
        },
        {
            img: 'https://www.unicraft.org/page/partners/images/support.png',
            title: 'Оперативная поддержка по любым вопросам',
            desc: 'Вы всегда можете рассчитывать на квалифицированную помощь наших специалистов.',
            more: null
        },
    ]

    return (
        <div className="partners__material material">
            <div className="container">
                <div className="material__titles">
                    <h3 className="material__title">Обеспечим всем необходимым</h3>
                    <p className="material__desc">Для достижения наилучших результатов мы представим вам материалы, научим и покажем как проводить презентации и подскажем при наличии вопросов</p>
                </div>
                <ul className="material__list">
                    {
                        materialList.map((item, i) => (
                            <li className="material__item item row align-center" key={i}>
                                <div className='item__titles'>
                                    <h4 className='item__title'>{ item.title }</h4>
                                    <p className="item__desc">{ item.desc }</p>
                                    {
                                        item.more !== null && (
                                            <ul className='item__inner-list row'>
                                                {
                                                    item.more.map((sItem, sI) => (
                                                        <li className='item__inner-item row align-center' key={sI}>
                                                            <i className="fal fa-check"/>
                                                            <span>{ sItem }</span>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        )
                                    }
                                </div>
                                <img className='item__img' src={item.img} alt="img"/>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default PartnersMaterial;
