import { useEffect, useState } from "react";
import { IconChevronsUp } from "@tabler/icons-react";

const BottomToTopButton = () => {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;

            const percent = Math.round((scrollTop / docHeight) * 100);

            setPercentage(percent);

            if (scrollTop > 200) {
                document.body.classList.add("scrolled");
            } else {
                document.body.classList.remove("scrolled");
            }
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="scrolltop_area orangeglow">
            <button
                id="scroll-top-btn"
                onClick={scrollToTop}
                aria-label="Scroll to top"
            >
                <span className="scroll-icon">
                    <IconChevronsUp size={24} />
                </span>

                <span id="scroll-percentage">
                    {percentage}%
                </span>
            </button>
        </div>
    );
};

export default BottomToTopButton;