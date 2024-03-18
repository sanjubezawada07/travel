import React,{useState,useEffect,useRef} from "react";
import './Delhi.css';
function Delhi(){
    const [currentIndex, setCurrentIndex] = useState(0);
  const slides = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const slideCount = slides.current.children.length;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
    }, 2000); // Adjust autoplay speed here (in milliseconds)

    intervalRef.current = interval;

    return () => clearInterval(intervalRef.current);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
    return(
        <div>
            <div>
                <p className="delpara">Delhi, for all the right reasons, is the national capital of incredible India. Synonymous with diversity, Delhi has always been the epicentre of all activities in India which is reflected in its tourism. Right from the time of Pandavas, it has served as a major strategic and cultural hub of the country and rightly so, today it’s an exhibition of the history of India. Travelling in Delhi isn’t just limited to history but it’s a step to take past and present hand in hand. Blended with modern advancements, Delhi is the modern-day city of Troy. The amalgamation of all religion and spiritual hubs of different faiths coexisting together in peace is the testament of the unity in diversity. Delhi offers numerous tourist attractions ranging from monuments, museums, shrines to modern day markets. Exploring the city is like witnessing a mini-India, with Delhi Tourism being a reflection of rich culture of India.</p>
            </div>
                <h2 className="delheader">BEST TIME TO VISIT DELHI:</h2>
                <p className="delpara">Delhi should be best explored during winters when it witnesses cold but moderately pleasant weather.</p>
                <h2 className="delheader">WHY VISIT DELHI?:</h2>
                <p className="delpara">Visit for UNESCO World Heritage sites, Red Fort, Qutub Minar, Humayun’s Tomb, worshipping place for all religions, monuments, local markets, street food, cultural tourism, heritage walks, bird watching, nightlife, sightseeing, amusement parks, photography tour, and pre-wedding shoots.</p>
                <h2 className="delheader">TEMPERATURE</h2>
            <div className="deldiv">
                <div className="deldiv2">25°C to 45°C <p>Summer</p></div>
                <div className='delline'>
                        <p>|</p>
                        <p>|</p>
                        <p>|</p>
                </div>
                <div className="deldiv1">30°C to 35°C <p>Monsoon</p></div>
                <div className='delline'>
                        <p>|</p>
                        <p>|</p>
                        <p>|</p>
                    </div>
                <div className="deldiv1">05°C to 25°C <p>Winter</p></div>
            </div>
            <div>
            <div className="carousel-container">
      <div className="slides" ref={slides}>
        <div className={`slide ${currentIndex === 0 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.yPTOZFe-lJHeICOvji2HbwHaEK?w=342&h=180&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7" alt="Slide 1" />
        </div>
        <div className={`slide ${currentIndex === 1 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.n_zz2yAOnre8Wx1gFgQBygHaE0?w=240&h=180&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7" alt="Slide 2" />
        </div>
        <div className={`slide ${currentIndex === 2 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.pYGlhGFhPfJhkMRhKDg6qAHaFP?w=259&h=183&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7" alt="Side 3" />
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
                <center className="delcenter">An Insight into Delhi Tourism</center>
                <div className="delinsight">
                <div className="delsep">
                    <p className="delpara">Delhi is love, Delhi is haste, Delhi is serene, Delhi is chaos - It is the yang to its own yin. Delhi is a complete deal! From the bustling lanes of Chandni Chowk to the serene and tranquil abode of Bangla Sahib, Delhi makes a complete circle of life. One of the most popular tourist destinations in India, the city has been thriving because of the abundant diversity. Right from stepping out of New Delhi Railway Station, the romance with the city begins. Known for its rich heritage and spiritual history, Delhi attracts a large number of religious tours. Sites like Jama Masjid, Hazrat Nizamuddin Dargah, Akshardham, Gurudwara Bangla Sahib and Cathedral Church have become a major religious tourist destination in Delhi. The best thing about these religious places are that they are open to people of all faith. Heart of India, Delhi is called the city of heartful people and it indeed justifies it with its hospitality. The first experience of the city might be chaotic and unorganized but there lies a beauty within this unorganized chaos.</p>
                    <p className="delpara">Travellers who have already visited this city say that the best way to explore is to get lost in it. With tourist places scattered all across, one of the hardest tasks is to sort out the confusion as to which destinations should be on your itinerary. Yes, it’s not possible to cover all tourist attractions in one-day Delhi sightseeing, probably a lifetime would be short to explore and unravel all the hidden secrets of this ancient city but you can’t possibly miss out on any of the must-visit places.The best thing about Delhi is that it welcomes everybody, from backpackers, family vacations to luxury travels. Not many destinations in India can be placed as a family vacation destination but Delhi is one of the few destinations in India which is equally fun for children too. Tourist destinations like Appu Ghar, Worlds of Wonder and Adventure Island are some of the most kid-friendly destinations in Delhi and near capital region.  If your kid seeks educational activities, Delhi offers National Science Center and Shankar Doll museum as an alternate for kid-friendly destinations. A city sightseeing tour will take you to most of the tourist attractions in Delhi, covering UNESCO World Heritage sites, museums in Delhi, spiritual sites to local markets but the best way to discover this city is on its own. These heritage site makes up for a gorgeous background for a pre-wedding shoot. </p></div>
                <div className="delsep">
                    <p className="delpara">The lost soul who look some alone time in a quaint cafe, Delhi has got plenty of Cafes. Places like Hauz Khas, Khan Market, Connaught Place are known for their exuberant cafes. Apart from luxury restaurants and cafe lie a totally opposite world of street food. Street food in Delhi has got no match with lanes of Chandni Chowk being the best place to explore the street foods of Delhi. Delhi also witnesses thousands of cultural events being organized throughout the city. Cultural centers like Kamani Auditorium and Ficci Auditorium organise some of the most famous cultural events in India like Musical festivals, dance festivals, art festival and Ramayana festival.</p>
                    <p className="delpara">Not many would know but within its heart Delhi hides some of the most exquisite green patches. The Mughal garden of Rashtrapati Bhawan and various municipal parks in Delhi are a testament of the efforts of Delhi to maintain the ecological balance. These green patches within the city are perfect for having a quiet rejuvenation session.</p>
                    <p className="delpara">A Holiday in Delhi will let you experience the two sides of the city, one that has been preserving its culture and heritage and the other which thrive to touch the sky with its modern skyscrapers. The markets of Delhi are one of the must-visit places as they are known for their cheap price and decent quality. Sarojini Nagar market and Chandni Chowk markets witness huge footfall everyday of people looking for cheap deals on their shopping spree. There are also electronic markets like Gaffar market where you can buy rip off apple products at a very cheap bargain. Delhi is also one of the few cities in India with a vibrant nightlife. Cafes and Pubs are open till midnight and tourists seeking night adventure and party can visit nightclubs and bars in Delhi. The city is truly a  romance of a lifetime. Tour My India presents Delhi travel guide that can assist in planning interest-based tours in the city. Complete information on places to visit, things to do and shop, places to eat and how to reach are articulately provided. Information on varied holiday packages in Delhi is also dissimilated so that prudent choices can be madePeople from all over India and across the globe visit the monument</p>
                </div>
                </div>
            </div>
        </div>
    );
}
export default Delhi;