import React from "react";
import { useNavigate } from "react-router-dom";
import "./CardHome.css";
import CategoryData from "./CategoryData";
const CardHome=({Data})=>{ 
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

    const Goto=useNavigate()
    const PageCategory=(category,Datas)=>{
        Goto(`/category/${category}`,{state:{Data:Datas}})
    }
    return(
    listCatigory.map((ele,index)=>{
        const category = CategoryData[index].category; 
        const Datas=listCatigory[index]
        return(
            <div onClick={()=>PageCategory(category,Datas)}  className="cardcategory" >
                <div className="imagecategory">
                    {ele.map((img,indexe)=>{
                        if(indexe<4){
                            return(
                                <div className="divimage"><img src={img.image}></img></div>
                              )
                        }
                    })}
                </div>
                <div className="textcategory">
                    {CategoryData[index].text}
                </div>
            </div>
        )
    })
    )
}
export default CardHome;