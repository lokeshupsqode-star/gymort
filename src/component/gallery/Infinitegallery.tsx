import React, { useEffect, useRef, useState, useCallback } from "react";
import galleryData from "@/data/galleryData.json";
import type { GalleryImage } from "@/component/gallery/types";
import Lightbox from "@/component/gallery/LightBox";

const images = galleryData as GalleryImage[];

const SPEED_PX_PER_SEC = 50; // auto-scroll speed
const RESUME_DELAY_MS = 1200; // how long to wait after manual nav before auto-scroll resumes

const InfiniteGallery: React.FC = () => {
    const trackRef = useRef<HTMLDivElement | null>(null);
    const offsetRef = useRef(0);
    const halfWidthRef = useRef(0);
    const rafRef = useRef<number | null>(null);
    const lastTsRef = useRef<number | null>(null);
    const hoverPausedRef = useRef(false);
    const manualPausedRef = useRef(false);
    const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const doubled = [...images, ...images];

    const measure = useCallback(() => {
        if (trackRef.current) {
            halfWidthRef.current = trackRef.current.scrollWidth / 2;
        }
    }, []);

    useEffect(() => {
        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, [measure]);

    useEffect(() => {
        const tick = (ts: number) => {
            if (lastTsRef.current === null) lastTsRef.current = ts;
            const dt = (ts - lastTsRef.current) / 1000;
            lastTsRef.current = ts;

            if (!hoverPausedRef.current && !manualPausedRef.current && halfWidthRef.current > 0) {
                offsetRef.current += SPEED_PX_PER_SEC * dt;
                if (offsetRef.current >= halfWidthRef.current) {
                    offsetRef.current -= halfWidthRef.current;
                }
                if (trackRef.current) {
                    trackRef.current.style.transform = `translateX(${-offsetRef.current}px)`;
                }
            }
            rafRef.current = requestAnimationFrame(tick);
        };
        rafRef.current = requestAnimationFrame(tick);
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    const pauseTemporarily = () => {
        manualPausedRef.current = true;
        if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
        resumeTimerRef.current = setTimeout(() => {
            manualPausedRef.current = false;
            resumeTimerRef.current = null;
        }, RESUME_DELAY_MS);
    };

    const nudge = (direction: 1 | -1) => {
        pauseTemporarily();
        const itemWidth = halfWidthRef.current / images.length;
        let next = offsetRef.current + direction * itemWidth;
        if (halfWidthRef.current > 0) {
            next = ((next % halfWidthRef.current) + halfWidthRef.current) % halfWidthRef.current;
        }
        offsetRef.current = next;
        if (trackRef.current) {
            trackRef.current.style.transition = "transform 0.4s ease";
            trackRef.current.style.transform = `translateX(${-offsetRef.current}px)`;
            window.setTimeout(() => {
                if (trackRef.current) trackRef.current.style.transition = "";
            }, 400);
        }
    };

    const openLightbox = (realIndex: number) => {
        manualPausedRef.current = true;
        setLightboxIndex(realIndex);
    };

    const closeLightbox = () => {
        setLightboxIndex(null);
        pauseTemporarily();
    };

    const showPrev = () =>
        setLightboxIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));

    const showNext = () =>
        setLightboxIndex((i) => (i === null ? null : (i + 1) % images.length));

    return (
        <div className="ig-wrapper">
            <button type="button" className="ig-arrow ig-arrow-left" onClick={() => nudge(-1)}
                aria-label="Scroll gallery left"
            >
                <svg viewBox="0 0 24 24"><path d="M15 4l-8 8 8 8" /></svg>
            </button>

            <div className="ig-viewport"
                onMouseEnter={() => (hoverPausedRef.current = true)}
                onMouseLeave={() => (hoverPausedRef.current = false)}
            >
                <div className="ig-track" ref={trackRef}>
                    {doubled.map((img, i) => (
                        <button
                            type="button"
                            key={`${img.id}-${i}`}
                            className="ig-item"
                            onClick={() => openLightbox(i % images.length)}
                            aria-label={`Open ${img.title}`}
                        >
                            <img src={img.thumb} alt={img.alt} className="ig-item-img" draggable={false} />
                            <span className="ig-item-overlay" aria-hidden="true">
                                <svg viewBox="0 0 24 24" className="ig-expand-icon">
                                    <path d="M9 3H4v5M15 3h5v5M9 21H4v-5M15 21h5v-5" />
                                </svg>
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            <button type="button" className="ig-arrow ig-arrow-right" onClick={() => nudge(1)}
                aria-label="Scroll gallery right">
                <svg viewBox="0 0 24 24"><path d="M9 4l8 8-8 8" /></svg>
            </button>

            {lightboxIndex !== null && (
                <Lightbox
                    images={images}
                    activeIndex={lightboxIndex}
                    onClose={closeLightbox}
                    onPrev={showPrev}
                    onNext={showNext}
                />
            )}
        </div>
    );
};

export default InfiniteGallery;