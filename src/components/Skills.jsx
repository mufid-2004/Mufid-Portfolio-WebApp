import { useEffect, useState } from "react";
import "./Skills.css";

function Skills() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setVisible(true), 300);
    }, []);

    const skills = [
        { name: "HTML", percent: 90 },
        { name: "CSS", percent: 85 },
        { name: "JavaScript", percent: 75 },
        { name: "React", percent: 70 },
    ];

    return (
        <section id="skills" className="fade-in">
            <h2>My Skills</h2>

            <div className="skills-container">
                <div className="left-skills">
                    {skills.map((skill) => (
                        <div className="skill" key={skill.name}>
                            <span>{skill.name}</span>
                            <div className="bar">
                                <div
                                    className="fill"
                                    style={{
                                        width: visible ? `${skill.percent}%` : "0%",
                                    }}
                                >
                                    <span className="percent-text">{skill.percent}%</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="right-skills">
                    <p>
                        I always strive to develop myself in the field of web development and
                        improve user experience.
                    </p>
                    <a href="#contact" className="contact-btn">
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Skills;
