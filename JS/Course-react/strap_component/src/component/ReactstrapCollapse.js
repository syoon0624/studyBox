import React from "react";
import { Button, Card, CardBody, UncontrolledCollapse } from "reactstrap";

const ReactstrapCollapse = () => {
  return (
    <div>
      <Button color="warning" id="toggle">
        펼치기/접기
      </Button>
      <UncontrolledCollapse toggler="#toggle">
        <Card>
          <CardBody>이곳은 카드입니다만?</CardBody>
        </Card>
      </UncontrolledCollapse>
    </div>
  );
};

export default ReactstrapCollapse;