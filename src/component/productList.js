import React from "react";
import Product from "./product";

export default function ProductList(props) {
  return ( 
    props.productList.length > 0 ?
    props.productList.map((product, index) => {
    return (
      <Product
        product={product}
        key={index}
        IncreamentQuantity={props.IncreamentQuantity}
        index={index}
        DecreamentQuantity={props.DecreamentQuantity}
        removeItem={props.removeItem} 
      />
    );
    })
    : <h1 className='text-center mt-4'>Please Add Products In Your Cart</h1>
  )  
};
