import '../components/portfolio/Portfolio.scss'
import React from 'react';
import PortfolioList from "../components/portfolio/PortfolioList";

const Portfolio = () => {
    return (
        <div className='portfolio-page'>
            <PortfolioList />
        </div>
    );
};

export default Portfolio;
