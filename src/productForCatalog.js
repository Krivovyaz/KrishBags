import React from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

function productForCatalog({data}) {

    const history = useHistory();

    const pathIdentifier = "product";

    const goToProduct = (id) => {
        if(id) {
            history.push(`/productPage/${id}`)
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

export default productForCatalog

const Container = styled.div``

const Title = styled.span`
font-size: 34px;
font-weight: 300;
padding: 10px;

`