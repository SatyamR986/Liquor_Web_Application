import React, { useContext } from 'react'
import { HomeContext } from '../Context/HomeContext'
import { useParams } from 'react-router-dom'
import BreadCrumb from '../Components/BreadCrumbs/BreadCrumb'

const Product = () => {
  const {all_product}= useContext(HomeContext);
  const {productId}= useParams();
  const numberID = Number(productId);
  const product = all_product.find((e)=> e.id === numberID);
 
  console.log(all_product);
  return (
    <div>
      <BreadCrumb product={product}/>
    </div>
  )
}

export default Product
