import './HaveallSection.scss'
import React, {useState} from 'react';
import MyModal from "../../UI/modal/MyModal";

const HaveallSection = () => {

    const haveallList = [
        {
            title: 'Free online courses',
            desc: 'You do not have to worry about where to start. All the necessary instructions to start the training are already built into the platform',
            more: [
                'How to collect and structure materials',
                'How to pack your knowledge into an online course without misrepresentation',
                'How to create assignment tasks for fixing obtained knowledge that work',
                'How to train communication skills',
                'How to accelerate business growth through training',
                'How the platform for staff training works',
            ]
        },
        {
            title: 'Templates library',
            desc: 'Choose a business area, company size, position and get prepared course templates for effective employee training',
            more: [
                'Details about the company',
                'Products and services',
                'Business processes',
                'Rules of communication',
                'Position allowance',
                'Operating technologies',
                'Coordination and control',
                'Working with tools',
            ]
        },
    ]

    const [modalActive, setModalActive] = useState(false)

    return (
        <div className='haveall'>
            {modalActive && <MyModal setModalActive={setModalActive} />}
            <div className="container">
                <div className="haveall__inner">
                    <h2 className="haveall__title">We have everything,<span>that you may need to launch</span></h2>
                    <div className='haveall__wrapper row around'>
                        {
                            haveallList.map((item, i) => (
                                <div className='haveall__temp temp' key={i}>
                                    <h3 className="temp__title">{ item.title }</h3>
                                    <p className="temp__desc">{ item.desc }</p>
                                    <ul className="temp__list">
                                        {
                                            item.more.map((sItem, sI) => (
                                                <li className="temp__item row align-center" key={sI}>
                                                    <i className="fal fa-check"/>
                                                    <span className='temp__item-txt'>{ sItem }</span>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    <button className='temp__btn' onClick={() => setModalActive(true)}>See examples</button>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HaveallSection;
