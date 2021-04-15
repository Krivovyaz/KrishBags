import React, {useEffect} from 'react'
import styled from 'styled-components'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import Product from './Product'

function SecondCarousel({products, getCollectionName} ) {

    useEffect(() => {
        getCollectionName("secondCarouselProducts");
        console.log(products);
        localStorage.setItem("collectionName", "secondCarouselProducts");
      }, [])

    return (
        <Container>
             {
                products.map((data) => (
                    <div>
                        <Product
                        data={data}
                        />
                    </div>
                ))
                }
        </Container>
    )
}

export default SecondCarousel

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-top: 80px;
    padding-bottom: 20px;
    justify-content: center;
    
`


