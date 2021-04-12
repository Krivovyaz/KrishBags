import React from 'react'
import styled from 'styled-components'
import CartItem from './CartItem'

function CartItems() {
    return (
        <Container>
            <CartItem />
            <CartItem />

        </Container>
    )
}

export default CartItems

const Container = styled.div`
flex: 0.8;
`
