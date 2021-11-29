import React, { useEffect, useState } from "react";
import { Button, Col, Container, Input, Label, Row } from "reactstrap";
import { observer } from "mobx-react";

const Counter = observer(({ count, ...props }) => {

const [amountData, setAmountData] = useState("");

  useEffect(()=> {
    console.log(count);
  },[count])

  return (
    <Container style={{ paddingTop: "50px" }}>
      <Row>
        <Col sm="4">
          <Button onClick={() => count.minusCounter()}>-</Button>
        </Col>
        <Col sm="4">
          <Label>Mobx {count.counter}</Label> <br />
          <Label>Amount: {count.amount}</Label>
        </Col>
        <Col sm="4">
          <Button onClick={() => count.addCounter()}>+</Button>
        </Col>
      </Row>
      <Row>
        현재 갯수를 mobX로 전달해보자.
      <Col sm="4">
          <Input 
            value={amountData}
            onChange={e => setAmountData(e.target.value)}
          />
        </Col>
        <Col>
        <Button onClick={() => count.changeAmount(amountData)}>값 변경하기</Button>
        </Col>
      </Row>
    </Container>
  );
});

export default Counter;