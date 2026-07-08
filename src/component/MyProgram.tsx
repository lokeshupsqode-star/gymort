import { useState } from "react";
import myProgramData from "@/data/myProgram.json";

interface ClassSlot {
  id: string;
  number: string;
  day: string;
  startMin: number;
  endMin: number;
  title: string;
  featured?: boolean;
  image: string;
}

const SCHEDULE = myProgramData as ClassSlot[];

const fmtTime = (min: number) => {
  const h = Math.floor(min / 60) % 24;
  const m = min % 60;
  const period = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${m.toString().padStart(2, "0")} ${period}`;
};

const MyProgram: React.FC = () => {
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
                <span className="gs-time-pill">
                  {slot.day}: {fmtTime(slot.startMin)} – {fmtTime(slot.endMin)}
                </span>

                <h3 className="gs-title">{slot.title.toUpperCase()}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="gs-card-wrap">
          <div className="gs-tape" />
          <div className="gs-card">
            <div className="gs-photo-stack">
              <img
                className={`gs-photo ${activeLayer === "a" ? "is-active" : ""}`}
                src={layerA}
                alt=""
              />
              <img
                className={`gs-photo ${activeLayer === "b" ? "is-active" : ""}`}
                src={layerB}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProgram;
