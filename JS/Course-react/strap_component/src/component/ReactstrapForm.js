import React from "react";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

const ReactstrapForm = () => {
  return (
    <div>
      <Form>
        <Label for="exampleGender">gender</Label>
        <Input type="select" bsSize="sm">
          <option>no select</option>
          <option>Woman</option>
          <option>Man</option>
        </Input>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="address">address</Label>
              <Input type="text" name="address" id="address" />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="mobile">mobile</Label>
              <Input type="text" name="mobile" id="mobile"></Input>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="age">age</Label>
              <Input type="text" name="age" id="age"></Input>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default ReactstrapForm;