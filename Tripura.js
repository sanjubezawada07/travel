import React,{useState,useEffect,useRef} from "react";
import './Tripura.css'
function Tripura(){
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
                <h2 className="trheader">TRIPURA TRAVEL GUIDE</h2>
                <p className="trpara">Tripura is a cultural reservoir among all the northeastern states of India. Heritage and historical sites, temples going back hundreds of years, wildlife destinations and a thriving arts and crafts industry, these are the most popular tourism attractions in Tripura. Those looking for biodiversity hotspots during their Tripura holidays will not be disappointed, this state has plenty of those. Tripura is one of those travel destinations in India that attract families, friends, couples and solo travellers.</p>
                <p className="trpara"><strong>Capital:</strong>Agartala <strong>Location:</strong>Northeast India</p>
                <h2 className="trheader">BEST TIME TO VISIT TRIPURA:</h2>
                <p className="trpara">October to February are the best months to visit Tripura.</p>
                <h2 className="trheader">WHY VISIT TRIPURA?</h2>
                <p className="trpara">You should visit Tripura for its landscape, culture, cuisine, palaces, heritage sites, sightseeing, viewpoints, temples, archaeological sites, wildlife, boating, waterfalls, handicrafts, birding, lakes and landscape.</p>
                <div>
                    <h1>TEMPERATURE</h1>
                    <div className="trdiv">
                        <div className="trdiv2">
                            <h3>25°C to 35°C</h3>
                            <p>Summer</p>
                            <p>March to June</p>
                        </div>
                        <div className='trline'>
                            <p>|</p>
                            <p>|</p>
                            <p>|</p>
                        </div>
                        <div className="trdiv1">
                            <h3>22°C to 33°C</h3>
                            <p>Monsoon</p>
                            <p>June to September</p>
                        </div>
                        <div className='trline'>
                            <p>|</p>
                            <p>|</p>
                            <p>|</p>
                        </div>
                        <div className="trdiv1">
                            <h3>15°C to 20°C</h3>
                            <p>Winter</p>
                            <p>November to March</p>
                        </div>
                    </div>
                </div>
                <div>
            <div className="carousel-container">
      <div className="slides" ref={slides}>
        <div className={`slide ${currentIndex === 0 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.qJwoTF1kYbfpLbSd7h2rqwHaEj?rs=1&pid=ImgDetMain" alt="Slide 1" />
        </div>
        <div className={`slide ${currentIndex === 1 ? 'active' : ''}`}>
          <img src="https://www.holidify.com/images/bgImages/TRIPURA.jpg" alt="Slide 2" />
        </div>
        <div className={`slide ${currentIndex === 2 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.r6jt6bgJSG1MUNeT9R63hwAAAA?pid=ImgDet&w=200&h=200&c=7&dpr=1.3" alt="Side 3" />
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
                    <h2 className="trheader">An Insight into Tripura Tourism</h2>
                    <p>The points of tourist interest in Tripura range from adventure and culture to wildlife and arts and crafts. Such is the kind of diverse travel experience that this place promises. In terms of geography, the state is marked by the presence of five major hill ranges which extend from north to south and then extend southwards till they meet the Chittagong Hill Tract in Bangladesh. The highest peak among the hill ranges in the state is Betlingchhip. The state is also blessed by 10 rivers. Upon arriving in the state for the first time, however, it is the lushness and the greenery all around which immediately catches your attention. Such dense greenery is a gift to the eyes and a treat to the sense.</p>
                </div>
                <div>
                    <h2 className="trheader">Tripura Travel Information at a Glance</h2>
                    <p className="trpara">In this Tripura travel guide, you will find every kind of information that you are looking for, and which you will find useful, during your trip to one of the most beautiful states of the northeast. Are you thinking of the best time to visit Tripura? What is the best way of reaching it? This travel guide has the answers to all these questions.</p>
                </div>
            </div>
        </div>
    )
}
export default Tripura;