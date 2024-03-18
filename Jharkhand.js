import React,{useState,useEffect,useRef} from "react";
import './Jharkhand.css';
function Jharkhand(){
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
                <center className="jhcenter">JHARKHAND TRAVEL GUIDE</center>
                <p className="jhpara">A land with a vast bounty of towering mountains, dense forests and gushing waterfalls, Jharkhand is a place for the nature lovers and wildlife aficionados. The lesser explored destination of India will let the travellers witness a plethora of natural scenic vistas that are unperturbed or untouched. Other than scenic landscapes, a trip to Jharkhand will let one explore several museums and temples that are scattered around the state. Jharkhand will not only introduce the tourists to the unparalleled beauties of nature but will give an opportunity to explore and learn about the diverse culture and lifestyle of the tribal community living here. For those planning to visit the state, the travel guide will let one know what all is to be covered when holidaying in Jharkhand.</p>
                <p className="jhpara"><strong>Capital:</strong>Ranchi<strong> Location:</strong>Eastern India</p>
                <h3 className="jhheader">BEST TIME TO VISIT JHARKHAND</h3>
                <p className="jhpara">A trip to Jharkhand can be planned during the winter season between October and March when the weather is cool and pleasant making it favourable for a sightseeing tour and exploring the tourist attractions.</p>
                <h3 className="jhheader">WHY VISIT JHARKHAND?</h3>
                <p className="jhpara">For cultural tourism, waterfall and dam, eco-tourism, heritage walks, sightseeing tour, religious tour, rural tourism, adventure, fairs and festivals.</p>
                <div>
                    <h3 className="jhheader">TEMPERATURE</h3>
                    <div className="jhdiv">
                        <div className="jhdiv2">
                            <h3>20°C to 37°C</h3>
                            <p>Summer</p>
                            <p>March to June</p>
                        </div>
                        <div className='jhline'>
                            <p>|</p>
                            <p>|</p>
                            <p>|</p>
                        </div>
                        <div className="jhdiv1">
                            <h3>31°C to 35°C</h3>
                            <p>Monsoon</p>
                            <p>July to September</p>
                        </div>
                        <div className='jhline'>
                            <p>|</p>
                            <p>|</p>
                            <p>|</p>
                        </div>
                        <div className="jhdiv1">
                            <h3>2°C to 22°C</h3>
                            <p>Winter</p>
                            <p>October to February</p>
                        </div>
                    </div>
                </div>
                <div>
            <div className="carousel-container">
      <div className="slides" ref={slides}>
        <div className={`slide ${currentIndex === 0 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th?q=Jharkhand+Temple&w=120&h=120&c=1&rs=1&qlt=90&cb=11&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=strict&t=1&mw=247" alt="Slide 1" />
        </div>
        <div className={`slide ${currentIndex === 1 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th?q=Jharkhand+Capital&w=120&h=120&c=1&rs=1&qlt=90&cb=11&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=strict&t=1&mw=247" alt="Slide 2" />
        </div>
        <div className={`slide ${currentIndex === 2 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th?q=Ramgarh+Jharkhand&w=120&h=120&c=1&rs=1&qlt=90&cb=11&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=strict&t=1&mw=247" alt="Side 3" />
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
                    <center className="jhcenter">An Insight into Jharkhand Tourism</center>
                    <p className="jhpara">The state opens its door for the pilgrims, nature lovers and wildlife buffs with a wide array of tourist attractions and sightseeing places in all the popular cities, towns and villages. For those with religious beliefs, devotees will get an opportunity to bow their heads down at some of the religious shrines by visiting Ranchi, Deoghar, Jamshedpur, Rajrappa, Barharwa, Maluti Village and Ramgarh. Amongst all the temples of these destinations in Jharkhand the must visits where pilgrims can seek blessings include Baidyanath Jyotirlinga, Naulakha Mandir, Jagannath Temple, Maluti Temples, Bindudham, Deori Temple, Sun Temple, Bhuvaneshwari Temple, Maa Chhinnamasta Temple and more. Home to a number of heavenly waterfalls, pristine lakes and dams depicting the architectural excellence, Jharkhand offers the nature lovers the best sojourn to be cherished for a lifetime. There are numerous waterfalls, lakes and dams in the state of which the popular ones stand out to be Hundru Falls, Dassam Falls and Jonha Falls in Ranchi, Hirni Falls in West Singhbhum, Rajrappa Falls in Ramgarh, Ranchi Lake IN Ranchi, Dimna Lake in East Singhbhum, Hazaribagh Lake in Hazaribagh, Hudco Lake in Jamshedpur, Maithon Dam in Dhanbad, Khandoli Dam in Giridih, Charowah Dam in Hazaribagh, Kanke Dam in Ranchi and more.</p>
                    
                </div>
            </div>
        </div>
    )
}
export default Jharkhand;