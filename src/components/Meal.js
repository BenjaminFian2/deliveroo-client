import star from "../assets/img/star.svg";

const Meal = ({ title, description, price, picture, popular, currency }) => {
  return (
    <div className="Meal">
      <div className="card">
        <div className="menu">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="MenuInfos">
            <span className="price">
              {price} {currency}
            </span>
            <span className="popularity">
              {popular && <img src={star} alt="star" />}
              {popular && "Populaire"}
            </span>
          </div>
        </div>
        {picture && (
          <div className="menuImage">
            <img src={picture} alt="menu" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Meal;
