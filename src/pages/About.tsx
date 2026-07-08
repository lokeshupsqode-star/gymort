import React from "react";
import HomeHero1 from "../component/hero/HomeHero1";
import Featuresection from "../component/Featuresection";

const About: React.FC = () => {
    return (
        <>
            {/* ============== Home1 Hero ==================== */}
            <section className="home1-hero">
                <HomeHero1 />
            </section>
            {/* ==================== Feature Section ==================== */}
            <section className="home1-feature-section">
                <div className="container">
                    <p className="sub-heading-section split-text">What We Offer</p>
                    <h2 className="section-heading split-text">THE BEST STANDARDS ANYWHERE</h2>
                    <Featuresection />
                    <div className="overflow-hidden">
                        <img className="img-zoom w-100" src="/images/home/home_slide_img_2.png" alt="home_slide_img_2" />
                    </div>
                </div>
            </section>
            

        </>
    )
};
export default About;