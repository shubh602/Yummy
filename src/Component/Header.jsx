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
  <div className={`dark:text-white block lg:hidden fixed left-0 top-0 z-50 w-full border-b border-orange-100/80 bg-white/85 shadow-sm backdrop-blur-xl transition-colors dark:border-stone-800 dark:bg-stone-950/85 ${BgColor && "bg-white/95 shadow-md dark:bg-stone-900/95"}`}>
      <div className="flex items-center justify-between px-4 py-3 sm:px-6">
         <Link to="/">
            <span className="cursor-pointer text-xl font-extrabold tracking-tight text-orange-700 sm:text-2xl dark:text-orange-300">🛵-FOODI </span>
         </Link>


          <ul className="flex items-center gap-5 text-xl font-semibold text-stone-700 dark:text-stone-100">
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

  <div className={`${NavBar?"block":"hidden"} dark:text-white ml-auto h-lvh w-full bg-orange-50/95 px-8 py-20 text-stone-800 backdrop-blur-xl dark:bg-stone-950/95 dark:text-stone-100`}>
            <ul className="space-y-10 text-center text-xl font-semibold">
               
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
                      <button className={`relative mr-4 cursor-pointer rounded-full border-4 border-orange-100 bg-orange-500 px-1.5 py-1 shadow-md dark:border-stone-700`}
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
                              <div className="flex flex-col rounded-2xl bg-white px-6 py-10 shadow-2xl dark:bg-stone-900 dark:text-white">
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

  <div className={`fixed left-0 top-0 z-50 hidden w-full border-b border-orange-100/80 bg-white/85 text-stone-800 shadow-sm backdrop-blur-xl transition-colors dark:border-stone-800 dark:bg-stone-950/85 dark:text-white lg:block ${BgColor && "bg-white/95 shadow-md dark:bg-stone-900/95"}`}>
<div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-3">
       
        {/* <img className="logo w-28" src={Logo} /> */}
        <Link to="/">
          <span className="cursor-pointer text-2xl font-extrabold tracking-tight text-orange-700 dark:text-orange-300">🛵-FOODI </span>
        </Link>

       <span className="flex items-center gap-8 text-xl font-semibold">
         

          <Link to="/grocery">
               <span title="Grocery" className="nav-link flex flex-col items-center">
                    {/* <FontAwesomeIcon icon={faCartShopping} /> */}
                    <span className="text-sm font-bold text-center">  <FontAwesomeIcon icon={faShuffle} /> GR </span>
                    
                </span>
            </Link>

          <Link to="/"> 
                <span title="Home" className="nav-link flex flex-col">
                        <FontAwesomeIcon icon={faHouse} />
                        <span className="text-xs text-center">Home</span>
                </span>
          </Link>


          <Link to="/about">
                <span title="About_Us" className="nav-link flex flex-col">
                        <FontAwesomeIcon icon={faUser} />
                        <span className="text-xs text-center">About</span>
                </span>
          </Link>
            <Link to="/contact">
                <span title="Contact_us" className="nav-link flex flex-col">
                    <FontAwesomeIcon icon={faPhone} />
                    <span className="text-xs text-center">Contact</span>
                </span>
            </Link>

            <Link to="/cart">
                <span title="Cart" className=" relative nav-link flex flex-col">
                    <FontAwesomeIcon icon={faCartFlatbed } />
                    <span className="absolute left-3 text-gray-100 dark:text-black  top-0.5 text-xs font-bold">{cartitems.length}</span>
                    <span className="text-xs text-center">Cart</span>
                </span>
            </Link> 

            


            <button className={`relative cursor-pointer rounded-full border-4 border-orange-100 bg-orange-500 px-1.5 py-1 shadow-md dark:border-stone-700`}
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