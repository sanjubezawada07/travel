import React,{useState,useEffect,useRef} from 'react'
import './Ladakh.css'
function Ladakh(){
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
       <>
           <div>
           <center className='lcenter'>About Leh Ladakh Tourism</center>
           <p className='lpara'>The Land of High Passes, Ladakh, the newly created Union Territory in India (previously a part of Jammu & Kashmir), boasts a landscape that can leave you with your jaws dropped. It is a place where the landscape changes dramatically; it is truly astonishing to see the mountains, snow, cold desert, alpine meadows and lakes at a short distance from each other. Tourism in Ladakh is an absolute delight for nature lovers as well as adventurers.</p>
           <p className='lpara'>Adorned with the lofty barren mountains, Ladakh is home to some of the highest motorable passes like Khardung La (5359 m), Marsimik La (5582 m), and Chang La (5360 m), and alpine lakes like Pangong Tso (4350 m) and Tso Moriri (4522 m). Ladakh is further divided into three regions - Leh, Nubra, and Zanskar, and each region has several places to see.</p>
           <p className='lpara'>Ladakh is majorly popular amongst the adventurers who feel welcomed by the number of adrenaline rushing activities offered here. The union territory is amongst the top trekking destinations in India with amazing and unmatched treks like the popular Frozen River Trek/Chadar Trek. Ladakh also has opportunities for mountaineering, motor biking, mountain biking, white water rafting and more. </p>
           <p className='lpara'>Adding to its exceptional beauty are the ancient Buddhist monasteries that are mostly nestled in the mountains and are thousands of years old. These monasteries make for the Buddhist pilgrimage destinations in Ladakh and also act as important cultural centres where major religious festivals take place.</p>
           <p className='lpara'>In our Ladakh Travel Guide, we add all the information you need to know before planning a trip. Our authentic Ladakh travel guide includes information on the top places to visit, must visit tourist attractions, best things to do and top places to stay in Ladakh.</p>
           <p className='lpara'>Tour My India offers the best Leh Ladakh tour packages ensuring an amazing holiday experience at this top Himalayan destination in India.</p>
           </div>
           <div>
               <h3 className='lheader'>Best Time to Visit Ladakh</h3>
               <div className='ldiv'>
                    <div className='lsdiv'>
                        <img src='https://www.tourmyindia.com/states/ladakh/imagess/summer-ico.png' className='limg'></img>
                        <div>
                            <h3 className='lshaeder'>Summer Season in Ladakh</h3>
                            <p className='lpara'>The summer season is between April and June in Ladakh, when the temperature ranges between 5°C and 25°C. The month of May marks the beginning of tourist season in Ladakh</p>
                        </div>
                    </div>
                    <div className='lsdiv'>
                       <img src='https://www.tourmyindia.com/states/ladakh/imagess/mansoon-ico.png' className='limg'></img>
                       <div>
                            <h3 className='lsheader'>Monsoon Season in Ladakh</h3>
                            <p className='lpara'>Since Ladakh falls in a high-altitude region, it receives no to very little rain between July and September. This is the best time to visit Ladakh</p>
                        </div>
                    </div>
                    <div className='lsdiv'>
                       <img src='https://www.tourmyindia.com/states/ladakh/imagess/winter-ico.png' className='limg'></img>
                       <div>
                            <h3 className='lsheader'>Winter Season in Ladakh</h3>
                            <p className='lpara'>Winter season is from October to February in Ladakh. The entire region receives heavy snowfall which sometimes leads to the blocking of roads. Nonetheless, Ladakh is accessible during winter via flights.</p>
                        </div>
                   </div>
               </div>       
           </div>
           <div>
            <div className="carousel-container">
      <div className="slides" ref={slides}>
        <div className={`slide ${currentIndex === 0 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.BGOIpoaGBtW66JPMZCMlXQHaEO?w=319&h=180&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7" alt="Slide 1" />
        </div>
        <div className={`slide ${currentIndex === 1 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th?q=Ladakh+Landscape&w=120&h=120&c=1&rs=1&qlt=90&cb=11&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=strict&t=1&mw=247" alt="Slide 2" />
        </div>
        <div className={`slide ${currentIndex === 2 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th?q=Ladakh+Scenery&w=120&h=120&c=1&rs=1&qlt=90&cb=11&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=strict&t=1&mw=247" alt="Side 3" />
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
               <h3 className='lhedaer'>How to Reach Ladakh</h3>
               <div>
                   <div className='ldiv'>
                       <div className='lsdiv'>
                           <img src='https://www.tourmyindia.com/states/ladakh/imagess/air.png' className='limg'></img>
                           <div>
                                <h3 className='lsheader'>By Air</h3>
                                <p className='lspara'>Ladakh has its own airport which connects it to the major cities of India.</p>
                            </div>
                       </div>
                       <div className='lsdiv'>
                           <img src='https://www.tourmyindia.com/states/ladakh/imagess/train.png' className='limg'></img>
                           <div>
                                <h3 className='lsheader'>By Train</h3>
                                <p className='lspara'>The nearest railway station to Ladakh is in Jammu that operates regular trains to many destinations in India.</p>
                            </div>
                       </div>
                       <div className='lsdiv'>
                           <img src='https://www.tourmyindia.com/states/ladakh/imagess/bus.png' className='limg'></img>
                           <div>
                                <h3 className='lsheader'>By Road</h3>
                                <p>Srinagar-Leh Highway (NH 1) and Leh-Manali Highway are the two routes to reach Ladakh by road.</p>
                            </div>
                       </div>
                   </div>
               </div>
           </div>
       </>
   )
}
export default Ladakh;