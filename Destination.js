import { useState } from "react";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css"
import { Link } from "react-router-dom";

const Destination = () =>{

  
    return(
      <div className="destination">
        <h1>Popular Destinations</h1>
        <p>Tours give you the opportunity to see a lot, within a time frame.</p>
        <DestinationData
        className="first-des"
        heading="Kanyakumari"
        text="Bordered by the three seas - Arabian,
        Indian and the Bay of Bengal, 
        Kanyakumari is the southernmost tip of the Indian Peninsula.
        A small coastal town in the state of Tamil Nadu,
        Kanyakumari was earlier known as Cape Comorin.
        Kanyakumari offers the marvellous confluence of the 
        Bay of Bengal, the Arabian Sea and the Indian ocean 
        meeting together at a point. But, this is not a miracle,
       the miracle lies in the beauty that the water of three seas
       does not mix, you can clearly distinguish between the turquoise blue, 
       deep blue and sea green waters of the three seas."
        img1={"https://www.holidify.com/images/bgImages/KANYAKUMARI.jpg"}
        img2={"https://www.holidify.com/images/compressed/1463.jpg"}
        />
        <DestinationData 
        className="first-des-reverse"
        heading="Kerala"
        text="Kerala is the land of unending palm groves, 
        pristine sandy beaches, sprawling tea plantations, 
        rolling green hills, calming backwaters, mouth-watering cuisine and much more. 
        Situated between the Western Ghats in the east and the 
        Arabian Sea in the west, this land is blessed with abundant 
        geographical and cultural diversity. How this tiny strip of land holds such 
        divine natural beauty and cultural heritage is a wonder in itself.
        There is no dearth of places to visit for any traveller in this marvel of a land. "
        img1={"https://ihplb.b-cdn.net/wp-content/uploads/2021/09/kerala-in-october-kollam.jpg"}
        img2={"https://www.ekeralatourism.net/wp-content/uploads/2018/03/Alleppey.jpg"}
         />
        </div>
    );
    
};
export default Destination;