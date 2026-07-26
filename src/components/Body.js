
import RestoCard  from "./RestoCard";
import restList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Body = () =>{

  let [resList, setfilterList] = useState([]);
  let [searchFilterList, setsearchfilterList] = useState([]);
  let [searchText, setsearchText] = useState("");

  useEffect( () =>{
    fetchData();
  }, [] )

  const fetchData = async () => {
   const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9890065&lng=77.7013717&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );

    const json = await data.json();
    // console.log(json)
    setfilterList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setsearchfilterList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    
  };
    
   
  return resList.length===0 ? <Shimmer/> : (
    <div className="Body">

    {/* <div className="search">search</div> */}
    <div className="filter">
        <div className="search">
            <input className="search-box" type="text" value={searchText} onChange={(e) => {setsearchText(e.target.value); }  } />
            <button className="search-btn" onClick={() => {
              searchFilterList = resList.filter((res) => {
                return res.info.name
                .toLowerCase().includes(searchText.toLowerCase());
              } );

              setsearchfilterList(searchFilterList)
              console.log(searchFilterList)
            }
            }>
              search</button>

        </div>

        <button className="filter-btn" 
       onClick={ () => {
         filterList = resList.filter( 
          (res) => res.info.avgRating >= 4.0
        ); 
        setfilterList(filterList)
        } } 
        > Top Rated </button>
    </div>
    
    <div className="restro-cont">
      {searchFilterList.map( (restaurants) => 
      <Link  key= {restaurants.info.id}  to={"/restuarnt/" + restaurants.info.id}>
        <RestoCard  restData={restaurants} /> </Link>)}
    </div>

    </div>
  )
}

export default Body;