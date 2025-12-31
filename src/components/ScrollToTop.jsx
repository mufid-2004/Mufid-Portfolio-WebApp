import { useEffect, useState } from "react";

function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        visible && (
            <button
                onClick={scrollToTop}
                style={{
                    position: "fixed",
                    bottom: "30px",
                    right: "30px",
                    background: "red",
                    color: "white",
                    border: "none",
                    borderRadius: "50%",
                    width: "55px",
                    height: "55px",
                    fontSize: "22px",
                    cursor: "pointer",
                    zIndex: 2000,
                }}
                title="Scroll to top"
            >
                ↑
            </button>
        )
    );
}

export default ScrollToTop;
