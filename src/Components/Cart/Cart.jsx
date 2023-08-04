import { useContext } from "react";
import "./Cart.module.css";
import { Counter } from "../../CounterContext";

function Cart() {
  const { username } = useContext(Counter);
  console.log(username);
  return <>Cart</>;
}

export default Cart;
