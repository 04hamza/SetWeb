import React from "react";
import AboutusData from "./aboutusdata";
import "../aboutus.css";
import AboutUsCard from "./AboutUs/AboutusCard";
import OurMission from "./AboutUs/OurMission";
import OurCollections from "./AboutUs/OurCollections";
const AboutUs=()=>{
    return(
        <div className="index">
        <AboutUsCard/>
        <OurMission/>
        <OurCollections/>
        </div>
    )
}
export default AboutUs