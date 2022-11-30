import React from 'react';
import '../components/support-consult/SupportConsult.scss'
import SupportConsult from "../components/support-consult/SupportConsult";

const Support = () => {
    return (
        <div className='support'>
            <div className="container">
                <div className="support__inner">
                    <h2 className="support__title">Справка и поддержка</h2>
                </div>
            </div>
            <SupportConsult />
        </div>
    );
};

export default Support;
