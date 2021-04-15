import React from 'react'
import styled from 'styled-components'
import NumberFormat from 'react-number-format';

function CartTotal({cartItems}) {

    const getCount = () => {
        let tempCount = 0;
            cartItems.forEach((item) => {
            tempCount += +item.count;
            });
        return tempCount;
    }
    const getTotalPrice = () => {
        let tempCount = 0;
            cartItems.forEach((item) => {
            tempCount += +item.price;
            });
        return tempCount;
    }

    return (
        <Container>
            <Subtotal>Subtotal({getCount()} items): 
            <NumberFormat value={getTotalPrice()} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </Subtotal>
            <CheckoutButton>Proceed to checkout</CheckoutButton>
        </Container>
    )
}

export default CartTotal

const Container = styled.div`
    height: 10%;
    flex: 0.2;
    padding: 20px;
`
const Subtotal = styled.div`
    margin-bottom: 16px;
    font-weight: 700;
    font-size: 19px;
`

const CheckoutButton = styled.button`
    background-color: #ddb347;
    width: 100%;
    padding: 4px 8px;
    border: 2px solid #a88734 ;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    :hover {
        background: #ddb347;
    }
`

