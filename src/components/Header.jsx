import { useEffect, useState } from "react";
import avatar from "../assets/avatar.png";
import "./Header.css";

function Header() {
    const name = "Mufid Nemer Shehada ";
    const roles = ["Frontend Developer", "React Developer", "UI Designer"];

    const [nameText, setNameText] = useState("");
    const [roleText, setRoleText] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);

    // كتابة الاسم
    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setNameText(name.slice(0, i + 1));
            i++;
            if (i === name.length) clearInterval(interval);
        }, 100);

        return () => clearInterval(interval);
    }, []);

    // كتابة الوظائف
    useEffect(() => {
        let i = 0;
        setRoleText("");

        const interval = setInterval(() => {
            setRoleText(roles[roleIndex].slice(0, i + 1));
            i++;
            if (i === roles[roleIndex].length) {
                clearInterval(interval);
                setTimeout(() => {
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }, 1500);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [roleIndex]);

    return (
        <section id="header">
            <header>
                <div className="left">
                    <h1>{nameText}</h1>
                    <h2>
                        {roleText}
                        <span className="cursor">|</span>
                    </h2>
                </div>

                <div className="right">
                    <img src={avatar} alt="Mufid" />
                </div>
            </header>
        </section>
    );
}

export default Header;
