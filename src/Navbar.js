import React, { useState } from 'react'
import styled from 'styled-components' 
import { NavLink } from 'react-router-dom';
import Burger from './Burger'

function Navbar() {

    const [open, setOpen] = useState(false);

    const ActiveNavLink = {
        "transform": "translateX(-2px)",
        "border": "1px solid rgba(255, 255, 255, 1)",
        "backgroundColor": "rgb(241, 219, 196)",
        "borderRadius": "20px",
        "color": "black"
    };
    return (
        <Container>
            <Burger open={open} setOpen={setOpen}/>
            <NavbarComponent open={open}>
                <NavLink onClick={() => setOpen(false)} to='/' activeStyle={ActiveNavLink}>home</NavLink>
                <NavLink onClick={() => setOpen(false)} to='/CatalogComponent' activeStyle={ActiveNavLink}>catalog</NavLink>
                <NavLink onClick={() => setOpen(false)} to="/AboutComponent" activeStyle={ActiveNavLink}>about</NavLink>
                <NavLink onClick={() => setOpen(false)} to="/FAQsComponent" activeStyle={ActiveNavLink}>FAQs</NavLink>
                <NavLink onClick={() => setOpen(false)} to="/DeliveryComponent" activeStyle={ActiveNavLink}>delivery</NavLink>
                <NavLink onClick={() => setOpen(false)} to="/ContactsComponent" activeStyle={ActiveNavLink}>contacts</NavLink>
            </NavbarComponent>
        </Container>
    )
}

export default Navbar

const Container = styled.div`
   
`

const NavbarComponent = styled.div`
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

    @media (max-width: 768px) {
        flex-direction: column;
        background-color: black;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
        top: 0;
        left: 0;
        height: 100vh;
        width: 30%;
        margin: 0;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
        justify-content: start;
        z-index: 15;
    }

    @media (max-width: 468px) {
        flex-direction: column;
        background-color: black;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        margin: 0;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
        justify-content: start;
        z-index: 15;
    }
`

