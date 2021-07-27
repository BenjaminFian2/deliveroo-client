import "./App.css";
import axios from "axios";

//Components
import Header from "./components/Header";
import Meals from "./components/Meals";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

import { useState, useEffect } from "react";

// import and add font awesome icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
library.add(faShoppingCart);

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_URL_API}/`);
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
        <div className="Categories">
          {data.categories.map((elem, index) => {
            return (
              elem.meals.length > 0 && (
                <Meals
                  key={index}
                  name={elem.name}
                  meals={elem.meals}
                  currency={data.restaurant.price}
                />
              )
            );
          })}
        </div>
        <section className="boxCart">
          <Cart />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
