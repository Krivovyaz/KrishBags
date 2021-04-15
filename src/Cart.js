import React from 'react'
import styled from 'styled-components'
import CartTotal from './CartTotal'
import CartItems from './CartItems'

function Cart({cartItems, setCartItems}) {
    return (
        <Container>
            <CartItems cartItems={cartItems} setCartItems={setCartItems}/>
            <CartTotal cartItems={cartItems} />
        </Container>
    )
}

export default Cart

const Container = styled.div`
    display: flex;
     @media (max-width: 768px) {
         flex-direction: column;
     }
`