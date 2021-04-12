import React from 'react'
import styled from 'styled-components'

function ContactsComponent() {
    return (
        <Container>
            <h2>Contacts:</h2>
            <MobilePhoneNumber>+375446666666</MobilePhoneNumber>
            <Email>Krish_bags@gmail.com</Email>
        </Container>
    )
}

export default ContactsComponent

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
        font-size: 35px;
        font-weight: 400;
        margin-bottom:10px;
    }
    height: 55vh;
`

const MobilePhoneNumber = styled.span`
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 300;
`

const Email = styled.span`
font-size: 20px;
    font-weight: 300;
    `
