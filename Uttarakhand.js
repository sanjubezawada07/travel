import React,{useState,useEffect,useRef} from "react";
import './Uttarakhand.css';
function Uttarakhand(){
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
                <h2 className="uheader">About Uttarakhand Tourism</h2>
                <p className="upara">Devbhoomi Uttarakhand is the state in India one can easily fall in love with. The surreal landscape that comprises lofty Himalayas, glistening streams, eye-catching meadows, imposing glaciers and surreal lakes, all make Uttarakhand a coveted tourist destination in Indian Himalayas. The state is divided into two regions: Garhwal and Kumaon. Each of these offers plenty of opportunities for tourism, sightseeing, adventure and wildlife. Dotted with sacred Hindu temples and trekking trails, this North Indian state is a travel destination where along with seeking the blessing of the Almighty, one can indulge in adventure and recreational activities.</p>
            </div>
            <div>
                <h2 className="uheader">Plenty of adventure to be had!</h2>
                <p className="upara">For those who seek adventure tourism, Uttarakhand offers some incredible trekking, mountain climbing, and white-water rafting opportunities. Uttarakhand is one of the best trekking destinations in India, with the famous treks in Uttarakhand are Auden’s Col, Kalindi Khal, Nag Tibba, Bedni Bugyal, Valley of Flowers, Chopta Chandrashila and many more.</p>
                <p className="upara">Skiing enthusiasts also have a lot to look forward to in Uttarakhand, with Auli being one of the top skiing destinations in India. Camping is another popular adventure activity, with the top camping destinations being Jharipani, Dhanaulti, Kanatal and Corbett National Park.</p>
                <p className="upara">Peak climbing enthusiasts can enjoy scaling the mountain peaks in the Garhwal Himalayas in both the Garhwal & Kumaon region, with the most climbed mountain peaks being Hathi Parbat, Nanda Devi, Chaukhamba, Kedar Dome and Bandarpoonch.</p>
            </div>
            <div>
                <h2 className="uheader">Waterfalls: Serene and great for a picnic!</h2>
                <p className="upara">One of the best things about these waterfalls is that they add more charm to the nearby cities and towns like Mussoorie, Haridwar, Pithoragarh, Rishikesh giving visitors another reason to plan a holiday here. These small yet dreamy falls in Mussoorie are a delight if you are looking for a peaceful retreat away from the city.</p>
                <p className="upara">Another must visit waterfall is the Mossy Falls, which gets its name from the covering of mossy that envelopes the whole area making the place look even beautiful. Jimi Ghat Waterfalls in the Pithoragarh District is another popular waterfall which offers scintillating views of the Nanda Devi range, and is surrounded by the rhododendrons and birch.</p>
            </div>
            <div>
                <h2 className="uheader">Enjoy the authentic dishes of Garhwal & Kumaon regions!</h2>
                <p className="upara">The cuisine of Uttarakhand can be described as simple yet tasty. The two regions, Garhwal and Kumaon, have their own distinct dishes that are equally tasty and enjoyable. The dishes in Garhwal deeply connect to its people, the food is prepared with the right amount of spices, which only entices one to savour it. Phanu, Kafuli, Thechwani, Chainsoo, Jholi, Gahat ke Paranthe, Roat and Baadi are some of the finger-licking Garhwali dishes. Meanwhile in Kumaon, Aaloo Gutuk, Dubke, Thathwani, Kaapa, Chudkani, Jaula and Sisunaak Saag are the mouth-watering presentations.</p>
            </div>
            <div>
                <h2 className="uheader">Shop for a handicrafts products like Aipaan & Waxworks!</h2>
                <p className="upara">Uttarakhand also offers an enjoyable shopping experience as there are bakeries, bazaars, to places where you will find the best quality of leather. Besides this, one can fancy a number of local handicrafts, wooden work, carpets, gems, jewellery, squashes , homemade jams, woolen articles to keep you warm and Garhwali paintings to take back home. Then there are markets full of unique handmade accessories and gems, woodcrafts which can be found in Munsiyari, Mussoorie, and Nainital.</p>
                <p className="upara">Another thing that Nainital is famous for is its wax candles, it is in the Bara Bazaar and Mall Road, one can find some exquisitely designed candles. Besides all the colourful and vibrant markets, one more place you would like to find yourself in is the Chowk Bazar. This market in Almora is famous for Angora clothes made from the fluffy fur of angora rabbits. A good variety of copperware is also available in Almora and Bageshwar. Some of the most popular shopping items in Uttarakhand are Ringaal Handicraft, Aipan, Copperware, Rambaans Handicrafts, Waxworks, Spices and Pickles.</p>
            </div>
            <div>
                <h2 className="uheader">Top visiting places</h2>
                <ul>
                    <li className="upara"><strong>Rishikesh : </strong> Internationally known as the Yoga capital, spiritual, religious and adventurous tourism hub, Rishikesh is one of the top visited places in Uttarakhand in the Himalayas and is visited by domestic and international tourists every year.</li>
                    <li className="upara"><strong>Nainital : </strong> Nainital is one of the top 10 most visited tourist destinations of Uttarakhand not just for its charming Naini Lake, but other sightseeing opportunities & a rich colonial heritage.</li>
                    <li className="upara"><strong>Mussoorie : </strong>What makes Mussoorie counted among the top 10 most visited tourist destinations of Uttarakhand is Kempty Falls, temples, boating,Cable Car Ride & Mall Road.</li>
                    <li className="upara"><strong>Corbett National Park : </strong>Visit Corbett National Park, the oldest national park in India as well as the largest tiger reserve. It’s one of the best places to spot the Royal Bengal Tiger in India.</li>
                    <li className="upara"><strong>Valley of Flowers : </strong>Valley of Flowers is a UNESCO World Heritage Site and is home to more than 350 species of flowers. Red fox and musk deer are some of the exotic animals found.</li>
                    <li className="upara"><strong>Auli : </strong>Auli is one of the top skiing destinations in India & the world & most visited destinations in Uttarakhand by skiing enthusiasts. Tourists can also enjoy camping & sightseeing.</li>
                    <li className="upara"><strong>Kedarnath Dham :</strong> Kedarnath Dham is one of the most visited tourist pilgrimage destinations of Uttarakhand. Situated at 3,584 meters, it’s one of the 12 Jyotirlingas & most important among Panch Kedars.</li>
                    <li className="upara"><strong>Haridwar : </strong>Har Ki Pauri is one of the most sacred ghats in Haridwar which is said to contain the foot imprints of Lord Vishnu. The evening Ganga Aarti is a major attraction.</li>
                    <li className="upara"><strong>Chopta - Tungnath : </strong>Chopta is one of the most visited tourist attractions in Uttarakhand for its Tungnath Temple, the highest Shiva Temple in the world. Sightseeing, camping & trekking are also popular.</li>
                    <li className="upara"><strong>Chakrata : </strong>Chakrata finds a place among the most visited tourist attractions of Uttarakhand because of its spectacular views, Tiger Falls, ambience and a picnic spot.</li>
                </ul>
            </div>
            <div className="udiv">
                <div className="usdiv">
                    <img className="uimg" src="https://www.tourmyindia.com/states/uttarakhand/image/summer-ico.png"/>
                    <div>
                        <h4 className="usheader">Summer Season In Uttarakhand</h4>
                        <p className="uspara">The summer season between March and June in Uttarakhand is quite pleasant with temperature ranging from 20°C to 30°C.</p>
                    </div>
                </div>
                <div className="usdiv">
                    <img className="uimg" src="https://www.tourmyindia.com/states/uttarakhand/image/mansoon-ico.png"/>
                    <div>
                        <h4 className="usheader">Monsoon Season In Uttarakhand</h4>
                        <p className="uspara">Monsoon begins from June and ends in September in Uttarakhand. The state experiences heavy rainfall during monsoons.</p>
                    </div>
                </div>
                <div className="usdiv">
                    <img className="uimg" src="https://www.tourmyindia.com/states/uttarakhand/image/winter-ico.png"/>
                    <div>
                        <h4 className="usheader">Winter Season In Uttarakhand</h4>
                        <p className="uspara">Winter season in Uttarakhand is from November to February when the weather gets chilly and the temperature drops to sub-zero.</p>
                    </div>
                </div>
            </div>
            <h2 className="uheader">How To Reach Uttarakhand</h2>
            <div className="udiv">
                <div className="usdiv">
                    <img className="uimg" src="https://www.tourmyindia.com/states/uttarakhand/image/train.png"/>
                    <div>
                        <h4 className="usheader">By Train</h4>
                        <p className="uspara">Uttarakhand’s main railway stations like Rishikesh, Haridwar, Dehradun, Haldwani, and Kathgodam connect it to the rest of India.</p>
                    </div>
                </div>
                <div className="usdiv">
                    <img className="uimg" src="https://www.tourmyindia.com/states/uttarakhand/image/air.png"/>
                    <div>
                        <h4 className="usheader">By Air</h4>
                        <p className="uspara">Dehradun and Pantnagar airports in Uttarakhand connect the state to major cities of India.</p>
                    </div>
                </div>
                <div className="usdiv">
                    <img className="uimg" src="https://www.tourmyindia.com/states/uttarakhand/image/bus.png"/>
                    <div>
                        <h4 className="usheader">By Road</h4>
                        <p className="uspara">NH 7, NH 109, and NH 707 connect Uttarakhand to the major cities of India.</p>
                    </div>
                </div>
            </div>
            <div>
            <div className="carousel-container">
      <div className="slides" ref={slides}>
        <div className={`slide ${currentIndex === 0 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.NbuZhGDdFZVCPd1dndsQ0gHaE8?rs=1&pid=ImgDetMain" alt="Slide 1" />
        </div>
        <div className={`slide ${currentIndex === 1 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.TijK9PdhbUftaalVK8ePFwHaF7?pid=ImgDet&w=200&h=160&c=7&dpr=1.3" alt="Slide 2" />
        </div>
        <div className={`slide ${currentIndex === 2 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th?q=Uttarakhand+Rivers&w=120&h=120&c=1&rs=1&qlt=90&cb=11&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=strict&t=1&mw=247" alt="Side 3" />
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
                <h2 className="uheader">Travel Tips for Uttarakhand</h2>
                <ul>
                    <li className="upara">Always carry an ID proof with you at all times, you never know when you might need it.</li>
                    <li className="upara">Choose the right time to visit Uttarakhand. The time between October and June is the best.</li>
                    <li className="upara">The accommodation options in Uttarakhand are many. In remote destinations, homestay options and camping are also available.</li>
                    <li className="upara">In monsoons, the rains can be heavy, therefore, it is advised to check the weather forecast before travelling.</li>
                    <li className="upara">Before planning a trip to Uttarakhand, read about the state’s policy about birds and animals, entering sacred places, eco-tourism, and interacting with tribals.</li>
                    <li className="upara">There are many high altitude destinations in Uttarakhand where breathing problems and altitude sickness are common. Make sure to take the necessary medicines when travelling.</li>
                    <li className="upara">If you are going trekking or peak climbing, make sure you carry a comfortable pair of shoes that have great friction.</li>
                    <li className="upara">Don’t forget to carry the emergency or first-aid kit with medication and other essentials.</li>
                    <li className="upara">The best time to enjoy peak climbing is during the summer season between March and June, post-monsoon and winter season between October and February.</li>
                </ul>
            </div>
        </div>
    );
}
export default Uttarakhand;