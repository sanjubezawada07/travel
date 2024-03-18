import React,{useState,useEffect,useRef} from 'react'
import './Pondicherry.css'
function Pondicherry(){
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
    <center className='pcenter'>PONDICHERRY TRAVEL GUIDE</center>
    <p className='ppara'>Oh the charm of the French world meeting the sea life - how can one not fall for something so surreal yet so real? The quietude of the alleys and the bustling boulevards; the amalgamation of Tamil and French cuisines and architecture; and the jaunty crowd, all make Pondicherry a compelling place to visit in India. The Union Territory of Pondicherry blessed with picturesque coastline is indeed a destination for beach lovers where they can enjoy multiple water activities. The colonial architecture compliments the beach life whereas the far situated Auroville add another dimension to Pondicherry tourism. If there is one tourist destination in India that can cater to your need for a relaxing holiday, Pondicherry has to be it.</p>
    <p className='ppara'><strong>Capital:</strong>Pondicherry/Puducherry <strong>Location:</strong>Southeast India</p>
    <h3 className='pheader'>BEST TIME TO VISIT PONDICHERRY:</h3>
    <p className='ppara'>The months between October and February are ideal for visiting Pondicherry.</p>
    <h3 className='pheader'>WHY VISIT PONDICHERRY?:</h3>
    <p className='ppara'>For picturesque beaches, French architecture, Auroville, Aurobindo Ashram, heritage, history, French cuisine, honeymoon, watersports, cheap alcohol, relaxing holiday, family vacation, pilgrimage tour.</p>
    <h3 className='pheader'>TEMPERATURE</h3>
    <div className='pdiv'>
        <div className='pdiv2'>
            <h3>30°C to 45°C</h3>
            <p>March to May</p>
            <h6>Summer</h6>
        </div>
        <div className='pline'>
            <p>|</p>
            <p>|</p>
            <p>|</p>
        </div>
        <div className='pdiv1'>
            <h3>20°C to 35°C</h3>
            <p>June to September</p>
            <h6>Monsoon</h6>
        </div>
        <div className='pline'>
            <p>|</p>
            <p>|</p>
            <p>|</p>
        </div>
        <div className='pdiv1'>
            <h3>17°C to 25°C</h3>
            <p>October to February</p>
            <h6>Winter</h6>
        </div>
    </div>
    </div>
    <div>
            <div className="carousel-container">
      <div className="slides" ref={slides}>
        <div className={`slide ${currentIndex === 0 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.MFzyEbu_DvxMNxQIZLnsYQHaFj?rs=1&pid=ImgDetMain" alt="Slide 1" />
        </div>
        <div className={`slide ${currentIndex === 1 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.f1qusqf4ZurA6DeW-n0mfAHaE8?w=275&h=183&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7" alt="Slide 2" />
        </div>
        <div className={`slide ${currentIndex === 2 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.bj146ZiV6KwDWsZZfuLwAwHaEK?w=273&h=180&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7" alt="Side 3" />
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
    <center className='pcenter'>An Insight into Pondicherry Tourism</center>
    <div className='pinsight'>
        <div className='psep'>
            <p className='ppara'>The silhouette of Pondicherry comprises the famed French Town or White Town, spectacular churches, temples, and statues with an additional charm of the sea and that of the swaying palm and coconut trees. On the Southeast side of the Indian subcontinent Pondicherry or Pondy or Puducherry, whatever you like to call it, is a tourist destination for a calm and relaxed holiday any time of the year. Once the part of the neighbouring state of Tamil Nadu, Pondicherry displays a great influence of it in its cuisine, architecture as well as language. Hence, you can expect to relish potpourri of Tamil and French culture in this is beautiful union territory. Pondicherry is indeed a synonym of Auroville. Of course, tourists know it for its French houses and cafes, but Auroville certainly has its own importance when it comes to must-see places in Pondicherry.</p>
            <p className='ppara'>The much revered Matri Mandir and the concept of human unity in diversity are a big draw for people who spend days, weeks, and months here volunteering, meditating, and interning. Once, out of the spiritual realm of Auroville, tourists have the chance to relish the beach life of Pondicherry. The Promenade Beach that flanks the White Town area may not have a sandy area to stroll on but it does offer quite a scenic spot for visitors to spend hours at. The Paradise beach, on the other hand, has everything a beach lover is looking for - golden sand, azure water, water activities, and the coolest crowd.</p>
        </div>
        <div className='psep'>
            <p className='ppara'>Keep some time at hand to relish the French and Tamil culture and tradition meld where you have the opportunity to witness Pondicherry’s cuisine, rural life, cooking demo of old recipes, weaving workshops, sculpture art, musical trail, the local game "petanque", puppet shows along with an experience of handmade paper tours with workshop and much more. Another major attraction of Pondicherry that cannot be missed is Aurobindo Ashram. Yes, you may have to stand in a long queue for your turn to enter but the place is worth the wait. Pondicherry, when compared to other tourist destinations in India, may have a slower pace of life, but this attracts anyone looking for a quiet holiday time with an opportunity to cycle everywhere and relish cheaper booze, and delectable food coming from the Tamil and French kitchens.</p>
            <p className='ppara'>Apart from this, Pondicherry also houses a number of must visit Hindu temples and Churches that have spectacular architecture to adore. The churches in Pondicherry mostly date back to 18th or 19th century, whereas the Hindu temples have a history going back to the 17th century. Amongst the popular temples in Pondicherry are Villianur Thirukameeswarar Temple and Arulmigu Manakula Vinayagar Devasthanam. Library, museums, war memorial, and statues are some other important places for sightseeing in Pondicherry and missing out any of these is not suggested.</p>
        </div>
    </div>
    <div>
        <h3 className='pheader'>Pondicherry Travel Information at a Glance</h3>
        <p className='ppara'>Find the detailed information on how to plan trip to Pondicherry conveniently. We offer authentic information on how to reach Pondicherry by different means of transport along with details on best hotels, places to see, and things to do. Also, rely on us for trustworthy weather and best time to visit information. Also explore different</p>
        <p className='ppara'>sightseeing attractions in Pondicherry with the help of the map made easy for you to navigate.</p>
    </div>
    </div>
    )
}
export default Pondicherry;
