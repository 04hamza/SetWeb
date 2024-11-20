import React from "react";
import { useLocation} from "react-router-dom";
import PageForCategory from "./PageForCatigory";
import CardShop from "./cardShop";

const MenClothing=()=>{
const location=useLocation()
const {Data}=location.state || [];
    return(
        <CardShop Data={Data}/>
    )
}
export default MenClothing; 
