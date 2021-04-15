
import './App.css';
import { useState, useEffect }  from 'react'
import styled from 'styled-components'
import Header from './Header'
import Home from './Home'
import CatalogComponent from './CatalogComponent'
import AboutComponent from './AboutComponent'
import FAQsComponent from './FAQsComponent'
import DeliveryComponent from './DeliveryComponent'
import ContactsComponent from './ContactsComponent'
import ProductPage from './ProductPage'
import MainBackgroundVideo  from './videos/black.mp4'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {db} from './firebase'
import FooterComponent from './FooterComponent'
import Cart from './Cart'

function App() {

  const [products, setProducts] = useState([]);
  const [collectionName, setCollectionName] = useState([]);
  const [cartItems, setCartItems] = useState([]);


  const getCollectionName = (name) => {
    setCollectionName({
      name: name
    })
  }


  const getProducts = () => {
      db.collection('products').onSnapshot((snapshot) => {
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

  const getCartItems = () => {
    let tempCartItems = [];
    tempCartItems = JSON.parse(localStorage.getItem("products"));
    setCartItems(tempCartItems);
  }
  

  useEffect(() => {
      getProducts();
      console.log(collectionName.name);
      getCartItems()
  }, []) 
  
  return (
    
    <Router>
      <Container>
        <BackgroundVideo>
          <video
            autoPlay
            loop
            muted
          >
            <source src={MainBackgroundVideo} type="video/mp4"></source>
          </video>
        </BackgroundVideo>

        <Header />

        <Switch>

          <Route path="/AboutComponent">
            <AboutComponent/>
          </Route>

          <Route path="/FAQsComponent">
            <FAQsComponent/>
          </Route>

          <Route path="/DeliveryComponent">
            <DeliveryComponent/>
          </Route>

          <Route path="/ContactsComponent">
            <ContactsComponent/>
          </Route>

          <Route path="/CatalogComponent">
            <CatalogComponent products={products} getCollectionName={getCollectionName}/>
          </Route>

          <Route path="/ProductPage/:productId">
            <ProductPage collectionName={collectionName} setCartItems={setCartItems}/>
          </Route>

          <Route path="/Cart">
            <Cart cartItems={cartItems} setCartItems={setCartItems}/>
          </Route>

          <Route path="/">
            <Home getCollectionName={getCollectionName}/>
          </Route>
          
        </Switch>
        <FooterComponent />
      </Container>
    </Router>
  );
}

export default App;

const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  a {
    color: white;
    text-decoration: none;
    margin: 0 10px;
}
`

const BackgroundVideo = styled.div `
  video{
    position: fixed;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -100;
    transform: translateX(-50%) translateY(-50%);
    background-size: cover;
    transition: 1s opacity;
  }
`