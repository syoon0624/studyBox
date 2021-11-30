import { toJS } from 'mobx'
import { observer } from 'mobx-react'
import React from 'react'
import { Card, CardBody, CardFooter, CardHeader } from 'reactstrap'
import Cart from './Cart'

const CartList = observer(({cartStore, ...props}) => {
    return (
            <Card>
                <CardHeader>
                    장바구니
                </CardHeader>
                <CardBody>
                    {toJS(cartStore.cartItems).length === 0 ?
                     "상품 없음." : 
                     toJS(cartStore.cartItems).map(ele => {
                        return <Cart name={ele.productName} price={ele.price} amount={ele.amount}/>
                     })}
                </CardBody>
                <CardFooter>
                    Total: {toJS(cartStore.total)}
                </CardFooter>
            </Card>
    )
})

export default CartList
