import Header from "./components/header";
import "../styles/cart.css";
import { useContext } from "react";
import { MyContext } from "../myContext";

export default function Cart() {
  const { cartItems } = useContext(MyContext);
  return (
    <>
      <Header />
      <div className="cart">
        <div className="cartContainer">
          {cartItems.length < 1 ? (
            <h1 className="empty">Its Empty IN here</h1>
          ) : (
            cartItems.map((item) => {
              return (
                <div className="cartItem" key={item.id}>
                  <h2>{item.title}</h2>
                  <h2>${item.price}</h2>
                </div>
              );
            })
          )}
          {cartItems.length > 0 ? (
            <div className="total">
              <div>Shipping Fee : $80+</div>
              Total : $
              {Math.ceil(
                cartItems.reduce((total, currentItem) => {
                  return total + currentItem.price;
                }, 0)
              ) + 80}
              <button className="checkout">Checkout</button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
