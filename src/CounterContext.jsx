import { createContext, useState } from "react";

export let Counter = createContext();

function CounterContext(props) {
  const [Count, setCount] = useState(0);
  const [username, setusername] = useState("Ahmed");
  return (
    <Counter.Provider value={{ Count, username }}>
      {props.children}
    </Counter.Provider>
  );
}

export default CounterContext;
