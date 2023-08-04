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
  return (
    <Counter.Provider value={{ Addtocard }}>{props.children}</Counter.Provider>
  );
}

export default CounterContext;
