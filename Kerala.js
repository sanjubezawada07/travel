import React,{useState,useEffect,useRef} from "react";
import './Kerala.css'
function Kerala(){
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
                <center className="kecenter">About Kerala Tourism</center>
                <p className="kepara">Encompassing serenity, Kerala is a charming South Indian destination that should be in every traveller’s bucket list. Adorned with the emerald backwaters, sprawling and lush tea estates, pristine hill stations, and azure Arabian Sea, Kerala tourism boasts numerous tourist places with which you will fall in love instantly.</p>
                <p className="kepara">In North Kerala, districts like Kasaragod, Kannur, Wayanad, Kozhikode, and Malappuram have many attractions for the tourists. Wayanad offers a lovely hill station holiday whereas Kozhikode offers a great beach holiday and an opportunity of bird watching.</p>
                <p className="kepara">In Central Kerala, Palakkad, Thrissur, Ernakulam, and Idukki have a number of experiences in store. Thrissur is a culture aficionado’s paradise while Idukki and Ernakulam are the hotspots for nature lovers.</p>
                <p className="kepara">In South Kerala Kottayam, Pathanamthitta, Alappuzha, Kollam, Thiruvananthapuram are ready with a variety of experiences like backwaters and houseboat in Alappuzha; beach vacations in Kollam, and a glance at rich history of Kerala at Pathanamthitta.</p>\
                <p className="kepara">Kerala tourism isn’t only about imbibing natural beauty but its rich culture that is festooned with dances, festivals, delectable cuisine, literature, Ayurveda therapies, and art & craft. Kerala has it all, and you have to see it, to believe it.</p>
                <p className="kepara">The state opens its doors to beach holidays with picturesque beaches like Varkala, Kovalam and Marari. Giving a good run to pristine beaches are the backwaters of Kerala that can be best experienced in Alleppey and Kumarakom.</p>
                <p className="kepara">Kerala's beach and backwaters are accompanied by its lush and surreal hill stations, of which Munnar, Wayanad and Vagamon are the best places to visit in the summer season. With Western Ghats covering some of its area, Kerala is the best wildlife destination and is perfect for birdwatching.</p>
                <h3 className="keheader">Best Time for Visiting Kerala for Holidays</h3>
                <p className="kepara">The best time to visit Kerala is between October and February, when on an average the weather is conducive to go on sightseeing tours and enjoying all the activities offered in the state.</p>
            </div>
            <h3 className="keheader">Best Time to Visit Kerala</h3>
            <div className="kediv">
                <div className="kesdiv">
                    <img src="https://www.tourmyindia.com/states/kerala/image/summer-ico.png" className="keimg"/>
                    <div>
                        <h4 className="kesheader">Summer Season In Kerala</h4>
                        <p className="kespara">The summer season between March and June in Kerala can be extremely hot with temperature going above 35°C.</p>
                    </div>
                </div>
                <div className="kesdiv">
                    <img src="https://www.tourmyindia.com/states/kerala/image/mansoon-ico.png" className="keimg"/>
                    <div>
                        <h4 className="kesheader">Monsoon Season In Kerala</h4>
                        <p className="kespara">Monsoon begins from June and ends in September in Kerala. The state experiences heavy rainfall and extreme humidity during monsoons.</p>
                    </div>
                </div>
                <div className="kesdiv">
                    <img src="https://www.tourmyindia.com/states/kerala/image/winter-ico.png" className="keimg"/>
                    <div>
                        <h4 className="kesheader">Winter Season In Kerala</h4>
                        <p className="kespara">Winter season in Kerala is from November to February when the weather is pleasant and the temperature remains under 30°C</p>
                    </div>
                </div>
            </div>
            <h3 className="keheader">How to Reach Kerala</h3>
            <div className="kediv">
                <div className="kesdiv">
                    <img src="https://www.tourmyindia.com/states/kerala/image/air.png" className="keimg"/>
                    <div>
                        <h4 className="kesheader">By Air</h4>
                        <p className="kespara">Kochi, Thiruvananthapuram, Kozhikode all have their own airports connecting them to major cities of India.</p>
                    </div>
                </div>
                <div className="kesdiv">
                    <img src="https://www.tourmyindia.com/states/kerala/image/train.png" className="keimg"/>
                    <div>
                        <h4 className="kesheader">By Train</h4>
                        <p className="kespara">Along with Kochi and Thiruvananthapuram, Kerala has several railway stations connecting it to the rest of India.</p>
                    </div>
                </div>
                <div className="kesdiv">
                    <img src="https://www.tourmyindia.com/states/kerala/image/bus.png" className="keimg"/>
                    <div>
                        <h4 className="kesheader">By Road</h4>
                        <p className="kespara">NH 17, NH 47, and NH 49 connect Kerala to the major cities of India.</p>
                    </div>
                </div>
            </div>
            <div>
            <div className="carousel-container">
      <div className="slides" ref={slides}>
        <div className={`slide ${currentIndex === 0 ? 'active' : ''}`}>
          <img src="https://toib.b-cdn.net/wp-content/uploads/2017/10/alleppey.jpg" alt="Slide 1" />
        </div>
        <div className={`slide ${currentIndex === 1 ? 'active' : ''}`}>
          <img src="https://3.bp.blogspot.com/-ZGRLdOzfHP8/WTWaSy3oEBI/AAAAAAAACEI/u09i9-ZN964b4EdvzYuCsytumbcTLL-CgCLcB/s1600/kumarakom.jpg" alt="Slide 2" />
        </div>
        <div className={`slide ${currentIndex === 2 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.7itA9oQE8SWEsFNltJ0DnwHaEK?w=305&h=180&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7" alt="Side 3" />
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
                <h3 className="keheader">Kerala Travel Tips</h3>
                <ul>
                    <li>You can bring as much foreign currency as you want to Kerala and get it exchanged.</li>
                    <li>Banks are open for transactions from 10:00 - 3:30 hrs on weekdays and on first and third Saturdays. Second and Fourth Saturdays are holidays.</li>
                    <li>Several hotels, restaurants and shopping centres accept major credit cards - Mastercard and Visa.</li>
                    <li>For the best Kerala holiday experience, visit between September and May.</li>
                    <li>Carry cotton outfits; hats, sunglasses, sunscreen lotion etc.</li>
                    <li>Book your Ayurveda therapies and treatments at centres that are classified/approved by the Department of Tourism.</li>
                    <li>A variety of food apart from the cuisine of Kerala is available at major restaurants</li>
                    <li>Some temples in Kerala do not permit entry to non-Hindus.</li>
                    <li>Strict dress codes are followed in most of the temples. Footwear is banned inside the temple premises.</li>
                    <li>Nudity is not allowed in any of the beaches in Kerala.</li>
                    <li>Smoking is banned in public places.</li>
                    <li>When visiting someone’s home in Kerala, make sure to leave the footwear outside.</li>
                </ul>
                <h3 className="keheader">The following emergency numbers come handy in Kerala</h3>
                <ul>
                    <li>Police control room: 100</li>
                    <li>Fire station: 101</li>
                    <li>Ambulance: 102, 108</li>
                </ul>
            </div>
        </div>
    );
}
export default Kerala;