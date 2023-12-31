import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Shop from "./pages/shop";
import ErrorComponent from "./pages/Error";
import { useEffect, useState } from "react";
import { MyContext } from "./myContext";
import Cart from "./pages/cart";

function App() {
  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { mode: "cors" })
      .then((res) => {
        return res.json();
      })
      .then((dataFromApi) => {
        setData(dataFromApi);
      })
      .catch((err) => {
        console.log(err);
        throw new Error(err);
      });
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorComponent />,
    },
    {
      path: "cart",
      element: <Cart />,
    },
    {
      path: "shop",
      element: <Shop data={data} />,
    },
    {
      path: "shop/:id",
      element: <Shop data={data} />,
    },
  ]);
  return (
    <>
      <MyContext.Provider value={{ data, cartItems, setCartItems }}>
        <RouterProvider router={router} />
      </MyContext.Provider>
    </>
  );
}

export default App;
