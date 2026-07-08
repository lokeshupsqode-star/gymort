import React from "react";
import { Link } from "react-router-dom";
import { IconArrowUpRight } from '@tabler/icons-react';


const HomeHero4: React.FC = () => {
    return (
        <div className="row">
            <div className="col-lg-6 home4-hero-col">
                <div>
                    <h1 className="home4-heroText">KEEP YOUR <span>BODY FIT</span> & <span>STRONG</span></h1>
                    <p className="teaina">with <span>John Williams</span></p>
                    <Link to="/our-program" className="btn-main anim anim--3 home4Hero-btn">
                        <span className="btn-quote">Get Started</span>
                        <span className="orenge_icon">
                            <IconArrowUpRight size={30} />
                        </span>
                    </Link>
                </div>
            </div>
            <div className="col-lg-6">
                <img className="homePage4_img1" src="/images/home/homePage4_img1.png" alt="homePage4_img1" />
                <h2 className="trance-text">JOHN</h2>
            </div>

        </div>
    );
};

export default HomeHero4;