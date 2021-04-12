import React, {useEffect} from 'react'
import styled from 'styled-components'
import Product from './Product'

function Catalog({products, getCollectionName}) {

    useEffect(() => {
        getCollectionName("products");
        localStorage.setItem("collectionName", "products");
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

export default Catalog

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    // margin-top: -10%;
`
