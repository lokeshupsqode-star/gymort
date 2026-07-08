import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

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


const TrainerSection1: React.FC = () => {
    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={3}
                loop={true}
                speed={2500}
                spaceBetween={30}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: ".trainer-pagination",
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1200: {
                        slidesPerView: 3,
                    },
                }}
                className="traning_slider"
            >
                {trainersData.map((trainer: Trainer) => (
                    <SwiperSlide key={trainer.id}>
                        <div className="traning_slider_item">
                            <div className="triners_img">
                                <img src={trainer.image} alt={trainer.name} />
                            </div>
                            <div className="triners_info">
                                <Link to='#' className="triners_name">{trainer.name}</Link>
                                <p className="boxtrainer">{trainer.role}</p>
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
                                                        aria-label={`${trainer.name} on ${socialIcons[platform].label}`}
                                                    >
                                                        <img src={socialIcons[platform].src} alt={socialIcons[platform].label} />
                                                    </a>
                                                </li>
                                            )
                                            )
                                    }
                                </ul>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <div className="trainer-pagination"></div>
            </Swiper>
        </>
    );
};
export default TrainerSection1;