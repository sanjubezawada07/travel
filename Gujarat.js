import React,{useState,useEffect,useRef} from "react";
import './Gujarat.css';
function Gujarat(){
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
           <h2 className="guheader">About Gujarat Tourism</h2>
           <p className="gupara">There are many reasons why Gujarat finds a place among the top travel destinations in India. The places to visit in Gujarat include UNESCO sites, religious sites, wildlife sanctuaries with Asiatic lions, Jyotirlinga, Char Dham Temples, museums, the large white desert Rann of Kutch, Statue of Unity and Gandhian heritage sites. There are numerous opportunities for a sightseeing tour. The richness in history, heritage and culture will overwhelm you on your first visit!

Gujarat borders Pakistan to the north-west, the Arabian Sea to the south-west, Rajasthan to the north, Maharashtra to the south, Madhya Pradesh to the east; Gujarat is the seventh largest state of India by area. The state is an electric mixture of different cultures and traditions, showcasing the traditions of the real India.</p>
<h2 className="guheader">Newly Launched Tourist Attractions</h2>
<p className="gupara">Added to the already rich treasure of tourist attractions in Gujarat are newer ones which enrich Gujarat tourism. One of these is the Statue of Unity. At 597 feet, it's the world's largest statue. Some of the attractions surrounding the statue are butterfly garden, cactus garden, handicraft stores and mirror maze.</p>
<p className="gupara">Another one is the Sardar Patel Zoological Park, located just 3 kilometers from the Statue of Unity. It's popularly known as Jungle Safari Park. Unlike other parks, it's created in an open design. The park has animals which have been imported from across the world. There are more than 5 lakh plants in the zoo. The world's largest aviary is also found here. The aviary consists of around 500 birds belonging to 30 species. The birds are displayed in 2 sections: exotic and Indian.</p>
<p className="gupara">There are around 500 birds belonging to 30 species in the aviary, in addition to 30 types of plants and grass for their food. Orientations will also be provided to children and adults when they enter the aviary. There are 2 sections displaying the birds: exotic and Indian.</p>
<h2 className="guheader">Places Associated with Mahatma Gandhi!</h2>
<p className="gupara">Gujarat is the birthplace of Mahatma Gandhi, fondly called the Father of the Nation. There are several points of tourist interest in Gujarat connected with Mahatma Gandhi. These include statues, museums and ashrams. There's something called a Gandhi Tourism Circuit which lets you follow the life of the Mahatma. Some of the best places to see related to Gandhi's life are Sabarmati Ashram, National Salt Satyagraha Museum, Kochrab Ashram and Gandhi Smriti.</p>
<h2 className="guheader">Ancient History and Rich Heritage!</h2>
<p className="gupara">Heritage lovers have a lot to look forward to in Gujarat sightseeing tour. There are so many heritage sites, including UNESCO World Heritage Sites. These range across palaces, forts, stepwells and monuments. You can also enjoy a heritage walk in Ahmedabad, Junagadh and Vadodara. Some of the most famous heritage tourism sites are Laxmi Vilas Palace, Rani ki Vav and Modhera Sun Temple. Of these, Rani ki Vav, Champaner & Pavagadh Archaeological Park & Ahmedabad World Heritage City are UNESCO World Heritage Sites.</p>
<p className="gupara">Gujarat is also a haven for lovers of history and archaeology. It's fascinating to know that there are more than 200 Indus Valley Civilization sites spread across Gujarat. Three of these are Dholavira, Lothal and Surkotada Indus Valley Civilisation. Among these, Dholavira dates back 4500 years. It is surrounded by the Rann of Kutch. Here, you come across the world's earliest and best planned water conservation systems. The world's first signboards, written in ancient Indus script, are also found here.</p>
<h2 className="guheader">Rich Wildlife: And the Asiatic Lion!</h2>
<p className="gupara">There are many things which Gujarat tourism prides itself on. One amongst them is the Asiatic lion. With its thick mane and royal gait, it commands respect. You can spot the Asiatic lions and other wildlife at Gir National Park. Besides, there are 4 National Parks & 21 Wildlife Sanctuaries of Gujarat. The rich biodiversity of wildlife reserves is characterised by scenic landscapes, dense forests, mountain streams, waterfalls and rivers. The landforms range from dry deciduous forests and wetlands to marine ecosystems. There are more than 500 varieties of mammals, 2000 species of birds and as many insects, fishes and reptiles.</p>
<h2 className="guheader">Quiet, Lovely Beaches!</h2>
<p className="gupara">The beaches in Gujarat are as beautiful as any other in India. Its 1600 kilometers shoreline is dotted with really beautiful beaches. Many of these beaches have a temple located nearby. Tranquillity and spiritual aura pervade them in equal measure. Two famous temples located just beside the shore are Somnath Temple and Koteshwar Temple. Gujarat also houses the first national marine park of India on the Jamnagar coast. In the marine park, there are 53 species of coral. October to May is the best time to visit Gujarat for its fine beaches.</p>
<h2 className="guheader">Bird Watching Sanctuaries!</h2>
<p className="gupara">Bird watching or birding can definitely be counted among the top things to do in Gujarat tour. It has some of India's most accessible wetlands which are hotspots for bird watching. Some of the best bird watching destinations in Gujarat are Rann of Kutch, Nakhatrana, Jamnagar, Velvadar and Sasan Gir. A few famous bird sanctuaries where you can enjoy birding are: Khijadiya Bird, Thol Lake, Nalsarovar, Porbandar, Velavadar and The Great Indian Bustard Sanctuary.</p>
<h2 className="guheader">Enjoy Golfing!</h2>
<p className="gupara">Gujarat is also famous for golfing. The golf courses boast world class facilities, spectacular views of the sea & a variety of entertainment options. There are seven golf courses across the state. The famous golf clubs are Glade One Golf Club, Aalloa Hills Resort, Gulmohar Greens Golf Kensville Golf and Country Club & Kalhaar Blues and Greens Golf Club.</p> 
        </div>
        <h2 className="guheader">Best Time to Visit Gujarat</h2>
        <div className="gudiv">
            <div className="gutrain">
                <img src="https://www.tourmyindia.com/states/gujarat/image/summer-ico.png" className="guimg"/>
                <div>
                    <h4 className="gusheader">Summer Season In Gujarat</h4>
                    <p className="guspara">Summers in Gujarat last from March to June. Temperature ranges between 35°C to 42°C.</p>
                </div>
            </div>
            <div className="gutrain">
                <img src="https://www.tourmyindia.com/states/gujarat/image/mansoon-ico.png" className="guimg"/>
                <div>
                    <h4 className="gusheader">Monsoon Season In Gujarat</h4>
                    <p className="guspara">Monsoon arrives in July and lasts till September. Temperature ranges between 27°C to 35°C.</p>
                </div>
            </div>
            <div className="gutrain">
                <img src="https://www.tourmyindia.com/states/gujarat/image/winter-ico.png" className="guimg"/>
                <div>
                    <h4 className="gusheader">Winter Season In Gujarat</h4>
                    <p className="guspara">Winters start from November and last till February. The temperature ranges between 12°C to 29°C. The weather during this time is extremely pleasant.</p>
                </div>
            </div>
        </div>
        <h2 className="guheader">How to Reach Gujarat?</h2>
        <div className="gudiv">
            <div className="gutrain">
                <img src="https://www.tourmyindia.com/states/gujarat/image/train.png" className="guimg"/>
                <div>
                    <h4 className="gusheader">By Train</h4>
                    <p className="guspara">The major railway stations in Gujarat are Surat, Ahmedabad, Rajkot and Vadodara. Vadodara Railway Station is the busiest since it's a part of the Delhi-Mumbai railway line.</p>
                </div>
            </div>
            <div className="gutrain">
                <img src="https://www.tourmyindia.com/states/gujarat/image/air.png" className="guimg"/>
                <div>
                <h4 className="gusheader">By Air</h4>
                <p className="guspara">Gujarat has domestic as well as international airports. Sardar Vallabhbhai Patel International Airport is the major airport. Surat, Rajkot and Bhavnagar are some domestic airports.</p>
                </div>
            </div>
            <div className="gutrain">
                <img src="https://www.tourmyindia.com/states/gujarat/image/bus.png" className="guimg"/>
                <div>
                    <h4 className="gusheader">By Road</h4>
                    <p className="guspara">There are several national highways that connect Gujarat to the rest of India. The first Express highway number 1 connects Ahmedabad to Vadodara.</p>
                </div>
            </div>
        </div>
        <div>
            <div className="carousel-container">
      <div className="slides" ref={slides}>
        <div className={`slide ${currentIndex === 0 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.cA2HGRk52KqBgXdJYZAKTQHaEK?w=296&h=180&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7" alt="Slide 1" />
        </div>
        <div className={`slide ${currentIndex === 1 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.atVrFbzst6kLR__1khgx9QHaEn?w=264&h=180&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7" alt="Slide 2" />
        </div>
        <div className={`slide ${currentIndex === 2 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.lp7kgHWClzPkCREV0UdCXwHaFo?w=209&h=180&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7" alt="Side 3" />
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
        <h2 className="guheader">A Few Tips Before Visiting Gujarat</h2>
        <div>
            <ul>
                <li>Carry an identity proof with you at all times.</li>
                <li>Carry items like sunscreen lotion and mosquito repellent creams.</li>
                <li>You should remember that alcohol is banned in Gujarat.</li>
                <li>Do not leave your goods unattended.</li>
                <li>Pay attention to the rules & customs, especially while visiting a place of worship.</li>
                <li>Drink bottled mineral water as far as possible.</li>
            </ul>
        </div>
        </div>
    );
}
export default Gujarat;