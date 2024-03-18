import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import './Main.css';
import Video from './Video.mp4';

function Main() {
  const [pageName, setPageName] = useState("");
  const navigate = useNavigate();
  const handleNavigate = () => {
    const targetUrl = `/${pageName}`;
    console.log("Navigating to:", targetUrl);
    navigate(targetUrl);
  };  
  const forward=(item)=>{
    const placeUrl = `/${item.name}`;
    navigate(placeUrl);
  }
  const statesData = [
    { name: "AndhraPradesh", image: "https://th.bing.com/th/id/OIP.2IxKv7_uRP8hYzGuZ7QA1AHaEK?w=319&h=180&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7" },
    { name: "ArunanchalPradesh", image: "https://th.bing.com/th?id=OSK.HEROHFzJJ76GnBrNPpGQWcJC9SBxdVb72kRldv5tR-u2-GQ&w=312&h=200&c=15&rs=2&o=6&dpr=1.3&pid=SANGAM" },
    {name:"Andaman",image:"https://bing.com/th?asid=432345564604225362&id=OAUMA.C8D4ED8A1CA7AFFEEE265531CC5F5140_E1A366E1E2E6C393&pid=21.1&o=5&w=472&h=303&rs=2"},
    {name:"Assam",image:"https://www.bing.com/th?id=OIP.Nz8yz9nbaV0tx88YycRtwAHaDl&w=202&h=200&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"},
    {name:"Bihar",image:"https://www.bing.com/th?id=OIP.cmhc3ZMa4cm_iaSPFsOfqQHaEK&w=202&h=200&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"},
    {name:"Chandigar",image:"https://www.bing.com/th?id=OIP.GmAsyQ7csIAdHfV8GYrQ5QHaE9&w=205&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"},
    {name:"Chattisgarh",image:"https://www.bing.com/th?id=OIP.WIYV6-i3FNDmOQ3DLJjo-AHaHa&w=157&h=200&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"},
    {name:"DadraAndNagarHaveli",image:"https://th.bing.com/th?id=OSK.HEROcIlv9knAxDvo4gmx5G7xKz2Sr_ZXo-IWV8YyB4Oj8jg&w=472&h=280&c=1&rs=2&o=6&dpr=1.3&pid=SANGAM"},
    {name:"DamanAndDiu",image:"https://th.bing.com/th?id=OSK.HERO7oz-lkkfZ1XU3pqOzep2dAFndxIB_58jP0OnMy0dznQ&w=472&h=280&c=1&rs=2&o=6&dpr=1.3&pid=SANGAM"},
    {name:"Delhi",image:"https://th.bing.com/th?id=OSK.HEROF5spoArFnfmweIRbaWpuk3iBdwzWKLHU3cu9RQsp20E&w=472&h=280&c=1&rs=2&o=6&dpr=1.3&pid=SANGAM"},
    {name:"Goa",image:"https://th.bing.com/th?id=OSK.HEROSb815kNvU5NVDooJk_pMQ28T6wdHlYESI4RY6rscV6o&w=472&h=280&c=1&rs=2&o=6&dpr=1.3&pid=SANGAM"},
    {name:"Gujarat",image:"https://th.bing.com/th?id=OSK.HEROhHsv1N7ZqBcLDiObUKRKFUOt2SPiPoZAmlKsbhjW8gY&w=472&h=280&c=1&rs=2&o=6&dpr=1.3&pid=SANGAM"},
    {name:"Harayana",image:"https://th.bing.com/th?id=OSK.mmcolgQy-plyBh7jOlRBQdD4D3KgQ0wyBEaSOWUNY-C3t5hg&w=200&h=200&c=7&rs=1&o=6&dpr=1.3&pid=SANGAM"},
    {name:"Himachal",image:"https://th.bing.com/th?id=OSK.HEROynFNyfEgV2k_WR30PYV1isgW1DhSlEpcaXe3P54g1DE&w=312&h=200&c=15&rs=2&o=6&dpr=1.3&pid=SANGAM"},
    {name:"Jammu",image:"https://th.bing.com/th?id=OSGI.D8A8BE7D32D827BA79DDB6BEAB9E6F5A&w=200&h=200&c=8&rs=1&o=6&dpr=1.3&pid=Travel"},
    {name:"Jharkhand",image:"https://th.bing.com/th?id=OSK.HEROdWBDIYrGon5_z7qvlN-mp9QoAh4E8ZBh6_H1dYK7R30&w=312&h=200&c=15&rs=2&o=6&dpr=1.3&pid=SANGAM"},
    {name:"Karnataka",image:"https://www.bing.com/th?id=OIP.va-u8zRXUiIe7qJVd4ZkEgHaE8&w=202&h=200&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"},
    {name:"Kerela",image:"https://th.bing.com/th?id=OSGI.CB54E78B42BF2931502AFD87F1C55C0B&w=196&h=140&c=8&rs=1&o=6&dpr=1.3&pid=TravelL2"},
    {name:"Ladakh",image:"https://th.bing.com/th?id=OSK.HEROhOZgYFcqVaBPB0wqDeLPm3oEUob4xk0RsjadqKDHvi4&w=312&h=200&c=15&rs=2&o=6&dpr=1.3&pid=SANGAM"},
    {name:"Lakshadweep",image:"https://th.bing.com/th?id=OSK.HEROIy2hd7S1kTO6k7pgNxAN1GgGdTtIibq3R1Ns_sVw5Xg&w=472&h=280&c=1&rs=2&o=6&dpr=1.3&pid=SANGAM"},
    {name:"Madhya Pradesh",image:"https://www.bing.com/th?id=OIP.CwwT7SXVY58kYk735LRKsQHaE8&w=202&h=200&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"},
    {name:"Maharastra",image:"https://www.bing.com/th?id=OIP.Hbh0_Hvu7qI5sLRPm_Sz1wHaHa&w=155&h=200&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"},
    {name:"Manipur",image:"https://th.bing.com/th?id=OSK.HEROlmFvj1R7XVW35k-kqG7rc3cDmXmZY9O2ahN5n_PsBSI&w=312&h=200&c=15&rs=2&o=6&dpr=1.3&pid=SANGAM"},
    {name:"Meghalaya",image:"https://www.bing.com/th?id=OIP.5tW_rf4YXR3FdYOIVPYZiQHaE9&w=202&h=200&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"},
    {name:"Mizoram",image:"https://th.bing.com/th?id=OSK.HEROgfdpYl3ER9KvVAu6L4_RsjrWu7iIPZ1kea5iHY5EHIs&w=312&h=200&c=15&rs=2&o=6&dpr=1.3&pid=SANGAM"},
    {name:"Nagaland",image:"https://www.bing.com/th?id=OIP.2nMwjtdrcelbm1eCR9NirgHaE8&w=202&h=200&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"},
    {name:"Odisha",image:"https://th.bing.com/th?id=OSK.HERONHOodBJlSmRCHGwHQ-ycPriL9AMigIiWxNO3Amcg8ww&w=312&h=200&c=15&rs=2&o=6&dpr=1.3&pid=SANGAM"},
    {name:"Pondicherry",image:"https://th.bing.com/th?id=ODL.611aeef2404f4d9e7fcb60e545c88c8f&w=197&h=112&c=7&rs=1&qlt=80&o=6&dpr=1.3&pid=RichNav"},
    {name:"Punjab",image:"https://th.bing.com/th?id=OSK.HEROZ4V2jSr4i1sBoNs54Lxya3lOcTK57_q-uqTCGQEatIE&w=312&h=200&c=15&rs=2&o=6&dpr=1.3&pid=SANGAM"},
    {name:"Rajasthan",image:"https://th.bing.com/th?id=OSK.HEROoGAxGJntuKl9M75s6jo3g_pAuPR2OxPnYxP2k41hUjI&w=472&h=280&c=1&rs=2&o=6&dpr=1.3&pid=SANGAM"},
    {name:"Tamilnadu",image:"https://th.bing.com/th?id=OSK.HEROp8cKpFaaxXA7xQ-0Ggpk4yFeToi42qqKgWzS4XXB5Ws&w=312&h=200&c=15&rs=2&o=6&dpr=1.3&pid=SANGAM"},
    {name:"Telengana",image:"https://th.bing.com/th?id=OSGI.C7DA8C92D1A1F50C8615BA68D17E1039&w=196&h=140&c=8&rs=1&o=6&dpr=1.3&pid=TravelL2"},
    {name:"Tripura",image:"https://www.bing.com/th?id=OIP.zIyT3crrVto_Gpnszu0qFAHaFj&w=155&h=200&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"},
    {name:"UttarPradesh",image:"https://th.bing.com/th?id=OSK.HEROJGQpUjSMP3s0m3jDc7khP38w1yf3pjhXm-mHBcvuBAM&w=312&h=200&c=15&rs=2&o=6&dpr=1.3&pid=SANGAM"},
    {name:"WestBengal",image:"https://th.bing.com/th?id=OSK.HEROfZjiRELRxHkhto4N9rCVysB8IWwXtDs-3zuegCuzibI&w=472&h=280&c=1&rs=2&o=6&dpr=1.3&pid=SANGAM"},
  ];
  return (
    <div className="cont">
    <div className="wrapper">
      <video autoPlay loop muted playsInline className="video">
      <source src={Video} type="video/mp4" />
    </video>
    <div>
      <Navbar />
    </div>
    <center>
      <div className="page">
        <h1 className="hh"></h1>
        <div><h3 className="quote">Travel far enough,you meet yourself</h3></div>
        <input type="text" value={pageName} onChange={(e) => setPageName(e.target.value)} placeholder="Search Your Destination" className="input"/>
        <div><button onClick={handleNavigate} className="btn">Search</button></div>
      </div>
    </center>
    </div>
    <div>
      <h2 className="travel">Travel Destinations</h2>
    </div>
    <div className="grid">
        {statesData.map((item)=>(
          <div className="ele" onClick={()=>forward(item)}>
            <img src={item.image} className="img"/>
            <div onClick={()=>forward(item)}><h3>{item.name}</h3></div>
          </div>
        ))}
    </div>
    </div>
  );
}

export default Main;
