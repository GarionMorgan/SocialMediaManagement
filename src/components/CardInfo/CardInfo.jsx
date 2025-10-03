import "./CardInfo.css";

function CardInfo({ title, price, description, features = [], badge }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      {price && <p>{price}</p>}
      {badge && <span className="card__badge">{badge}</span>}
      {description && <p>{description}</p>}
      <ul className="card__features">
        {features.map((feature, i) => (
          <li className="card__features-list" key={i}>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CardInfo;
