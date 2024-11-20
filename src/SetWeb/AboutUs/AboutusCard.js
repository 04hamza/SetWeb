import React from "react";
import AboutusData from "../aboutusdata";

const AboutUsCard=()=>{
    return(
        <div className="AboutUs">
        <h1>About Us</h1>
        <div>
          <h3>{AboutusData.aboutus.title}</h3>
          <div>
             {AboutusData.aboutus.description}
          </div>
        </div>
     </div>
    )
}
export default AboutUsCard;