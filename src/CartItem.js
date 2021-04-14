import React from 'react'
import styled from 'styled-components'

function CartItem({item, setCartItems}) {

    const deleteItem = (e) => {
        e.preventDefault();
        let tempProducts = [];
        tempProducts = JSON.parse(localStorage.getItem("products"));
        let tempIndex = tempProducts.findIndex(product => product.id == item.id );
        tempProducts.splice(tempIndex, 1);
        localStorage.removeItem("products");
        localStorage.setItem("products", JSON.stringify(tempProducts));
        setCartItems(tempProducts);
    }

    let options = [];

    for( let i=1; i < Math.max(item.count+1, 20); i++) {
        options.push(<option value={i}> Qty: {i}</option>)
    }

    const changeQuantity = (newQuantity) => {
        let tempProducts = [];
        tempProducts = JSON.parse(localStorage.getItem("products"));
        let tempIndex = tempProducts.findIndex(product => product.id == item.id );
        tempProducts[tempIndex].count = newQuantity;
        localStorage.removeItem("products");
        localStorage.setItem("products", JSON.stringify(tempProducts));
        console.log(tempProducts);
        setCartItems(tempProducts);
    }
    return (
        <Container>
            <ImageContainer>
                <img src={item.image} />
            </ImageContainer>

            <CartItemInfo>
                <CartItemInfoTop>
                    <h2>{item.name}</h2>
                </CartItemInfoTop>
                <CartItemInfoBottom>
                    <CartItemQuantityContainer>
                        <select
                            value={item.count}
                            onChange={(e) => changeQuantity(e.target.value)}
                        >
                            {options}
                        </select>
                    </CartItemQuantityContainer>
                    <CartItemDeleterContainer
                        onClick={deleteItem}
                    >
                        Delete
                    </CartItemDeleterContainer>
                </CartItemInfoBottom>
            </CartItemInfo>

            <CartItemPrice>
                ${item.price}
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