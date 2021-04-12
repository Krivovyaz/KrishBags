import React from 'react'
import styled from 'styled-components' 
import {
    Link,
    NavLink
} from 'react-router-dom';

function Navbar() {

    const ActiveNavLink = {
        "transform": "translateX(-2px)",
        "border": "1px solid rgba(255, 255, 255, 1)",
        "backgroundColor": "rgb(241, 219, 196)",
        "borderRadius": "20px",
        "color": "black"
    };
    return (
        <Container>
            <NavLink to='/' activeStyle={ActiveNavLink}>home</NavLink>
            <NavLink to='/CatalogComponent' activeStyle={ActiveNavLink}>catalog</NavLink>
            <NavLink to="/AboutComponent" activeStyle={ActiveNavLink}>about</NavLink>
            <NavLink to="/FAQsComponent" activeStyle={ActiveNavLink}>FAQs</NavLink>
            <NavLink to="/DeliveryComponent" activeStyle={ActiveNavLink}>delivery</NavLink>
            <NavLink to="/ContactsComponent" activeStyle={ActiveNavLink}>contacts</NavLink>
        </Container>
    )
}

export default Navbar

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 20px;
    font-size: 20px;
    font-family: "Montserrat";
    font-weight: 500;
    font-size: 22px;

    a{
        padding: 6px 20px 6px 20px;
        margin: 0;
    }
`


