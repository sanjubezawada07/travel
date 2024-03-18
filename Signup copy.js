import React from "react";
import { useState } from "react";
function Signup() { 
    const[pop,setPop]=useState(true);
    const remove=()=>{
        setPop(false);
    }
    return(
        <div>
            
            
            {pop&&
                <div className="container" >
                    <div className="r">
                <div className="h11">
                <h1>start your journey with us </h1>
                <h1> signup for free</h1>
                </div>

            </div>
            <div className="root">
                <img src="https://t4.ftcdn.net/jpg/00/75/69/13/240_F_75691329_CLLuXHPb6zqvgBnFkQjVnufsLEtmbL3e.jpg" width={30} height={20} className="b" onClick={remove}></img>
                <input type="text" placeholder="First Name" ></input>
                <input type="text" placeholder="Last Name" ></input>
                <input type="text" placeholder="Username" ></input>
                <input type="text" placeholder="password" ></input>
                <input type="text" placeholder="Email" ></input>
                <button>sign in</button>

            </div>
                </div>
            }
        </div>
    );
 }
 export default Signup