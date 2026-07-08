import React from "react";
import { Link } from "react-router-dom";
import { IconArrowUpRight } from '@tabler/icons-react';
import HomeHero1 from "../component/hero/HomeHero1";
import Featuresection from "../component/Featuresection";
import OurProcessSection from "../component/OurProcessSection";
import VideoSection from "../component/VideoSection";
import CounterSection from "../component/CounterSection";
import TeamSection1 from "../component/trainer/TrainerSection1";
import HomeTestimonial from "../component/testimonial/HomeTestimonial";
import PricingSection1 from "../component/pricing/PricingSection1";
import BlogSection1 from "../component/blog/BlogSection1";
import InstaMaquee from "../component/InstaMaquee";


const Home1: React.FC = () => {
    return (
        <>
            {/* ==================== Home 1 Hero Section ==================== */}
            <section className="home1-hero">
                <HomeHero1 />
            </section>
            {/* ==================== Feature Section ==================== */}
            <section className="home1-feature-section">
                <div className="container">
                    <p className="sub-heading-section split-text">What We Offer</p>
                    <h2 className="section-heading split-text">THE BEST STANDARDS ANYWHERE</h2>
                    <Featuresection />
                </div>
            </section>
            {/* ==================== OUR PROGRAM ==================== */}
            <section className="our_program_sec overflow-hidden p-0">
                <div className="row">
                    <div className="col-xxl-4 col-md-6 p-0">
                        <div className="program_v1_box">
                            <div className="program_v1_img h-100">
                                <div className="stagger h-100">
                                    <img src="/images/home/group_trining_img.png" alt="program_img" className="h-100 w-100" />
                                </div>
                                <Link to="/our-program" className="program_v1_btn">
                                    <h4 className="program_title">GROUP TRAINING</h4>
                                    <IconArrowUpRight size={36} color="#FF640D" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-md-6 p-0">
                        <div className="program_v1_box">
                            <div className="program_v1_img h-100">
                                <div className="stagger h-100">
                                    <img src="/images/home/presonal_trining_img.png" alt="program_img" className="h-100 w-100" />
                                </div>
                                <Link to="/our-program" className="program_v1_btn">
                                    <h4 className="program_title">PERSONAL TRAINING</h4>
                                    <IconArrowUpRight size={36} color="#FF640D" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-12 p-0">
                        <div className="program_v1_detailcard">
                            <h2 className="program_v1_detailcard-heading split-text">MEET OUR BEST PROGRAM FOR YOUR BEST RESULTS.</h2>
                            <div className="program_v1_detailcard_info">
                                <p>Gravida ut non cursus bibendum faucibus nibh magna. Pharetra sed cursus fermentum et semper amet varius orci etiam. Quis consectetur nunc sed diam.</p>
                                <p>Sed commodo integer tincidunt neque tempus euismod id. Nam suspendisse cras velit egestas et. Quam adipiscing viverra curabitur vulputate mi faucibus.</p>
                            </div>
                            <Link to="/our-program" className="btn-main">
                                <span className="btn-quote">Book A Demo</span>
                                <span className="orenge_icon">
                                    <IconArrowUpRight size={30} />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* ==================== Home1 Process Section ==================== */}
            <section className="home1-process-section">
                <div className="container">
                    <p className="sub-heading-section split-text">Our Process</p>
                    <h2 className="section-heading split-text pb-0">CHANGE YOUR HABITS FOR BETTER</h2>
                    <p className="heding-sub-discrib">A big change starts with a small step. Our expert team will create a special
                        program following your health and body needs. Start it now.
                    </p>
                    <OurProcessSection />
                </div>
            </section>
            {/* ==================== Video Section ==================== */}
            <section className="VideoPopUpSection" id="VideoPopUpSection1">
                <VideoSection />
            </section>
            {/* ==================== Counter Section ==================== */}
            <section className="counter-section">
                <div className="container">
                    <CounterSection />
                </div>
            </section>
            {/* ==================== Trainer1 Section ==================== */}
            <section className="trainer-section1 pt-0">
                <div className="container">
                    <p className="sub-heading-section split-text">Our Trainers</p>
                    <h2 className="section-heading split-text">MEET OUR SKILLED TEAM</h2>
                    <TeamSection1 />
                </div>
            </section>
            {/* ==================== Testimonials Section ==================== */}
            <section className="home-testimonial-section">
                <div className="container">
                    <HomeTestimonial />
                </div>
            </section>
            {/* ==================== Pricing Section ==================== */}
            <section className="pricing-section">
                <div className="container">
                    <p className="sub-heading-section split-text">Pricing Plans</p>
                    <h2 className="section-heading split-text bugt">FIT FOR EVERY BUDGET, ACHIEVE YOUR GOALS</h2>
                    <PricingSection1 />
                </div>
            </section>
            {/* ==================== Blog Section ==================== */}
            <section className="home1-blog-section">
                <div className="container">
                    <div className="home-bolg-title">
                        <div className="home-bolg-title-sub">
                            <p className="sub-heading-section split-text">Our Blog</p>
                            <h2 className="section-heading split-text">STAY INFORMED ON OUR LATEST NEWS.</h2>
                        </div>
                        <Link to='/blog' className="btn-main anim anim--3">
                            <span className="btn-quote">
                                View More
                            </span>
                            <span className="orenge_icon">
                                <IconArrowUpRight size={30} />
                            </span>
                        </Link>
                    </div>
                    <BlogSection1 />
                </div>
            </section>
            {/* ==================== Instagram Section ==================== */}
            <section className="insta-section">
                <InstaMaquee />
            </section>
        </>
    );
};
export default Home1;