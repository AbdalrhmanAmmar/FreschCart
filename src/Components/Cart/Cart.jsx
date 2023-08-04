import { useContext, useEffect } from "react";
import "./Cart.module.css";
import { Counter } from "../../CounterContext";

function Cart() {
  const { GetCard } = useContext(Counter);

  async function getloggedcart() {
    let response = await GetCard();
  }

  useEffect(() => {
    getloggedcart();

  }, [])
  
  return <>hello</>;
}

export default Cart;
