import React from "react";
import "./PageForCategory.css"
import {useNavigate } from "react-router-dom";
const PageForCategory=({Data})=>{
    const navigate=useNavigate();
    const GotoCard=(url,Info)=>{
        navigate(url,{state:{Data:Info}})
    }
    return(
        <div className="caontainer">
         {Data.map((ele,index)=>{
            const Info=ele;
            const URL=`/category/${ele.category}/${ele.id}`;
            return(
                <div className="Card" key={index}>
                  <div className="image">
                    <img src={ele.image}></img>
                  </div>
                  <div className="text">
                    <p>{ele.description}</p>
                    <div onClick={()=>{GotoCard(URL,Info)}} className="button">Show Detail</div>
                  </div>
                </div>
            )
         })}
        </div>
    )
}
export default PageForCategory;