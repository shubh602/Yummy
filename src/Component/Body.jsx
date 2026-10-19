import ProductCart ,{PromotedCart} from "./MenuCart";
import { useContext, useEffect, useState} from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";


import UseOnlineStatus from "../utils/useOnlineStatus.js";
import InternetStaus from "./InternetStatus.jsx";
import { userContext } from "../utils/UserContext.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch , faFilter , faFilterCircleXmark , faSun ,faMoon, faL} from "@fortawesome/free-solid-svg-icons";
import UseDataAPI from "../utils/UseDataAPI.js";


let Body = () =>{
  const [input,setInput]=useState("")
  const [showList,setShowList]=useState([])
  const [filter,setFilter]=useState(false)

  const {mode,setMode}=useContext(userContext)

  const list=UseDataAPI()

  useEffect(()=>{
      setShowList(list)
  },[list])

const Promotion=PromotedCart(ProductCart);

const status=UseOnlineStatus();
if(!status) return <InternetStaus />



  
return (!list.length)? <Shimmer /> : (
<div className="overflow-x-hidden">

                                   {/* Filter START */}

 <div className="px-4 sm:px-6 pt-28 sm:pt-32 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-5 py-7 sm:py-9 bg-orange-50/70 dark:bg-stone-950 dark:text-white">
  
      <div className="relative w-full sm:w-auto">
            <input type="text" placeholder="Search..." name="" 
                className="w-full sm:w-80 lg:w-[420px] rounded-xl border border-orange-200 bg-white px-4 py-3 pr-14 text-stone-800 shadow-sm transition placeholder:text-stone-400 focus:border-orange-400 focus:outline-none focus:ring-4 focus:ring-orange-100 dark:border-stone-700 dark:bg-stone-900 dark:text-white dark:placeholder:text-stone-500 dark:focus:ring-orange-950"
                value={input} onChange={(e)=>setInput(e.target.value)} id="" />

            <button className="absolute right-1.5 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-lg bg-orange-600 text-lg text-white shadow-sm transition hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
             onClick={()=>{
              const filtered=list.filter((val)=>val.info.name.toLowerCase().includes(input.toLocaleLowerCase()) )
              setShowList(filtered) 
            }}>
              <FontAwesomeIcon icon={faSearch} />
            </button>  

      </div>    

       <div className="flex items-center gap-3 self-end sm:self-auto">
             <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-orange-200 bg-white text-stone-700 shadow-sm transition hover:-translate-y-0.5 hover:border-orange-300 hover:text-orange-700 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-200 dark:hover:text-orange-300"
              data-testid="filter-id"
              onClick={()=>{
                    let filterData=list.filter((res)=>res.info.avgRating>=4.3)   
                    setShowList(filter?list:filterData)
                    setFilter(!filter)
              }}>
              <FontAwesomeIcon icon={filter?faFilterCircleXmark:faFilter} />
              </button>

            <button className="flex h-11 items-center gap-2 rounded-xl border border-orange-200 bg-white px-3 text-base shadow-sm transition hover:-translate-y-0.5 dark:border-stone-700 dark:bg-stone-900"
              onClick={()=>setMode(!mode)}>
                <FontAwesomeIcon icon={faMoon} className={`${mode ? "text-gray-50 text-2xl":"text-gray-200"}`} /> 
                <FontAwesomeIcon icon={faSun} className={`${!mode ? "text-orange-500 text-2xl":"text-orange-950"}`} /> 
                {/* <span className="pl-1 font-semibold">Dark</span>  */}
            </button> 

        </div> 
        

        
        

{/* 
       <input type="text" placeholder="Change User..."
        data-testid="searchInput"
        name=""
        className="bg-gray-200 px-4 py-0.5 w-52 rounded-sm" 
        value={} onChange={(e)=>setInfo(e.target.value)} id="" />   */}

 </div>       

                                   {/* Filter End */}
                              


    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 py-6 sm:grid-cols-2 sm:gap-6 sm:px-6 lg:grid-cols-3 lg:gap-7 xl:grid-cols-4">
     
     {
       showList.map((res) => <Link key={res.info.id} to={"/menu/"+res.info.id} >
         {(res.info.avgRating>=4.3)?<Promotion resdata={res} /> : <ProductCart  resdata={res} />}
          </Link>) 
     }
         
   </div>
</div>
)}

export default Body;