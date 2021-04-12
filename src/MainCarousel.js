import React from 'react'
import styled from 'styled-components'
import FirstCarouselPhoto1 from './photo/firstCarouselPhoto2.png'
import FirstCarouselPhoto2 from './photo/firstCarouselPhoto2.png'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'

function MainCarousel({products}) {
    return (
        <Container>
            <OwlCarousel
                className="owl-theme"
                autoplay="true"
                items={2}
                dots = {false}
                loop="true"
                center="true"
                smartSpeed={1200}
                autoplayTimeout={4000}
    
            >
                {/* // add map */}
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

const Container = styled.div``
