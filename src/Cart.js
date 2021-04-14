import React from 'react'
import styled from 'styled-components'
import CartTotal from './CartTotal'
import CartItems from './CartItems'

function Cart({cartItems, setCartItems}) {
    return (
        <Container>
            <CartItems cartItems={cartItems} setCartItems={setCartItems}/>
            <CartTotal />
        </Container>
    )
}

export default Cart

const Container = styled.div`
    display: flex;
`