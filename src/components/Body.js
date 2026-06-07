
import RestoCard  from "./RestoCard";
import restList from "../utils/mockData";
import { useState } from "react";


const Body = () =>{

  let [filterList, setfilterList] = useState(restList)

    
  return(
    <div className="Body">

    {/* <div className="search">search</div> */}
    <div className="filter">
      <button className="filter-btn" 
      onClick={ () => {
         filterList = filterList.filter( 
          (res) => res.info.avgRating > 4.5
        ); 
        setfilterList(filterList)
        } } 
      > Top Rated </button>
    </div>
    
    <div className="restro-cont">
      {filterList.map( (restaurants) => <RestoCard key= {restaurants.info.id} restData={restaurants} />)}
    </div>

    </div>
  )
}

export default Body;