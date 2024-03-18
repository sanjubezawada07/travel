import React,{useState,useEffect,useRef} from "react";
import './Lakshadweep.css';
function Lakshadweep(){
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
                <center className="lacenter">LAKSHADWEEP TRAVEL GUIDE</center>
                <p className="lapara">Blue sea, unspoiled beaches, exotic islands are some of the reasons that make Lakshadweep a popular tourist destination, off the Indian mainland. This archipelago is one of the legit places for those seeking tranquillity or wants to get a thrilling experience by indulging in some adventure. In addition to offering a number of islands that are perfect for a tropical vacay, Lakshadweep also lets the travellers spend a luxurious holiday with opulent resorts along with fun-filled activities that will let one experience a perfect beach vacation to cherish for the lifetime. For those up for making a visit to the popular island destination, the travel guide will let the tourists cover what all has to be covered when holidaying in Lakshadweep.</p>
                <p className="lapara"><strong>Capital:</strong>Kavaratti<strong> Location:</strong>West Coast Of India In the Arabian Sea </p>
                <h4 className="laheader">BEST TIME TO VISIT LAKSHADWEEP?</h4>
                <p className="lapara">A trip to Lakshadweep can be planned during the winter season between October and Mid-May when the weather is pleasant and conducive for water sports activities.</p>
                <h4 className="laheader">WHY VISIT LAKSHADWEEP?</h4>
                <p className="lapara">For a beach holiday, water sports activities and adventure tourism.</p>
                <h4 className="laheader">TEMPERATURE</h4>
                <div className="ladiv">
                    <div className="ladiv2">
                        <h4>22°C to 33°C</h4>
                        <p>Summer</p>
                        <p>March-June</p>
                    </div>
                    <div className='laline'>
                        <p>|</p>
                        <p>|</p>
                        <p>|</p>
                    </div>
                    <div className="ladiv1">
                        <h4>27°C to 30°C</h4>
                        <p>Monsoon</p>
                        <p>June-September</p>
                    </div>
                    <div className='laline'>
                        <p>|</p>
                        <p>|</p>
                        <p>|</p>
                    </div>
                    <div className="ladiv1">
                        <h4>20°C to 30°C</h4>
                        <p>winter</p>
                        <p>October-February</p>
                    </div>
                </div>
            </div>
            <div>
            <div className="carousel-container">
      <div className="slides" ref={slides}>
        <div className={`slide ${currentIndex === 0 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.p5f4jg--MjHxmCH1fK4UNwHaE8?rs=1&pid=ImgDetMain" alt="Slide 1" />
        </div>
        <div className={`slide ${currentIndex === 1 ? 'active' : ''}`}>
          <img src="https://pickyourtrail.com/blog/wp-content/uploads/2020/07/anuj-chauhan-LQ_SoWQDk84-unsplash-1-scaled.jpg" alt="Slide 2" />
        </div>
        <div className={`slide ${currentIndex === 2 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th?q=Lakshadweep+Coral+Reef&w=120&h=120&c=1&rs=1&qlt=90&cb=11&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=strict&t=1&mw=247" alt="Side 3" />
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
                <center className="lacenter">An Insight into Lakshadweep Tourism</center>
                <div className="lainsight">
                <div className="lasep">
                    <p className="lapara">A perfect amalgamation of islands, Lakshadweep is situated off the Kerala coast in the Arabian Sea. Dotted with white sandy beaches, lagoons and coral reefs, Lakshadweep is an ideal destination for nature lovers seeking solitude and adventure enthusiasts. Being one of the smallest Union Territory of India, Lakshadweep let the tourists get close to the alluring marine life, the rural communities, the lighthouse and more than that and an enormous magnetism for the travellers of all kind.</p>
                    <p className="lapara">Islands being the major tourist attractions in Lakshadweep will let one explore the beauty of nature or indulge in some adventurous activities. Out of all, the popular ones include Minicoy Island which has some of the best luxury beach resorts and one of the oldest lighthouses in Lakshadweep which offers breathtaking views from the top, the Bangaram Island which is an ideal tourist spot for the honeymooners, Kadmat Island which is a home to huge lagoons and rich marine life. Other than this, tourists can even head to Suheli, Cherium, Tinnakara, Kalpeni, Agatti, Chetlat and Bitra for a relaxing and fun-filled beach holiday.</p>
                </div>
                <div className="lasep">
                    <p className="lapara">Coming to the cuisines of Lakshadweep, it is often said the food here is equivalent to the islands. The local delicacies of the destination have a major Kerala influence with coconut and rice being the primary ingredient. Tourists visiting Lakshadweep cannot escape the aroma of scrumptious traditional dishes including octopus fry, appams and tuna cooked with a special tang of coconut flavour.</p>
                    <p className="lapara">The must visits eateries where tourists can savour the local delicacies include Agatti Island Beaches Resort, Akshaya Mess and Food Court. Coming to shopping in Lakshadweep, tourists can get their hand on some wonderful stuff including traditional handicrafts made from coral shells. Right from the classic oysters to coral shells, from coconut shell objects to wonderful beach handicrafts, shopping in Lakshadweep will give a unique experience to the tourists. One can even buy bracelets, mirrors, armlets, forks, lamps, ashtrays and more that are made from shells. Not only this, but tourists can even buy some amazing aquariums here.</p>
                </div>
                </div>
            </div>
        </div>
    );
}
export default Lakshadweep;