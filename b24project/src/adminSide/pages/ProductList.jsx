import React from 'react'
import ProductCard from '../components/ProductCard'
import ProductSidebar from '../components/ProductSidebar'
import Navbar from '../components/Navbar'
const ProductList = () => {
  return (
    <div>
        <Navbar/>
        <ProductSidebar/>
      <ProductCard/>
    </div>
  )
}

export default ProductList;
