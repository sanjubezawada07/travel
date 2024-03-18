import React,{useState,useEffect,useRef} from "react";
import './Karnataka.css';
function Karnataka(){
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
                <h3 className="kheader">About Karnataka Tourism</h3>
                <p className="kpara">Karnataka is located in the southwestern region of India. It is a rich state, rich in culture & heritage as well as the diversity of its landscape. Larger than life palaces fascinate you as much as the beaches & hill stations, all of which are an intrinsic part of Karnataka tourism places. It attracts sightseeing lovers as much as adventure enthusiasts. It also boasts a glorious past which is evident in its forts, palaces and ancient towns, one example of which is the illustrious Vijayanagara Empire. But Karnataka’s fascination also extends to its hill stations which are major tourist attractions like Chikmagalur, quiet relaxed beaches and temples like Virupaksha and Vitthala, that stand as a testimony to the architectural perfection achieved in the past. This is why a holiday in Karnataka is a getaway to complete delight, rife with adventures, sightseeing and entertainment!.</p>
                <h3 className="kheader">Bear witness to its glorious past!</h3>
                <p className="kpara">Karnataka is a place of million stories that are told through its forts, palaces, and ancient towns. They bear testimony to its glorious past. A past shaped by powerful dynasties, kings and empires. A heritage tour of Karnataka consists of visiting its famous palaces like the Mysore Palace, Bangalore Palace and Tipu Sultan’s Summer Palace. There are forts like Gulbarg, Raichur, Mirjan & Bidar. Each of these forts has played a key role in its history & are architectural splendours as well. And then there’s Hampi, the shining jewel of the Vijayanagara Empire. A UNESCO World Heritage Site, exploring its temples, streets and bazaars is like going back in time. Other famous heritage sites are Badami, Pattakadal and Aihole.</p>
                <h3 className="kheader">Spot tigers, elephants, sloth bears, birds & other wildlife!</h3>
                <p className="kpara">Karnataka tourism also boasts a rich wildlife. Spot Royal Bengal Tigers, elephants, sloth bears, leopards, or reptiles and birds during your wildlife safari. It has some of the most famous national parks, bird sanctuaries and wildlife sanctuaries. Some of the famous national parks & wildlife sanctuaries in Karnataka are Bandipur, Nagarhole, Someshwara, Bhimgad & Daroji Sloth Bear Sanctuary. Spot birds of all shapes, colours and sizes at bird sanctuaries like Bonal, Attiveri, Bonal and Hornbills of Dandeli.</p>
                <h3 className="kheader">Lovely hill stations tucked in the Western Ghats!</h3>
                <p className="kpara">You can escape to the hill stations during your holidays in Karnataka for a change. The Western Ghats, a UNESCO World Heritage Site, run through Karnataka. These ghats contain the most beautiful hill stations in India. You come across trekking trails, waterfalls, coffee plantations, temples and wildlife. One of the hill stations, Chikmagalur, was the first place in India where coffee was introduced. Agumbe is famous for being the site where “Malgudi Days”, a popular TV serial, was shot. Other popular hill stations in Karnataka are Madikeri, Chikkamagaluru, Kodachadri, Nandi Hills and Kogadu.</p>
                <h3 className="kheader">Tangy, spicy cuisine, and the filter coffee!</h3>
                <p className="kpara">The richness of Karnataka is reflected in its cuisine too. Different parts of Karnataka have their own special cuisines. For example, dishes like Goli Baje and Mangalore Fish Curry are famous in Coastal Karnataka. The famous Mysore Pak, Thatte Idli, Ragi Mudde and Puliyogare are relished in South Karnataka. While visiting North Karnataka, Raagi Ambali, Jolada Rotti, Dharwad Peda and Belagavi Kunda are dishes you should not miss. Coffee is a major beverage for the people of Karnataka. Filter coffee is special in its own way and is available in all the restaurants and high end restaurants.</p>
                <h3 className="kheader">Come across the rich history of Karnataka!</h3>
                <p className="kpara">In the museums of Karnataka, you will come across rare manuscripts, sculptures, statues, art and artefacts. You get to have a close look at its past, filled with rulers, dynasties and empires. Most of the museums are located in Mysore and Bangalore. Some of the must visit museums in Karnataka are Folklore Museum, Government Museum, HAL Heritage Center and Aerospace Museum, Manipal Museum of Anatomy and Pathology.</p>
            </div>
            <h3 className="kheader">Best Time to Visit Karnataka</h3>
            <div className="kdiv">
                <div className="ksdiv">
                    <img src="https://www.tourmyindia.com/states/karnataka/image/summer-ico.png" className="kimg"/>
                    <div>
                        <h4 className="ksheader">Summer Season In Karnataka</h4>
                        <p className="kspara">Summers in Karnataka last from March to May. Temperature ranges between 35°C to 38°C.</p>
                    </div>
                </div>
                <div className="ksdiv">
                    <img src="https://www.tourmyindia.com/states/karnataka/image/mansoon-ico.png" className="kimg"/>
                    <div>
                        <h4 className="ksheader">Monsoon Season In Karnataka</h4>
                        <p className="kspara">Monsoon arrives in May and lasts till October. Temperature ranges between 32°C to 28°C.</p>
                    </div>
                </div>
                <div className="ksdiv">
                    <img src="https://www.tourmyindia.com/states/karnataka/image/winter-ico.png" className="kimg"/>
                    <div>
                        <h4 className="ksheader">Winter Season In Karnataka</h4>
                        <p className="kspara">Winters in Karnataka start from November and last till February. The temperature ranges between 21°C to 25°C. The weather during this time is extremely pleasant.</p>
                    </div>
                </div>
            </div>
            <h3 className="kheader">How to Reach Karnataka?</h3>
            <div className="kdiv">
                <div className="ksdiv">
                    <img src="https://www.tourmyindia.com/states/karnataka/image/train.png" className="kimg"/>
                    <div>
                        <h4 className="ksheader">By Train</h4>
                        <p className="kspara">The major railway station in Karnataka is Bangalore Railway Station. It runs trains to all the major cities of India.</p>
                    </div>
                </div>
                <div className="ksdiv">
                    <img src="https://www.tourmyindia.com/states/karnataka/image/air.png" className="kimg"/>
                    <div>
                        <h4 className="ksheader">By Air</h4>
                        <p className="kspara">There are two airports that operate flights to and from Karnataka. One is the Bengaluru International Airport and the other is the Mangalore International Airport. Bangalore Airport is connected to major cities like Delhi, Mumbai, Kolkata and Hyderabad.</p>
                    </div>
                </div>
                <div className="ksdiv">
                    <img src="https://www.tourmyindia.com/states/karnataka/image/bus.png" className="kimg"/>
                    <div>
                        <h4 className="ksheader">By Road</h4>
                        <p className="kspara">Karnataka State Road Transport Corporation (KSRTC) operates government transport in Karnataka. The National Highway runs for almost 3,973 kilometers. Smaller towns are connected by state highways.</p>
                    </div>
                </div>
            </div>
            <div>
            <div className="carousel-container">
      <div className="slides" ref={slides}>
        <div className={`slide ${currentIndex === 0 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.3zYCBWPurDszt15wqfKymwHaEy?w=269&h=180&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7" alt="Slide 1" />
        </div>
        <div className={`slide ${currentIndex === 1 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.iducwHOoRg9jCisUKGzhnwHaDV?w=317&h=157&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7" alt="Slide 2" />
        </div>
        <div className={`slide ${currentIndex === 2 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.1dDxcAVUDE8EH4zSs6kOLQHaEK?rs=1&pid=ImgDetMain" alt="Side 3" />
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
            <h3 className="kheader">A few tips before visiting Karnataka</h3>
            <div>
                <ul>
                    <li>Carry your identity proof with you at all times.</li>
                    <li>Leave your footwear outside before entering the temples.</li>
                    <li>Wear appropriate clothing while visiting religious places.</li>
                    <li>Nudity is not permitted on the beaches, waterfalls or any public areas.</li>
                    <li>If you plan on visiting Karnataka during the summers, carry plenty of sunscreen lotion.</li>
                </ul>
            </div>
        </div>
    );
}
export default Karnataka;