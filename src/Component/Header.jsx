import { Logo } from "../utils/constant";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UseOnlineStatus from "../utils/useOnlineStatus";
import { userContext } from "../utils/UserContext";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse , faUser , faPhone , faCartShopping , faCartFlatbed , faBars , faXmark , faShuffle} from "@fortawesome/free-solid-svg-icons";
import Portal from "./Portal";



let Header = () =>{

const [loginBtn , setLoginBtn] = useState(false)
const [BgColor , setBgColor]=useState(false)
const [NavBar , setNavBar]=useState(false)
const [flag,setflag]=useState(false)


  

useEffect(() => {
  const handleScroll = () => {
    if(window.scrollY >= 50 && window.scrollY <200){
    setBgColor(true)
    }
    else if(window.scrollY < 50){
    setBgColor(false) 
    }
    
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
const cartitems=useSelector((store)=>store.cart.items)
// console.log(cartitems);



return(<>
                   {/* Small Screen Start*/}
  <div className={`dark:text-white block lg:hidden z-50 w-full fixed ${BgColor && "bg-gray-500"}`}>
      <div className="py-2 px-3 flex justify-between items-center ">
         <Link to="/">
            <span className="text-2xl font-bold italic cursor-pointer">🛵-FOODI </span>
         </Link>


          <ul className="flex items-center space-x-5 text-2xl font-semibold">
                 <Link to="/cart">
                    <span title="Cart" className=" relative nav-link flex flex-col">
                        <FontAwesomeIcon icon={faCartFlatbed } />
                        <span className="absolute left-3 dark:text-black text-gray-100 top-0.5 text-xs font-bold">{cartitems.length}</span>
                        {/* <span className="text-[10px] text-center">Cart</span> */}
                    </span>
                </Link>

                <span title="Cart" className=" relative nav-link flex flex-col" 
                  onClick={()=>{setNavBar(!NavBar)}}>
                        <FontAwesomeIcon icon={NavBar?faXmark:faBars } />
                        
                </span>  

          </ul>

      </div>         

  <div className={`${NavBar?"block":"hidden"} dark:text-white h-lvh ml-auto w-full bg-gray-500 text-gray-200 py-20 px-8`}>
            <ul className="text-center text-xl font-semibold space-y-10">
               
                <li className="/grocery">
                      <Link to="/gro"><span><FontAwesomeIcon className="pr-4" icon={faCartShopping} /></span>Grocery</Link>
                </li>
                <li className="">
                       <Link to="/"> <span><FontAwesomeIcon className="pr-4" icon={faHouse} /></span>Home</Link>
                </li>
                <li className="">
                      <Link to="/about"><span><FontAwesomeIcon className="pr-4" icon={faUser} /></span>About</Link>
                </li>
                <li className="">
                      <Link to="/contact"><span><FontAwesomeIcon className="pr-4" icon={faPhone} /></span>Contact</Link>
                </li>
                
                <li className="">
                      <button className={`bg-orange-500 px-1.5 mr-4 py-1 rounded-full relative border-4 border-gray-400 cursor-pointer`}
                        >
                        <span className="Online-status text-lg absolute -right-1 -bottom-2">{UseOnlineStatus()?"🟢":"🔴"}</span>
                        <span><FontAwesomeIcon icon={faUser} /> </span>
                      </button>
                        <span>User</span>
                </li>

            </ul>
  </div>

  </div>
                     {/* Small Screen End */}





                     <Portal flag={flag}>
                              {/* <span className="text-4xl text-white">Hello From portal</span>           */}
                              <div className=" bg-white flex flex-col rounded-2xl px-6 py-10">
                                       <h1 className="text-2xl font-bold pt-5 pb-18 mx-20">Are You Sure You Want To {!loginBtn?"login":"Log-Out"}?</h1>
                                       
                                       {!loginBtn && 
                                           <span className=" text-[10px] font-semibold">[ <span className="font-bold text-red-600">Note :</span>
                                          If getting Cors Error! Make Sure DevTool is Open while Loggin-In]
                                           </span>}

                                       <div className="px-18 flex justify-between items-center pt-5">
                                              <button onClick={()=>{
                                                 setflag(false)
                                                 LoginChange()
                                              }} className="cursor-pointer font-semibold bg-green-600 text-white p-2 rounded-lg">
                                                   Confirm
                                              </button>

                                               <button onClick={()=>{
                                                 setflag(false)
                                               }}className="cursor-pointer font-semibold bg-red-600 text-white p-2 rounded-lg">
                                                   Deny
                                              </button>

                                       </div>
                              </div>
                     </Portal>
   


                       {/* Big Header start*/}

  <div className={`rounded-full dark:text-white hidden lg:block z-50 w-full fixed ${BgColor && "bg-gray-500 text-gray-800 dark:bg-gray-900"}`}>
<div className="py-2 px-5 flex justify-between items-center ">
       
        {/* <img className="logo w-28" src={Logo} /> */}
        <Link to="/">
          <span className="cursor-pointer text-2xl font-bold italic">🛵-FOODI </span>
        </Link>

       <span className="flex items-center space-x-10 text-2xl font-semibold">
         

          <Link to="/grocery">
               <span title="Grocery" className="nav-link flex flex-col items-center mr-14">
                    {/* <FontAwesomeIcon icon={faCartShopping} /> */}
                    <span className="text-[17px] font-bold underline decoration-dashed text-center">  <FontAwesomeIcon icon={faShuffle} /> GR </span>
                    
                </span>
            </Link>

          <Link to="/"> 
                <span title="Home" className="nav-link flex flex-col">
                        <FontAwesomeIcon icon={faHouse} />
                        <span className="text-[10px] text-center">Home</span>
                </span>
          </Link>


          <Link to="/about">
                <span title="About_Us" className="nav-link flex flex-col">
                        <FontAwesomeIcon icon={faUser} />
                        <span className="text-[10px] text-center">About</span>
                </span>
          </Link>
            <Link to="/contact">
                <span title="Contact_us" className="nav-link flex flex-col">
                    <FontAwesomeIcon icon={faPhone} />
                    <span className="text-[10px] text-center">Contact</span>
                </span>
            </Link>

            <Link to="/cart">
                <span title="Cart" className=" relative nav-link flex flex-col">
                    <FontAwesomeIcon icon={faCartFlatbed } />
                    <span className="absolute left-3 text-gray-100 dark:text-black  top-0.5 text-xs font-bold">{cartitems.length}</span>
                    <span className="text-[10px] text-center">Cart</span>
                </span>
            </Link> 

            


            <button className={`bg-orange-500 px-1.5 py-1 rounded-full relative border-4 border-gray-400 cursor-pointer`}
             >
            <span className="Online-status text-lg absolute -right-1 -bottom-2">{UseOnlineStatus()?"🟢":"🔴"}</span>
            <span> <FontAwesomeIcon icon={faUser} /> </span>
            </button>

            
       </span>
</div>
</div>                     
                         {/* Big Header End */}

</>

)}

export default Header;   