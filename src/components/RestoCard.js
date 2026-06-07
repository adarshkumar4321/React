import { RESTUARANT_LOGO } from "../utils/constants";
const RestoCard = (props) =>{
    const {restData} =  props;
    const {cloudinaryImageId ,name, costForTwo,cuisines,avgRating, deliveryTime} = restData?.info;

    return(
        <div className="res-card">
            <img className="resLogo" alt= "logo" 
            src =  {RESTUARANT_LOGO} />
            <h2 className="resName">{name}</h2>
            <h4 className="resheading">{cuisines}</h4>
            <h4 className="resheading">{costForTwo}</h4>
            <h4 className="resheading">{avgRating}</h4>
            <h4 className="resheading">{deliveryTime}</h4>
        </div>

    )
} 

export default RestoCard;