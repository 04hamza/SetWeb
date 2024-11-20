import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";
import { useNavigate } from "react-router-dom";
 
const Category=({Data})=>{
    const men_clothing=[]
    const jewelery=[]
    const electronics=[]
    const women_clothing=[]
    const listCatigory=[men_clothing,jewelery,electronics,women_clothing]
    for(let i=0;i<Data.length;i++){
        if(Data[i].category=="men's clothing"){
            men_clothing.push(Data[i])
        }
        else if(Data[i].category=="jewelery"){
            jewelery.push(Data[i])
        }
        else if(Data[i].category=="electronics"){
            electronics.push(Data[i])
        }else{
            women_clothing.push(Data[i])
        }
    }

    const categorytable=["men's clothing","jewelery","electronics","women's clothing"]
    const navigate=useNavigate()
    const GotoCategory=(url,Datas)=>{
       navigate(`/category/${url}`,{state:{Data:Datas}})
    }
    return(
        <nav className="Categorynavbar">
            <ul>
                {categorytable.map((ele,index)=>{
                    const Datas=listCatigory[index]
                    const url=categorytable[index]
                    return(
                      <li  key={index}>
                         <span className="links" onClick={()=>{GotoCategory(url,Datas)}}>{ele}</span>
                      </li>
                    )
                })}
            </ul>
        </nav>
    )
}
export default Category;