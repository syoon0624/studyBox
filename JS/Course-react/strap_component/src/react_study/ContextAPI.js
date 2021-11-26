import React, { createContext, useState } from "react";
import ContextChildren from "./ContextChildren";

const { Provider, Consumer } = createContext();
export { Consumer };

const ContextApi = () => {
  const [stateFunc, setStateFunc] = useState("test");

  const fncSetStateFunc1 = (value) => {
    setStateFunc(value);
  };

  const content = {
    stateFunc: stateFunc,
    fncSetStateFunc: fncSetStateFunc1,
  };

  return (
    <div>
      <Provider value={content}>
        <ContextChildren />
      </Provider>
    </div>
  );
};

export default ContextApi;