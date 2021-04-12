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

`

const MainText = styled.div`
    // mask-image: linear-gradient(to top, transparent 10%, black 90%);
    width: 60%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80vh;
    margin-bottom: -120px;
    margin-top: 120px;    
`
const TitleFirstLevel = styled.span`
    font-size: 80px;
    margin-top: -10%;
    
`

const TitleSecondLevel = styled.span`
    font-size: 30px;
    margin-top: 116px;
`

const Content = styled.div`
    width: 100%;
    margin: 10rem, auto;
`