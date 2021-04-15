import React from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

function Product({data}) {

    const history = useHistory();

    const goToProduct = (id) => {
        if(id) {
            history.push(`/ProductPage/${id}`)
        }
    }

    return (
        <Container>
            <Image src={data.product.image}></Image>
            <Title>{data.product.name}</Title>
                <ActionSection onClick={() => goToProduct(data.id)}>
                    <span>view</span>
                    <ArrowRightIcon />
                </ActionSection>
        </Container>
    )
}

export default Product

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin: 10px;
    align-items: center;
`

const Image = styled.img`
    max-height: 500px;
    object-fit: contain;
    border-radius: 5px;
`

const Title = styled.span`
    font-size: 34px;
    font-weight: 300;
    padding: 10px;
`

const ActionSection = styled.div`
    font-size: 20px;
    font-weight: 100;
    display: flex;
    align-items: center;
    cursor: pointer;

    span{
        margin-right: 5px;
        margin-top: -6px;
    }
`