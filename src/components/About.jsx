import avatar from "../assets/avatar2.png";
import resume from "../assets/resume.pdf";

function About() {
    return (
        <section id="about" className="fade-in">
            <div className="about-container">
                <div className="about-img">
                    <img src={avatar} alt="Mufid Picture" />
                </div>

                <div className="about-text">
                    <h2>About Me</h2>

                    <p id="bio-text">
                        I'm Mofeed Shahadeh, a passionate frontend developer who creates modern and responsive web
                        applications. I enjoy turning complex problems into simple, beautiful, and intuitive designs.
                    </p>

                    <button id="read-more-btn">Read More</button>

                    <a
                        href={resume}
                        download="Mufid_Resume.pdf"
                        id="resume-btn"
                        className="resume-btn"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
}

export default About;
