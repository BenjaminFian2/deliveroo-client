import "./App.css";
import axios from "axios";

//Components
import Header from "./components/Header";
import Meals from "./components/Meals";
import Basket from "./components/Basket";
import Footer from "./components/Footer";

import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_URL_API);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
    // return
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="App">
      <Header
        name={data.restaurant.name}
        description={data.restaurant.description}
        picture={data.restaurant.picture}
      />
      <main className="center">
        <section className="Categories">
          {data.categories.map((elem, index) => {
            return (
              <Meals
                key={index}
                name={elem.name}
                meals={elem.meals}
                currency={data.restaurant.price}
              />
            );
          })}
        </section>
        <section className="boxBasket">
          <Basket />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
