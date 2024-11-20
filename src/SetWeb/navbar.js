import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar=()=>{
    const navinfo=["Home","Shop","About Us","Contact"]
    return(
        <nav className="Homenavbar">
            <span><Link className="link" to={"/"}>StyleVerse</Link></span>
            <ul className="Homelist">
                {navinfo.map((ele,index)=>(
                  <li key={index}><Link   className={ele.includes(" ")?"links space":"links"} to={`page/${ele}`}>{ele}</Link></li>
                  
                ))}
            </ul>
        </nav>
    )
}
export default Navbar;