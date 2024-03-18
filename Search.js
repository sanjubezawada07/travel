import React,{useState} from "react";
import { Link } from "react-router-dom";
function Search(){
    const[data,setData]=useState([]);
    const senddata = async () => {
        try {
          const response = await fetch('http://localhost:8000/senddata', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
          const result = await response.json();
          setData(result);
        } catch (error) {
          console.log('Error sending data to Express', error);
        }
      };
      const handleEvent = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
      };
    return(
        <div>
            <div className="r">
                <input className="inp" onChange={handleEvent} name="place" value={data.place}></input>
                <Link to={"/Display"}><button className="b1" onClick={senddata}><img src="https://cdn-icons-png.flaticon.com/128/149/149852.png" className="img2"></img></button></Link>
            </div>
        </div>
    );
}
export default Search;