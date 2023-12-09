import "../styles/Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="text">Bringing everything to your doorstep.</div>
        <Link to="Shop" style={{ textDecoration: "none" }}>
          <button id="shopBtn">BROWSE</button>
        </Link>
      </div>
    </>
  );
}
