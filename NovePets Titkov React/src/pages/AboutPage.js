import { Link } from 'react-router-dom';
import SimpleCard from '../components/SimpleCard';
import Panel from '../components/Panel';

function AboutPage() {
    return (
        <>
            <section className="hero">
                <div className="container hero-grid">
                    <div className="hero-card">
                        <div className="kicker"><span className="kicker-dot"></span> How it works</div>
                        <h1>From “just browsing” to “we’re family.”</h1>
                        <p>
                            We partner with shelters to keep listings current and transparent. When you find a
                            pet you love, we help you schedule a visit and prepare for the first week at home.
                        </p>
                        <div className="hero-actions">
                            <Link className="btn primary" to="/pets">Browse pets</Link>
                            <Link className="btn" to="/contact">Talk to a coordinator</Link>
                        </div>
                    </div>

                    <Panel title="What we verify">
                        <ul className="list">
                            <li><span>✓</span> Vaccination status and microchip info</li>
                            <li><span>✓</span> Temperament notes from carers</li>
                            <li><span>✓</span> Compatibility (kids / other pets)</li>
                        </ul>
                    </Panel>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2>Three-step adoption</h2>
                    <p className="lead">Straightforward and friendly — no surprises.</p>
                    <div className="card-grid">
                        <SimpleCard badge="Step 1" title="Choose a match" text="Browse pets and shortlist favorites based on lifestyle." />
                        <SimpleCard badge="Step 2" title="Meet in person" text="Schedule a visit with the shelter and spend time together." />
                        <SimpleCard badge="Step 3" title="Bring them home" text="Adoption paperwork, starter kit tips, and follow-up support." />
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container split">
                    <Panel title="Our mission">
                        <p className="lead">Every pet deserves a safe, loving home.</p>
                        <p>
                            NovaPets exists to make adoption easier for people and less stressful
                            for animals. We focus on clarity, kindness, and long-term success.
                        </p>
                    </Panel>

                    <Panel title="Our values">
                        <ul className="list">
                            <li><span>✓</span> Transparency over marketing</li>
                            <li><span>✓</span> Respect for shelters and volunteers</li>
                            <li><span>✓</span> Matching for the long run</li>
                        </ul>
                    </Panel>
                </div>
            </section>
        </>
    );
}

export default AboutPage;