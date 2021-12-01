import React, { useState } from 'react'
import Product from './Product'
import { Button, Card, CardBody, CardHeader, CardText, Input } from 'reactstrap'
import { observer } from 'mobx-react';
import { toJS } from 'mobx';


const ProductList = observer(({productStore, cartStore, ...props}) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const addCart = item => {
        cartStore.addCart(item);
    }
    const handleClick = () => {
        const items = {
            productName: name,
            price: Number(price),
            amount: 10,
        };
        productStore.addProduct(items);
        console.log(toJS(productStore.products));
        setName('');
        setPrice('');
    }
    return (
        <Card>
            <CardHeader>
                상품목록
            </CardHeader>
            <CardBody>
                {toJS(productStore.products).length === 0 ? 
                "상품 없음." :  
                toJS(productStore.products).map(ele => {
                    return <Product item={ele} addCart={addCart}/>
                })}
                <CardText>
                    상품 추가하기
                </CardText>
                <Input placeholder="상품이름" value={name} onChange={e => {
                    setName(e.target.value);
                }}/>
                <Input placeholder="가격" value={price} onChange={e => {
                    setPrice(e.target.value);
                }} onKeyPress={e => {
                    if(e.key === "Enter") handleClick();
                }}/>
                <Button onClick={() => {
                    handleClick();
                }}>추가하기</Button>
            </CardBody>
        </Card>
    )
});

export default ProductList
