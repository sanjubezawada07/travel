import React,{useState,useEffect,useRef} from "react";
import './Harayana.css';
function Harayana(){
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
            <center className="hcenter"><span>HARYANA</span> TRAVEL GUIDE</center>
            <div>
                <p className="hpara">Haryana Tourism offers numerous options for sightseeing and exploration. This state is home to numerous monuments and palaces, tombs and temples. If you love exploring religious places, then there is ample scope for that here. Haryana is also home to cities like Gurgaon which boasts incredible water and amusement parks. There are public parks, museums and lakes which are great for planning an outing with your family and friends. Besides, it has a lively folk culture which is reflected in its music, arts, dance and festivals. A visitor immediately falls in love with its lush green landscape and the rustic beauty of its countryside.</p>
                <p className="hheader"><strong>Capital :</strong>Chandigarh<strong> Location :</strong>North India</p>
                <h3 className="hheader">BEST TIME TO VISIT HARYANA:</h3>
                <p className="hpara">It is best to visit Haryana from the months of October to March.</p>
                <h3 className="hheader">WHY VISIT HARYANA?</h3>
                <p className="hpara">There are many reasons to plan a visit to Haryana. One of them is that it gifts you with a variety of experiences, ranging from heritage and religious to spiritual. Nature lovers will also be delighted during their stay here, as the lakes, gardens and the lush countryside places them in the company of nature. The rich history of the state can also be explored in its historical monuments, which range from tombs to palaces.</p>
                <h3 className="hheader">TEMPERATURE</h3>
                <div className="hdiv">
                    <div className="hdiv2">
                        <h3>440°C to 47°C</h3>
                        <p >Summer</p>
                        <p>March to June</p>
                    </div>
                    <div className='hline'>
                        <p>|</p>
                        <p>|</p>
                        <p>|</p>
                    </div>
                    <div className="hdiv1">
                        <h3>32°C to 38°C</h3>
                        <p>Monsoon</p>
                        <p>July to September</p>
                    </div>
                    <div className='hline'>
                        <p>|</p>
                        <p>|</p>
                        <p>|</p>
                    </div>
                    <div className="hdiv1">
                        <h3>9°C to 20°C</h3>
                        <p>Winter</p>
                        <p>November to March</p>
                    </div>
                </div>
            </div>
            <div>
            <div className="carousel-container">
      <div className="slides" ref={slides}>
        <div className={`slide ${currentIndex === 0 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.CBM_odkyrvtGB_f7LfL8swHaDq?w=310&h=180&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7" alt="Slide 1" />
        </div>
        <div className={`slide ${currentIndex === 1 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th?q=Folk+Dance+of+Haryana&w=120&h=120&c=1&rs=1&qlt=90&cb=11&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=strict&t=1&mw=247" alt="Slide 2" />
        </div>
        <div className={`slide ${currentIndex === 2 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.-J2yTb9S2QYSE5XKTMkK9wHaFY?w=215&h=180&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7" alt="Side 3" />
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
            <center className="hcenter">An Insight into Haryana Tourism</center>
            <div className="hinsight">
                <div className="hsep">
                    <p className="hpara">Haryana prides itself on being counted among the most economically developed states in India, and why not. Ever since Independence, this prosperous state has achieved excellence in various fields, from industry and agriculture to sports. It gets its name from two words, har (which means god) and ayaana (which means home). In other words, it is the residence of the gods. On its sacred soil, the great sage Veda Vyasa composed the great epic, Mahabharata. It shares its borders with Himachal Pradesh, Punjab, Uttar Pradesh and Rajasthan. Archaeologists and history lovers will find much to do here, as it is home to sites which once hosted the world’s oldest and largest civilisations.</p>
                    <p className="hpara">Planning a family tour, or adventure, cultural and historical tours, every one of them gifts you with a unique experience. There are many top things to do in Haryana and these are divided into the cities and districts.</p>
                    <p className="hpara">One of the top tourist attractions in Haryana is Kurukshetra, an ancient city which finds a mention in the Vedic scriptures and the major Hindu epic, Mahabharata. The city is dotted with numerous museums, temples and tombs. The most famous attractions are Bhadrakali Temple, Raja Harsha Ka Tila, Prachi Shiva Temple, Shaikh Chailis Tomb and Ancient Mound Amin.</p>
                    <p className="hpara">Haryana is also home to many lakes, and each of them is as beautiful as the other. Visiting these lakes can be one of the many things to do in Haryana. One of such famous lakes is Sannihit Sarovar, a water reservoir located in Thanesar in Kurukshetra district. It is believed to be the confluence of seven Saraswatis and and taking a dip here is believed to confer several benefits to the body. Another popular lake in Haryana is the Brahma Sarovar which witnesses an aarti and deep daan (which involves the floating of lamps in water) on the occasion of Gita Jayanti. A major point of tourist interest in Haryana is Surajkund, which is also famous for hosting the Surajkund International Crafts Mela. Located in the district of Faridabad, its embankment is built in the shape of an amphitheatre.</p>
                </div>
                <div className="hsep">
                    <p className="hpara">The rich history of Haryana can also be seen in its cultural and historical monuments. The Jal Mahal is situated in the district of Narnual, and was built by the mughal Emperor Akbar in 1590-1591 AD. It is a wonderful combination of Hindu and Islamic architectural styles. Another impressive structure in Narnaul is Rai Bal Mukund Das ka Chatta. It is also known as Birbal Ka Chatta and is noted for its impressive architecture. The arched gate is supported by pillars. Although it once consisted of three underground floors, only one of them is accessible now. In Chaneti, you also come across another popular tourist attraction in Haryana, Buddha Stupa. Built in the 3rd century BC, it is believed to have been built by the Mauryan emperor Ashoka. It is believed that it stands on the same site which was once the ancient city of Shrughna.</p>
                    <p className="hpara">Not many people know it, but Haryana is also home to beautiful gardens which are great for enjoying a day in the company of nature, away from the maddening chaos and noise of city life. The famous gardens in Haryana are Aravalli Biodiversity Park, Sarkaria Cactus Garden, Gandhi Garden, Sultanpur National Park and Yadvinder Garden.</p>
                    <p className="hpara">The Aravalli Biodiversity Park, in particular, is an extensive stretch of greenery home to almost 175 species of birds. The park is also home to various kinds of reptiles and smaller mammals like mongoose. Sultanpur National Park is located at Mirzapur about 15 km from Gurgaon. Besides being home to a variety of birds belonging to domestic species, the lake is also visited by migratory birds usually in winters, and sometimes in summers.</p>
                    <p className="hpara">You can get the best of sightseeing and exploration with the best tour packages offered by Tour My India. They also come with the best deals and offers that you can lay your hands on! From transport to accommodation, we ensure that every need of yours is taken care of.</p>
                </div>
            </div>
        </div>
    );
}
export default Harayana;