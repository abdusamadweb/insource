import '../../components/services/Services.scss'
import React from 'react';

const ServicesPO = () => {
    return (
        <div className='service'>
            <div className="container">
                <div className="service__inner">
                    <h2 className="service__title">ПО</h2>
                    <div className="service__titles">
                        <span className='service__txt-big'>Этапы разработки ПО:</span>
                        <ul className='service__list'>
                            <li className='service__desc'>Исследование и выбор оптимальной технологии;</li>
                            <li className='service__desc'>Исследование предметной области данных и определение требований проекта;</li>
                            <li className='service__desc'>Создание прототипов и демо-версий;</li>
                            <li className='service__desc'>Системное планирование (выбор архитектуры, создание протоколов взаимодействия и технического задания для отдельных модулей);</li>
                            <li className='service__desc'>Построение системы (создание технического задания для модулей системы, кодирование, контроль над качеством);</li>
                            <li className='service__desc'>Создание проектной документации (описание системной архитектуры и протоколов, детальное описание исходного кода в дополнении к встроенным комментариям);</li>
                            <li className='service__desc'>Создание пользовательской документации (руководство пользователя, вспомогательные материалы для решения стандартных проблем, инструкции по установке);</li>
                            <li className='service__desc'>Поддержка продукции (разработка дополнительного функционала, консультация по разработке).</li>
                        </ul>
                        <span className='service__txt-big'>Типы разрабатываемого ПО:</span>
                        <ul className="service__list">
                            <li className="service__desc">Клиентские и Серверные приложения;</li>
                            <li className="service__desc">GUI различной степени сложности (включая 3D, звуковое приложение, и др.);</li>
                            <li className="service__desc">Приложения со сложным алгоритмом;</li>
                            <li className="service__desc">Системные драйвера (VxD, WDM, WinNT, Sys драйвера);</li>
                            <li className="service__desc">Административная панель управления для веб-сайтов;</li>
                            <li className="service__desc">Система управления контентом сайта;</li>
                            <li className="service__desc">Оптимизированные серверные приложения.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesPO;
