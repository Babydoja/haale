import React, { useEffect, useState } from 'react'
import Productdatas from './Productdatas'
import { productdata } from './Productdata'
// import Search from '../Search/Search'
// import Search from '../Search/Search'
// import AOS from "aos";
// import "aos/dist/aos.css";

const Product = () => {

  const [search, setSearch] = useState('')
  const [filterProduct, setFilterProduct] = useState([])


  useEffect(() => {
    setFilterProduct(
      productdata.filter((product)=>
      product.title.toLowerCase().includes(search.toLowerCase())
      )
    )
  
    
  }, [search,productdata])
  
  // const handleSearch=(e)=>{
  //   setSearch(e.target.value)
  // }
    // const [search, setSearch] = useState('')
    // const [filterProduct, setFilterProduct] = useState([])
    // const handleSearch=(e)=>{
    //     setSearch(e.target.value)
    // }
    // useEffect(() => {
    //   setFilterProduct(
    //     productdata.filter((product)=>
    //     product.title.toLowerCase().includes(search.toLowerCase())
    //     )
    //   )
    
      
    // }, [search,productdata])
    // useEffect(() => {
    //     AOS.init({
    //       duration: 1000,
    //     });
    //   }, []);
    
    return (
        <div>
            <div>
              <input type='text' placeholder='search your product here' onChange={(e)=>setSearch(e.target.value)} value={search}/>
              {/* <Search oninputchange={handleSearch} inputchange={search} /> */}
                {/* <Search oninputchange={handleSearch} inputvalue={search}/> */}
            </div>
             <div data-aos="flip-left">
        {filterProduct.map((product)=>{
        const{id,title,price,img}= product
        return(
            <div key={id}>
             <Productdatas title ={title} img ={img} price={price}/>
            </div>
        )
        })}
        </div>
        </div>
    
  )
}

export default Product