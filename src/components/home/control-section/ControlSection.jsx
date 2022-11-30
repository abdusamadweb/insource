import './ControlSection.scss'
import React from 'react';

const ControlSection = () => {

    const controlList = [
        {
            img1: 'https://www.unicraft.org/style/img/Intuitive_control_materials_screen-en.webp',
            img2: 'https://www.unicraft.org/style/img/Intuitive_control_materials_items.webp',
            title: 'Upload materials',
            desc: 'Work with familiar formats right on the platform'
        },
        {
            img1: 'https://www.unicraft.org/style/img/Intuitive_control_study_screen-en.webp',
            img2: 'https://www.unicraft.org/style/img/Intuitive_control_study_items.webp',
            title: 'Assign training',
            desc: 'Import users from other systems automatically'
        },
        {
            img1: 'https://www.unicraft.org/style/img/Intuitive_control_result_screen-en.webp',
            img2: 'https://www.unicraft.org/style/img/Intuitive_control_result_items.webp',
            title: 'Get the result',
            desc: 'Turn a newbie into a competent employee in a few days'
        },
    ]

    return (
        <div className='control'>
            <div className="container">
                <div className="control__inner">
                    <h2 className="control__title">Ultimative user experience</h2>
                    <ul className="control__list row between center">
                        {
                            controlList.map((item, i) => (
                                <li className="control__item item" key={i}>
                                    <div className="item__imgs">
                                        <span className={`item__txt ${(i+1) === 3 && 'green'}`}>{ i+1 }</span>
                                        <img className='item__img' src={item.img1} alt="img"/>
                                        <img className='item__img-sc' src={item.img2} alt="sc-img"/>
                                    </div>
                                    <div className="item__titles">
                                        <h3 className="item__title">{ item.title }</h3>
                                        <p className="item__desc">{ item.desc }</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ControlSection;
