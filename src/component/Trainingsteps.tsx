import { useEffect, useRef, useState } from "react";
import CONTENT from "@/data/training-steps.content.json";

/* ------------------------------------------------------------------ */
/*  Types                                                               */
/* ------------------------------------------------------------------ */

interface Step {
  id: string;
  number: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  imagePosition: "left" | "right";
}

interface ContentData {
  steps: Step[];
}

const DATA = CONTENT as ContentData;

/* ------------------------------------------------------------------ */
/*  Simple fade-up reveal on scroll                                     */
/* ------------------------------------------------------------------ */

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

/* ------------------------------------------------------------------ */
/*  One row: image on one side, number + title + body on the other     */
/* ------------------------------------------------------------------ */

function StepRow({ step }: { step: Step }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const imageFirst = step.imagePosition === "left";

  return (
    <div
      ref={ref}
      className={`step-row ${visible ? "step-row--in" : ""} ${
        imageFirst ? "step-row--image-left" : "step-row--image-right"
      }`}
    >
      <div className="step-image-wrap">
        <img
          src={step.image}
          alt={step.imageAlt}
          className="step-image"
          loading="lazy"
        />
      </div>

      <div className="step-text">
        <span className="step-number">{step.number}</span>
        <h3 className="step-title">{step.title}</h3>
        <p className="step-body">{step.body}</p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Section                                                             */
/* ------------------------------------------------------------------ */

export default function TrainingSteps() {
  return (
    <section className="training-steps">
      {DATA.steps.map((step) => (
        <StepRow key={step.id} step={step} />
      ))}
    </section>
  );
}
