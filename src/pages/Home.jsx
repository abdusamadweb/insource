import React from 'react';
import Hero from "../components/home/hero-section/Hero";
import ServicesSection from "../components/home/services-section/ServicesSection";
import AboutSection from "../components/home/about-section/AboutSection";
import PortfolioSection from "../components/home/portfolio-section/PortfolioSection";
import FeedSection from "../components/home/feed-section/FeedSection";
import PartnerSection from "../components/home/partner-section/PartnerSection";
import ProductSection from "../components/home/product-section/ProductSection";

const Home = () => {
    return (
        <div className='home about-page'>
            <Hero />
            <ServicesSection />
            <AboutSection />
            <PortfolioSection />
            <ProductSection />
            <FeedSection />
            <PartnerSection />
        </div>
    );
};

export default Home;