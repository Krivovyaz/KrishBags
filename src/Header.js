import React, {useEffect} from 'react'
import styled from 'styled-components'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

function Header() {

    const getCartAmountOfItems = () => {
        let products = JSON.parse(localStorage.getItem("products"));
        let tempCount = 0;
        if(products != undefined) {
            products.forEach((item) => {
                tempCount += +item.count;
            } )
        } else {
            tempCount = 0;
        }
        return tempCount;
    }

    
      
      
    // setInterval(getCartAmountOfItems(), 60);



    return (
        <Container>
            <AdditionalInformation>
                <HeaderUserContainer>
                    <AccountCircleIcon />
                    <UserName>Dima Krivovyaz</UserName>
                </HeaderUserContainer>
                <HeaderOptionCart>
                    <Link to="/Cart">
                    <ShoppingCartIcon />
                    </Link>
                    <CartCount>{getCartAmountOfItems()}</CartCount>
                </HeaderOptionCart>
            </AdditionalInformation>
            <HeaderMainInformation>
                <ShopTitle><Link to = "/">KRISH</Link></ShopTitle>
                {/* <hr/> */}
                <Navbar />
            </HeaderMainInformation>
        </Container>
    )
}

export default Header

const Container = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    padding: 5px 27px;
    background: linear-gradient( to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    max-height: 270px;
`
const AdditionalInformation = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 13px;
    margin-right: 5px;
`

const HeaderUserContainer = styled.div`
    display: flex;
    margin-right: 20px;
    cursor: pointer;
`

const UserName = styled.div`
    margin-left: 5px;
`

const HeaderOptionCart = styled.div`
    display: flex;
    cursor: pointer;
`

const CartCount = styled.div`
    margin-left: 3px;
`

const HeaderMainInformation = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    justify-content: center;
    align-items: center;

    hr {
        height: 2px;
    width: 670px;
    margin-bottom: 7px;
    color: white;
    background-color: white;
    border: none;
    }
   
`

const ShopTitle = styled.div`
    font-weight: 500;
    font-family: "Dansing Script";
    font-size: 58px;
    margin-top: 40px; 
    margin-bottom: 15px;
`