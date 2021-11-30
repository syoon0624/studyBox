import React from 'react'
import { Col, Input, Row } from 'reactstrap'

const Cart = (props) => {
    const {name, price, amount} = props
    return (
        <Row>
            <Col sm="4">
                제품명  
                <Input disabled value={name}/>  
            </Col>
            <Col sm="4">
                가격    
                <Input disabled value={price}/>
            </Col>
            <Col sm="4">
                갯수   
                <Input disabled value={amount}/>
            </Col>
        </Row>
        
    )
}

export default Cart
