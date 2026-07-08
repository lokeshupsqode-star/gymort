import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { IconArrowUpLeft, IconArrowUpRight } from "@tabler/icons-react";

import styleData from "@/data/YogaAccordionData.json";

export interface YogaStyleData {
    id: string;
    label: string;
    image: string;
    description: string[];
    ctaLabel: string;
    ctaHref: string;
}

const styles = styleData as YogaStyleData[];

const YogaAccordion: React.FC = () => {
    const [activeId, setActiveId] = useState<string>(styles[1]?.id ?? styles[0].id);

    const nodes: ReactNode[] = [];

    styles.forEach((item) => {
        const isActive = item.id === activeId;

        nodes.push(
            <button
                type="button"
                key={item.id}
                role="tab"
                aria-selected={isActive}
                className={`yoga-accordion__item ${isActive ? "is-active" : ""}`}
                onClick={() => setActiveId(item.id)}
            >
                <span
                    className="yoga-accordion__image"
                    style={{ backgroundImage: `url(${item.image})` }}
                />
                <span className="yoga-accordion__tab">
                    <span className="yoga-accordion__arrow">
                        {isActive ? <IconArrowUpRight size={36} /> : <IconArrowUpLeft size={36} />}
                    </span>
                    <span className="yoga-accordion__label">{item.label}</span>
                </span>
            </button>
        );


        if (isActive) {
            nodes.push(
                <div className="yoga-accordion__panel" key={`panel-${item.id}`}>
                    {item.description.map((paragraph, i) => (
                        <p key={i} className={`pb-2 anim anim--${i + 1}`}>
                            {paragraph}
                        </p>
                    ))}
                    <Link to={item.ctaHref} className={`btn-main anim anim--${item.description.length + 1}`}>
                        <span className="btn-quote black-btn-quote">{item.ctaLabel}</span>
                        <span className="orenge_icon icon-black-box">
                            <IconArrowUpRight size={30} />
                        </span>
                    </Link>
                </div>
            );
        }
    });

    return (

        <div className="yoga-accordion__rail" role="tablist" aria-orientation="horizontal">
            {nodes}
        </div>
    );
};

export default YogaAccordion;