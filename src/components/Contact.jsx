function Contact() {
    return (
        <section id="contact" className="fade-in">
            <h2>Contact Me</h2>

            <form id="contact-form" noValidate>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" required />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" required />
                </div>

                <div className="form-group">
                    <label>Message</label>
                    <textarea maxLength="500" required></textarea>
                    <div className="char-count">0/500</div>
                </div>

                <button type="submit">Send</button>
            </form>
        </section>
    );
}

export default Contact;
