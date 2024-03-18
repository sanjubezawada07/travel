import React,{useState} from "react";
import axios from "axios";
import Navbar from "./Navbar";
import './Display.css';
function  Display(){
    const[data,setData]=useState([]);
    try {
            axios.get("http://localhost:8000/sendingdata")
            .then(result=>setData(result.data))
            .catch(err=>console.log(err));
        }
         catch (error) {
     console.log(error)   
    }
    return(
        <div>
            <Navbar/>
        <div className="root">{data.length>0&&data.map((item)=>(
            <div>
                <div className="container">
                <img src={item.images} className="image"></img>
                <div>
                <h1>{item.name}</h1>
                <h3>{item.place}</h3>
                <p className="desc">{item.des}</p></div>
                </div>
            </div>
        ))}
        </div>
        </div>
    );
}
export default Display;