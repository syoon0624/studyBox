import React from "react";
import { Consumer } from "./Context";

const Children2 = () => {
  return (
    <Consumer>
      {(contextValue) => <h3>{`contextValue : ${contextValue}`}</h3>}
    </Consumer>
  );
};

export default Children2;