import { useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, EffectFade } from "swiper/modules";
import { IconArrowNarrowLeft, IconArrowNarrowRight, IconArrowUpRight } from '@tabler/icons-react';

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

const HomeHero3: React.FC = () => {
    const swiperRef = useRef<SwiperType | null>(null);

    const [animKey, setAnimKey] = useState(0);

    const handleSlideChange = useCallback((swiper: SwiperType) => {
        (swiper.realIndex);
        setAnimKey((k) => k + 1);
    }, []);

    const goPrev = () => swiperRef.current?.slidePrev();
    const goNext = () => swiperRef.current?.slideNext();

    return (
        <div className="hero-slider hero-slider-3" aria-label="Hero">
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
            {/* Controls */}
            <div className="hero-slider__controls3">
                <button type="button" className="hero-slider__nav-btn hero-slider__nav-btn-prev" onClick={goPrev} aria-label="Previous slide">
                    <IconArrowNarrowLeft />
                </button>
                <button type="button" className="hero-slider__nav-btn hero-slider__nav-btn-next" onClick={goNext} aria-label="Next slide">
                    <IconArrowNarrowRight />
                </button>
            </div>
        </div>
    );
};

export default HomeHero3;