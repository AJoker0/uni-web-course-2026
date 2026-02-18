
function SimpleCard({ badge, title, text }) { 
    
    return (
      <article className="card">
        <span className="badge">{badge}</span> 
        
        <h3>{title}</h3>               
        <p>{text}</p>                         
      </article>
    );
  }
  
  export default SimpleCard;