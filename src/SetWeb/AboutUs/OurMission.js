import React from "react";
import AboutusData from "../aboutusdata";

const OurMission=()=>{
    return(
        <div className="OurMission">
           <h1>Our Mission</h1>
           <div>
             <h3>{AboutusData.OurMission.title}</h3>
             <div>
                {AboutusData.OurMission.description}
             </div>
           </div>
        </div>
    )
}
export default OurMission;