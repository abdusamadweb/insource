import React, {useState} from 'react';
import MyModal from "../../UI/modal/MyModal";

const PartnersEarn = () => {

    const earnList = [
        'https://logobank.uz:8005/media/logos_preview/PDP_IT_Academy-01.png',
        'https://scontent.ftas9-1.fna.fbcdn.net/v/t39.30808-6/240828721_495574898484851_5557470725116604635_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_ohc=esomOoVA774AX_Di2PC&_nc_ht=scontent.ftas9-1.fna&oh=00_AfBLs4zx-yVpQ62qoIyAO1ZGhfkeZsHSUZfwQ4TwCMX0Ww&oe=637746FA',
        'https://scontent.ftas9-1.fna.fbcdn.net/v/t39.30808-6/270247235_101758772390487_2724841563515861727_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=v_pBu4DxPAMAX89IHSR&_nc_ht=scontent.ftas9-1.fna&oh=00_AfDI5UpLUHThV5N9KbALWGNBLxrZmNrwPnfkxSEqMxIfIQ&oe=6377AB95',
        'https://www.unicraft.org/static/logos/partners/tinkoff.png',
        'https://yt3.ggpht.com/ytc/AKedOLS3i860ea1zN22amByqZRBy0UL2f0G7GflVuNOp=s900-c-k-c0x00ffffff-no-rj'
    ]

    const [modalActive, setModalActive] = useState(false)

    return (
        <div className='material__earn earn'>
            {modalActive && <MyModal setModalActive={setModalActive} />}
            <div className="container">
                <div className="earn__inner">
                    <h2 className="earn__title">Зарабатывайте вместе с Unicraft</h2>
                    <button className='earn__btn btn btn-green' onClick={() => setModalActive(true)}>Стать партнёром</button>
                    <p className="earn__desc">В среднем с одной продажи партнёр получает 30 000 ₽ С нами уже сотрудничают более 100 компаний, среди которых есть такие крупные как:</p>
                    <ul className='earn__list row center align-center'>
                        {
                            earnList.map((item, i) => (
                                <li className="earn__item" key={i}>
                                    <img className='earn__img' src={item} alt="img"/>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PartnersEarn;
