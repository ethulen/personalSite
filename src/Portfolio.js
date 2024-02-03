// Portfolio.js

import React from 'react';
import './styles.css';
import FrontPage from "./FrontPage.png";
import Appraisals from "./Appraisals.png";
import HoneyBee from "./HoneyBee.png";
import HoneyBee1 from "./HoneyBee1.JPEG";
import HoneyBee2 from "./HoneyBee2.JPEG";
import HoneyBee3 from "./HoneyBee3.JPEG";
import HoneyBee4 from "./HoneyBee4.JPEG";

const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio-section py-5">
            <div className="container">
                <h2 className="text-center mb-4">My Portfolio</h2>
            </div>
            <div className="row">
                <div className="col-md-4 mb-4">
                    <div className="portfolio-item">
                        <div className="image-container">
                            <img src={HoneyBee1} alt="HoneyBee Home Page" className="img-fluid" />
                            <img src={HoneyBee2} alt="HoneyBee FAQs Page" className="img-fluid" />
                            <img src={HoneyBee3} alt="HoneyBee Coverage Options Page" className="img-fluid" />
                            <img src={HoneyBee4} alt="HoneyBee About Page" className="img-fluid" />
                        </div>
                        <div className="caption">
                            <h4><a href="https://honeybeerv.com/rv-storage-locations/co/aurora/2360-s-rome-way/">Honey Bee RV</a></h4>
                            <p>During my time at Go Local Interactive, I was responsible for creation and maintenance of multiple clients' pages, including this one for Honey Bee RV.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="portfolio-item">
                        <img src={Appraisals} alt="Appraisals" className="img-fluid" />
                        <div className="caption">
                            <h4><a href="https://www.purplewave.com/appraisals">Purple Wave Appraisal Services</a></h4>
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
            </div>
        </section>
    );
};

export default Portfolio;
