import React,{useState,useEffect,useRef} from "react";
import './Telangana.css'
function Telangana(){
    const [currentIndex, setCurrentIndex] = useState(0);
  const slides = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const slideCount = slides.current.children.length;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
    }, 2000); 

    intervalRef.current = interval;

    return () => clearInterval(intervalRef.current);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
    return(
        <div>
            <div>
                <center className="tecenter">TELANGANA TRAVEL GUIDE</center>
                <p className="tepara">Independence might have knocked the door in Telangana a bit late, but its tourism has been quite a hit even when it was part of Andhra Pradesh. Yes, this 29th state of India has so much to offer ranging from temples to history and from food to nature that you cannot help falling in love with it. Telangana is indeed a must visit destination in India; a soulful place that takes pride in its rich heritage, culture, wildlife and beauty of nature.</p>
                <h4 className="teheader"><strong>Capital:</strong>Hyderabad<strong>Location:</strong>South India</h4>
                <h2 className="teheader">BEST TIME TO VISIT TELANGANA:</h2>
                <p className="tepara">The months between November and February are ideal for visiting Telangana</p>
                <h2 className="teheader">WHY VISIT TELANGANA?:</h2>
                <p className="tepara">For the pristine natural beauty, opulent heritage, architectural grandiose, pilgrimage site, rich wildlife, flavoursome cuisine, colourful festivals, gorgeous art and craft.</p>
                <h2 className="teheader">TEMPERATURE</h2>
                <div className="tediv">
                    <div className="tediv2">
                        <h3>30°C to 45°C</h3>
                        <p>Summer</p>
                        <p>March -May</p>
                    </div>
                    <div className='teline'>
                        <p>|</p>
                        <p>|</p>
                        <p>|</p>
                    </div>
                    <div className="tediv1">
                        <h3>24°C to 30°C</h3>
                        <p>Monsoon</p>
                        <p>June -September</p>
                    </div>
                    <div className='teline'>
                        <p>|</p>
                        <p>|</p>
                        <p>|</p>
                    </div>
                    <div className="tediv1">
                        <h3>14°C to 29°C</h3>
                        <p></p>
                        <p></p>
                    </div>
                </div>
                <div>
            <div className="carousel-container">
      <div className="slides" ref={slides}>
        <div className={`slide ${currentIndex === 0 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.zkNmEMaOjUbDiwGWRqgKCQHaF_?rs=1&pid=ImgDetMain" alt="Slide 1" />
        </div>
        <div className={`slide ${currentIndex === 1 ? 'active' : ''}`}>
          <img src="https://www.lifeberrys.com/img/article/telangana-1595578583-lb.jpg" alt="Slide 2" />
        </div>
        <div className={`slide ${currentIndex === 2 ? 'active' : ''}`}>
          <img src="https://www.holidify.com/images/cmsuploads/compressed/kuntala_20191030150919.jpeg" alt="Side 3" />
        </div>
      </div>
      <div className="dots">
        {Array.from({ length: 3 }).map((_, index) => (
          <span
            key={index}
            onClick={() => goToSlide(index)}
            className={currentIndex === index ? 'active' : ''}
          />
        ))}
      </div>
      </div>
      </div>
                <div>
                    <center className="tecenter">An Insight into Telangana Tourism</center>
                    <p className="tepara">Famed for its decades-long struggle for an independent state, Telangana is indeed a place to delve in the history if past fascinates you more than the present. Separated from the state of Andhra Pradesh in South India, Telangana relishes its freedom from June 2, 2014, and is nestled between the states of Tamil Nadu and Andhra. With Hyderabad being its capital, the state enjoys an opulent heritage of architectural marvels. Yes, the state is home to the famed Charminar and the gorgeous Falaknuma Palace, Golkonda Fort, Warangal Fort and the likes of these. Truly, any Telangana travel guide is filled with information on monuments and edifices that can stun with their fine craftsmanship. Once the ruling seat of the Kakatiyas who has the maximum contribution towards the architecture, Telangana is a paradise for history lovers.</p>
                    <p className="tepara">Telangana also boasts being a land of gods; the state is replete with a plethora of Hindu temples, amongst which Kondagattu Anjaneya Swamy temple and the shrine of Sri Mallikarjuna Swamy are of immense importance. The state also houses a few Jain Temples, churches, and mosques which are perfect for religious tours. The Jama Masjid in Hyderabad is, in fact, an architectural marvel that you cannot miss out on when in Telangana. The state is also blessed with natural grandeur, which is truly worth seeing. Amongst the top sites for nature lovers are Ananthagiri Hills, Bogatha Waterfall, and Pakhal Lake, and then there are plenty of other places around dams in the state that can make tourists spoilt for choice.</p>
                    <p className="tepara">Telangana is also an ideal wildlife destination, yes, so those visitors looking for an enthralling experience in the state can plan a holiday to the wildlife and bird sanctuaries. Apart from the famed KBR National Park, the state houses many deer parks, bird sanctuaries and wildlife reserves that are home to the rare species of blackbuck.</p>
                    <p className="tepara">A food experience in Telangana is also something to look forward to when visiting this South Indian state. There is a wide variety of delicacies that await to make you forget the rest and binge. From the famous Hyderabadi biryani to the mouth-watering Golichina Mamsam and from Irani Chai (Tea) to Karachi Biscuits, there is so much for a food lover to relish. Another incredible experience in Telangana comes with shopping opportunities. Since the state has rich art and craft, one can rest assured to go back home with a bag full of items of fine craftsmanship. From Bidri work to Banjara Needlecraft of the tribals to Nirmal arts to Dokra metal craft, Telangana is going to leave you breathless with the shopping experience and traditional craft. The state is a perfect destination for family vacations, travelling with friends as well as heading for a solo venture; it is indeed a place in India that deserves to be explored and to have been told travel stories about.</p>
                </div>
            </div>
        </div>
    );
}
export default Telangana;