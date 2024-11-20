import React from "react";
import { useParams } from "react-router-dom";
import "./info.css";

const Info=()=>{ 
    const {Name,Prenom}=useParams();
    return(
        <div>
           <div className="nav"> PAGE INFORMATION</div>
            <div className="name">
             <div>Name : {Name}</div>
              <div>Prenom : {Prenom}</div>
            </div>
        </div>
    )
}
export default Info ;
