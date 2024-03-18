import React,{useState,useEffect,useRef} from "react";
import './Punjab.css';
function Punjab(){
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
                <p className="rpara">Visit Punjab, and you will see that the large heartedness of the people is as real as their cuisine. You learn a lesson in universal brotherhood at the Golden Temple, one of the most popular tourist places in Punjab. The eyes well up at Jallianwala Bagh, a top most historical destination, while its palaces and museums reflect its past glory. A travel experience in Punjab encompasses culture, heritage, history and wildlife.</p>
            </div>
            <div>
                <h3 className="rheader"><strong>Capital:</strong> Chandigarh<strong> Location: </strong>North India</h3>
                <h4 className="rheader">BEST TIME TO VISIT PUNJAB:</h4>
                <p className="rpara">The best time to visit Punjab is from the months of October to March.</p>
            </div>
            <div>
                <h4 className="rheader">WHY VISIT PUNJAB?</h4>
                <p className="rpara">You should plan a trip to Punjab for its Golden Temple, Jallianwala Bagh, Wagah Border Ceremony, Durgiana Temple, rich cuisine, culture, forts and palaces.</p>
            </div>
            <div>
                <center className="rcenter">An Insight into Punjab Tourism</center>
                <div>
                <p className="rpara">Bounded by the states of Jammu and Kashmir, Haryana, Himachal Pradesh and Rajasthan, Punjab is gifted with a rich culture, heritage and history. This is the same region which finds mention as the Sapta Sindhu in the Rig Veda, and was the site where several Hindu scriptures were written. It has been blessed with fertile soil, thanks to the seven rivers which flow through it. The large mustard fields, which have been romanticized by Bollywood, are as beautiful as you would expect them to be. Over the years, this region has witnessed numerous invasions, from Greek, Persian, Turks and Scythians to Afghans. These invasions and other attacks find a mention in the traditional “kissa” which is a part of its folk culture. There is a richness in Punjab which is reflected in its dress, customs, traditions and also its cuisine.</p>
                <p className="rpara">For a tourist, Punjab offers a journey back in time. You come across forts, palaces and monuments, each outdoing the other in terms of grandness and architecture. Some of the most visited forts and palaces in Punjab are Gobindgarh Fort, Rambagh Palace, Qila Mubarak, Old Moti Bagh, Maharaja Sher Singh Palace and Bahadurgarh Fort. There is Phillaur Fort which is famous for its historical significance and served as the military base for Maharaja Ranjit Singh. Another fort which deserves a special mention is the Qila Mubarak. Inside the fort, you come across the relics of the the tenth Sikh guru, Guru Gobind Singh. With so many forts, palaces and other historical buildings, there is ample scope for exploration.</p>
                <p className="rpara">Among the points of tourist interest is the Jallianwala Bagh, where the bullet holes in the walls seem as fresh as they did hundreds of years ago. If you know its history and spend some time here, scenes of innocent men, women and children play before your eyes. It evokes sadness, confusion, anger and melancholy, and not necessarily in that order. Those well preserved bullet marks, the martyrs’ well and the memorial itself, all remind you of the brutality that mankind is capable of. Quite another travel experience awaits you at the Golden Temple, also known as the Darbar Sahib. One of the most important pilgrimage sites for Sikhs, it preaches, and more importantly, practices the concept of universal brotherhood, love and harmony. What is called the Golden Temple is in fact a temple complex consisting of several buildings. The building which stands out from the others is the main temple which is covered with a gold plate.</p>
                </div>
                <div>
                    <p className="rpara">Nowhere is this fact reflected more than in the practice of langar, or, a communal kitchen. Inspired by the ideals of devotion and selfless service to mankind, devotees to the temple volunteer as cooks and cleaners to feed thousands of people without a thought for caste, creed or religion. Now, that is how you set an example in universal brotherhood. Durgiana Temple is another famous religious tourist attraction and is famous for its silver doors.</p>
                    <p className="rpara">At the town of Wagah, you come across a different kind of inspiration. Otherwise a quiet little town which serves as a transit point for goods between India and Pakistan, it is famous for the Wagah Border Ceremony. Nationalism is expressed here in the form of carefully choreographed drills. During these drills, legs are raised high in the air, eyes are dilated and feet are stamped, much to the delight of spectators on both sides. Ask any visitor why is it a must see performance, and you will showered with various answers, with all of them pointing in the same direction: nationalism. Cries of “Bharat Mata ki Jai” and “Jai Hind” fill the air, and for a moment, it is hard not to be overcome by patriotic sentiments.</p>
                    <p className="rpara">Among the other top things to do Punjab is to visit its museums where you get to revisit the chapters of history. In a museum, you may come across documents and papers related to partition and the riots that followed soon after. At another, you get to observe the swords, paintings and other personal belongings of Maharaja Ranjit Singh, the founder of the mighty Sikh Empire who is also revered as the “roaring lion”. The Maharaja Ranjit Singh Museum is a particular favorite of history lovers and the general public. Once a summer palace of the Sikh ruler, it was converted into a museum in 1977. Of special attractions inside the museum are the personal belongings of Maharaja Ranjit Singh, from arms and armour to coins and manuscripts.</p>
                    <p className="rpara">Your Punjab sightseeing tour should also involve a visit to the Zoological Gardens. It is a great place to enjoy an outing with your friends and family while admiring the flora and fauna. The relaxed environment and the large area also ensures that a peaceful corner can always be found.</p>
                </div>
            </div>
            <div>
            <div className="carousel-container">
      <div className="slides" ref={slides}>
        <div className={`slide ${currentIndex === 0 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th?q=Punjab+Wallpaper&w=120&h=120&c=1&rs=1&qlt=90&cb=11&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=strict&t=1&mw=247" alt="Slide 1" />
        </div>
        <div className={`slide ${currentIndex === 1 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th?q=Punjab+City&w=120&h=120&c=1&rs=1&qlt=90&cb=11&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=strict&t=1&mw=247" alt="Slide 2" />
        </div>
        <div className={`slide ${currentIndex === 2 ? 'active' : ''}`}>
          <img src="https://www.tripsavvy.com/thmb/RZuYDWUyWcv_kMT3LNm8JT1Iq80=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-521933312-5760fd303df78c98dcc6986b.jpg" alt="Side 3" />
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
        </div>
    );
}
export default Punjab;