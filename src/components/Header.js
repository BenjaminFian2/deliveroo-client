import logo from "../assets/img/logo.svg";

//import of font awesome library
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ name, description, picture }) => {
  return (
    <div className="Header">
      <div className="hr">
        <header className="boxLogo center">
          <img src={logo} alt="logo" className="logo" />
          <FontAwesomeIcon icon="shopping-cart" className="cartLogo" />
        </header>
      </div>
      <section className="boxRestaurant center">
        <article className="restaurantIntro">
          <h1>{name}</h1>
          <p>{description}</p>
        </article>
        <img
          src={picture}
          alt="accueil restaurant"
          className="restaurantImage"
        />
      </section>
    </div>
  );
};

export default Header;
