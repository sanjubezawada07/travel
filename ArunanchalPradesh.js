import React,{useState,useEffect,useRef} from "react";
import './Arunanchal.css'
function ArunanchalPradesh(){
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
                <center className="Arcenter">ARUNACHAL PRADESH TRAVEL GUIDE</center>
                <p className="Arpara">Shying away in the North eastern corner of India, Arunachal Pradesh though may be an introvert when it comes to tourism, is a land of abundant travel opportunities. Adorned with unspoilt landscape, this Northeast state of India is a place that every nature lover and explorer should visit. A treasure trove of culture, nature’s beauty, rich history and warm people, Arunachal is truly a land that you cannot afford to miss.</p>
                <h3 className="Arheader"><strong>Capital:</strong>Itnagar<strong>Location:</strong>North East India</h3>
                <h2 className="Arheader">BEST TIME TO VISIT:</h2>
                <p className="Arpara">The months from October to April are ideal to plan a visit to Arunachal Pradesh.</p>
                <h2 className="Arheader">WHY VISIT ARUNACHAL:</h2>
                <p className="Arpara">Offbeat getaway, nature’s beauty, trekking, rafting, camping, birdwatching, tribal tours, root bridges, wildlife, motor biking, history, photography.</p>
                <h2 className="Arheader">TEMPERATURE</h2>
                <div>
            <div className="carousel-container">
      <div className="slides" ref={slides}>
        <div className={`slide ${currentIndex === 0 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.CsVzvfgktGtZkqfZHMRC1AHaFj?w=245&h=183&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7" alt="Slide 1" />
        </div>
        <div className={`slide ${currentIndex === 1 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.7UQWKrJm2By4eoiYG3H6xgHaEK?w=273&h=180&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7" alt="Slide 2" />
        </div>
        <div className={`slide ${currentIndex === 2 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.q2iz4kbWha6e3zOWU9mk2QHaFj?w=232&h=180&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7" alt="Side 3" />
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
                <div className="Ardiv">
                    <div className="Artdiv1">
                        <h4>20°C to 35°C</h4>
                        <p>Summer</p>
                    </div>
                    <div className='Arline'>
                    <p>|</p>
                    <p>|</p>
                    <p>|</p>
                </div>
                    <div className="Ardiv1">
                        <h4>18°C - 29°C</h4>
                        <p>Monsoon</p>
                    </div>
                    <div className='Arline'>
                        <p>|</p>
                        <p>|</p>
                        <p>|</p>
                    </div>
                    <div className="Ardiv1">
                        <h4>8°C - 15°C</h4>
                        <p>Winter</p>
                    </div>
                </div>
                <center className="Arcenter">An Insight into Arunachal Pradesh Tourism</center>
                <div className="Arinsight">
                    <div className="Arsep">
                        <p className="Arpara">Arunachal Pradesh is such a charmer. Adorned with beautiful and unspoilt rivers, lakes, hills and valleys along with opulent wildlife and culture, this Northeastern state is indeed a dream travel destination in India. Arunachal Pradesh shares its southern boundary with Assam, and on its west is Bhutan, whereas, China makes the north and northeast border for the state, and the pretty little Myanmar snuggles the east. It covers a spectacular area of 83,743 sq km that is dotted with numerous rivers, lakes, forests, hill ranges, valleys, grasslands, and sweet little settlements.</p>
                        <p className="Arpara">One of the major tourism attractions in Arunachal Pradesh is the opportunity for adventure sports. This unperturbed and in a way raw state has powerful rivers like Lohit, Siang and Subansiri that offer incredible river rafting and kayaking experience. On the other hand, the hidden trails and unmatched places challenge trekkers to discover for themselves some surreal trekking destinations. Meanwhile, trails from Bhalukpong to Tawang via Dirang and Bomdila are perfect for motor biking adventures in Arunachal Pradesh.</p>
                        <p>The state also boasts of a rich wildlife that includes rare species like White Winged Wood Duck.Namdapha, Dibang, Sessa and Pakhui are amongst the most popular wildlife reserves in Arunachal Pradesh that are home to a wide variety of animals, birds, amphibians  and reptiles along with varied species of plants and trees.</p>
                        <p>Another thing that shall catch the attention of tourists in the state is its cuisine. Unique and sometimes even bizarre with dried squirrel and mouse and other animals are present in Arunanchal</p>
                    </div>
                    <div className="Arsep">
                        <p className="Arpara"> Arunachal is also famous for its orange and apple orchards in Aalo and Bomdila. The state also flaunts its rich orchid plantations as well which are available in more than 1000 varieties.What enriches Arunachal the most is its varied tribes and their distinct culture and traditions. With so many tribes inhabiting the state, a large number of festivals can be witnessed throughout the year.</p>
                        <p className="Arpara">Along with the famed Hornbill Festival, there are celebrated a plethora of feasts and festivals like Boori Boot, Losar, Solung and Dree by the tribes like Monpa, Adi, Apatani and Mishmi that add to the cultural diversity making the state a much more interesting place to visit. Different tribes in Arunachal Pradesh are skilled in assorted handicraft and handloom arts and cach tribe such as Wangcho indulge in either cane furniture and articles making, jewellery/grass jewellery creation and wood carving. Therefore, when visiting Arunachal Pradesh, shopping for handicraft items is a must thing to do.</p>
                        <p className="Arpara">Arunachal can be an interesting place to experiment with your appetite. Arunachal is also a treasure trove of history. The Bumla Pass near Tawang holds immense significance for being the high mountain pass from where His Holiness the 14th Dalai Lama entered India from Tibet. The Ita Fort in Itanagar also has a lot to tell about the rich history of the state and so does the exotic Dirang Dzong. Arunachal Pradesh is also home to the largest monastery in India which is situated in the ever so serene Tawang. Apart from these, Jaswantgarh and Bhismaknagar Fort are of major importance to the rich history of the state.</p>
                    </div>
                </div>
                <div>
                    <h2 className="Arheader">Top Things to Do & See on Your Trip to Arunachal</h2>
                    <p className="Arpara">The islands of Andaman & Nicobar are perfect place to keep one engaged during a holiday. There is indeed so many things to do that can make your vacation on this perfect holiday destination quite delightful. Enjoy cruises, swimming with the elephants, gliding in a seaplane, nature walks, caving, island hopping and birdwatching amongst many other activities found on Andaman & Nicobar.</p>
                </div>
                
            </div>
        </div>
    );
}
export default ArunanchalPradesh;