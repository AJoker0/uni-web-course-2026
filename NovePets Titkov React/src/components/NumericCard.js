function NumericCards() {
  return (
    <div className="stat-grid" style={{ height: '100%', gridTemplateRows: '1fr 1fr' }}>
      <div className="stat">
        <div className="label">Pets available</div>
        <div className="value">42</div>
      </div>
      <div className="stat">
        <div className="label">Avg. match time</div>
        <div className="value">3 days</div>
      </div>
      <div className="stat">
        <div className="label">Shelters partnered</div>
        <div className="value">11</div>
      </div>
      <div className="stat">
        <div className="label">Support</div>
        <div className="value">Mon–Fri</div>
      </div>
    </div>
  );
}

export default NumericCards;