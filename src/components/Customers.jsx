import client1 from "../assets/customers/client1.jpg";
import client2 from "../assets/customers/client2.jpg";
import client3 from "../assets/customers/client3.jpg";

function Customers() {
    return (
        <section id="customers" className="fade-in">
            <h2>What Clients Say</h2>

            <div className="customers-row">
                <div className="customer-card">
                    <img src={client1} alt="Client 1" />
                    <h3>Ahmed Ali</h3>
                    <p>
                        Mufid provided me with a professional and easy-to-use website.
                    </p>
                </div>

                <div className="customer-card">
                    <img src={client2} alt="Client 2" />
                    <h3>Sarah Muhammad</h3>
                    <p>
                        Mufid's approach to UI design exceeded my expectations.
                    </p>
                </div>

                <div className="customer-card">
                    <img src={client3} alt="Client 3" />
                    <h3>Ali Bassam</h3>
                    <p>
                        His attention to detail and quality of code made my project look its best.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Customers;
