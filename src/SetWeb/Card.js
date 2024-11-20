import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Card.css"

const Card=()=>{
    const location=useLocation();
    const {Data}=location.state
    console.log(Data)
    return(
       <div className="CardProduct">
           <div className="imagel">
              <img src={Data.image}></img>
           </div>
           <div className="info">
            <h2>{Data.title}</h2>
             <div className="text">{Data.description.substring(0, Math.ceil(Data.description.length / 2))}</div>
              <div className="span"><span>{Data.price}$</span><span>{Data.category}</span></div>
           <button className="addtocard"><Link to={`/category/${Data.category}/${Data.id}/added`} className="to">add to card</Link></button>
           <button className="buythisitem"><Link to={`/category/${Data.category}/${Data.id}/toBuy`} className="to">buy this item</Link></button>
           </div>
       </div>
    )
}
export default Card;