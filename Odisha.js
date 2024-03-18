import React,{useState,useEffect,useRef} from "react";
import './Odisha.css'
function Odisha(){
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
            <h3 className="oheader">About Odisha</h3>
            <p className="opara">A true extraordinaire, Odisha is the quiet and serene part of India. Fringed by the Bay of Bengal, and flaunting a long coastline, this east Indian gem has some of the most stunning beaches that are often less-frequented. Home to a plethora of Hindu and Buddhist pilgrimage sites, Odisha is a place that will take you back to the glorious time of Ashoka the Great. Explore the majestic Jagannath Temple at Puri and learn about its many mysteries, view the medieval architecture of Odisha’s temple and Buddhist monasteries, attend the annual Sand Art Festival, go boating in the Chilika Lake, or walk on the sea at Chandipur Beach. There's so much to do in Odisha.</p>
            <p className="opara">Looking forward to learning more about Odisha? Our travel guide can walk you through some authentic and must-have experiences in Odisha. Find detailed information on top attractions, best temples, lakes, hill stations, markets and some of the places you must visit in Odisha in our travel guide that endeavors to make your holiday the most memorable one.</p>
            <h3 className="oheader">An Insight into Odisha Tourism</h3>
            <p className="opara">Odisha is blessed with a varied landscape and consists of hills, rivers, beaches and sea, making it a popular point of interest for the tourists. Its forests make the perfect home for a number of wildlife such as Tigers, Elephants, Black Panthers, Macaque, Bear, Gharial, Chital and the Sambar Deer. The architecture of Odisha is another reason to fall in love with the state with several historic structures adorned with intricate carvings like the famed Sun Temple of Konark, which became the inspiration for the Stone Chariot at Hampi. Not just rich in history, Odisha is also rich with minerals. An important hub for India, the state has reserves of Iron ore, Bauxite, Chromite, Manganese ore, Coal, Limestone, Graphite, Gold, Gemstone, Diamond, among others. It is indeed true that words cannot express the beauty of Odisha. Home to one of the four sacred Hindu pilgrimages, the state will satiate the curiosity of a traveler who is curious to learn about the elements that paint its canvas.</p>
            <p className="opara">Tour My India presents an Odisha travel guide that can assist in planning an organized tour of the state. Get authentic information on how to plan an incredible trip to the state where you can find complete information on the best places to visit and things to do. Information on different holiday packages for tourism in Odisha is also provided so that you can pick out the best for yourself.</p>
            <h3 className="oheader">Odisha- The Land of Unique Temples</h3>
            <h4 className="oheader">Fairs and Festivals- A Celebration of Culture</h4>
            <p className="opara">The culture of Odisha is a mix of religion, history, and art which can be seen in the way it celebrates as well. A true connoisseur of art, Odisha organizes the International Sand Art Festival which is organized at the Chandrabhaga Beach and showcases beautiful displays of sand sculptures from sand artists all over the world.</p>
            <p className="opara">The Konark Dance Festival is one of the most popular festivals of the state and attracts many enthusiastic tourists who come to Odisha to be a part of the festival. The festival is held along the dates of the International Sand Festival in the backdrop of the Konark Sun Temple and features India's classical dance performances from dancers all over the country. Another dance festival that is popular in the state is the Mukteswar Dance Festival held with the Mukteswara Temple in the Background honors the culture of Odisha with performances of Odissi and its variations.</p>
            <p className="opara">Odisha also celebrates with much gusto the festival of Durga Puja which is dedicated to Goddess Durga, a form of Goddess Parvati and her victory over defeating Mahishasur. The Goddess is offered rice, milk, and various sweets with fairs and melas which are organized in many places. The festival is a 10 day affair with 8th to 10th days being the most prominent ones among them. Another festival honoring Goddess Parvati is Kali Puja, which worships Goddess Kali. Kali Puja is held 3 weeks after the Durga Puja and is celebrated with equal enthusiasm throughout Odisha.</p>
            <h3 className="oheader">Must-Do Activities While Vacationing in Odisha</h3>
            <div>
            <div className="carousel-container">
      <div className="slides" ref={slides}>
        <div className={`slide ${currentIndex === 0 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th?q=Odisha+Nature&w=120&h=120&c=1&rs=1&qlt=90&cb=11&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=strict&t=1&mw=247" alt="Slide 1" />
        </div>
        <div className={`slide ${currentIndex === 1 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.jDm_yPs4uVrVQ__Y37hvzQHaE8?w=251&h=180&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7" alt="Slide 2" />
        </div>
        <div className={`slide ${currentIndex === 2 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th?q=Odisha+Wallpaper&w=120&h=120&c=1&rs=1&qlt=90&cb=11&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=strict&t=1&mw=247" alt="Side 3" />
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
            <ul>
                <li>Try jet skiing, parasailing, or speed boating at the Puri Beach</li>
                <li>Boat among the mangrove forests in the Bhitarkanika National Park and view the crocodiles at the Park</li>
                <li>Visit the Kalijai Temple, Satapada Dolphin Sanctuary and boat around in Chilika Lake, the largest saltwater lake in India</li>
                <li>Explore the Panch Pandav Caves and the Gupteshwar Caves</li>
                <li>Visit the Badaghagara Waterfall, Duduma Waterfall, and the Khandadhar Waterfall</li>
                <li>Check out Odisha's traditional handicrafts from the villages of Raghurajpur and Pipili</li>
                <li>Check out the regional cuisine and the many sweets of Odisha</li>
            </ul>
            <div>
                <h3 className="oheader">Best Time to Visit Odisha</h3>
                <p className="opara">The months between October and February are perfect to plan a holiday to Odisha since the weather remains pleasant and is ideal for travel. It is also during these months that Odisha celebrates the majority of its festivals. Odisha experiences summer between the months of March to May with an average temperature of 36°C. Between the months of June to September the state experiences monsoon with an average temperature of 28°C but the weather remains very humid and might be uncomfortable to travel.</p>
            </div>
        </div>
        </div>
    )
}
export default Odisha;