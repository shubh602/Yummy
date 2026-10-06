import { useEffect, useState } from "react";


const UseDataAPI=()=>{
    const [apiData,setApiData]=useState([])

const getRestaurants = async () => {
    const res = await fetch("https://foodfire.onrender.com/api/restaurants");
    const data = await res.json();
    // console.log(data);
    // setApiData(data);
    setApiData(data.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };


useEffect(() => {
  getRestaurants();
}, [])

return apiData;

}

export default UseDataAPI;