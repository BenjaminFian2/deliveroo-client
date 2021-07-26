import Articles from "./Articles";

const Basket = () => {
  return (
    <div className="Basket">
      <button className="void basket">Valider mon panier</button>
      <Articles />
    </div>
  );
};

export default Basket;
