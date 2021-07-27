import minus from "../assets/img/minus.svg";
import plus from "../assets/img/plus.svg";

const Article = ({ title, count, price, currency, data, setData, index }) => {
  return (
    <div className="Article">
      <div className="counter">
        <span>
          <img
            src={minus}
            alt="minus"
            className="minus"
            onClick={() => {
              const obj = { ...data };
              if (obj.cart[index].count === 1) {
                obj.cart.splice(index, 1);
              } else {
                obj.cart[index].count--;
              }
              setData(obj);
            }}
          />
        </span>
        <span className="count">{count}</span>
        <span>
          <img
            src={plus}
            alt="plus"
            className="plus"
            onClick={() => {
              const obj = { ...data };
              obj.cart[index].count++;
              setData(obj);
            }}
          />
        </span>
      </div>
      <span className="articleName">{title}</span>
      <span className="articlePrice">
        {price} {currency}
      </span>
    </div>
  );
};

export default Article;
