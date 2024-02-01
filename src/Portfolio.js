// Portfolio.js

import React from 'react';
import './styles.css';
import FrontPage from "./FrontPage.png";
import Appraisals from "./Appraisals.png"
import HoneyBee from "./HoneyBee.png"

const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio-section py-5">
            <div className="container">
                <h2 className="text-center mb-4">My Portfolio</h2>
            </div>
            <div className="row">
                <div className="col-md-4 mb-4">
                    <div className="portfolio-item">
                        <img src={HoneyBee} alt="HoneyBee" className="img-fluid" />
                        <div className="caption">
                            <h4>Honey Bee RV</h4>
                            <p>During my time at Go Local Interactive, I was responsible for creation and maintenance of multiple clients' pages, including this one for Honey Bee RV.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-4 mb-4">
                <div className="portfolio-item">
                    <img src={Appraisals} alt="Appraisals" className="img-fluid" />
                    <div className="caption">
                        <h4>Purple Wave Appraisal Services</h4>
                        <p>When I was an intern at Purple Wave Auction, my team helped create this page to integrate Heavyworth Appraisal Services' functionality into the Purple Wave site. </p>
                    </div>
                </div>
            </div>

            <div className="col-md-4 mb-4">
                <div className="portfolio-item">
                    <img src={FrontPage} alt="FrontPage" className="img-fluid" />
                    <div className="caption">
                        <h4>FrontPage</h4>
                        <p>This is the landing page for my college senior project, a news aggregator called FrontPage.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
