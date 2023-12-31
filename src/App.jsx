import Layout from "./../src/Components/Layout/Layout";
import Home from "./../src/Components/Home/Home";
import NotFound from "./../src/Components/NotFound/NotFound";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import ProtectRoute from "./Components/ProtectRoute/ProtectRoute";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Cart from "./Components/Cart/Cart";
import CounterContext from "./CounterContext";
import Checkout from "./Components/Checkout/Checkout";
import { Toaster } from "react-hot-toast";
import { Offline } from "react-detect-offline";

function App() {
  useEffect(() => {
    if (localStorage.getItem("usertocken") !== null) {
      SaveUserData();
    }
  }, []);

  const [userData, setuserDate] = useState(null);

  function SaveUserData() {
    let encodedtoken = localStorage.getItem("usertocken");
    let decodedtoken = jwtDecode(encodedtoken);
    setuserDate(decodedtoken);
  }
  

  let router = createBrowserRouter([
    {
      path: "",
      element: <Layout userData={userData} setuserDate={setuserDate} />,
      children: [
        {
          index: true,
          element: (
            <ProtectRoute>
              <Home />
            </ProtectRoute>
          ),
        },
        {
          path: "/ProductDetails/:id",
          element: (
            <ProtectRoute>
              <ProductDetails />
            </ProtectRoute>
          ),
        },
        {
          path: "/chekout",
          element: (
            <ProtectRoute>
              <Checkout />
            </ProtectRoute>
          ),
        },
        {
          path: "/cart",
          element: (
            <ProtectRoute>
              <Cart />
            </ProtectRoute>
          ),
        },
        { path: "/register", element: <Register /> },
        { path: "/login", element: <Login SaveUserData={SaveUserData} /> },

        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return (
    <div>
      <CounterContext>
        <Offline>
          {" "}
          <div className="network">You are Offline now Check your internet</div>
        </Offline>

        <Toaster />
        <RouterProvider router={router} />
      </CounterContext>
    </div>
  );
}

export default App;
