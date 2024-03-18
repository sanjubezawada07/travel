import React,{useState,useEffect,useRef} from "react";
import './Goa.css';
function Goa(){
    const [currentIndex, setCurrentIndex] = useState(0);
  const slides = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const slideCount = slides.current.children.length;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
    }, 2000); // Adjust autoplay speed here (in milliseconds)

    intervalRef.current = interval;

    return () => clearInterval(intervalRef.current);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
    return(
        <div>
            <div>
                <h2 className="goaheader">About Goa Tourism</h2>
                <p className="goapara">The coastal paradise, Goa is not unknown to anyone. This tiny state in West India is famous for its plethora of beautiful beaches, great seafood, amazing nightlife, and thrilling watersports.

Goa along with being a popular beach destination in India is a perfect honeymoon destination, a great getaway with friends, and an amazing family holiday place, which means, the place is filled with activities and attractions to keep all its visitors engaged.</p>
<p className="goapara">The state is majorly divided into two districts - North Goa and South Goa. North Goa is famous for its lively beaches like Calangute, Baga, Candolim, Anjuna; beach shacks, Fort Aguada; Church of Mae De Dues; Boghdeshwara Temple; and Chorao, Divar Island.</p>
<p className="goapara">South Goa, on the other hand is known for its quieter beaches like Butterfly, Palolem, Polem, and Agonda; luxury resorts; Se Cathedral and St Xavier’s Church; and many sightseeing places like Dudhsagar Waterfalls where one can enjoy trekking as well.</p>
<p className="goapara">Goa also offers its visitors the chance to enjoy river carnivals; Rajbhavan Darshan; e-bikes tour; white water river rafting; hot air ballooning; birding tours at Dr Salim Ali Bird Sanctuary; Ayurveda massages; shopping; water activities like scuba diving and sea rafting; and other adventure activities like motorised paragliding, and bungee jumping.</p>
<p className="goapara">In our Goa Travel Guide, we add the most authentic information ensuring you know everything about the state before planning a trip. Our authentic Goa travel guide includes information on places to visit, top things to do, and best hotels. With us, you also get the best Goa tour packages that ensure an amazing holiday experience at this top beach destination in India.</p>

            </div>
            <h2 className="goaheader">Best Time to Visit Goa</h2>
            <div className="goadiv">
                <div className="goatrain">
                    <img src="https://www.tourmyindia.com/states/goa/image/summer-ico.png" className="gimg"/>
                    <div>
                        <h3 className="gsheader">Summer Season In Goa</h3>
                        <p className="gspara">The summer season between March and June in Goa is quite hot with temperature ranging between 25°C and 40°C.</p>
                    </div>
                </div>
                <div className="goatrain">
                    <img src="https://www.tourmyindia.com/states/goa/image/mansoon-ico.png" className="gimg"/>
                    <div>
                        <h3 className="gsheader">Monsoon Season In Goa</h3>
                        <p className="gspara">Monsoon in Goa is between July and August. Goa receives medium to high rainfall leaving beaches closed but the state greener.</p>
                    </div>
                </div>
                <div className="goatrain">
                    <img src="https://www.tourmyindia.com/states/goa/image/winter-ico.png" className="gimg"/>
                    <div>
                        <h3 className="gsheader">Winter Season In Goa</h3>
                        <p className="gspara">Winter season is from November to February and is the best time to plan a visit to Goa.</p>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="goaheader">How to Reach Goa</h2>
                <div className="goadiv">
                <div className="goatrain">
                    <img src="https://www.tourmyindia.com/states/goa/image/train.png" className="gimg"/>
                    <div>
                        <h3 className="gsheader">By Train</h3>
                        <p className="gsapara">Madgaon and Vasco Da Gama railway stations connect Goa to major cities of India</p>
                    </div>
                </div>
                <div className="goatrain">
                    <img src="https://www.tourmyindia.com/states/goa/image/air.png" className="gimg"/>
                    <div>
                        <h3 className="gsheader">By Air</h3>
                        <p className="gspara">Dabolim International Airport connects Goa to the major cities of India and abroad.</p>
                    </div>
                </div>
                <div className="goatrain">
                    <img src="https://www.tourmyindia.com/states/goa/image/bus.png" className="gimg"/>
                    <div>
                        <h3 className="gsheader">By Road</h3>
                        <p className="gspara">NH 66, NH 366, NH 566, and NH 748 connect Goa to the major cities of India.</p>
                    </div>
                </div>
            </div>
            </div>
            <div>
            <div className="carousel-container">
      <div className="slides" ref={slides}>
        <div className={`slide ${currentIndex === 0 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.KCcYsdm5VmX0p4WxmLsEiwHaE6?w=308&h=180&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7" alt="Slide 1" />
        </div>
        <div className={`slide ${currentIndex === 1 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th?q=Cape+Goa&w=120&h=120&c=1&rs=1&qlt=90&cb=11&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=strict&t=1&mw=247" alt="Slide 2" />
        </div>
        <div className={`slide ${currentIndex === 2 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th?q=Goa+Sunset&w=120&h=120&c=1&rs=1&qlt=90&cb=11&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=strict&t=1&mw=247" alt="Side 3" />
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
        </div>
    );
}
export default Goa;