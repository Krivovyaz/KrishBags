import React from 'react'
import styled from 'styled-components'
import CartItem from './CartItem'

function CartItems({cartItems, setCartItems}) {
    console.log(cartItems);
    return (
        <Container>
            <ItemsContainer>
            {
                cartItems.map((item) => (
                    <CartItem
                        item={item}
                        setCartItems={setCartItems}
                    />
                ))
                }
            </ItemsContainer>

        </Container>
    )
}

export default CartItems

const Container = styled.div`
    flex: 0.7;
    margin: 20px 20px 0 30px;
`

const ItemsContainer = styled.div``
