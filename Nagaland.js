import React,{useState,useEffect,useRef} from "react";
import './Nagaland.css';
function Nagaland(){
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
                <center className="ncenter">NAGALAND TRAVEL GUIDE</center>
                <p className="npara">Nagaland offers unending exploration possibilities from heritage villages to wildlife sanctuaries. Beautifully nestled amidst the lush and verdant sub-tropical and sub-alpine climate, Nagaland treasures an overabundance of wild flora and fauna and even some medicinal plants. Nagaland is a beautiful destination in India and it stores some popular places to visit. You can soak in the freshness of fine scent in the air, the calming yet buzzing sound of wild cicadas and beautiful rolling ranch lands and white fluffy clouds hovering above.</p>
                <p className="npara"><strong>Capital:</strong>Kohima<strong>Location: </strong>North East India</p>
                <h3 className="nheader">BEST TIME TO VISIT NAGALAND:</h3>
                <p className="npara">Winters from October to February are an ideal time to visit Nagaland.</p>
                <h3 className="nheader">WHY VISIT NAGALAND?</h3>
                <p className="npara">Nagaland can be visited to experience holiday destination and witness unique heritage sites, rich wildlife, local festivals, delicious cuisines, beautiful handicrafts, cultural shopping, attractive places, attractions and more.</p>
                <div>
                    <h3 className="nheader">TEMPERATURE IN NAGALAND:</h3>
                    <div className="ndiv">
                        <div className="ndiv2">
                            <h3>16°C - 31°C</h3>
                            <p>Summer</p>
                            <p>March - April</p>
                        </div>
                        <div className='nline'>
                            <p>|</p>
                            <p>|</p>
                            <p>|</p>
                        </div>
                        <div className="ndiv1">
                            <h3>21°C - 40°C</h3>
                            <p>Monsoon</p>
                            <p>May - September</p>
                        </div>
                        <div className='nline'>
                            <p>|</p>
                            <p>|</p>
                            <p>|</p>
                        </div>
                        <div className="ndiv1">
                            <h3>4°C - 24°C</h3>
                            <p>Winter</p>
                            <p>October - February</p>
                        </div>
                    </div>
                </div>
                <div>
            <div className="carousel-container">
      <div className="slides" ref={slides}>
        <div className={`slide ${currentIndex === 0 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.lq8q8L4UjLLiQa6JbjoHqwHaE8?w=170&h=180&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7" alt="Slide 1" />
        </div>
        <div className={`slide ${currentIndex === 1 ? 'active' : ''}`}>
          <img src="https://www.hlimg.com/images/places2see/738X538/placetosee_1511352728m1.jpg" alt="Slide 2" />
        </div>
        <div className={`slide ${currentIndex === 2 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.zAlSl-JmsHSnvBtUikMgcwHaFC?pid=ImgDet&w=200&h=135&c=7&dpr=1.3" alt="Side 3" />
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
                    <center className="ncenter">An Insight to Nagaland Tourism</center>
                    <p className="npara">This must visit destination 'Nagaland' is a wonderful world full of beauty, appeal and adventure that calls tourists from far and near. As for some, the only drawback is the accessibility which is an important factor and perhaps the only reason why this seems to be a dream-like destination. But truth be told, the roads are quite convenient, from smoothly linked highways via Assam and West Bengal, Nagaland, in fact, the entire Northeast in easily accessible. Travellers venture into the Naga Hills to experience Nagaland tour with exquisiteness and to have unforgettable memories of the landscape, people, food, and culture. Even the rich deep forest looks blue because of the reflection of the bright sky with meandering clouds hovering around. Nature could not have been any sweeter to Nagaland for endowing it with everything beautiful and awe-inspiring.</p>
                </div>
                <div>
                    <h3 className="nheader">Nagaland Travel Information at a Glance</h3>
                    <p className="npara">Travelling to Nagaland can be thrilling and exciting but we have to get our facts right for a hassle free tour. Thus, we have gathered some important information to ease your trip. Our holiday guide on how to reach Nagaland lists the means of transport; best suited time to visit and also a map to help you navigate and explore the different places and attractions around the state.</p>
                </div>
            </div>
        </div>
    );
}
export default Nagaland;