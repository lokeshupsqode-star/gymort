import React, { useEffect, useCallback } from "react";
import type { GalleryImage } from "@/component/gallery/types";


interface LightboxProps {
    images: GalleryImage[];
    activeIndex: number;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({
    images,
    activeIndex,
    onClose,
    onPrev,
    onNext,
}) => {
    const image = images[activeIndex];

    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") onPrev();
            if (e.key === "ArrowRight") onNext();
        },
        [onClose, onPrev, onNext]
    );

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [handleKeyDown]);

    if (!image) return null;

    return (
        <div
            className="lb-overlay"
            role="dialog"
            aria-modal="true"
            aria-label={image.title}
            onClick={onClose}
        >
            <button
                type="button"
                className="lb-close"
                onClick={onClose}
                aria-label="Close gallery"
            >
                <svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" /></svg>
            </button>

            <button
                type="button"
                className="lb-arrow lb-arrow-prev"
                onClick={(e) => {
                    e.stopPropagation();
                    onPrev();
                }}
                aria-label="Previous image"
            >
                <svg viewBox="0 0 24 24"><path d="M15 4l-8 8 8 8" /></svg>
            </button>

            <figure className="lb-figure" onClick={(e) => e.stopPropagation()}>
                <img src={image.src} alt={image.alt} className="lb-img" />
                <figcaption className="lb-caption">
                    {image.title}
                    <span className="lb-counter">
                        {activeIndex + 1} / {images.length}
                    </span>
                </figcaption>
            </figure>

            <button
                type="button"
                className="lb-arrow lb-arrow-next"
                onClick={(e) => {
                    e.stopPropagation();
                    onNext();
                }}
                aria-label="Next image"
            >
                <svg viewBox="0 0 24 24"><path d="M9 4l8 8-8 8" /></svg>
            </button>
        </div>
    );
};

export default Lightbox;