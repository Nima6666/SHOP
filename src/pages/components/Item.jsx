import PropTypes from "prop-types";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../myContext";
import star from "../../assets/star.png";
import addToCart from "../../assets/add-to-cart.png";
import tick from "../../assets/tick.png";
import Back from "../../assets/back.png";

export default function Item({ id }) {
  let duplicate = false;
  const history = useNavigate();
  const { data } = useContext(MyContext);
  const { cartItems, setCartItems } = useContext(MyContext);
  function checkCart() {
    const itemAddedMsg = document.querySelector(".itemAddedMsg");
    itemAddedMsg.setAttribute("style", "display:block; animation: none");
    cartItems.forEach((cartItem) => {
      if (cartItem.id == id) {
        document.getElementById("addToCart").style.backgroundColor =
          "yellowgreen";
        document.querySelectorAll("#addToCart > img").forEach((img) => {
          img.setAttribute("style", "transform: translateX(7px); ");
        });
        itemAddedMsg.style.animation = "none";
        void itemAddedMsg.offsetWidth;
        itemAddedMsg.textContent = "This item is already in your Cart";
        void itemAddedMsg.offsetWidth;
        itemAddedMsg.style.animation = "msg 3s forwards";
        duplicate = true;
      }
    });
  }

  useEffect(() => {
    checkCart();
  }, []);

  function addThisToCart() {
    checkCart();

    if (duplicate) {
      return;
    }
    data.forEach((item) => {
      if (item.id == id) {
        const itemToBeAdded = [...cartItems, item];
        document.querySelector(".itemAddedMsg").textContent =
          `${item.title} added to your cart`;
        document
          .querySelector(".itemAddedMsg")
          .setAttribute("style", "display:block; animation: msg 3s forwards");
        document.getElementById("addToCart").style.backgroundColor =
          "yellowgreen";
        document.querySelectorAll("#addToCart > img").forEach((img) => {
          img.setAttribute("style", "transform: translateX(7px); ");
        });
        setCartItems(itemToBeAdded);
      }
    });
  }

  function goBack() {
    history(-1);
  }

  return (
    <>
      <div className="itemClicked">
        {data.map((eachItem) => {
          if (eachItem.id == id) {
            return (
              <div className="item" key={89}>
                <button id="goBack" onClick={goBack}>
                  <img src={Back} alt="goBack" height="30px" />
                </button>
                <img
                  src={eachItem.image}
                  alt={eachItem.title}
                  className="itemImg"
                />
                <div className="rest">
                  <div className="title">{eachItem.title}</div>
                  <p>{eachItem.description}</p>
                  <div className="category">
                    {eachItem.category.toUpperCase()}
                  </div>
                  <div className="reviews">
                    <img src={star} alt="rating" id="star" />
                    {eachItem.rating.rate}/5 ({eachItem.rating.count})
                  </div>
                  <div className="price">${eachItem.price}</div>
                </div>
                <div id="addToCart" onClick={addThisToCart}>
                  <img src={tick} alt="" id="tick" />
                  <img
                    src={addToCart}
                    alt=""
                    id="add"
                    onClick={(e) => {
                      addThisToCart(e);
                    }}
                  />
                </div>
              </div>
            );
          }
        })}
        <div className="itemAddedMsg"></div>
      </div>
      {}
    </>
  );
}

Item.propTypes = {
  id: PropTypes.number,
};
