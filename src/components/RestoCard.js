import { RESTUARANT_LOGO } from "../utils/constants";
const RestoCard = (props) =>{
    const {restData} =  props;
    const {cloudinaryImageId ,name, costForTwo,cuisines,avgRating, deliveryTime} = restData?.info;

    return(
        <div className="res-card">
            <img className="resLogo" alt= "logo" 
            src = { "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + restData?.info.cloudinaryImageId }/>
            <h2 className="resName">{name}</h2>
            <h4 className="resheading">{cuisines.join(",")}</h4>
            <h4 className="resheading">{costForTwo}</h4>
            <h4 className="resheading">{avgRating}</h4>
            <h4 className="resheading">{deliveryTime}</h4>
        </div>

    )
} 

export default RestoCard;