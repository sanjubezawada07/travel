import React,{useState,useEffect,useRef} from "react";
import './Tamilnadu.css'
function Tamilnadu(){
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
                <center className="tacenter">Tamil Nadu Tourism</center>
                <h2 className="taheader">About Tamil Nadu Tourism</h2>
                <p className="tapara">Welcome to Tamil Nadu! The land where the tales and influence of Cholas, Pandyas, and Pallavas can still be seen and the beauty landscape, sacred temples, and imposing wildlife make you feel instantly connected with this tourist destination in India. It is not wrong to say if we call Tamil Nadu the heart of Incredible India. It is one of the top places to visit in India due to its rich culture and heritage.</p>
                <p className="tapara">There is an essence of spirituality through plethora of scenic temples, a touch of serenity through its soothing beaches and hill stations, an aura of wilderness and vitality through its amazing Wildlife Sanctuaries and National Parks, a sense of joy through its various festivals and art forms, a spirit of authenticity through its delectable cuisines and liveliness in its colorful markets. Yes, this bliss of South India is one of a kind. Come here and you will realize you are in a land of where each mile reveals something of great universal value. In terms of tourism, it has too much to offer that you will fall short of vitality to explore.</p>
                <p className="tapara">Tourists here have a variety of experiences to relish. Be it heritage monuments, calm beaches, mesmerizing Hill stations or the scenic temples, Tamil Nadu is a colorful palette rich culture and beauty. Which is the reason Tamil Nadu being the most popular tourist destination in India.</p>
                <h2 className="taheader">Tamil Nadu - Pilgrimage Paradise</h2>
                <p className="tapara">Tamil Nadu has plenty of tourist attractions dotting its length and breadth but Pilgrimage Sites are the best places to explore in Tamil Nadu. Numerous ancient temples, decked in Dravidian architecture have been luring the tourists from all over the world for ages. Some of them are UNESCO World Heritage Sites. It is a perfect place to fulfill your transcendent quest.</p>
                <p className="tapara">The state boasts of plethora of temples like Sri Ranganathaswamy Temple, Ekambareswarar Temple, Jambukeswarar Temple, Kailasanathar Temple, Tiruvarur Thyagaraja Swamy Temple, Vaitheeswaran TempleThillai Nataraja Temple, Annamalaiyar Temple, etc. which reveals stories of around 800 to 2000 years old. These temples are a great legacy of Cholas, Cheras, Pandyas, Pallavas, Nayakas and Vijayanagar rulers.</p>
                <p className="tapara">The series of creating the magnificent temples started with a great Pallava ruler in 700 AD. Pallava rulers gifted the most beautifully carved stone temples to add to the charm of Tamil Nadu. Kailasanathar Temple and Shore Temple is one of the outstanding examples of this genre.</p>
                <p className="tapara">Meenakshi Amman Temple, Adi Kumbeswarar temple, Brihadeeswarar Temple, Ranganathaswamy Temple, Ekambareswarar Temple, Ramanathaswamy Temple, the group of Chola Temples, Mahabalipuram Temple and Srivilliputhur Andal Temple are some of the most popular pilgrimage destinations in Tamil Nadu.</p>
                <h2 className="taheader">Tamil Nadu - Let’s Indulge in Adventure Sports</h2>
                <p className="tapara">Tamil Nadu offers some of the best adventure sports to experience the thrill when you are on its beautiful shores. Indulging in adventure activity is the best way to enjoy your holidays in Tamil Nadu. Some of the best adventure activities to enjoy in Tamil Nadu are-</p>
                <ul>
                    <li className="tapara">Trekking at Anamalai hills and forests, Pandaravadai Peak and Nilgiri sub-tropical and west temperate forests.</li>
                    <li className="tapara">Surfing at Mahabalipuram will blow your heart away.</li>
                    <li className="tapara">Rock and Paragliding at Yelagiri- Try it once, you won’t regret it.</li>
                    <li className="tapara">Dolphin’s Nose-Vellagavi-Kumbakkarai trail would be the most challenging treks of all.</li>
                    <li className="tapara">Sailing, Surfing, kiteboarding, kayaking and stand-up paddle are the best water sports to enjoy in Manapad near Tuticorin in Tamil Nadu.</li>
                    <li className="tapara">Snorkeling and diving Rameswaram beach would elevate your thrill to a different level.</li>
                    <li className="tapara">Hang- gliding at St Thomas Mount is one of the best things to do in Tamil Nadu.</li>
                </ul>
            </div>
            <div>
                <h2 className="taheader">Some of the best Lakes and Waterfalls in Tamil Nadu are –</h2>
                <ul>
                    <li className="tapara">Courtallam Waterfalls</li>
                    <li className="tapara">Kumbakarai Waterfalls</li>
                    <li className="tapara">Monkey Falls</li>
                    <li className="tapara">Panchalinga Waterfalls</li>
                    <li className="tapara">Suruli Waterfalls</li>
                    <li className="tapara">Kaliveli Lake</li>
                    <li className="tapara">Veeranam Lake</li>
                    <li className="tapara">Pulicat lake</li>
                    <li className="tapara">Red Hills Lake</li>
                </ul>
            </div>
            <div>
                <h2 className="taheader">Relax and Holiday Shopping: Best Things to Buy from Tamil Nadu</h2>
                <p className="tapara">If the plethora of tourist attractions are not enough then wrap up your holiday with a session of some retail therapy and take back with your local handmade items and yes that soft and elegant Silk clothes. Your holidays in Tamil Nadu will be more delightful if you indulge in shopping. Every state in Tamil Nadu has its own charm for shopping.</p>
                <p className="tapara">Kanchipuram is very popular for silk sarees. If you are here then shop for authentic Kanchipuram sarees. You will find various designs like floral, stripes, checks and temple borders. Chennai houses authentic woodcraft. Your soul will be overpowered by the wood art work. It is generally made up of Bamboo, palm, grass, cane and reeds.</p>
                <p className="tapara">Textiles in Tamil Nadu are one of a kind. Premium quality silk, cotton dhotis and fabrics are produced here. Moreover, Thanjavur is one of the best places for shopping in Tamil Nadu. Large number of musical instruments, metal arts, Thanjavur paintings which are world famous will soothe your shopper soul if you are on a holiday in Tamil Nadu.</p>
                <p className="tapara">If you are fond of sculptures and statues, then there is no better place than Mahabalipuram and jewelries in Madurai will set your heart in a plane to fly for bliss. If you want to pamper your loved ones then make them happy by buying some awesome gifts and souvenirs.</p>
            </div>
            <div className="tadiv">
                <div className="tasdiv">
                    <img className="taimg" src="https://www.tourmyindia.com/states/tamilnadu/images/summer-ico.png"/>
                    <div>
                        <h4 className="tasheader">Summer Season In Tamil Nadu</h4>
                        <p className="taspara">The summer in Tamil Nadu starts from March and ends in May. The temperature may rise up to 40°C. However, the hill stations in Tamil Nadu during summer are the best places to visit to escape the heat of plains.</p>
                    </div>
                </div>
                <div  className="tasdiv">
                    <img className="taimg" src="https://www.tourmyindia.com/states/tamilnadu/images/mansoon-ico.png"/>
                    <div>
                        <h4 className="tasheader">Monsoon Season In Tamil Nadu</h4>
                        <p className="taspara">Monsoon starts from June and ends in September. The weather will be humid due to heavy downpours. It is not a favorable time to visit Tamil Nadu. The temperature ranges between 24ºC and 30ºC</p>
                    </div>
                </div>
                <div className="tasdiv">
                    <img className="taimg" src="https://www.tourmyindia.com/states/tamilnadu/images/winter-ico.png"/>
                    <div>
                        <h4 className="tasheader">Winter Season In Tamil Nadu</h4>
                        <p className="taspara">Winter in Tamil Nadu starts from October and ends in February. This season is very favorable to visit for sightseeing and having an amazing beach holiday. The temperature ranges from 21ºC to 30ºC.</p>
                    </div>
                </div>
            </div>
            <h2>How to Reach Tamil Nadu?</h2>
            <div className="tadiv">
                <div className="tasdiv">
                    <img className="taimg" src="https://www.tourmyindia.com/states/tamilnadu/images/air.png"/>
                    <div>
                        <h4 className="tasheader">By Air</h4>
                        <p className="taspara">There is at least one airport in all the major cities of Tamil Nadu. So, there is no dearth of airports in Tamil Nadu. There are a total 9 airports in Tamil Nadu both domestic and International which are connected to major cities through frequent flights.</p>
                    </div>
                </div>
                <div className="tasdiv">
                    <img  className="taimg" src="https://www.tourmyindia.com/states/tamilnadu/images/train.png"/>
                    <div>
                        <h4 className="tasheader">By Train</h4>
                        <p className="taspara">It is the best option for a budget trip. All the major cities of Tamil Nadu have good connectivity of trains. Various trains travel through the major cities of the country like Odisha, Bihar, Maharashtra, Gujarat, Delhi and Karnataka to Tamil Nadu.</p>
                    </div>
                </div>
                <div className="tasiv">
                    <img className="taimg" src="https://www.tourmyindia.com/states/tamilnadu/images/bus.png"/>
                    <div>
                        <h4 className="tasheader">By Road</h4>
                        <p className="taspara">It is very convenient to reach Tamil Nadu by road as it has good road connectivity. Long drive through roads and national highways will be the most thrilling and exciting journey ever. You can also get a plethora of buses, both government and private, on a daily basis from nearby states and cities.</p>
                    </div>
                </div>
            </div>
            <div>
            <div className="carousel-container">
      <div className="slides" ref={slides}>
        <div className={`slide ${currentIndex === 0 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.s_HupkIIDiF10vITp0Gs4gHaD8?rs=1&pid=ImgDetMain" alt="Slide 1" />
        </div>
        <div className={`slide ${currentIndex === 1 ? 'active' : ''}`}>
          <img src="https://tourismtn.com/wp-content/uploads/2021/01/Thanjai.jpg" alt="Slide 2" />
        </div>
        <div className={`slide ${currentIndex === 2 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th?q=Tamil+Nadu+Nature&w=120&h=120&c=1&rs=1&qlt=90&cb=11&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=strict&t=1&mw=247" alt="Side 3" />
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
            <h2 className="taheader">Best Travel Tips Before Visiting Tamil Nadu</h2>
            <div>
                <ul>
                    <li className="tapara">Make yourself aware of the local customs, culture and tradition of Tamil Nadu.</li>
                    <li className="tapara">Always check weather conditions before visiting any coastal area or hill stations in TamilNadu.</li>
                    <li className="tapara">Dress decently while visiting any pilgrimage places in TamilNadu.</li>
                    <li className="tapara">You have to show an RTPCR report and covid-19 vaccination certificate.</li>
                    <li className="tapara">Follow all the Covid-19 guidelines and maintain proper social distancing at public places.</li>
                    <li className="tapara">For intra and interstate travel, E-registration is mandatory.</li>
                    <li className="tapara">Pack comfortable clothes, PPE kit, face masks and sanitizer.</li>
                    <li className="tapara">Beware of Covid-19 containment zones.</li>
                    <li className="tapara">Book your accommodation in advance to avoid last minute hassle.</li>
                </ul>
            </div>
        </div>
    );
}
export default Tamilnadu