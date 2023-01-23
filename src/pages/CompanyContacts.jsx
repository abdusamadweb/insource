import React from 'react';

import '../components/company/Company.scss'
import MyInput from "../components/UI/input/MyInput";

const CompanyContacts = () => {

    const handleSubmit = (e) => {
        e.preventDefault()

        const {name, phone, organization, email, message} = (e.target.elements)
        const newMessage = `
          %0A username: ${name.value},
          %0A phone: ${phone.value},
          %0A organization: ${organization.value},
          %0A email: ${email.value},
          %0A message: ${message.value}
        `

        fetch(`https://api.telegram.org/bot5843802594:AAFIqrQcfO85FPNwoy6gOo1Dlvp66SnFlv4/sendMessage?chat_id=5450434747&text=${newMessage}`)
name.value = null
        phone.value = null
        organization.value = null
        email.value = null
        message.value = null
    }
    return (
        <div className='contacts'>
            <div className="container">
                <div className="contacts__inner">
                    <div>
                        <div className="contacts__titles center">
                            <h2 className="contacts__title">Свяжитесь с нами</h2>
                            <p className="contacts__desc">Поможем вам выбрать подходящий тариф, ответим на вопросы о продукте, поможем решить возникшие проблемы.</p>
                        </div>
                        <div className="contacts__info info row">
                            <div className='info__wrapper'>
                                <h3 className='info__title'>Контакты</h3>
                                <a className='info__tel' href="tel:+998 33 656 77 70">+998 (33) 656 77 70</a>
                                <a className='info__mail info__desc' href="mailto:company@insource.uz">company@insource.uz</a>
                            </div>
                            <div className='info__wrapper'>
                                <h3 className='info__title'>Реквизиты</h3>
                                <p className='info__desc'>Общество с ограниченной ответственностью "Insource System”</p>
                                <address className='info__desc'>Сергелийский район,Ташкент, Узбекистан</address>
                                <p className='info__desc'>
                                    Расчетный счет: 20208000605590595001 <br/>
                                    Банк: ТОЧКА ПАО БАНКА "KAPITALBANK" <br/>

                                </p>
                                <p className="info__desc">Генеральный директор: Ilhom Mannonov</p>
                            </div>
                        </div>
                    </div>
                    <form className="contacts__form form" onSubmit={handleSubmit}>
                        <span className='form__title'>Есть вопросы? Пишите!</span>
                        <div className='form__wrapper row'>
                            <div className='form__inps'>
                                <label>
                                    <MyInput  className='form__inp' type='txt' name='name' placeholder='Имя и фамилия' />
                                </label>
                                <label>
                                    <MyInput  className='form__inp' type='txt' name='phone' placeholder='Телефон' />
                                </label>
                                <label>
                                    <MyInput className='form__inp' type='txt'  name='organization' placeholder='Название организации' />
                                </label>
                                <label>
                                    <MyInput  className='form__inp mail' type='txt' name='email' placeholder='Ваш e-mail' />
                                </label>
                            </div>
                            <div className='form__areas'>
                                <textarea  className='form__area form__inp mail inp' name='message' placeholder='Ваше сообщение'/>
                                <div className='row align-center'>
                                    <button className='form__btn btn'>отправить</button>
                                    <p className='form__txt'>Сообщение должно быть не менее 10 символов.</p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CompanyContacts;
