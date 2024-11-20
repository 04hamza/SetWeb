import React from "react";
import { useNavigate } from "react-router-dom";
import "./CardHome.css";
import { useRef } from "react";
const CardShop=({Data})=>{
    const Goto=useNavigate()
    const GotoCard=(category,Datas)=>{
        Goto(`${category}`,{state:{Data:Datas}})
    }
    const lastelement=useRef();
    // const Down=()=>{
    //    lastelement.current.scrollIntoView({behavior:"smooth"})
    // }
    return(
        <div className="caontainer">
        {/* <button onClick={Down}>Lastelement</button> */}
        {Data.map((ele,index)=>{
           const Datas=ele;
           const URL=`/category/${ele.category}/${ele.id}`;
           return(
               <div ref={index===Data.length-1?lastelement:null} className="Card" key={index}>
                 <div className="image">
                   <img src={ele.image}></img>
                 </div>
                 <div className="text">
                   <p>{ele.description.substring(0, Math.ceil(ele.description.length / 2))}</p>
                 </div>
                 <div onClick={()=>{GotoCard(URL,Datas)}} className="button">
                   <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-box-arrow-in-up-right" viewBox="0 0 16 16">
                   <path fill-rule="evenodd" d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5"/>
                   <path fill-rule="evenodd" d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0z"/>
                   </svg>
                   </div>
               </div>
           )
        })}
       </div>
    )
}
export default CardShop;