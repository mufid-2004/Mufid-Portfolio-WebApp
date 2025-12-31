import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState("header");
    const [dark, setDark] = useState(() => {
        return localStorage.getItem("darkMode") === "true";
    });


    // Dark Mode
    useEffect(() => {
        document.body.classList.toggle("dark-mode", dark);
        localStorage.setItem("darkMode", dark);
    }, [dark]);


    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                        window.history.replaceState(
                            null,
                            "",
                            `#${entry.target.id}`
                        );
                    }
                });
            },
            {
                threshold: 0.3,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const sections = [
        "header",
        "about",
        "skills",
        "education",
        "projects",
        "customers",
        "contact",
    ];

    return (
        <nav className="navbar">
            <div className="logo">MUFID PORTFOLIO</div>

            <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                {sections.map((section) => (
                    <li key={section}>
                        <a
                            href={`#${section}`}
                            className={active === section ? "active" : ""}
                            onClick={(e) => {
                                e.preventDefault();
                                const el = document.getElementById(section);
                                const offset = 90; // ارتفاع النافبار
                                const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
                                window.scrollTo({ top: y, behavior: "smooth" });

                                setActive(section);
                                setMenuOpen(false);
                            }}
                        >

                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="nav-right">
                <button
                    className="dark-btn"
                    onClick={() => setDark(!dark)}
                >
                    🌓
                </button>

                <div
                    className="hamburger"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
