import "./App.css";
import axios from "axios";

//Components
import Header from "./components/Header";
import Meals from "./components/Meals";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

import { useState, useEffect } from "react";

// import and add font awesome icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
library.add(faShoppingCart);

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [activeModal, setActiveModal] = useState(false);

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

  console.log(data);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="App">
      <Header
        name={data.restaurant.name}
        description={data.restaurant.description}
        picture={data.restaurant.picture}
        data={data}
        setActiveModal={setActiveModal}
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
                  data={data}
                  setData={setData}
                />
              )
            );
          })}
        </div>
        <section className="boxCart">
          <Cart
            cart={data.cart}
            currency={data.restaurant.price}
            data={data}
            setData={setData}
          />
        </section>
      </main>
      <Footer />
      {activeModal && (
        <Modal data={data} setData={setData} setActiveModal={setActiveModal} />
      )}
    </div>
  );
}

export default App;
