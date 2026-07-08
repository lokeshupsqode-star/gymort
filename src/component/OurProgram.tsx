import { useEffect, useRef, useState } from "react";
import resultsData from "@/data/ourProgramData.json";

export interface OurProgramItem {
    id: number;
    number: string;
    title: string;
    description: string;
    image: string;
}

const results = resultsData as OurProgramItem[];

const OurProgram: React.FC = () => {
    const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [visible, setVisible] = useState<boolean[]>(() => results.map(() => false));

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const idx = Number((entry.target as HTMLElement).dataset.index);
                        setVisible((prev) => {
                            if (prev[idx]) return prev;
                            const next = [...prev];
                            next[idx] = true;
                            return next;
                        });
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.25, rootMargin: "0px 0px -80px 0px" }
        );

        rowRefs.current.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="best-results__list">
            {results.map((item, index) => (
                <div
                    key={item.id}
                    ref={(el) => { rowRefs.current[index] = el; }}
                    data-index={index}
                    className={`best-results__row blur-in ${visible[index] ? "" : ""}`}
                >
                    <div className="best-results__media">
                        <img src={item.image} alt={item.title} loading="lazy" />
                        <span className="best-results__accent" aria-hidden="true">
                            <span className="accent-square accent-square--orange" />
                            <span className="accent-square accent-square--white" />
                        </span>
                    </div>

                    <div className="best-results__content">
                        <span className="best-results__number">{item.number}</span>
                        <h3 className="best-results__title">{item.title}</h3>
                        <span className="best-results__divider" />
                        <p className="best-results__desc">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>

    );
};

export default OurProgram;