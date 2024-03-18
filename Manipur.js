import React,{useState,useEffect,useRef} from "react";
import './Manipur.css'
function Manipur(){
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
                <center className="mancenter">MANIPUR TRAVEL GUIDE</center>
                <p className="manpara">Nestled in the slopes of the south-flowing sub-Himalayan ranges in the northeast of India, Manipur is a beautiful land where mother nature is extra generous in her bounty. The state boasts of picturesque landscapes with misty hills, gleaming lakes, lush green valleys, splashing rivers and carpeted with dense forests. Not just this, Manipur is also renowned for its graceful classical dance tradition and rich art and culture which could be clearly seen in its exquisite handicrafts and intricate art forms. Manipur being lesser explored land promises to be one of the best tourist destinations in India offering endless enjoyment and pleasure with its blue lakes, and undulating hills. It is the beautiful, calm and serene, ecstatic simplicity along with the moderate climate that makes Manipur a must visit place in Northeast India.</p>
                <p className="manpara"><strong>Capital:</strong>Imphal<strong>Location:</strong>Northeast India</p>
                <h3 className="manheader">BEST TIME TO VISIT MANIPUR:</h3>
                <p className="manpara">A trip to Manipur can be planned during the winter season and the onset of the summer season. Considering the months between September and April would be an ideal choice as the climate remains pleasant offering the best holiday experience.</p>
                <h3 className="manheader">WHY VISIT MANIPUR?</h3>
                <p className="manpara">For popular monuments, local markets, cultural tourism, heritage walks, sightseeing tour, boating, national parks, photography tour and pre-wedding photo shoot.</p>
                <h3 className="manheader">TEMPERATURE</h3>
                <div className="mandiv">
                    <div className="mandiv2">
                        <h4>26°C to 32°C</h4>
                        <p>summer</p>
                        <p>March to June</p>
                    </div>
                    <div className='manline'>
                        <p>|</p>
                        <p>|</p>
                        <p>|</p>
                    </div>
                    <div className="mandiv1">
                        <h4>23°C to 31°C</h4>
                        <p>Monsoon</p>
                        <p>July to September</p>
                    </div>
                    <div className='manline'>
                        <p>|</p>
                        <p>|</p>
                        <p>|</p>
                    </div>
                    <div className="mandiv1">
                        <h4>13°C to 25°C</h4>
                        <p>winter</p>
                        <p>October to February</p>
                    </div>
                </div>
                <div>
            <div className="carousel-container">
      <div className="slides" ref={slides}>
        <div className={`slide ${currentIndex === 0 ? 'active' : ''}`}>
          <img src="https://www.tusktravel.com/blog/wp-content/uploads/2021/02/Sanamahi-Temple-Manipur.jpg" alt="Slide 1" />
        </div>
        <div className={`slide ${currentIndex === 1 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.M1BYP7B82nOfZVQPdUU3QQHaDv?w=362&h=176&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7" alt="Slide 2" />
        </div>
        <div className={`slide ${currentIndex === 2 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.dHngWVOTPuBM-uUiaJJbTwHaHT?w=163&h=180&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7" alt="Side 3" />
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
                    <center className="mancenter">An Insight into Manipur Tourism</center>
                    <div className="maninsight">
                        <div className="mansep">
                            <p className="manpara">Being a multilingual state, Manipur is endowed with classical dance, luscious cuisines and traditional aura that surrounds like a lighted incense stick in sacred shrines. From the natural beauty of waterfalls to lakes and from streams to evergreen forests, the state has made itself a place that tourists cannot stop themselves from adoring.  Being one of the must-visit tourist destinations in India, the state has been thriving because of the abundant diversity. The tourists will have a number of places to visit and things to do in Manipur including Imphal, Bishnupur, Thoubal, Ukhrul, Churachandpur, Senapati, Tamenglong, Chandel. Also, tourists can get indulged in various activities like Boating in Loktak Lake in Imphal, Shop in the Tamu International Market in Moreh, a visit to the Keibul Lamjao National Park in Bishnupur which is yet another point of tourist interest considered to be the only floating national park in the world.</p>
                            <p className="manpara">With the literal meaning of Manipur being ‘jewelled town’, the name justifies the small and picturesque land. Visiting Manipur tourists can witness the polite and hospitable nature of the people. Other than this, travellers can also experience the richness in its cultural tradition and ethnicity. Tourist can even enjoy the Raasleela and the classical dance of Manipur which holds a significant position in the cultural map of India.</p>
                            <p className="manpara">Coming to the tourist attractions in Manipur, it’s sure that it cannot be completed in a day or two but one thing that needs to be kept in mind is that the must-visit places shouldn’t be missed when travelling to Manipur.  Explore and unravel all the places of Manipur tourism including Ema Keithel (Mother's Market), Loktak Lake, Red Hill Lokpaching, Kangla Fort, Sirohi National Park, Manipur State Museum, Sekta Archaeological Living Museum, Manipur Zoological Gardens, Keibul Lamjao National Park, Shree Govindajee Temple, Khonghampat Orchidarium and Matai Garden in Imphal; Thoubal River, Imphal River, Ikop Lake, Waithou Lake, People's Museum, Louis Lake, Thoubal Bazar, Khongjom War Memorial in Thoubal;</p>
                        </div>
                        <div className="mansep">
                            <p className="manpara">Khayang Peak, Shirui Kashung Peak, Kachou Phung Lake, Khangkhui Cave, Shirui Kashung, Hundung Mangva Cave, Nillai Tea Estate, Ango Ching in Ukhrul and plenty of other top tourism attractions to visit. Other than these, shopping in Manipur is all about jewellery, handloom and local handicraft which tourists can buy at the Khwairamband Bazar, Handloom House, Tribal Emporium, Sangai Handloom and few other colourful local markets. Also, if tourists happen to visit Manipur in the month of April, they can make the most of their holidays by getting the opportunity to celebrate Manipur's local New Year with great pomp and show. Tourists can even see locals climbing the hills during the festival which is believed to be a part of their belief. Not just this, but one can enjoy Cheiraoba which is followed by a dance festival showcasing various dance forms like Krishna Raasleela.</p>
                            <p className="manpara">Manipur is one of the best places to visit in India and considered to be a paradise for the flora and fauna lover. Nature lovers can visit the largest freshwater lake in the country, Loktak which is famous for the numerous Phumdis or floating swamps appears to be like a mini island on the lake. Also, there is Keibul Lamjao National Park which is located in the south of the lake and is the only floating wildlife sanctuary in the world.</p>
                            <p className="manpara">Apart from this, people in Manipur are creative, simple and expressive and worships Lord Vishnu. Also, the people here are artistic and creative which can be clearly seen in their handloom and handcrafted products. The state depicts the tremendous zest for life which makes the Manipur tour an experience for the lifetime. Tour My India presents Manipur travel guide that can assist in planning perfect tours in the state. Complete information on how to reach, places to visit, eat, things to do are articulately provided. The tailored made Manipur holiday packages are also provided so that prudent choices can be made.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Manipur;