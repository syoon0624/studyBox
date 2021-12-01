import { toJS } from 'mobx'
import { observer } from 'mobx-react'
import React from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Row } from 'reactstrap'
import Cart from './Cart'

const CartList = observer(({cartStore, ...props}) => {
    const deleteItem = item => {
        return cartStore.deleteCart(item);
    }

    return (
            <Card>
                <CardHeader>
                    장바구니
                </CardHeader>
                <CardBody>
                    {toJS(cartStore.cartItems).length === 0 ?
                     "상품 없음." : 
                     toJS(cartStore.cartItems).map(ele => {
                        return <Cart name={ele.productName} price={ele.price} amount={ele.amount} deleteItem={deleteItem}/>
                     })}
                </CardBody>
                <CardFooter>
                    <Row>
                        <Col sm="10">
                            Total: {toJS(cartStore.total)}
                        </Col>
                        <Col>
                            <Button onClick={() => {
                                cartStore.clearAll();
                            }}>비우기</Button>
                        </Col>
                    </Row>
                </CardFooter>
            </Card>
    )
})

export default CartList
