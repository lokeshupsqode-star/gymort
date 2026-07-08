import { useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, EffectFade } from "swiper/modules";
import { IconPhoneCall, IconArrowNarrowLeft, IconArrowNarrowRight, IconArrowUpRight } from '@tabler/icons-react';

import "swiper/css";
import "swiper/css/effect-fade";
import slides from "@/data/HomeHeroSlidesData.json";

export interface SlideData {
    id: string;
    eyebrow: string;
    titleLine1: string;
    image: string;
    ctaLabel: string;
    ctaHref: string;
}

const HomeHero1: React.FC = () => {
    const swiperRef = useRef<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [animKey, setAnimKey] = useState(0);

    const handleSlideChange = useCallback((swiper: SwiperType) => {
        setActiveIndex(swiper.realIndex);
        setAnimKey((k) => k + 1);
    }, []);

    const goPrev = () => swiperRef.current?.slidePrev();
    const goNext = () => swiperRef.current?.slideNext();

    const total = slides.length;
    const paddedIndex = String(activeIndex + 1).padStart(2, "0");
    const paddedTotal = String(total).padStart(2, "0");

    return (
        <div className="hero-slider" aria-label="Hero">
            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                speed={900}
                loop
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                onSlideChange={handleSlideChange}
                className="hero-slider__swiper"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        {({ isActive }) => (
                            <div className="hero-slide">
                                <div
                                    className={`hero-slide__bg ${isActive ? "is-active" : ""}`}
                                    style={{ backgroundImage: `url(${slide.image})` }}
                                />
                                <div className="hero-slide__overlay" />
                                {isActive && (
                                    <div className="hero-slide__content" key={animKey}>
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
            {/* Controls */}
            <div className="hero-slider__controls">
                <span className="hero-slider__counter">
                    <span className="hero-slider__counter-current">{paddedIndex}</span>
                    <span className="hero-slider__counter-divider" />
                    <span className="hero-slider__counter-total">{paddedTotal}</span>
                </span>
                <button type="button" className="hero-slider__nav-btn" onClick={goPrev} aria-label="Previous slide">
                    <IconArrowNarrowLeft />
                </button>
                <button type="button" className="hero-slider__nav-btn" onClick={goNext} aria-label="Next slide">
                    <IconArrowNarrowRight />
                </button>
            </div>
        </div>
    );
};

export default HomeHero1;