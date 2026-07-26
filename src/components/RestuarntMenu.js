import { useEffect, useState } from "react"; 
import Shimmer from "./Shimmer";

const RestuarntMenu = () => {

useEffect(()=>{
    fetchMenu();
},[])

const [resinfo,setResinfo] = useState(null)

const fetchMenu = async () => {

    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9890065&lng=77.7013717&restaurantId=722329&catalog_qa=undefined&submitAction=ENTER");
    const json = await data.json();

    setResinfo(json.data)    

}

const {name,costForTwoMessage,cuisines} = resinfo?.cards[2]?.card?.card?.info;

    return  resinfo === null ? <Shimmer/>: (

        <div className="menu">
            <h1> {name} </h1>
            <h5>{cuisines.join(",")}</h5>
            <h3>{costForTwoMessage}</h3>
            <ul>
                <li>Biriyani</li>
                <li>Burger</li>
                <li>Pizza</li>
                <li>Juices</li>
            </ul>
        </div>
    )
}


export default RestuarntMenu;