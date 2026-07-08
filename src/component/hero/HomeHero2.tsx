import { useRef, useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, EffectFade } from "swiper/modules";
import { IconPhoneCall, IconArrowUpRight } from '@tabler/icons-react';

import "swiper/css";
import "swiper/css/effect-fade";
import slides from "@/data/HomeHeroSlidesData.json";

export interface SlideData {
    id: string;
    eyebrow: string;
    titleLine1: string;
    image: string;
    video?: string;
    ctaLabel: string;
    ctaHref: string;
}

const slideData = slides as SlideData[];

const HomeHero2: React.FC = () => {
    const swiperRef = useRef<SwiperType | null>(null);
    const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});
    const [activeIndex, setActiveIndex] = useState(0);
    const [animKey, setAnimKey] = useState(0);

    const handleSlideChange = useCallback((swiper: SwiperType) => {
        setActiveIndex(swiper.realIndex);
        setAnimKey((k) => k + 1);

        Object.entries(videoRefs.current).forEach(([idx, el]) => {
            if (!el) return;
            if (Number(idx) === swiper.realIndex) {
                el.currentTime = 0;
                el.play().catch(() => { });
            } else {
                el.pause();
            }
        });
    }, []);

    useEffect(() => {
        const initialVideo = videoRefs.current[activeIndex];
        if (initialVideo) initialVideo.play().catch(() => { });
    }, [activeIndex]);

    return (
        <div className="hero-slider2" aria-label="Hero">
            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                speed={1000}
                loop
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                onSlideChange={handleSlideChange}
                className="hero-slider2__swiper"
            >
                {slideData.map((slide, index) => (
                    <SwiperSlide key={slide.id}>
                        {({ isActive }) => (
                            <div className="hero-slide2">
                                {slide.video ? (
                                    <video
                                        ref={(el) => { videoRefs.current[index] = el; }}
                                        className={`hero-slide2__bg hero-slide2__bg--video ${isActive ? "is-active" : ""}`}
                                        src={slide.video}
                                        poster={slide.image}
                                        muted
                                        loop
                                        playsInline
                                        autoPlay={isActive}
                                    />
                                ) : (
                                    <div
                                        className={`hero-slide2__bg ${isActive ? "is-active" : ""}`}
                                        style={{ backgroundImage: `url(${slide.image})` }}
                                    />
                                )}
                                <div className="hero-slide2__overlay" />
                                {isActive && (
                                    <div className="hero-slide2__content" key={animKey}>
                                        <div className="container">
                                            <p className="hero-slide__eyebrow anim anim--1">
                                                {slide.eyebrow}
                                            </p>
                                            <h1 className="hero-slide__title anim anim--2">
                                                {slide.titleLine1}
                                            </h1>
                                            <div className="hero-btn-flx">
                                                <Link to="/our-program" className="btn-main anim anim--3">
                                                    <span className="btn-quote">{slide.ctaLabel}</span>
                                                    <span className="orenge_icon">
                                                        <IconArrowUpRight size={30} />
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
            <a href="tel:+12345678899" className="hero-slider__phone">
                <IconPhoneCall size={30} /> +1 234 567 8899
            </a>
            {/* Slide thumbnails strip */}
            <div className="hero-slider2__thumbs">
                {slideData.map((slide, index) => (
                    <button
                        type="button"
                        key={slide.id}
                        className={`hero-slider2__thumb ${index === activeIndex ? "is-active" : ""}`}
                        onClick={() => swiperRef.current?.slideToLoop(index)}
                        style={{ backgroundImage: `url(${slide.image})` }}
                        aria-label={`Go to slide ${index + 1}`}
                    >
                        <span className="hero-slider2__thumb-label">{String(index + 1).padStart(2, "0")}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default HomeHero2;