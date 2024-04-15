import React from 'react'
import './Item.css'

const Item = (props) => {
  return (
    <div className='Item'>
        <img src={props.image} alt="" />
        <p>{props.name}</p>
        <div className="Item-prices">
            <div className="Item-price-new">
                Rs {props.new_price}
            </div>
            <div className="Item-price-old">
                {props.old_price}
            </div>
        </div>
    </div>
  )
}

export default Item