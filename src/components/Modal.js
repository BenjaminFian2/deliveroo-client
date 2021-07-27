import Cart from "./Cart";

const Modal = ({ data, setData, setActiveModal }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="boxClose-btn">
          <span
            className="close-btn"
            onClick={() => {
              setActiveModal(false);
            }}
          >
            &times;
          </span>
        </div>

        <Cart
          cart={data.cart}
          currency={data.restaurant.price}
          data={data}
          setData={setData}
        />
      </div>
    </div>
  );
};

export default Modal;
