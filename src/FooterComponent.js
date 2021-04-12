import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import PinterestIcon from '@material-ui/icons/Pinterest';
import styled from 'styled-components'

function FooterComponent() {

    const styleForIcons = {
        padding: "0 10px"
    }
    return (
        <Container>
            <SocialMediaIcons>
                <InstagramIcon style = {styleForIcons}/>
                <FacebookIcon style = {styleForIcons}/>
                <PinterestIcon style = {styleForIcons}/>
            </SocialMediaIcons>
        </Container>
    )
}

export default FooterComponent

const Container = styled.div`
background-color: black;
-webkit-mask-image: linear-gradient(to bottom,transparent 0%,black 44%);
display: flex;
align-items: center;
justify-content: center;
height: 70px;
width: 100%;
`

const SocialMediaIcons = styled.div`
    color: white;
    
    
`