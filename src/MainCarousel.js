import React from 'react'
import styled from 'styled-components'
import FirstCarouselPhoto1 from './photo/firstCarouselPhoto2.png'
import FirstCarouselPhoto2 from './photo/firstCarouselPhoto2.png'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'

function MainCarousel({products}) {

    const options = {
        autoplay: true,
        items: 2,
        dots: false,
        loop: true,
        center: true,
        smartSpeed: 1200,
        autoplayTimeout: 4000,
        responsive: {
            100: {
                items: 1
            },
            768: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    }
    return (
        <Container>
            <OwlCarousel
                className="owl-theme"
                {...options}
    
            >
                <div className="item">
                    <img src={FirstCarouselPhoto1}></img>
                </div>
                <div className="item">
                    <img src={FirstCarouselPhoto2}></img>
                </div>
                <div className="item">
                    <img src={FirstCarouselPhoto1}></img>
                </div>
                <div className="item">
                    <img src={FirstCarouselPhoto1}></img>
                </div>
                <div className="item">
                    <img src={FirstCarouselPhoto2}></img>
                </div>
                <div className="item">
                    <img src={FirstCarouselPhoto1}></img>
                </div>
            </OwlCarousel>
        </Container>
    )
}

export default MainCarousel

const Container = styled.div`
    img {
        object-fit: contain;
        max-height: 600px;
    }
`
