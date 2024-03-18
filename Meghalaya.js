import React,{useState,useEffect,useRef} from "react";
import './Meghalaya.css';
function Meghalaya(){
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
                <center className="megcenter">MEGHALAYA TRAVEL GUIDE</center>
                <p className="megpara">Home to an extraordinary diversity of people, Meghalaya is one of the picturesque tourist destinations of India which serves as a perfect getaway for those seeking peace and tranquillity. On visiting Meghalaya, tourists will find themselves surrounded by panoramic landscapes, cascading waterfalls, foggy hills, terraced slopes that is sure to soothe the minds of the weary travellers. In addition to this, Meghalaya tourism also emphasizes on adventure tourism which offers a plethora of activities letting the tourists get a holistic travel experience in this beautiful northeastern state of India. With a number of popular tourism places, the Meghalaya Tourism Guide will let the tourists cover all that is needed to make a trip memorable one.</p>
                <p className="megpara"><strong>Capital:</strong>Shillong<strong>Location:</strong>Northeast India</p>
                <h3 className="megheader">BEST TIME TO VISIT MEGHALAYA:</h3>
                <p className="megpara">Blessed with a moderate climate all throughout the year, tourists can plan a trip to Meghalaya in any season.</p>
                <h3 className="megheader">WHY VISIT MEGHALAYA?</h3>
                <p className="megpara">For adventure tourism, pristine nature, honeymoon destination, native culture, national parks, local festivals.</p>
                <h3 className="megheader">TEMPERATURE</h3>
                <div className="megdiv">
                    <div className="megdiv2">
                        <h4>15°C to 28°C</h4>
                        <p>Summer</p>
                        <p>April to June</p>
                    </div>
                    <div className='megline'>
                        <p>|</p>
                        <p>|</p>
                        <p>|</p>
                    </div>
                    <div className="megdiv1">
                        <h4>15°C to 20°C</h4>
                        <p>Monsoon</p>
                        <p>July to September</p>
                    </div>
                    <div className='megline'>
                        <p>|</p>
                        <p>|</p>
                        <p>|</p>
                    </div>
                    <div className="megdiv1">
                        <h4>4°C to 16°C</h4>
                        <p>Winter</p>
                        <p>October to March</p>
                    </div>
                </div>
                <div>
            <div className="carousel-container">
      <div className="slides" ref={slides}>
        <div className={`slide ${currentIndex === 0 ? 'active' : ''}`}>
          <img src="https://www.tripsavvy.com/thmb/nH70XRDdon8X4r56fYVIXSiHq7Y=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-497825214-22b1f19b7dcb4bd5ad3892accf2f857d.jpg" alt="Slide 1" />
        </div>
        <div className={`slide ${currentIndex === 1 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.lPGx4XBGnR2s7gMckjuN-wHaEg?w=330&h=180&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7" alt="Slide 2" />
        </div>
        <div className={`slide ${currentIndex === 2 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.WIvnwQLz8bf11QUM7YWS3AHaE7?w=253&h=180&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7" alt="Side 3" />
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
                    <center className="megcenter">An Insight into Meghalaya Tourism</center>
                    <div className="meginsight">
                        <div className="megsep">
                            <p className="megpara">Nestled in the northeastern Himalayas, Meghalaya takes the distinction of being the wettest place in the world. With lush green landscapes, picturesque surroundings, white clouds and mist, Meghalaya has been successful in playing an enchanting drama which never failed to capture the heart of the travellers. A visit to Meghalaya will let you experience and relish the mesmerizing beauty of nature at its best.</p>
                            <p className="megpara">Moving forth as a trove of spectacular tourist attractions, Meghalaya has never failed to impress the tourists. The Meghalaya sightseeing tour includes a plethora of places that are suitable to the travellers of all the genre. Starting with nature’s exquisiteness, heading to the Double Decker Living Root Bridge in Cherrapunjee will let the tourists catch sight of some enthralling nature’s wonders and witness the perfect blend of nature’s beauty and man’s ingenuity. The other places for sightseeing & tourist attractions in Meghalaya include Nohkalikai Waterfalls near Cherrapunjee, Umngot River in Dawki Town, Mawphlang Sacred Forest in Synrang Kaban, Laitlum Canyon from where one can get the bird’s eye view of Shillong. The cascading waterfalls of the state include, Nohkalikai Waterfalls which is considered to be India’s Tallest Plunge Waterfall and Elephant Falls which let the tourist get a refreshing retreat in the middle of a verdant forest. The other waterfalls include Sweet falls, Spread Eagle falls and Crinoline falls.</p>
                            <p className="megpara">The state even gives the opportunity to get a perfect wildlife experience by visiting the Balpakram National Park where the rich biodiversity mind-boggling scenic beauty doesn't fail to charm the tourists. Also, heading to the Nokrek National Park which is listed as UNESCO's Biosphere Reserve will let the tourists come across the rich flora and fauna.</p>
                        </div>
                        <div className="megsep">
                            <p className="megpara">In addition to this, the state even offers water sports activities near Umiam Lake and Ward's Lake where tourists can indulge in rowboats, paddle boats, sailing boating, water scooters and more. Meghalaya is famous for its fascinating caves and the important one stands out to be Mawsmai Cave which is made of limestone and are popular for the formation of stalactites and stalagmites. Coming to the culture of Meghalaya, tourists can learn about it from the dance, music fairs and festivals that are taken place all across the state. Out of all, the important festival of the state is Wangala or the dance of hundred drums is a harvest festival which is celebrated by the Garo tribe of Meghalaya. Nongkrem Dance is a religious festival of the state which is marked by thanksgiving to God for good harvest and peace. The other dance festivals of Meghalaya include Doregata Dance, Chambil Mesara or Pomelo Dance, Ka Shad Suk Mynsiem or dance of the joyful heart, Behdienkhlam and The Lahoo Dance Festival.</p>
                            <p className="megpara">Heading to shopping in Meghalaya, the state boasts of amazing handicrafts which are designed by skilled tribes. The markets of Meghalaya are lined with shops that offer a variety of handicrafts that tourists can shop from including silk fabric, pineapple fiber articles, cane mats, cane baskets, carpets, tribal jewelry and bamboo and cane objects.</p>
                            <p className="megpara">Apart from these, a trip to Meghalaya will let the tourists explore a lot more places and indulge in activities. Tour My India proffers best tourism packages for Meghalaya that covers everything that is needed for a wonderstruck trip. Also, the travel guide includes required information on places to visit, shop eat and how to reach the destinations. Travellers can make choices according to their own way when it comes to choosing the right Meghalaya Tour Package with us.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Meghalaya;