import React from 'react'
import { Button, Col, Input, Row } from 'reactstrap'

const Product = (props) => {
    const {productName, price} = props.item;
    return (
        <Row>
            <Col sm="4">
                제품명  
                <Input disabled value={productName}/>  
            </Col>
            <Col sm="4">
                가격    
                <Input disabled value={price}/>
            </Col>
            <Col>
                기능 <br />
                <Button onClick={() => {
                    props.addCart({
                        productName,
                        price
                    });
                }}>장바구니 담기...</Button>
            </Col>
        </Row>
    )
};

export default Product
