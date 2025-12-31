import { useState } from "react";
import "./Projects.css";

import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.jpg";
import project3 from "../assets/projects/project3.jpg";
import project4 from "../assets/projects/project4.jpg";
import project5 from "../assets/projects/project5.jpg";
import project6 from "../assets/projects/project6.jpg";


function Projects() {
    const [activeProject, setActiveProject] = useState(null);

    const projects = [
        {
            title: "E-Commerce Website",
            desc: "A responsive online store built with React.",
            img: project1,
        },
        {
            title: "Weather App",
            desc: "Weather app using OpenWeather API.",
            img: project2,
        },
        {
            title: "Personal Page",
            desc: "Interactive introductory website using HTML, CSS, and JS.",
            img: project3,
        },

        {
            title: "Book Appointments",
            desc: "Simple online appointment booking system with notifications ,HTML, JS.",
            img: project5,
        },
        {
            title: "Task Board",
            desc: "An application for managing daily tasks with an easy interface ,React,Hooks .",
            img: project4,
        },
        {
            title: "Photo Gallery",
            desc: "Dynamic image grid with Flexbox,HTML, CSS Flexbox  .",
            img: project6,
        },
    ];

    return (
        <section id="projects">
            <h2>My Projects</h2>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div
                        className="project-card"
                        key={index}
                        onClick={() => setActiveProject(project)}
                    >
                        <img src={project.img} alt={project.title} />
                        <h3>{project.title}</h3>
                    </div>
                ))}
            </div>

            {activeProject && (
                <div className="modal" onClick={() => setActiveProject(null)}>
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <span className="close" onClick={() => setActiveProject(null)}>
                            &times;
                        </span>
                        <h3>{activeProject.title}</h3>
                        <p>{activeProject.desc}</p>
                        <img src={activeProject.img} alt="" />
                    </div>
                </div>
            )}
        </section>
    );
}

export default Projects;
