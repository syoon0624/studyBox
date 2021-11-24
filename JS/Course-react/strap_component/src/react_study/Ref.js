import React, { useRef } from "react";

const Ref = () => {
  const inputRef = useRef(null);

  const refFocus = () => {
    inputRef.current.focus();
  };

  const javascriptFocus = () => {
    document.getElementById("id").focus();
  };

  return (
    <div>
      <input id="id" type="text" ref={inputRef}></input>
      <input type="button" value="Ref Focus" onClick={refFocus}></input>
      <input
        type="button"
        value="Javascript Focus"
        onClick={javascriptFocus}
      ></input>
    </div>
  );
};

export default Ref;