import { useEffect, useRef } from "react";


type CursorType = "default" | "link" | "button" | "text" | "none" | "special";

interface CursorConfig {
    type: CursorType;
    label: string;
}

const DEFAULT_LABELS: Record<CursorType, string> = {
    default: "",
    link: "VIEW",
    button: "PRESS",
    text: "",
    none: "",
    special: "JOIN NOW",
};

const INTERACTIVE_SELECTOR =
    "a, button, [data-cursor], [role='button'], input, textarea, select, .cursor-link, .cursor-button";

function resolveCursorConfig(target: Element | null): CursorConfig {
    if (!target) return { type: "default", label: "" };

    const el = target.closest(INTERACTIVE_SELECTOR);
    if (!el) return { type: "default", label: "" };

    const explicit = el.getAttribute("data-cursor") as CursorType | null;
    const customLabel = el.getAttribute("data-cursor-label");

    let type: CursorType;

    if (explicit) {
        type = explicit;
    } else if (el.matches("input, textarea, select")) {
        type = "text";
    } else if (el.matches("button, [role='button']") || el.classList.contains("cursor-button")) {
        type = "button";
    } else if (el.matches("a") || el.classList.contains("cursor-link")) {
        type = "link";
    } else {
        type = "default";
    }
    return { type, label: customLabel ?? DEFAULT_LABELS[type] };
}

export default function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const labelRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
        if (isCoarsePointer) return;

        document.body.classList.add("gym-cursor-active");
        let currentType: CursorType = "default";

        const applyType = (type: CursorType, label: string) => {
            if (type === currentType) return;
            currentType = type;

            const dotEl = dotRef.current;
            const labelEl = labelRef.current;
            if (!dotEl || !labelEl) return;

            dotEl.dataset.state = type;
            labelEl.textContent = label;
            document.body.classList.toggle("gym-cursor-active", type !== "none");
        };

        const handleMove = (e: MouseEvent) => {
            if (dotRef.current) {
                dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
            }
            const config = resolveCursorConfig(e.target as Element);
            applyType(config.type, config.label);
        };

        const handleDown = () => dotRef.current?.classList.add("is-pressed");
        const handleUp = () => dotRef.current?.classList.remove("is-pressed");

        const handleWindowLeave = () => dotRef.current?.classList.add("is-hidden");
        const handleWindowEnter = () => dotRef.current?.classList.remove("is-hidden");

        window.addEventListener("mousemove", handleMove, { passive: true });
        window.addEventListener("mousedown", handleDown);
        window.addEventListener("mouseup", handleUp);
        document.addEventListener("mouseleave", handleWindowLeave);
        document.addEventListener("mouseenter", handleWindowEnter);

        return () => {
            window.removeEventListener("mousemove", handleMove);
            window.removeEventListener("mousedown", handleDown);
            window.removeEventListener("mouseup", handleUp);
            document.removeEventListener("mouseleave", handleWindowLeave);
            document.removeEventListener("mouseenter", handleWindowEnter);
            document.body.classList.remove("gym-cursor-active");
        };
    }, []);

    return (
        <div ref={dotRef} className="gym-cursor-dot" data-state="default">
            <span ref={labelRef} className="gym-cursor-label" />
        </div>
    );
}