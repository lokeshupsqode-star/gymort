import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimations = () => {
    const { pathname } = useLocation();

    useLayoutEffect(() => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

        const ctx = gsap.context(() => {
            /* =========================  FADE / BASIC ANIMATIONS ========================== */
            const basic = [
                { cls: ".fade-up", x: 0, y: 80 },
                { cls: ".fade-down", x: 0, y: -80 },
                { cls: ".fade-left", x: -80, y: 0 },
                { cls: ".fade-right", x: 80, y: 0 },
                { cls: ".scale-up", scale: 0.8 },
                { cls: ".scale-down", scale: 1.2 },
                { cls: ".zoom-in", scale: 0.5 },
                { cls: ".zoom-out", scale: 1.3 },
                { cls: ".rotate-in", rotation: -15, scale: 0.8 },
                { cls: ".bounce-in", y: 100, scale: 0.6 },
            ];

            basic.forEach(({ cls, ...vars }) => {
                gsap.utils.toArray(cls).forEach((el) => {
                    gsap.from(el as HTMLElement, {
                        ...vars,
                        opacity: 0,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: el as HTMLElement,
                            start: "top 85%",
                        },
                    });
                });
            });

            /* ========================= BLUR IN ========================== */
            gsap.utils.toArray(".blur-in").forEach((el) => {
                gsap.from(el as HTMLElement, {
                    opacity: 0,
                    filter: "blur(10px)",
                    y: 30,
                    duration: 1,
                    scrollTrigger: {
                        trigger: el as HTMLElement,
                        start: "top 85%",
                    },
                });
            });

            /* ========================= STAGGER  ========================== */

            gsap.utils.toArray(".stagger").forEach((parent) => {
                gsap.from((parent as HTMLElement).children, {
                    opacity: 0,
                    y: 40,
                    stagger: 0.15,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: parent as HTMLElement,
                        start: "top 85%",
                    },
                });
            });

            /* =========================  SPLIT TEXT (HEADINGS) ========================== */
            gsap.utils.toArray(".split-text").forEach((el) => {
                const split = new SplitType(el as HTMLElement, {
                    types: "words,chars",
                });

                gsap.from(split.chars, {
                    opacity: 0,
                    y: 50,
                    rotateX: -90,
                    stagger: 0.02,
                    duration: 1,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: el as HTMLElement,
                        start: "top 85%",
                    },
                });
            });

            /* ========================= IMAGE REVEAL ========================== */
            const imageAnimations = [
                { cls: ".img-zoom", scale: 0.8 },
                { cls: ".img-blur", filter: "blur(10px)", scale: 1.1 },
            ];

            imageAnimations.forEach(({ cls, ...vars }) => {
                gsap.utils.toArray(cls).forEach((el) => {
                    gsap.from(el as HTMLElement, {
                        ...vars,
                        opacity: 0,
                        duration: 2.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: el as HTMLElement,
                            start: "top 85%",
                        },
                    });
                });
            });
        });

        const raf = requestAnimationFrame(() => ScrollTrigger.refresh());
        return () => {
            cancelAnimationFrame(raf);
            ctx.revert();
        };
    }, [pathname]);

    return null;
};

export default ScrollAnimations;