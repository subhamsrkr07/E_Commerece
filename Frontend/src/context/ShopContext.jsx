import React, { createContext, useContext, useEffect, useState } from 'react'
import { authDataContext } from './AuthContext'
import axios from 'axios'
import { userDataContext } from './UserContext'



export const shopDataContext = createContext()
const ShopContext = ({children}) => {

    let[products,setProducts]=useState([])
    let{serverUrl}=useContext(authDataContext)
    let{userData}=useContext(userDataContext)
    let currency = '₹'
    let delivery_fee=40;
    let [search, SetSearch]=useState("")
    let [showSearch,setShowSearch]= useState(false)
    let[cartItem,setCartItem]=useState({})


    const getProducts = async()=>{
        try {
            let result=await axios.get(serverUrl+"/api/product/list")
            console.log(result.data)
            setProducts(result.data)
        } catch (error) {
            console.log(error)
        }
    }



    const addtoCart = async(itemId)=>{
      let cartData=structuredClone(cartItem)

      if(cartData[itemId]){
        cartData[itemId]+=1
      } else {
        cartData[itemId]=1
      }

      setCartItem(cartData)

      if(userData){
        try {
          let result=await axios.post(serverUrl + '/api/cart/add',{itemId},{withCredentials:true})
          console.log(result.data)
          
        } catch (error) {
          console.log(error)
          
        }
      } 
    }

    const getUserCart = async()=>{
        try {
          let result=await axios.post(serverUrl + '/api/cart/get',{},{withCredentials:true})
         setCartItem(result.data)
        } catch (error) {
          console.log(error)
        }
      }

    const getCartCount = ()=>{
      let totalCount = 0;
       for (const itemId in cartItem) {
    const quantity = cartItem[itemId];
    if (typeof quantity === 'number' && quantity > 0) {
      totalCount += quantity;
    }
  }
      return totalCount
    }

    useEffect(()=>{
        getProducts()
    },[])

     useEffect(()=>{
       getUserCart()
    },[])

    let value ={
        products,currency,delivery_fee,getProducts,search, SetSearch,showSearch,setShowSearch,
        getCartCount,setCartItem,addtoCart

    }
  return (
    <div>
      <shopDataContext.Provider value={value}>
        {children}
      </shopDataContext.Provider>
    </div>
  )
}

export default ShopContext
