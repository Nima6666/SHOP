import { Link, useNavigate } from "react-router-dom";
import bag from "../../assets/shopping-bag.png";
import { useContext } from "react";
import { MyContext } from "../../myContext";

export default function Header() {
  const { cartItems } = useContext(MyContext);
  const navigate = useNavigate();

  function cart() {
    navigate("/cart");
  }

  return (
    <header>
      <nav>
        <li>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/Shop"
            style={{ textDecoration: "none", color: "black" }}
            id="shopNav"
          >
            Products
          </Link>
        </li>
        <li id="cartBu" onClick={cart}>
          <img src={bag} alt="Cart" height="30px" id="bag" />
          <div className="numberOfItems">{cartItems.length}</div>
        </li>
      </nav>
    </header>
  );
}
