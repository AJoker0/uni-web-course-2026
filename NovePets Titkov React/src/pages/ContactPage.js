import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import Panel from '../components/Panel';

function ContactPage() {
    return (
        <>
            <section className="hero">
                <div className="container hero-grid">
                    <div className="hero-card">
                        <div className="kicker"><span className="kicker-dot"></span> Contact</div>
                        <h1>We’re here to help you adopt.</h1>
                        <p>
                            Tell us what you’re looking for (energy level, apartment/house, kids/other pets),
                            and we’ll suggest great matches. If you already picked a pet, share the name and
                            we’ll connect you.
                        </p>
                        <div className="hero-actions">
                            <Link className="btn" to="/pets">Browse pets</Link>
                            <Link className="btn primary" to="/about">How it works</Link>
                        </div>
                    </div>

                    <Panel title="Office">
                        <p className="lead">Sofia, Bulgaria</p>
                        <ul className="list">
                            <li><span>☎</span> +359 000 000 000</li>
                            <li><span>✉</span> hello@novapets.example</li>
                            <li><span>⏱</span> Mon–Fri 09:00–18:00</li>
                        </ul>
                    </Panel>
                </div>
            </section>

            <section className="section">
                <div className="container split">
                    {/* Левая колонка - Форма */}
                    <ContactForm />

                    {/* Правая колонка - Ответы */}
                    <Panel title="Quick answers">
                        <p className="lead">The most common questions we get.</p>
                        <ul className="list">
                            <li><span>?</span> Can I visit first? <em>Yes</em>, we’ll schedule with the shelter.</li>
                            <li><span>?</span> Do you deliver pets? <em>No</em>, pickup only for safety.</li>
                            <li><span>?</span> How long does it take? Often <em>2–7 days</em> depending on the shelter.</li>
                        </ul>
                    </Panel>
                </div>
            </section>
        </>
    );
}

export default ContactPage;