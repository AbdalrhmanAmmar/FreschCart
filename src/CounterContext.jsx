import { createContext, useEffect, useState } from "react";
import axios from "axios";

export let Counter = createContext();

function CounterContext(props) {
  const [CartId, setCartId] = useState(null);
  const [Cartnumber, setCartnumber] = useState(0);

  async function getloggedcart() {
    let response = await GetCard();
    if (response.status === 200) {
      console.log(response);
      setCartId(response.data.data._id);
      setCartnumber(response.data.numOfCartItems);
    }
  }
  useEffect(() => {
    getloggedcart();
  }, []);

  let headers = {
    token: localStorage.getItem("usertocken"),
  };
  function Addtocard(productId) {
    return axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/Cart`,
        {
          productId: productId,
        },
        {
          headers: headers,
        }
      )
      .then((response) => response)
      .catch((error) => error);
  }
  function GetCard(productId) {
    return axios
      .get(
        `https://ecommerce.routemisr.com/api/v1/Cart`,

        {
          headers: headers,
        }
      )
      .then((response) => response)
      .catch((error) => error);
  }
  function removeCart(productId) {
    return axios
      .delete(
        `https://ecommerce.routemisr.com/api/v1/Cart/${productId}`,

        {
          headers: headers,
        }
      )
      .then((response) => response)
      .catch((error) => error);
  }
  function UpdateCartQuantity(productId, count) {
    return axios
      .put(
        `https://ecommerce.routemisr.com/api/v1/Cart/${productId}`,

        {
          count: count,
        },

        {
          headers: headers,
        }
      )
      .then((response) => response)
      .catch((error) => error);
  }
  function OnlinePayment(CartId, shippingAddress) {
    return axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${CartId}?url=http://127.0.0.1:5173/`,

        {
          shippingAddress: shippingAddress,
        },

        {
          headers: headers,
        }
      )
      .then((response) => response)
      .catch((error) => error);
  }
  return (
    <Counter.Provider
      value={{
        Addtocard,
        GetCard,
        removeCart,
        UpdateCartQuantity,
        OnlinePayment,
        CartId,
        Cartnumber,
        setCartnumber,
      }}
    >
      {props.children}
    </Counter.Provider>
  );
}

export default CounterContext;
