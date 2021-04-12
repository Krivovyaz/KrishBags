import React from 'react'
import styled from 'styled-components'

function AboutShop() {
    return (
        <Container>
            <About>
            <h2>About Us</h2>
                <FirstPartAbout>The Way It Should Be</FirstPartAbout>
                <SecondPartAbout>We founded Krishbags with one goal in mind: providing a high-quality, smart, and reliable online store. Our passion for excellence has driven us from the beginning, and continues to drive us into the future. We know that every product counts, and strive to make the entire shopping experience as rewarding as possible. Check it out for yourself!</SecondPartAbout>
            </About>
            
                <MainPhoto src="https://i.ibb.co/0yfTvV4/Main-Photo.jpg"></MainPhoto>
        </Container>
    )
}

export default AboutShop

const Container = styled.div`

`
const About = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
// background-color: rgb(241, 219, 196);
padding-bottom: 80px;
// opacity: 0.7;
color: white;
height: 45vh;

h2 {
font-size: 40px;
font-weight: 500;
}
`

const FirstPartAbout = styled.span`
    font-size: 24px;
    font-weight: 400;
    margin-top: 20px;
`
const SecondPartAbout = styled.span`
    margin: auto;
    width: 700px;
    font-size: 17px;
    margin-top: 26px;
    line-height: 30px;
    font-weight: 400;
`

const MainPhoto = styled.img`
width: 100%;
`