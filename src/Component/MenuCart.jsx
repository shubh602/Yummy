import { useContext } from "react";
import { Cart_Image , Swiggy_Image_CDN , Start_Icon } from "../utils/constant";
import { userContext } from "../utils/UserContext";

let ProductCart = (props) =>{

     const {resdata}=props;
     
     const {name,avgRating,sla,cuisines,costForTwo,cloudinaryImageId}=resdata?.info;

   
return(
    <div className="group flex h-full flex-col space-y-1 rounded-2xl border border-orange-100 bg-white p-3.5 shadow-[0_8px_28px_rgba(69,43,25,0.08)] transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_18px_38px_rgba(69,43,25,0.14)] dark:border-stone-800 dark:bg-stone-900 dark:text-white dark:hover:border-stone-700 dark:hover:bg-stone-800"
     data-testid="Menu-id"
    >
        <img className="h-60 w-full rounded-xl object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02] sm:h-64 lg:h-60 2xl:h-64" src={Swiggy_Image_CDN+cloudinaryImageId} />
        <span className="flex items-center justify-between pt-2 text-sm font-medium text-stone-500 dark:text-stone-400">
              <span className="flex">
                <span>⭐</span>
                 {/* <img className="w-5 h-5 rounded-full" src={Start_Icon} /> */}
                 <span>{avgRating}</span>
              </span>
              <span className="">{sla.deliveryTime} min</span>
        </span>
        
        <span className="mt-1 text-lg font-bold leading-snug text-stone-900 dark:text-stone-50">{name}</span>
        
        <span className="line-clamp-2 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
        <span className="font-semibold text-stone-800 dark:text-stone-100"> Cusien's :</span> {cuisines.join(" , ")}
        </span>

       <span className="mt-auto pt-4 text-sm font-bold text-orange-700 dark:text-orange-300">{costForTwo}</span>

    </div>
)}


export const PromotedCart=(ProductCart)=>{
    //  const {Username}=useContext(userContext)
    return(props)=>{
   return(
        <div className="relative">
            <label className="absolute right-2 top-2 z-10 rounded-full bg-orange-600 px-3 py-1 text-xs font-bold tracking-wide text-white shadow-md">
                🔥 Hyped 
                </label>
            <ProductCart {...props} />
        </div>)
    }
}

export default ProductCart;