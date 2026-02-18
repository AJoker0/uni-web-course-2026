import { Link } from 'react-router-dom';

function Hero({ kicker, title, text, showButtons }) {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-card">
          <div className="kicker"><span className="kicker-dot"></span> {kicker}</div>
          <h1>{title}</h1>
          <p>{text}</p>
          
          {/* Если showButtons=true, показываем кнопки */}
          {showButtons && (
            <div className="hero-actions">
              <Link className="btn primary" to="/pets">Browse pets</Link>
              <Link className="btn" to="/contact">Talk to a coordinator</Link>
            </div>
          )}
        </div>
        {/* Вторая колонка hero-grid (статистика или панель) может быть передана как children, но пока оставим просто заглушку или можно расширить компонент */}
      </div>
    </section>
  );
}

export default Hero;