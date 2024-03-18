import "./TripStyles.css";
import TripData from "./TripData"
import Trip1 from "./blog1.jpeg"
import Trip2 from "./blog2.jpg"
import Trip3 from "./blog3.jpg"
function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique
            destinations using Google Maps.
            </p>
            <div className="tripcard">
                <TripData
                 image={Trip1}
                 heading="Trip in Munnar"
                 text="Munnar, the famed hill station of 
                 south India,is a romantic locale where 
                 natural beauty is everywhere to visit, 
                 explore and to enjoy. Munnar is situated
                 at the confluence of three mountain 
                 streams – Muthirapuzha, Nallathanni and
                 Kundala – and the word ‘Munnar’ means 
                 three rivers in Malayalam. "
                />
                <TripData
                 image={Trip2}
                 heading="Trip in Kochi"
                 text="This lovely seaside city is flanked 
                 by the Western Ghats on the east and the 
                 Arabian Sea on the west. Its proximity to
                 the equator, the vast water body and the 
                 hills provide a moderate equatorial climate
                 for visitors. With the best places to 
                 visit in Cochin, informally it is also
                 referred to as the Gateway to Kerala "
                />
                
                <TripData
                 image={Trip3}
                 heading="Trip in Chennai"
                 text="South Indian movie buffs must visit MGR Film City
                 Spread across 70 acres,it will transport you to a dream
                 world with its replicas of religious places,urban and 
                 village scenes, and landscaped gardens.You might catch 
                 sight of some famous Tamil actors too!"
                />
            </div>
        </div>
    );
}
export default Trip;