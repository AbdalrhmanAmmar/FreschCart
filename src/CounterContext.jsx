import { createContext } from "react";
import axios from "axios";

export let Counter = createContext();

function CounterContext(props) {
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
  return (
    <Counter.Provider value={{ Addtocard, GetCard, removeCart }}>
      {props.children}
    </Counter.Provider>
  );
}

export default CounterContext;
