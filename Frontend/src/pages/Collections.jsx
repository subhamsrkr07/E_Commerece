import React, { useContext, useEffect, useState } from 'react'
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
import Title from '../component/Title';
import Card from "../component/Card"
import { shopDataContext } from '../context/ShopContext';


const Collections = () => {

  let [showFilter,setShowFilter]=useState(false)
  let {products,search,showSearch} = useContext(shopDataContext)
  let [filterProduct,setFilterProduct]=useState([])
  let[category,setCategory]=useState([])
  let[subCategory,setSubCategory]=useState([])
  let[sortType,setSortType]=useState("relevent")


  const toggleCatgory = (e)=>{
    if(category.includes(e.target.value)){
      setCategory(prev=>prev.filter(item=>item!==e.target.value))
    }else{
      setCategory(prev => [...prev,e.target.value])
    }
  }

  const togglesubCatgory = (e)=>{
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev=>prev.filter(item=>item!==e.target.value))
    }else{
      setSubCategory(prev => [...prev,e.target.value])
    }
  }

  const applyFilter = ()=>{
    let productCopy = products.slice()

    if(showSearch && search){
      productCopy= productCopy.filter(item =>item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(category.length>0)
    {
      productCopy=productCopy.filter(item=>category.includes(item.category   ))
    }

    if(subCategory.length>0)
    {
      productCopy=productCopy.filter(item=>subCategory.includes(item.subCategory   ))
    }

    setFilterProduct(productCopy)
  }


  const sortProducts=(e)=>{
    let fpCopy= filterProduct.slice()

    switch(sortType){
      case 'low-high':
        setFilterProduct(fpCopy.sort((a , b)=>(a.price -b.price)))
        break;

      case 'high-low':
        setFilterProduct(fpCopy.sort((a , b)=>(b.price -a.price)))
        break;
        default:
          applyFilter()
          break;
    }
  }

  useEffect(()=>{
    sortProducts()
  },[sortType])

  useEffect(()=>{
    setFilterProduct(products)
  },[products])

  useEffect(()=>{
    applyFilter()
  },[category,subCategory,search,showSearch])



  return (
    <div className='w-[100vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025]
    flex items-center justify-start flex-col md:flex-row pt-[70px] overflow-x-hidden z-[2] pb-[110px]'>
      <div className={`md:w-[30vw] lg:w-[20vw] w-[100vw] md:min-h-[100vh] p-[20px]
      border-r-[1px] border-gray-400 text-[#aaf5fa] lg:fixed mt-[10px]
      ${showFilter ? "h-[45vh]":"h-[8vh]"}` }>
          <p className='text-[25px] font-semibold flex gap-[5px] items-center justify-start mt-[10px] cursor-pointer'
          onClick={()=>setShowFilter(prev=>!prev)}>
            FILTERS
            {!showFilter && <FaAngleRight className='text-[18px] md:hidden' />}
           { showFilter && <FaAngleDown  className='text-[18px] md:hidden'/>}
          </p>
          <div className={`border-[2px] border-[#dcdcdc] pl-5 py-3 mt-6 rounded-md
          bg-slate-600 ${showFilter?"" : "hidden"} md:block`}>
                <p className='text-[18px] text-[#f8fafa]'>CATEGORIES</p>
                <div className='w-[230px] h-[120px] flex items-start justify-center gap-[10px]
                flex-col'>
                    <p className='flex items-center justify-center gap-[10px] text-[16px] font-light'>
                      <input type="checkbox" value={"Cars"} className='w-3'  onChange={toggleCatgory}/>Cars
                    </p>

                    <p className='flex items-center justify-center gap-[10px] text-[16px] font-light'>
                      <input type="checkbox" value={"Wheeler"} className='w-3'onChange={toggleCatgory} />2-Wheeler
                    </p>

                    <p className='flex items-center justify-center gap-[10px] text-[16px] font-light'>
                      <input type="checkbox" value={"E-Rickshaw"} className='w-3' onChange={toggleCatgory}/>E-Rickshaw
                    </p>
                </div>
          </div>

           <div className={`border-[2px] border-[#dcdcdc] pl-5 py-3 mt-6 rounded-md
          bg-slate-600 ${showFilter?"" : "hidden"} md:block`}>
                <p className='text-[18px] text-[#f8fafa]'> SUB-CATEGORIES</p>
                <div className='w-[230px] h-[120px] flex items-start justify-center gap-[10px]
                flex-col'>
                    <p className='flex items-center justify-center gap-[10px] text-[16px] font-light'>
                      <input type="checkbox" value={"48V"} className='w-3' onChange={togglesubCatgory}/>48V
                    </p>

                    <p className='flex items-center justify-center gap-[10px] text-[16px] font-light'>
                      <input type="checkbox" value={"60V"} className='w-3' onChange={togglesubCatgory}/>60V
                    </p>

                    <p className='flex items-center justify-center gap-[10px] text-[16px] font-light'>
                      <input type="checkbox" value={"72V"} className='w-3' onChange={togglesubCatgory}/>72V 
                    </p>
                </div>
          </div>
      </div>

      <div className='lg:pl-[20%] md:py-[10px] h-[100vh] '>
            <div className=' md:w-[80vw] w-[100vw] p-[20px] flex justify-between
            flex-col lg:flex-row lg:px-[50px]'>

              <Title text1={"ALL"} text2={"COLLECTION"}/>
              <select name="" id="" className=' bg-slate-600 w-[60%] md:w-[200px]
              h-[50px] px-[10px] text-[white] rounded-lg hover:border-[#46d1f7]
              border-[2px]' onChange={(e)=>setSortType(e.target.value)}>
                <option value="relavent" className=' w-[100%] h-[100%]'> Sort By: Relavant</option>
                <option value="low-high"  className=' w-[100%] h-[100%]'> Sort By: Low to high</option>
                <option value="high-low" className=' w-[100%] h-[100%]'> Sort By: high to low</option>
              </select>
            </div>

            <div className='lg:w-[80vw] md:w-[60vw] w-[100vw] min-h-[70vh]
            flex items-center justify-center flex-wrap gap-[30px]'>

              {
                filterProduct.map((item,index)=>(
                  <Card key={item} id={item._id} name={item.name}
                  price={item.price} image={item.image1} />
                ))
              }

            </div>
      </div>
    </div>
  )
}
  
export default Collections
