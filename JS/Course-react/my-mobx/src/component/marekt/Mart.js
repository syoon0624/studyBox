import React from 'react'
import { CardGroup, Container } from 'reactstrap'
import CartStore from '../store/CartStore'
import ProductStore from '../store/ProductStore'
import CartList from './CartList'
import ProductList from './ProductList'

const cartStore = new CartStore();
const productStore= new ProductStore();

const Mart = () => {
    return (
        <Container>
            <CardGroup>
                <ProductList productStore={productStore} cartStore={cartStore}/>
                <CartList cartStore={cartStore} />
            </CardGroup>
        </Container>
    )
}

export default Mart
