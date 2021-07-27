import star from "../assets/img/star.svg";

const Meal = ({
  title,
  description,
  price,
  picture,
  popular,
  currency,
  data,
  setData,
}) => {
  const addToCart = () => {
    const obj = { ...data };
    if (obj.cart) {
      for (let i = 0; i <= obj.cart.length; i++) {
        if (i === obj.cart.length) {
          const obj2 = { title: title, count: 1, price: price };
          obj.cart.push(obj2);
          break;
        }
        if (obj.cart[i].title === title) {
          obj.cart[i].count++;
          break;
        }
      }
    } else {
      obj.cart = [{ title: title, count: 1, price: price }];
    }
    setData(obj);
  };

  return (
    <div
      className="Meal"
      onClick={() => {
        addToCart();
      }}
    >
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
