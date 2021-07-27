import Article from "./Article";

const Cart = ({ cart, currency, data, setData }) => {
  const total = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      const price = Number(cart[i].price);
      total += price * cart[i].count;
    }
    return total;
  };

  return (
    <div className="Cart">
      {!cart || cart.length === 0 ? (
        <button className="void cart">Valider mon panier</button>
      ) : (
        <button className="full cart">Valider mon panier</button>
      )}
      {!cart || cart.length === 0 ? (
        <div className="articles empty">Votre panier est vide</div>
      ) : (
        <div>
          <div className="articles fill">
            {cart.map((elem, index) => {
              return (
                <Article
                  title={elem.title}
                  count={elem.count}
                  price={elem.price}
                  currency={currency}
                  data={data}
                  setData={setData}
                  index={index}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      )}
      {cart && cart.length > 0 && (
        <div className="billDetails">
          <div className="bill">
            <span className="billName">Sous-total</span>
            <span className="billPrice">
              {total().toFixed(2)} {currency}
            </span>
          </div>
          <div className="deliveryFee">
            <span className="deliveryFeeName">Frais de livraison</span>
            <span>2.50 €</span>
          </div>
        </div>
      )}
      {cart && cart.length > 0 && (
        <div className="total">
          <span className="totalName">Total</span>
          <span className="totalPrice">{(total() + 2.5).toFixed(2)} €</span>
        </div>
      )}
    </div>
  );
};

export default Cart;
