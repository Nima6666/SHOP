import PropTypes from "prop-types";
import "../styles/shop.css";
import Header from "./components/header";
import { Link, useParams } from "react-router-dom";
import Item from "./components/Item";
import { useEffect } from "react";
import ErrorComponent from "./Error";
export default function Shop(data) {
  const { id } = useParams();
  if (id > data.data.length || id < 1 || (id && isNaN(parseInt(id)))) {
    return <ErrorComponent />;
  }

  useEffect(() => {
    document.querySelector("#shopNav").classList.add("active");
  });

  return (
    <>
      <div id="shop">
        <Header />
        {id ? (
          <Item id={parseInt(id)} />
        ) : (
          <div className="items">
            {data.data.map((eachItem) => {
              return (
                <Link
                  to={`${parseInt(eachItem.id)}`}
                  className={"item" + eachItem.id}
                  id={eachItem.id}
                  key={eachItem.id}
                >
                  <h3>{eachItem.title}</h3>
                  <div className="imageContainer">
                    <img src={eachItem.image} alt="" />
                  </div>
                  <h3>${eachItem.price}</h3>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

Header.protoTypes = {
  data: PropTypes.object,
};
