import React, { useContext } from 'react'
import { HomeContext } from '../Context/HomeContext'
import { useParams } from 'react-router-dom'
import BreadCrumb from '../Components/BreadCrumbs/BreadCrumb'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'

const Product = () => {
  const {all_product}= useContext(HomeContext);
  const {productId}= useParams();
  const numberID = Number(productId);
  const product = all_product.find((e)=> e.id === numberID);
 
  console.log(all_product);
  return (
    <div>
      <BreadCrumb product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox />
      <RelatedProducts /> 
    </div>
  )
}

export default Product
