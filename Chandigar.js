import React,{useState,useEffect,useRef} from 'react'
import './Chandigar.css'
function Chandigar(){
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
                <center className='chcenter'>CHANDIGARH TRAVEL GUIDE</center>
                    <p className='chpara'>Acclaimed to be the first planned city of India, Chandigarh is renowned for its urban design and architecture. Due to its pleasantness, the place successfully wins the hearts of all the generations. Being a hub of several activities, Chandigarh offers a number of sightseeing places and tourist attractions that are suitable for travellers of all kind. Right from nature to art and culture, from nightlife to shopping, the popular tourism destination assures you the best holiday experience. A visit to Chandigarh is sure to flatter one with its ambience and vibrant culture of both traditional Punjab as well as modernity. For tourists planning to visit Chandigarh anytime soon, the travel guide will let one know what all is to be covered when holidaying in the ‘city beautiful.’</p>
                    <h2 className='chheader'>BEST TIME TO VISIT CHANDIGARH:</h2>
                    <p className='chpara'>A trip to Chandigarh can be planned during the winter season between October and March when the weather is enjoyable for exploring a myriad of tourist attractions and favourable for city and sightseeing tour.</p>
                    <h2 className='chheader'>WHY VISIT CHANDIGARH?</h2>
                    <p className='chpara'>For nightlife, sightseeing tour, shopping, authentic Punjabi cuisine, festivals, architecture and design.</p>
                <h2 className='chheader'>TEMPERATURE</h2>
                <div className='chdiv'>
                <div className='chdiv2'>
                    <h3>12°C to 37°C</h3>
                    <p>Summer</p>
                    <h6>March to June</h6>
                </div>
                <div className='chline'>
                    <p>|</p>
                    <p>|</p>
                    <p>|</p>
                </div>
                <div className='chdiv1'>
                    <h3>21°C to 33°C</h3>
                    <p>Monsoon</p>
                    <h6>July to September</h6>
                <div/>
                <div className='chline'>
                    <p>|</p>
                    <p>|</p>
                    <p>|</p>
                </div>
                <div className='chdiv1'>
                    <h3>21°C to 33°C</h3>
                    <p>Winter</p>
                    <h6>October to February</h6>
                </div>
                </div>
                </div>
                <div>
            <div className="carousel-container">
      <div className="slides" ref={slides}>
        <div className={`slide ${currentIndex === 0 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.P8lEG_3n8P4CPBFkDOd1TAHaEK?w=303&h=180&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7" alt="Slide 1" />
        </div>
        <div className={`slide ${currentIndex === 1 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th?q=Japanese+Garden+Chandigarh&w=120&h=120&c=1&rs=1&qlt=90&cb=11&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=strict&t=1&mw=247" alt="Slide 2" />
        </div>
        <div className={`slide ${currentIndex === 2 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.62zFws4yfSb9zREkgTNdYQHaFj?w=206&h=180&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7" alt="Side 3" />
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
                <center className='chinsight'>An Insight into Chandigarh Tourism</center>
            <div>
                <p className='chpara'>A Union Territory of India and capital of two Indian States- Punjab and Haryana, Chandigarh is nestled near the Shivalik Foothills in northwest India. Often called the City Beautiful or the Garden City, Chandigarh grabs the attention of the tourists with its urban design, fine architecture and vibrant culture that has a mixture of Punjabi as well as modern tradition. The city opens its door with a number of places to see and things to do that makes the tourists spoilt for choice.</p>
                <p className='chpara'>Starting with the popular tourist attractions of Chandigarh the first thing to consider visiting is the monumental Capitol Complex, which was designed by French Architect Le Corbusier. Dominating the city skyline, the government compound comprises of the three major buildings including the Secretariat, the Assembly, and the High Court. Next, to the Capitol Complex, another popular point of interest that boosts the tourism of Chandigarh is the internationally acclaimed Rock Garden where tourists can witness and admire the fine culture and art that is worth a praise. Sukhna Lake is yet another favorite recreation spot for nature lovers where they can choose to boat, stroll or simply sit and relax amid the tranquil surroundings. Besides this, the city is home to some interesting museums like the International Dolls Museum and the Government Museum and Art Gallery. In addition to this, the forest areas of Chandigarh can offer a lot to wildlife lovers. Kansal and Nepali forests let one explore rich flora and fauna, but the renowned spot in the area remains to be the Sukhna Wildlife Sanctuary. The wildlife enthusiasts can even head to the Chhatbir Zoo which is home to a wide variety of mammals, birds and reptiles. Other prominent tourist attractions of the city are Garden of Tranquility, Garden of Rare Plants, Garden of Annuals, the Bougainvillea Garden, Rose Garden and Gurudwara Koohni Sahib which can also be visited when holidaying in Chandigarh.</p>
            </div>
            <div>
                <p className='chpara'>Coming to the culture, Chandigarh has acquired new ones to its calendar of activities. The people of the city celebrate spring festivals, tree plantation festivals, rose and chrysanthemum shows, dog shows and kite-flying festivals, mango festival with as much zest as they celebrate the other popular festivals of India including Diwali and Holi. As the people of Chandigarh are also into art and theatre, tourists will get an opportunity to witness such occasions which are considered to be an important status symbol. Regarding the party culture in Chandigarh, tourists will witness the city coming to life once that sun goes down. With a plethora of bars and pubs, night restaurants, open sky restaurants, live music venues and a lot more options, the city will let the travellers experience the late night essence of Chandigarh.</p>
                <p className='chpara'>Besides being a city beautiful in India, Chandigarh is a fashion hub which makes shopping in the city exciting. Right from shopping at the world-renowned designer brand to designer boutiques and street shopping, you can get your hands on a number of things at great deals. From handicrafts to furniture, from clothing to craft items and more, Chandigarh will let the tourists buy a lot of things to take back home.</p>
                <p className='chpara'>A trip to Chandigarh will bring the tourists close to its culture that has a huge impact on the youth especially. There are many other things to do and places to visit in Chandigarh that tourists can explore when partnering with Tour My India. We, offer the best Chandigarh Holiday packages at an affordable cost that suits the needs and preferences of our clients. Our Chandigarh Travel Guide comprises of all the basic information on where to go, what to eat, what to see and more. With our well designed Chandigarh Tour Package tourists can rest assured for a hassle-free and memorable stay in the city.</p>
            </div>
            </div>
        </div>
    )
}
export default Chandigar;
