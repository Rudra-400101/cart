import React from 'react'

export default function footer(props) {
  return (
    <div className='row fixed-bottom'>
      <button className='btn btn-danger col-2 rounded-end-0' onClick={props.reset}>reset</button>
      <div className='col-4 bg-dark text-white border-end d-flex align-items-center'>
       Total Amount : {props.totalAmount}
      </div>
      <div className="col-4 bg-dark text-white d-flex align-items-center">Products You were added : {props.productList.length}</div>
      <button className='btn btn-primary col-2 rounded-start-0'>pay now</button>
    </div>
  )
}
