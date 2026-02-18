import { Link } from 'react-router-dom';
import SimpleCard from '../components/SimpleCard';
import NumericCards from '../components/NumericCard';
import Panel from '../components/Panel';

function IndexPage() {
    return (
        <>
            {/* HERO SECTION */}
            <section className="hero">
                <div className="container hero-grid">
                    {/* Левая колонка */}
                    <div className="hero-card">
                        <div className="kicker"><span className="kicker-dot"></span> Shelter partners across the city</div>
                        <h1>Meet your next best friend — adopt with confidence.</h1>
                        <p>
                            NovaPets helps you discover pets, compare personalities, and contact shelters
                            fast. No endless forms, no guessing — just clear profiles and friendly support.
                        </p>
                        <div className="hero-actions">
                            <Link className="btn primary" to="/pets">Browse pets</Link>
                            <Link className="btn" to="/about">How it works</Link>
                            <Link className="btn danger" to="/contact">Need urgent help?</Link>
                        </div>
                    </div>

                    {/* Правая колонка с цифрами */}
                    {/* Добавили width: '100%', чтобы карточки растянулись на всю ширину колонки */}
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
                        <NumericCards />
                    </div>
                </div>
            </section>

            {/* ADOPTION MADE SIMPLE */}
            <section className="section">
                <div className="container">
                    <h2>Adoption made simple</h2>
                    <p className="lead">Clear pet profiles, honest temperament notes, and a straightforward path to book a visit.</p>
                    <div className="card-grid">
                        <SimpleCard badge="Profiles" title="Real details" text="Age, vaccines, energy level, and what the pet is like at home." />
                        <SimpleCard badge="Visits" title="Book a meet" text="Send one message and we connect you with the shelter." />
                        <SimpleCard badge="Support" title="After adoption" text="Get tips for the first week: food, routine, and settling in." />
                    </div>
                </div>
            </section>

            {/* НИЖНИЕ ПАНЕЛИ */}
            <section className="section">
                <div className="container split">
                    <Panel title="Popular reasons people adopt">
                        <ul className="list">
                            <li><span>✓</span> A calmer home with a companion</li>
                            <li><span>✓</span> A running buddy for daily walks</li>
                            <li><span>✓</span> Teaching kids empathy and responsibility</li>
                            <li><span>✓</span> Giving a rescued pet a second chance</li>
                        </ul>
                    </Panel>

                    <Panel title="Ready to start?">
                        <p className="lead">Pick a pet, send a message, and we’ll take it from there.</p>
                        <p>If you’re unsure, tell us your lifestyle (time at home, activity level, other pets), and we’ll recommend matches.</p>
                        <div className="hero-actions">
                            <Link className="btn primary" to="/pets">See pets</Link>
                            <Link className="btn" to="/contact">Ask for recommendations</Link>
                        </div>
                    </Panel>
                </div>
            </section>
        </>
    );
}

export default IndexPage;