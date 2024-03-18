import React,{useState,useEffect,useRef} from 'react'
import './Jammu.css';
function Jammu(){
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
           <center className='jcenter'>About Jammu And Kashmir Tourism</center>
           <p className='jpara'>Known as Heaven on the Earth, Jammu & Kashmir is where Mother Nature has bestowed all her love. Enclosed by the Himalayas and Karakoram ranges; and festooned with verdant meadows, lush valleys, dense forests, splendid temples, this new union territory of India is a holiday destination to instantly fall in love with.</p>
           <p className='jpara'>Being an ideal tourist destination for family tours, honeymoon tours and the perfect place for adventure enthusiasts, Jammu & Kashmir offers abundance tour options for travellers of all kind.</p>
           <p className='jpara'>The picturesque Jammu & Kashmir is even home to the popular Hindu shrines like Mata Vaishno Devi and Baba Amarath Cave, this place is always on the radar of pilgrimage tourists from all over the world.</p>
           <p className='jpara'>The majestic valleys of Kashmir offer adventure opportunities like trekking and skiing. The serene destination is also famous for experiential travels in the form of either a stay at a houseboat or Shikara ride on Dal and Nigeen Lake. Nothing can beat the beauty of Jammu & Kashmir, and to believe it, one has to see it!</p>
           <p className='jpara'>In our Jammu & Kashmir Travel Guide, we offer the best information that ensures an unmatched travel experience. With our affordable Jammu & Kashmir tour package includes every detail like places to visit by season, top things to do, the must-see popular tourist attractions, where to stay. With us, you can rest assured of every aspect of Jammu & Kashmir Tourism.</p>
           </div>
           <h2 className='jheader'>Best Time to Visit Jammu & Kashmir</h2>
           <div className='jdiv'>
           <div className='jsdiv'>
               <img src='https://www.tourmyindia.com/states/jammu-kashmir/image/summer-ico.png' className='jimg'></img>
               <div>
               <h3 className='jheader'>Summer Season in Jammu & Kashmir</h3>
               <p className='jpara'>The summer season between March and June in Jammu can be extremely hot, while Kashmir enjoys pleasant weather.</p>
               </div>
            </div>
            <div className='jsdiv'>
                <img src='https://www.tourmyindia.com/states/jammu-kashmir/image/mansoon-ico.png' className='jimg'></img>
                <div>
                    <h3 className='jsheader'>Monsoon Season in Jammu & Kashmir</h3>
                    <p className='jspara'>Monsoon begins from July to August when Jammu & Kashmir receives rainfall. August is the time to witness apple picking in Kashmir.</p></div>
                </div>
            <div className='jsdiv'>
                <img src='https://www.tourmyindia.com/states/jammu-kashmir/image/winter-ico.png' className='jimg'></img>
                <div>
                    <h3 className='jsheader'>Winter Season in Jammu & Kashmir</h3>
                    <p className='jspara'>Winter season from November to February is the best time to witness snowfall in Kashmir and Katra in Jammu.</p>
                </div>
            </div>
           </div>
       <h2 className='jheader'>How to Reach Jammu & Kashmir</h2>
       <div className='jdiv'>
            <div className='jsdiv'>
                <img src='https://www.tourmyindia.com/states/jammu-kashmir/image/air.png' className='jimg'></img>
                <div>
                    <h3 className='jsheader'>By Air</h3>
                    <p className='jspara'>Both Jammu & Kashmir have their own airports connecting with the major cities of India.</p>
                </div>
            </div>
            <div className='jsdiv'>
               <img src='https://www.tourmyindia.com/states/jammu-kashmir/image/train.png' className='jimg'></img>
               <div>
                    <h3 className='jsheader'>By Train</h3>
                    <p className='jspara'>jammu Tawi and Udhampur railway stations connect the union territory to major cities of India.</p>
                </div>
            </div>
            <div className='jsdiv'>
               <img src='https://www.tourmyindia.com/states/jammu-kashmir/image/bus.png' className='jimg'></img>
               <div>
                    <h3 className='jsheader'>By Bus</h3>
                    <p className='jspara'>NH 1 and NH 44 connect Jammu & Kashmir to the major cities of India.</p>
                </div>
            </div>
       </div>
       <div>
            <div className="carousel-container">
      <div className="slides" ref={slides}>
        <div className={`slide ${currentIndex === 0 ? 'active' : ''}`}>
          <img src="https://www.indiaimagine.com/wp-content/uploads/2019/02/Gulmarg-e1549271896525.jpg" alt="Slide 1" />
        </div>
        <div className={`slide ${currentIndex === 1 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.lDr_Aq5gBUvmGh_xcCPK5gHaEj?w=307&h=189&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7" alt="Slide 2" />
        </div>
        <div className={`slide ${currentIndex === 2 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.RB0CstfQ8tCGNZreUvV-3wHaFj?w=157&h=188&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7" alt="Side 3" />
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
   )
}
export default Jammu;