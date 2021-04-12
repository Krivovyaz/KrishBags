import React from 'react'
import styled from 'styled-components'

function CartItem({id, CartItem}) {
    
    return (
        <Container>
            <ImageContainer>
                <img src="https://i.ibb.co/jHHjFgd/p14.jpg" />
            </ImageContainer>

            <CartItemInfo>
                <CartItemInfoTop>
                    <h2>Miranda</h2>
                </CartItemInfoTop>
                <CartItemInfoBottom>
                    <CartItemQuantityContainer>
                        <select
                            // value={item.quantity}
                            // onChange={(e) => changeQuantity(e.target.value)}
                        >
                            {/* {options} */}
                        </select>
                    </CartItemQuantityContainer>
                    <CartItemDeleterContainer
                        // onClick={deleteItem}
                    >
                        Delete
                    </CartItemDeleterContainer>
                </CartItemInfoBottom>
            </CartItemInfo>

            <CartItemPrice>
                $100
            </CartItemPrice>
        </Container>
    )
}

export default CartItem

const Container = styled.div`
    padding: 12px 0 12px 0;
    display: flex;
    border-bottom: 1px solid #DDD;

`
const ImageContainer = styled.div`
    witdth: 180px;
    height: 180px;
    flex-shrink: 0;
    flex-grow: 0;
    margin-right: 16px;
    img {
        object-fit: contain;
        height: 100%;
        
    }
`

const CartItemInfo = styled.div`
    flex-grow: 1;
`

const CartItemInfoTop = styled.div`
    color: #007185;
    h2 {
        font-size: 18px;
    }
`

const CartItemInfoBottom = styled.div`
    display: flex;
    margin-top: 4px;
    align-items: center;
`

const CartItemQuantityContainer = styled.div`
    select {
        border-radius: 7px;
        background-color: #F0F2F2;
        padding: 8px;
        box-shadow: 4px 4px 5px rgba(15,17,17,.15);

        : focus {
            outline: none
        }
 }

`

const CartItemDeleterContainer = styled.div`
color: #007185;
margin-left: 16px;
cursor: pointer;
`

const CartItemPrice = styled.div`
    font-size: 18px;
    font-weight: 700;
    margin-left: 16px;
`