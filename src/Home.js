import React, { useState, useEffect }  from 'react'
import styled from 'styled-components'
import MainCarousel from './MainCarousel'
import SecondCarousel from './SecondCarousel'
import AboutShop from './AboutShop'
import {db} from './firebase'

function Home({getCollectionName}) {

    const [products, setProducts] = useState([])

    const getProducts = () => {
        db.collection('secondCarouselProducts').onSnapshot((snapshot) => {
            let tempProducts = [];
            tempProducts = snapshot.docs.map((doc)=> (
            {
                id: doc.id,
                product: doc.data()
            }
            ));
            setProducts(tempProducts);
        })
    }

    useEffect(() => {
        getProducts();
    }, []) 

    return (
        <Container>
            <MainText>
                <TitleFirstLevel>Upgrade your style with Krishbags</TitleFirstLevel>
                <TitleSecondLevel>Find your unique design</TitleSecondLevel>
            </MainText>
            <Content>
                <MainCarousel />
                <SecondCarousel products={products} getCollectionName={getCollectionName}/>
                <AboutShop />
            </Content>
        </Container>
    )
}

export default Home

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 70px;

`

const MainText = styled.div`
    width: 60%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80vh;
    margin-bottom: -120px;
    padding-top: 120px;    

    @media (max-width: 770px) {
        font-size: 40px;
        width: 90%;
    }
    @media (max-width: 1100px) {
        font-size: 50px;
        width: 90%;
    }
`
const TitleFirstLevel = styled.span`
    font-size: 80px;

    @media (max-width: 770px) {
        font-size: 45px;
    }
    
`

const TitleSecondLevel = styled.span`
    font-size: 30px;
    margin-top: 116px;

    @media (max-width: 770px) {
        font-size: 25px;
    }
    @media (max-width: 400px) {
        font-size: 20px;
    }
`

const Content = styled.div`
    width: 100%;
    margin: 10rem, auto;
`