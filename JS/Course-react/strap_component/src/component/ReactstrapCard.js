import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

const ReactstrapCard = () => {
  return (
    <div>
      <Card>
        <CardImg
          top
          height="100px"
          width="50px"
          src="https://www.google.co.kr/images/srpr/logo11w.png"
          alt="Card Img" />
        <CardBody>
          <CardTitle>Card Title</CardTitle>
          <CardSubtitle>Card SubTitle</CardSubtitle>
          <CardText>내용 입니다. 이거저거 많이 넣어볼가요?</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ReactstrapCard;