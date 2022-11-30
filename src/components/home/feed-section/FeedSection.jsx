import './FeedSection.scss'
import React from 'react';

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";

const FeedSection = () => {

    const feedList = [
        {
            desc: 'Мы полностью довольны оперативностью и клиентоориентированностью  компании «Insource system», а также высочайшем качеством оказываемых ими услуг и планируем продолжить взаимовыгодное сотрудничество.',
            name: 'Нигматуллин Р.А.',
            job: 'Начальник отдела PR',
            img: 'https://datasite.uz/images/feedbacks/feedbacks-1549026925-684808.png',
            stars: 5,
        },
        {
            desc: 'ООО “Newmax Technologies” было создано в 2006 году группой специалистов в областях спутниковой навигации, связи и передачи информации. Основными направлениями деятельности компании является ИТ консалтинг, а также разработка систем мониторинга и управления транспортными средствами на базе спутниковых навигационных технологий.',
            name: 'Шукуров И.С.',
            job: 'Директор',
            img: 'https://datasite.uz/images/feedbacks/feedbacks-1549022376-171364.png',
            stars: 5,
        },
        {
            desc: 'Благодарим коллектив компании «Insource system» за участие в реализации проекта по полному обновлению сайта . Было очень приятно ощущать со стороны работников вашей компании оперативность и технически грамотное отношение к работе в течение всего периода нашего сотрудничества.',
            name: 'Арифжанов А.Ш.',
            job: 'Директор',
            img: 'https://datasite.uz/images/feedbacks/feedbacks-1549022418-848346.png',
            stars: 5,
        },
        {
            desc: 'Акционерный коммерческий Народный банк Республики Узбекистан выражает благодарность специалистам «Insource system» за разработку нового корпоративного веб-сайта нашего банка.',
            name: 'С.Нормухамедов',
            job: 'Председатель совета банка',
            img: 'https://datasite.uz/images/feedbacks/feedbacks-1549029883-933215.png',
            stars: 5,
        },
    ]

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + "</span>";
        },
    };

    return (
        <div className='feed'>
            <div className="bg bg-cup" />
            <div className="container">
                <div className="feed__inner">
                    <h2 className='feed__title'>Feedbacks</h2>
                    <div className="feed__wrapper">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={0}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            pagination={pagination}
                            modules={[Pagination]}
                            className="feed__swiper"
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                    1000: {
                                        slidesPerView: 2,
                                        spaceBetween: 30,
                                    }
                                }}
                        >
                            {
                                feedList.map((item, i) => (
                                    <SwiperSlide key={i}>
                                        <div className='feed__item item'>
                                            <p className='item__desc'>{ item.desc }</p>
                                            <div className='row between' style={{flexFlow: 'nowrap'}}>
                                                <div className="item__titles">
                                                    <h3 className="item__name">{ item.name }</h3>
                                                    <span className="item__job">{ item.job }</span>
                                                    <ul className="item__stars">
                                                        <li className='item__star'>
                                                            <i className="fa-solid fa-star"/>
                                                        </li>
                                                        <li className='item__star'>
                                                            <i className="fa-solid fa-star"/>
                                                        </li>
                                                        <li className='item__star'>
                                                            <i className="fa-solid fa-star"/>
                                                        </li>
                                                        <li className='item__star'>
                                                            <i className="fa-solid fa-star"/>
                                                        </li>
                                                        <li className='item__star'>
                                                            <i className="fa-solid fa-star"/>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <img className='item__img' src={item.img} alt="img"/>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedSection;