import React from 'react'
import HomeHero3 from '@/component/hero/HomeHero3'
import FeaturesectionYoga from '@/component/FeaturesectionYoga'
import YogaAccordion from '@/component/YogaAccordion'
import CounterSection from '@/component/CounterSection'
import OurProcessSection from '@/component/OurProcessSection'
import VideoSection from '@/component/VideoSection'
import PricingSection1 from '@/component/pricing/PricingSection1'
import OurProgram from '@/component/OurProgram'
import Home2Testimonial from '@/component/testimonial/Home2Testimonial'
import InstaMaquee from '@/component/InstaMaquee'

const Home3: React.FC = () => {
    return (
        <>
            {/* ==================== Home 2 Hero Section ==================== */}
            <section className="home2-hero">
                <HomeHero3 />
            </section>
            {/* ==================== Feature Section ==================== */}
            <section className="home1-feature-section">
                <div className="container">
                    <p className="sub-heading-section split-text">Just Breathe</p>
                    <h2 className="section-heading split-text">TAKE CHARGE OF YOUR LIFE</h2>
                    <FeaturesectionYoga />
                </div>
            </section>
            {/* ==================== Yoga Accordion Section ==================== */}
            <section className="yoga-accordion-section pt-0">
                <p className="sub-heading-section split-text">Our Trainings</p>
                <h2 className="section-heading split-text">CHOOSE YOUR YOGA CLASS</h2>
                <YogaAccordion />
            </section>
            {/* ==================== Counter Section ==================== */}
            <section className="counter-section pt-0">
                <div className="container">
                    <CounterSection />
                </div>
            </section>
            {/* ==================== Home1 Process Section ==================== */}
            <section className="home1-process-section pt-0">
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
            <section className="VideoPopUpSection" id="VideoPopUpSection3">
                <VideoSection />
            </section>
            {/* ==================== Pricing Section ==================== */}
            <section className="pricing-section">
                <div className="container">
                    <p className="sub-heading-section split-text">Pricing Plans</p>
                    <h2 className="section-heading split-text bugt">CHOOSE YOUR PERSONAL PLAN OF TRAINING.</h2>
                    <PricingSection1 />
                </div>
            </section>
            {/* ==================== Program Section ==================== */}
            <section className='ourProgream-section'>
                <div className="container">
                    <p className="sub-heading-section split-text">Our Programs</p>
                    <h2 className="section-heading split-text">MEET OUR BEST PROGRAMS FOR YOUR BEST RESULITS</h2>
                    <OurProgram />
                </div>
            </section>
            {/* ==================== Testimonial Section ==================== */}
            <section className="testimonial2-section pb-0">
                <div className="container home3-testimonial-slider-img">
                    <Home2Testimonial />
                </div>
            </section>
            {/* ==================== Instagram Section ==================== */}
            <section className="insta-section">
                <InstaMaquee />
            </section>
        </>
    )
}

export default Home3