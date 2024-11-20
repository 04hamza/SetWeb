import React from "react";
import { useState, useEffect } from "react";
import CardHome from "./CardHome";
import Category from "./Category";

const Home=()=>{
 const [Data,setdata]=useState([])
 const [loading,setloading]=useState(false)
 const [error,seterror]=useState(null)
 useEffect(()=>{
    const FetchData=(async()=>{
     await fetch("https://fakestoreapi.com/products").then((result)=>{
        if(result.status!=200){
            throw new Error("Not Data Found!")
        }
        return result.json()
     }).then((Data)=>{
        setdata(Data)
        setloading(false)
     }).catch((error)=>{
        seterror(error.message)
     })
    })
    FetchData()
 },[])
 if (loading )return <div className="loading"><div></div><div></div><div></div></div>;
 if (error) return <div>{error}</div>;
 return(
   <>
    <Category Data={Data}/>
    <div className="containue">
        <div className="cardHome">
           <CardHome Data={Data}/>
        </div>
    </div>
    </>
 )
}
export default Home;

