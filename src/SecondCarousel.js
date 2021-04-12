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
            {/* <OwlCarousel
                classname="owl-theme"
                items={4}
                loop={true}
                margin={70}
                nav={true}
            >
                {
                    products.map((data) => (
                        <div>
                            <Product 
                                title={data.product.name}
                                image={data.product.image}
                                price={data.product.price}
                                description={data.product.description}
                            />
                        </div>
                    ))
                }
            </OwlCarousel> */}
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


