import React from 'react'
import { Link } from 'react-router-dom';

const texts = [
    "ON-DEMAND WORKOUTS",
    "PERSONAL TRAINERS",
    "OUTDOOR & ONLINE TRAINERS",
    "LIVE CLASSES"
];

const Footer: React.FC = () => {
    return (
        <>
            {/* ======== Marquee Text ======== */}
            <div className="text_marquee">
                <div className="text_track">
                    {[...texts, ...texts].map((text, index) => (
                        <span key={index} className="marquee_text">
                            {text} <span className="separator">*</span>
                        </span>
                    ))}
                </div>
            </div>
            {/* ======== Footer ======== */}
            <footer className="footer_sec">
                <div className="container">
                    <div className="footer_upper_big_text">
                        <Link to="/contact-us" className="contact_hover_btn" data-cursor="special" data-cursor-label="Contact Us">
                            <svg viewBox="0 0 1300 128">
                                <symbol id="s-text">
                                    <text textAnchor="middle" x="50%" y="50%" dy=".35em">LET'S DISCUSS</text>
                                </symbol>
                                <use className="text" href="#s-text" />
                                <use className="text" href="#s-text" />
                                <use className="text" href="#s-text" />
                                <use className="text" href="#s-text" />
                                <use className="text" href="#s-text" />
                            </svg>
                        </Link>
                    </div>
                    <div className="footer_mid_area">
                        <div className="row align-items-center">
                            <div className="col-xl-4 col-lg-3 col-sm-6">
                                <div className="footer_logo_area">
                                    <Link to="/" className="footer_logo">
                                        <img src="/images/logos/gymort_logo.png" alt="gymort_logo" />
                                    </Link>
                                    <p className="fo-fre">Please fell free to send us an email at <a href="mailto:hello@gymort.com" className="color_lightgray triners_icons">hello@gymort.com</a> for any additional inquiries</p>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-6">
                                <div className="footer_quick_contact">
                                    <h6 className="footer-callus">CALL US</h6>
                                    <div className="footer_contact">
                                        <a href="tel:+12345678899">+1 234 567 8899</a>
                                        <a href="tel:+13456789900">+1 345 678 9900</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="footer_gym_time">
                                    <h6 className="footer-callus">WE ARE OPEN</h6>
                                    <p className="footer_contact">Mon - Fri: 05:00 AM - 10:00 PM</p>
                                    <p className="footer_contact">Sat - Sun: 05:00 AM - 01:00 PM</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-sm-6">
                                <div className="footer_address pb-30">
                                    <h6 className="footer-callus">WE ARE HERE</h6>
                                    <p className="footer_contact">27 West 24th St Floor 2 New Your, NY 10010</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="footer_bottom_area">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <p className="copyrighht">Copyright 2024 © Design by <a href="https://1.envato.market/website-portfolio" target="_blank">The_Krishna</a></p>
                            </div>
                            <div className="col-md-6">
                                <ul className="footer_social_icon">
                                    <li>
                                        <a href="https://www.facebook.com/" className="triners_icons" target="_blank">
                                            <img src="/images/svg/Facebook-1.svg" alt="Facebook-1" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://x.com/" className="triners_icons" target="_blank">
                                            <img src="/images/svg/Twitter-1.svg" alt="Twitter-1" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" className="triners_icons" target="_blank">
                                            <img src="/images/svg/Instagram-1.svg" alt="Instagram-1" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com" className="triners_icons" target="_blank">
                                            <img src="/images/svg/YouTube-1.svg" alt="YouTube-1" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>


        </>
    );
};

export default Footer;