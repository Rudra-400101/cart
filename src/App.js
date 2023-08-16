import React, { useState } from 'react'
import "./App.css";
import Navbar from "./component/navbar";
import ProductList from "./component/productList"
import Footer from './component/footer'
import AddItem from './component/additem';

function App() {
  const productList = [
    {
      price: 9999,
      name: "I phone",
      quantity: 0
    },
    {
      price: 999,
      name: "Redmi note 7 pro",
      quantity: 0
    }
  ]
  const [products, setProductList] = useState(productList)
  const [totalAmount, setTotalAmount] = useState(0)

  const IncreamentQuantity = (index) => {
    let newProductsList = [...products];
    let newTotalAmount = totalAmount;
    newProductsList[index].quantity++;
    newTotalAmount += newProductsList[index].price;
    setProductList(newProductsList);
    setTotalAmount(newTotalAmount)
  }
  const DecreamentQuantity = (index) => {
    let newProductsList = [...products];
    let newTotalAmount = totalAmount;
    if (newProductsList[index].quantity > 0) {
      newProductsList[index].quantity--;
      newTotalAmount -= newProductsList[index].price;
    }
    setProductList(newProductsList);
    setTotalAmount(newTotalAmount)
  }
  const reset = () => {
    let newProductsList = [...products];
    newProductsList.map((products) => {
      products.quantity = 0;
    })
    setProductList(newProductsList)
    setTotalAmount(0)
  }

  const removeItem = (index) => {
    let newProductsList = [...products];
    let newTotalAmount = totalAmount;
    newTotalAmount -= newProductsList[index].quantity*newProductsList[index].price;
    newProductsList.splice(index,1);
    setProductList(newProductsList);
    setTotalAmount(newTotalAmount);
  }
  const addItem = (name,price,quantity) => {
    let newProductsList = [...products];
   newProductsList.push({
    name:name,
    price:price,
    quantity:0
   });
  setProductList(newProductsList)
  }
  return (
    <>
      <Navbar />
      <main className="container">
      <AddItem addItem={addItem}/>   
        <ProductList productList={products} IncreamentQuantity={IncreamentQuantity} DecreamentQuantity={DecreamentQuantity} removeItem={removeItem} />
      </main>
      <Footer totalAmount={totalAmount} reset={reset} productList={products} />
    </>
  );
}

export default App;
