import React from "react"
import AboutusData from "../aboutusdata"

const OurCollections=()=>{
    return(
        <>
         <h1 className="cardcollectionstitle"> Our Collections </h1>
        <div className="cardcollections">
        {AboutusData.OurCollections.map((ele,index)=>(
            <div key={index} >
                <h2>{ele.title}</h2>
                <p>
                    {ele.description}
                </p>
            </div>
        ))}
        </div>
        </>
    )
}
export default OurCollections