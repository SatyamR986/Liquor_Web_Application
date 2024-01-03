import React from 'react'
import './BreadCrumb.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'


// const BreadCrumb = (props) => {
//     const {product}= props;
//     console.log(product);
//   return (
//     <div className='breadcrumb'>
//         HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
//     </div>
//   )
// }

const BreadCrumb = (props) => {
    const { product } = props;
    const category = product ? product.category : 'Unknown';
    
    return (
        <div className='breadcrumb'>
            HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {category} <img src={arrow_icon} alt="" /> {product ? product.name : ''}
        </div>
    );
}




export default BreadCrumb