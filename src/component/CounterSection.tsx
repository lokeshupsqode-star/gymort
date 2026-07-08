import { useEffect, useRef, useState } from "react";

interface CounterItem {
    value: number;
    suffix: string;
    title: string;
    bgText: string;
}

const counterData: CounterItem[] = [
    {
        value: 10,
        suffix: "",
        title: "Years of Experience",
        bgText: "10",
    },
    {
        value: 20,
        suffix: "+",
        title: "Skilled Trainers",
        bgText: "20+",
    },
    {
        value: 8,
        suffix: "k+",
        title: "Calories Burned",
        bgText: "8k+",
    },
    {
        value: 1.1,
        suffix: "k",
        title: "Happy Members",
        bgText: "1.1k",
    },
];

const CounterCard = ({
    item,
    start,
}: {
    item: CounterItem;
    start: boolean;
}) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!start) return;

        let current = 0;
        const increment = item.value / 60;

        const timer = setInterval(() => {
            current += increment;

            if (current >= item.value) {
                current = item.value;
                clearInterval(timer);
            }

            setCount(current);
        }, 30);

        return () => clearInterval(timer);
    }, [start, item.value]);

    return (
        <div className="counter-card" data-bg={item.bgText}>
            <h2>
                {item.value % 1 === 0 ? Math.floor(count) : count.toFixed(1)}
                {item.suffix}
            </h2>
            <p>{item.title}</p>
        </div>
    );
};

const CounterSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [startCounter, setStartCounter] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartCounter(true);
                }
            },
            { threshold: 0.4 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className="counter-card-grid" ref={sectionRef}>
            {counterData.map((item, index) => (
                <CounterCard key={index} item={item} start={startCounter} />
            ))}
        </div>
    );
};

export default CounterSection;