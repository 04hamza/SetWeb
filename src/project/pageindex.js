import React from "react";
import data from "./data";
import "./pageindex.css";

class Carre extends React.Component{
   constructor(props){
    super(props);
    this.state={img:data[0].image,num:data[0].number};
   }
   Play=()=>{
     let image=data[Math.floor(Math.random()*data.length)];
     this.setState({img:image.image,num:image.number})
   }
   render(){
    return(
        <>
        <div className="carre">
            <div className="image">
              <img  src={this.state.img}></img>
              <p>{this.state.num}</p>
            </div>
        </div>
        <button onClick={this.Play}>PLAY</button>
        </>
    )
   }
}
export default Carre;