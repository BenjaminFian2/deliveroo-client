import Articles from "./Articles";

const Cart = () => {
  return (
    <div className="Cart">
      <button className="void cart">Valider mon panier</button>
      <Articles />
    </div>
  );
};

export default Cart;
