import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import trainersData from "@/data/trainersData.json";

export interface TrainerSocials {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
}

export interface Trainer {
    id: number;
    name: string;
    role: string;
    image: string;
    image2?: string;
    socials?: TrainerSocials;
}

const socialIcons: Record<keyof TrainerSocials, { src: string; label: string }> = {
    facebook: { src: "/images/svg/Facebook-1.svg", label: "Facebook" },
    twitter: { src: "/images/svg/Twitter-1.svg", label: "Twitter" },
    instagram: { src: "/images/svg/Instagram-1.svg", label: "Instagram" },
    linkedin: { src: "/images/svg/Linkedin-1.svg", label: "Linkedin" },
    youtube: { src: "/images/svg/YouTube-1.svg", label: "YouTube" },
};

interface TrainerSection2Props {
    section?: "first" | "second";
}

const TrainerSection2: React.FC<TrainerSection2Props> = ({ section = "second" }) => {
    return (
        <>
            <Swiper
                modules={[Autoplay]}
                slidesPerView={3}
                loop={true}
                speed={2500}
                spaceBetween={30}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    575: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 2.8,
                    },
                }}
                className="traning_slider traning_slider2"
            >
                {trainersData.map((trainer) => {
                    const imageSrc = section === "second" && trainer.image2 ? trainer.image2 : trainer.image;

                    return (
                        <SwiperSlide key={trainer.id}>
                            <div className='slider-main-card'>
                                <div className="slider-main-card-sub">
                                    <img className='trainer2-section-imges' src={imageSrc} alt={trainer.name} />
                                    <ul>
                                        {trainer.socials &&
                                            (Object.keys(trainer.socials) as (keyof TrainerSocials)[])
                                                .filter((platform) => trainer.socials?.[platform])
                                                .map((platform) => (
                                                    <li key={platform}>
                                                        <a
                                                            href={trainer.socials?.[platform]}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            aria-label={`${trainer.name} on ${socialIcons[platform].label}`}>
                                                            <img src={socialIcons[platform].src} alt={socialIcons[platform].label} />
                                                        </a>
                                                    </li>
                                                )
                                                )
                                        }
                                    </ul>
                                    <button type="button" className="trainer-plus-btn" aria-label={`Show social links for ${trainer.name}`}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                                        </svg>
                                    </button>
                                </div>
                                <Link to='#' className="triners_name">{trainer.name}</Link>
                                <p className="boxtrainer">{trainer.role}</p>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    )
};

export default TrainerSection2;