import React, { createContext } from "react";
import ContextChildren from "./C35_ContextChildren";

const { Provider, Consumer } = createContext();
export { Consumer };

const Context = () => {
  return (
    <Provider value="React Study">
      <ContextChildren />
    </Provider>
  );
};

export default Context;