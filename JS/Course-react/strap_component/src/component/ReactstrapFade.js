import React, { useState } from "react";
import { Button, Fade } from "reactstrap";

const ReactstrapFade = () => {
  const [fadeInout, setFadeInout] = useState(false);

  const toggle = (e) => {
    setFadeInout(!fadeInout);
  };

  return (
    <div>
      <Button color="success" onClick={toggle}>
        In.out
      </Button>
      <Fade in={fadeInout} tag="h1">
        Fade ....
      </Fade>
    </div>
  );
};

export default ReactstrapFade;