import { Link } from 'react-router-dom';
import SimpleCard from '../components/SimpleCard';
import Panel from '../components/Panel';

function PetsPage() {
    const petsData = [
        { id: 1, type: "Dog", name: "Atlas", description: "Gentle, 2 years old, loves walks and belly rubs." },
        { id: 2, type: "Cat", name: "Luna", description: "Quiet, 1 year old, prefers sunny windows and naps." },
        { id: 3, type: "Dog", name: "Milo", description: "Playful, 3 years old, great with kids and toys." },
        { id: 4, type: "Cat", name: "Nova", description: "Curious, 4 years old, always exploring new corners." },
        { id: 5, type: "Dog", name: "Echo", description: "Calm, 5 years old, happiest near people." },
        { id: 6, type: "Cat", name: "Pepper", description: "Energetic, 2 years old, loves climbing and chasing strings." },
    ];

    return (
        <>
            {/* HERO для Pets - с кнопками и фильтрами */}
            <section className="hero">
                <div className="container hero-grid">
                    <div className="hero-card">
                        <div className="kicker"><span className="kicker-dot"></span> Pets</div>
                        <h1>Explore pets looking for a home.</h1>
                        <p>
                            Each profile includes personality notes and basic health info. If you want help
                            choosing, send us your lifestyle and we’ll recommend options.
                        </p>
                        <div className="hero-actions">
                            <Link className="btn primary" to="/contact">Get recommendations</Link>
                            <Link className="btn" to="/about">Learn the process</Link>
                        </div>
                    </div>

                    <Panel title="Quick filters">
                        <p className="lead">Visual only — filters will be available soon.</p>
                        <div className="hero-actions">
                            <span className="badge">Dog</span>
                            <span className="badge">Cat</span>
                            <span className="badge">Small</span>
                            <span className="badge">Calm</span>
                            <span className="badge">Apartment-friendly</span>
                        </div>
                    </Panel>
                </div>
            </section>

            {/* СЕТКА С ПИТОМЦАМИ */}
            <section className="section">
                <div className="container">
                    <h2>Featured pets</h2>
                    <p className="lead">Meet a few of our current favorites.</p>
                    <div className="card-grid">
                        {petsData.map((pet) => (
                            <SimpleCard 
                                key={pet.id}
                                badge={pet.type}
                                title={pet.name}
                                text={pet.description}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ТАБЛИЦА ЦЕН (Adoption fees) */}
            <section className="section">
                <div className="container">
                    <h2>Adoption fees</h2>
                    <p className="lead">Fees support medical care and the shelter’s work.</p>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Typically includes</th>
                                <th>Fee</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Cat</td>
                                <td>Vaccines + microchip</td>
                                <td>€35–€60</td>
                            </tr>
                            <tr>
                                <td>Small dog</td>
                                <td>Vaccines + microchip</td>
                                <td>€60–€90</td>
                            </tr>
                            <tr>
                                <td>Large dog</td>
                                <td>Vaccines + microchip</td>
                                <td>€80–€120</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
}

export default PetsPage;