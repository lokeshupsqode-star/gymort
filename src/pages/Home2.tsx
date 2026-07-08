import React from 'react'
import { Link } from 'react-router-dom'
import { IconArrowUpRight } from '@tabler/icons-react';
import HomeHero2 from '../component/hero/HomeHero2'
import OurTraining from '../component/OurTraining';
import TrainersSection2 from '../component/trainer/TrainerSection2';
import BMICalculator from '../component/BMICalculator';
import CounterSection from '../component/CounterSection';
import VideoSection from '../component/VideoSection';
import Home2Testimonial from '../component/testimonial/Home2Testimonial';
import PricingSection1 from '../component/pricing/PricingSection1';
import BlogSection2 from '../component/blog/BlogSection2';
import InstaMaquee from '@/component/InstaMaquee';

const Home2: React.FC = () => {
    return (
        <>
            {/* ==================== Home 2 Hero Section ==================== */}
            <section className="home2-hero">
                <HomeHero2 />
            </section>
            {/* ==================== Home 2 About Section ==================== */}
            <section className="home2-about">
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-5'>
                            <img className='home2About-img1 zoom-in' src="/images/about/home2About-img1.jpg" alt="home2About-img1" />
                        </div>
                        <div className='col-lg-7'>
                            <p className="sub-heading-section split-text">Know About Us</p>
                            <h2 className="section-heading split-text pb-0">PERSONAL TRAININGS ANYWHERE</h2>
                            <div className='esy-mian'>
                                <div>
                                    <p className='heding-sub-discrib euismo pt-0 fade-up'>A euismod quisque nullam nulla turpis nunc id. Donec pharetra enim lacus lectus ac integer. Rutrum ut est morbi facilisis molestie varius aliquam vulputate id. Sit malesuada lectus ultrices nulla tortor vestibulum urna. Sed orci etiam velit non lectus velit tincidunt nunc sed.</p>
                                    <ul>
                                        <li>We find your trainer.</li>
                                        <li>We make your plan.</li>
                                        <li>Take training anywhere.</li>
                                    </ul>
                                    <Link to="/our-program" className="btn-main fade-up">
                                        <span className="btn-quote black-btn-quote">Read More</span>
                                        <span className="orenge_icon icon-black-box">
                                            <IconArrowUpRight size={30} />
                                        </span>
                                    </Link>
                                </div>
                                <div className='stagger'>
                                    <img className='home2About-img2' src="/images/about/home2About-img2.jpg" alt="home2About-img2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ==================== Home2 Training Section ==================== */}
            <section className="home2-training">
                <div className='container'>
                    <OurTraining />
                </div>
            </section>
            {/* ==================== Home2 Trainer Section ==================== */}
            <section className="home2-trainer overflow-hidden">
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4 our-trainerc-la'>
                            <div>
                                <p className="sub-heading-section split-text">Our Trainers</p>
                                <h2 className="section-heading split-text">MEET OUR SKILLED TEAM</h2>
                            </div>
                            <Link to="/our-program" className="btn-main anim anim--3">
                                <span className="btn-quote black-btn-quote">View All</span>
                                <span className="orenge_icon icon-black-box">
                                    <IconArrowUpRight size={30} />
                                </span>
                            </Link>
                        </div>
                        <div className='col-lg-8'>
                            <TrainersSection2 />
                        </div>
                    </div>
                </div>
            </section>
            {/* ==================== BMI Calculator Section ==================== */}
            <section className="bmi-calc-section">
                <div className='container'>
                    <BMICalculator />
                </div>
            </section>
            {/* ==================== Counter Section ==================== */}
            <section className="counter-section">
                <div className="container">
                    <CounterSection />
                </div>
            </section>
            {/* ==================== Video Section ==================== */}
            <section className="VideoPopUpSection" id="VideoPopUpSection2">
                <VideoSection />
            </section>
            {/* ==================== Testimonial Section ==================== */}
            <section className="testimonial2-section">
                <div className="container">
                    <Home2Testimonial />
                </div>
            </section>
            {/* ==================== Pricing Section ==================== */}
            <section className="pricing-section2">
                <div className="container">
                    <p className="sub-heading-section split-text">Pricing Plans</p>
                    <h2 className="section-heading split-text bugt">FIND PERFECT PLAN</h2>
                    <PricingSection1 />
                </div>
            </section>
            {/* ==================== Pricing Section ==================== */}
            <section className="home2-blog-section pb-0">
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-5 col-lg-4'>
                            <div className='sticky-text'>
                                <p className="sub-heading-section split-text">Latest News</p>
                                <h2 className="section-heading split-text bugt">OUR LATEST NEWS.</h2>
                                <Link to="/our-program" className="btn-main anim anim--3">
                                    <span className="btn-quote black-btn-quote">View More</span>
                                    <span className="orenge_icon icon-black-box">
                                        <IconArrowUpRight size={30} />
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className='col-xl-7 col-lg-8'>
                            <BlogSection2 />
                        </div>
                    </div>
                </div>
            </section>
            {/* ==================== Instagram Section ==================== */}
            <section className="insta-section">
                <InstaMaquee />
            </section>
        </>
    )
};
export default Home2;