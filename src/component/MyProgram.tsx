import { useState } from "react";

interface ClassSlot {
    id: string;
    number: string; // "01" ... "05"
    day: string;
    startMin: number;
    endMin: number;
    title: string;
    featured?: boolean; // orange highlight, matches the reference design
    image: string; // photo shown when this row is hovered
}

const toMin = (h: number, m: number) => h * 60 + m;

const SCHEDULE: ClassSlot[] = [
    {
        id: "bb",
        number: "01",
        day: "MON",
        startMin: toMin(12, 0),
        endMin: toMin(14, 0),
        title: "Body building",
        image: "/images/program/myProgramImg2.png",
    },
    {
        id: "wl",
        number: "02",
        day: "TUE",
        startMin: toMin(14, 0),
        endMin: toMin(16, 0),
        title: "Weight lifting",
        featured: true,
        image: "/images/program/myProgramImg1.png",
    },
    {
        id: "ms",
        number: "03",
        day: "WED",
        startMin: toMin(16, 0),
        endMin: toMin(18, 0),
        title: "Musculation",
        image: "/images/program/myProgramImg3.png",
    },
    {
        id: "yg",
        number: "04",
        day: "THU",
        startMin: toMin(18, 0),
        endMin: toMin(20, 0),
        title: "Classic yoga",
        image: "/images/program/myProgramImg4.png",
    },
    {
        id: "cd",
        number: "05",
        day: "FRI",
        startMin: toMin(6, 0),
        endMin: toMin(7, 0),
        title: "Cardio",
        image: "/images/program/myProgramImg5.png",
    },
];

const fmtTime = (min: number) => {
    const h = Math.floor(min / 60) % 24;
    const m = min % 60;
    const period = h >= 12 ? "PM" : "AM";
    const h12 = h % 12 === 0 ? 12 : h % 12;
    return `${h12}:${m.toString().padStart(2, "0")} ${period}`;
};

export default function MyProgram() {
    const [layerA, setLayerA] = useState(SCHEDULE[0].image);
    const [layerB, setLayerB] = useState(SCHEDULE[0].image);
    const [activeLayer, setActiveLayer] = useState<"a" | "b">("a");

    const showImage = (src: string) => {
        const currentSrc = activeLayer === "a" ? layerA : layerB;
        if (src === currentSrc) return;

        if (activeLayer === "a") {
            setLayerB(src);
            setActiveLayer("b");
        } else {
            setLayerA(src);
            setActiveLayer("a");
        }
    };

    return (
        <div className="gs-root">
            <div className="gs-body">
                {/* schedule column */}
                <div className="gs-schedule">
                    {SCHEDULE.map((slot) => (
                        <div
                            key={slot.id}
                            className="gs-row"
                            onMouseEnter={() => showImage(slot.image)}
                            onMouseLeave={() => showImage(SCHEDULE[0].image)}
                        >
                            <div className="gs-number">{slot.number}</div>

                            <div className="gs-content">
                                <span className={`gs-time-pill ${slot.featured ? "" : ""}`}>
                                    {slot.day}: {fmtTime(slot.startMin)} – {fmtTime(slot.endMin)}
                                </span>

                                <h3 className={`gs-title ${slot.featured ? "" : ""}`}>
                                    {slot.title.toUpperCase()}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>


                <div className="gs-card-wrap">
                    <div className="gs-tape" />
                    <div className="gs-card">
                        <div className="gs-photo-stack">
                            <img className={`gs-photo ${activeLayer === "a" ? "is-active" : ""}`} src={layerA} alt="" />
                            <img className={`gs-photo ${activeLayer === "b" ? "is-active" : ""}`} src={layerB} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}