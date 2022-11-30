import React from 'react';
import AboutContact from "../components/about/AboutContact";
import AboutUs from "../components/about/AboutUs";
import AboutServices from "../components/about/AboutServices";
import AboutSystem from "../components/about/AboutSystem";
import PartnerSection from "../components/home/partner-section/PartnerSection";
import AboutVR from "../components/about/AboutVR";

const About = () => {
    return (
        <div className='about-page'>
            <AboutUs />
            <AboutServices />
            <AboutSystem />
            <PartnerSection />
            <AboutVR />
            <AboutContact />
        </div>
    );
};

export default About;
