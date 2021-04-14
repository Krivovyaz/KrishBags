import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {db} from './firebase'
import { useParams} from 'react-router-dom'

function ProductPage({setCartItems}) {

    let { productId} = useParams();

    const [product, setProduct] = useState([]);
    const [additionalPhotos, setAdditionalPhotos] = useState([])
    const [mainPhoto, setMainPhoto] = useState([]);



    const getProduct = () => {
            db.collection(localStorage.getItem("collectionName"))
            .doc(productId)
            .onSnapshot((snapshot) =>{
                setProduct(snapshot.data());
                setMainPhoto(snapshot.data().image);
            })
    }

    const getAdditionalPhotos = () => {
        db.collection(localStorage.getItem("collectionName"))
        .doc(productId)
        .collection("additionalPhotos")
        .onSnapshot((snapshot) => {
            let photos = snapshot.docs.map((doc) =>doc.data());
            setAdditionalPhotos(photos);
        })
    }

    const addToCart = () => {

        let tempProduct = {
            id: productId,
            name: product.name,
            image: product.image,
            price: product.price,
            description: product.description,
            count: 1
        }
        // localStorage.clear();
        if(localStorage.getItem("products") == null) {
            localStorage.setItem("products", JSON.stringify([tempProduct]));
        } else {
            let tempProducts = [];
            tempProducts = JSON.parse(localStorage.getItem("products"));
            let tempIndex = tempProducts.findIndex(item => item.id == tempProduct.id );
            if(tempIndex != -1){
                tempProducts[tempIndex].count++;
                localStorage.removeItem("products");
                localStorage.setItem("products", JSON.stringify(tempProducts));
                setCartItems(tempProducts);
            } else {
                tempProducts.push(tempProduct);
                localStorage.removeItem("products");
                localStorage.setItem("products", JSON.stringify(tempProducts));
                setCartItems(tempProducts);
            }
        }
    }


    useEffect(() => {
        getProduct();
        getAdditionalPhotos();
    }, [productId])

    return (
        <Container>
            <Photos>
                <AdditionalPhotos>
                    {
                        additionalPhotos.map((item) => (
                            <img src={item.photo} onClick={ () => setMainPhoto(item.photo)}></img>
                        ))
                    }
                </AdditionalPhotos>
                <MainPhoto src={mainPhoto} />
            </Photos>
            <InformationSection>
                <NameAndPrice>
                    <Name>{product.name}</Name>
                    <Price>${product.price}</Price>
                </NameAndPrice>
                <hr />
                <AdditionalInformation>
                    <span>color: {product.color}</span>
                    <span>structure: {product.structure}</span>
                    <span>width: {product.width} сm</span>
                    <span>height: {product.height} сm</span>
                </AdditionalInformation>
                <hr />
                <Description>
                    <span>Description:</span>
                    {product.description}
                </Description>
                <ActionSection>
                    <AddToCartButton onClick={addToCart}>Add to Cart</AddToCartButton>
                </ActionSection>
            </InformationSection>
            
        </Container>
    )
}

export default ProductPage

const Container = styled.div`
    display: flex;

`

// const Title = styled.span`
// font-size: 34px;
// font-weight: 300;
// padding: 10px;
// `

const Photos = styled.div`
height: 700px;
display: flex;
margin-left: 10%;
margin-right: 60px;

`

const MainPhoto = styled.img`
    max-height: 100%;
    object-fit: contain;
    border-radius: 7px;
`

const AdditionalPhotos = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    img {
        max-height: 24%;
        opacity: 0.7;
        object-fit: contain;
        padding-top: 5px;
        border-radius: 4%;
        cursor: pointer;
    }
    margin-right: 30px;
`

const InformationSection= styled.div`
height: 700px;
width: 100%;
display: flex;
flex-direction: column;
padding-top: 20px;
margin-right: 60px;
hr {
    height: 1px;
    width: 100%;
    margin-bottom: 7px;
    color: white;
    background-color: white;
    border: none;
    margin-left: 0;
}
`
const NameAndPrice = styled.div`
    display: flex;
    padding: 0 30px;
    align-items: center;
    justify-content: center;
`

const Name = styled.span`
    font-size: 30px;
    font-weight: 400;
    margin-right: 40px;
`

const Price = styled.span`
font-size: 25px;
font-weight: 400;
`

const AdditionalInformation = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 0 30px 30px;
    span {
        margin-top: 10px;
        font-size: 25px;
        font-weight: 400;
    }
`

const Description = styled.div`
    align-items: center;
    span {
        font-size: 25px;
        font-weight: 400;
        margin-right: 10px;
    }
`

const ActionSection = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: flex-end;
`

const AddToCartButton = styled.button`
border: 1px solid orange;
border-radius: 6px;
padding: 10px 20px;
font-size: 17px;
font-weight: 300;
cursor: pointer;
`