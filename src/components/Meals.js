import Meal from "./Meal";

const Meals = ({ name, meals, currency }) => {
  return (
    <>
      <h2>{name}</h2>
      <div className="Meals">
        {meals.map((elem, index) => {
          return (
            <Meal
              key={elem.id}
              title={elem.title}
              description={elem.description}
              price={elem.price}
              picture={elem.picture}
              popular={elem.popular}
              currency={currency}
            />
          );
        })}
      </div>
    </>
  );
};

export default Meals;
