import React,{useState,useEffect,useRef} from "react";
import './Rajasthan.css'
function Rajasthan(){
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
                <h2 className="rheader">About Rajasthan Tourism</h2>
                <p className="rpara">Rajasthan is a state of vibrant folk dance and music, gigantic forts and palaces, spicy food, colourful and large turbans, extensive golden sand desert, camels and rich handicraft. It is therefore, an incredible place to visit in India for enjoying unforgettable holidays. Sprawling in an area of 342239 sq km, Rajasthan is perfect for history buffs, culture aficionados, adventure lovers, wildlife enthusiasts, family vacations, honeymoon, and more.</p>

            </div>
            <div>
                <h2 className="rheader">Architectural Splendour: Forts, Palaces & Havelis!</h2>
                <p className="rpara">The major tourist attraction of Rajasthan are its havelis, palaces and forts that add to the experience of exploring one of the historically wealthy states in India. Some of the most famous and most visited forts in Rajasthan are Chittorgarh, Mehrangarh, Jaisalmer, Jaigarh and Junagadh Forts. Of these, the Mehrangarh Fort in Jodhpur is spread over 5 kilometers and stands on a hill almost 125 kilometers high. Chittorgarh Fort is also a must visited tourist attraction, as it’s the largest fort in Asia. It is spread over an area of 700 acres, extending to 3 km in length and 13 km in peripheral length. The exquisite architecture isn’t only confined to the palaces and forts as Rajasthan also boasts impressive Hindu & Jain temples like Dilwara Jain Temples and Eklingji Temple.</p>
            </div>
            <div>
                <h2 className="rheader">A Rich Melange of Dances, Songs, Rides & Colors!</h2>
                <p className="rpara">For culture aficionados, there are a number of fairs and festivals in Rajasthan to witness. The flamboyant manner in which even the cattle fairs take place in Pushkar and Nagaur is truly something to behold. Some of the most famous tourism festivals that showcase the rich traditions, customs, folk dance and music of the state are the Desert Festival, Bikaner Camel Festival, Nagaur Fair, Pushkar Fair, Elephant Festival, Mewar Festival, Mount Abu Winter Festival, Gangaur Festival and Teej.</p>
            </div>
            <div>
                <h2 className="rheader">Go Shopping : From Jewellery to Paintings!</h2>
                <p className="rpara">An indispensable part of the culture of Rajasthan is the handicraft skills, shopping for which is an experience to have. The state is famous for its jewellery pieces, and is one of the largest centers for hand cut gems in the world. Gold and silver jewellery is extremely famous, along with Kundan and Meenakari styles of ornaments. The gold work on glass, called Thewa is also quite a popular thing to buy in Rajasthan.

<p className="rpara">Another shopping worthy article in Rajasthan are its miniature paintings that have a Mughal influence to it. These paintings have intricate detailing and come in different styles like Mewar, Bundi, Kota, Marwar, Bikaner, Jaipur and Kishangarh. An ancient art of scroll painting called Phad also makes for one of the best things to take back home from Rajasthan. Pichwais are another form of paintings, a little different from Phad; but equally attractive.</p>

Apart from the home decor in the form of paintings, Rajasthan offers an opportunity to buy some authentic and exquisite leather items, amongst which Mojari/Jutti/Shoes are the most popular things to buy. One can get the best Mojari from Jaipur, Jodhpur, Barmer and Jaisalmer along with musical instruments made out of leather. From Bikaner one can purchase lamp shades, shields, vases made out of camel hide.</p>
            </div>
            <div>
            <div className="carousel-container">
      <div className="slides" ref={slides}>
        <div className={`slide ${currentIndex === 0 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.zXHZ5kHZO9Xs06qJ2fy_EwHaE8?rs=1&pid=ImgDetMain" alt="Slide 1" />
        </div>
        <div className={`slide ${currentIndex === 1 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th?q=Bundi+Rajasthan&w=120&h=120&c=1&rs=1&qlt=90&cb=11&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=strict&t=1&mw=247" alt="Slide 2" />
        </div>
        <div className={`slide ${currentIndex === 2 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th?q=Thar+Desert+Rajasthan&w=120&h=120&c=1&rs=1&qlt=90&cb=11&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=strict&t=1&mw=247" alt="Side 3" />
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
                <h2 className="rheader">Top 10 Most Visited Destinations in Rajasthan</h2>
                <ul>
                    <li className="rpara"><strong>Jaipur :</strong> The capital city Jaipur has been recognized as a UNESCO World Heritage Site. Dotted with numerous heritage sites, the Pink City is an unmissable destination.</li>
                    <li className="rpara"><strong>Udaipur :</strong> Dubbed the City of Lakes, Udaipur is adorned with many man-made lakes, palaces, and the Aravalli Hills which make it a popular tourist destination in Rajasthan.</li>
                    <li className="rpara"><strong>Jodhpur :</strong> Home to the impressive Mehrangarh Fort and Umaid Bhavan, Jodhpur, the second-largest city in Rajasthan is a history lover’s paradise.</li>
                    <li className="rpara"><strong>Jaisalmer :</strong> The Golden City, Jaisalmer is flanked by the Thar Desert and adorned with a living fort. Reflecting the rich history of Rajasthan, Jaisalmer is a land of experiences you cannot forget.</li>
                    <li className="rpara"><strong>Ranthambore National Park :</strong> One of the major tiger reserves in India, Ranthambore National Park boasts rich wildlife, historical monuments, and an enthralling wildlife safari experience.</li>
                    <li className="rpara"><strong>Pushkar :</strong> One of the oldest cities in India, Pushkar is a religious destination which also has a hippie vibe. Its 52 ghats and one-of-its-kind Brahma Temple attract many from across the world.</li>
                    <li className="rpara"><strong>Bikaner :</strong> Displaying the opulence of Rajasthan’s culture and history, Bikaner is popular as a world’s largest camel research and breeding farms and is home to the unique rat temple, Karni Mata.</li>
                    <li className="rpara"><strong>Ajmer :</strong> Famed as an important Muslim pilgrimage, Ajmer is a sacred destination in Rajasthan that is also known for historical opulence.</li>
                    <li className="rpara"><strong>Chittorgarh :</strong> The largest fort not only in Rajasthan but in India, Chittorgarh is known for its architectural brilliance and different periods of history that it has been the witness of.</li>
                    <li className="rpara"><strong>Kumbhalgarh :</strong> Boasting one of the longest walls in the world, Kumbhalgarh is the second-largest fort in India. This impressive fort is not to be missed witnessing in Rajasthan.</li>
                </ul>
            </div>
            <div>
                <h2>Best Time to Visit Rajasthan</h2>
                <div className="rdiv">
                    <div className="rsdiv">
                        <img src="https://www.tourmyindia.com/states/rajasthan/image/summer-ico.png" className="rimg" />
                        <div>
                        <h4 className="rsheader">Summer Season in Rajasthan</h4>
                        <p className="rspara">Summer in Rajasthan starts from April and lasts till June. The temperature ranges from 24°C to 48°C. Heat can be very uncomfortable for tourists. This season is not favourable for trave.</p>
                        </div>
                    </div>
                    <div className="rsdiv">
                        <img src="https://www.tourmyindia.com/states/rajasthan/image/mansoon-ico.png" className="rimg" />
                        <div>
                        <h4 className="rsheader">Monsoon Season in Rajasthan</h4>
                        <p className="rspara">Monsoon in Rajasthan begins in July and ends in September. The temperature ranges from 21°C to 35°C. During Monsoon thunderclap paves the way for heavy rainfall. This season is also favourable for travel.</p>

                        </div>
                    </div>
                    <div className="rsdiv">
                        <img src="https://www.tourmyindia.com/states/rajasthan/image/winter-ico.png" className="rimg"/>
                        <div>
                            <h4 className="rsheader">Winter Season In Rajasthan</h4>
                            <p className="rspara">Winter in Rajasthan begins in October and ends in March. The temperature ranges from 13°C to 30°C. The weather is favourable for travel due to pleasant daytime temperatures.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rdiv">
                <div className="rsdiv">
                    <img src="https://www.tourmyindia.com/states/rajasthan/image/train.png" className="rimg"/>
                    <div>
                        <h4 className="rsheader">By Train</h4>
                        <p className="rspara">The major railway stations of Rajasthan is in Udaipur, Jaipur, Jodhpur and Ajmer which are connected to all the major cities like Kota, Bharatpur, Bikaner, Ajmer, Alwar, Jaisalmer etc.</p>
                    </div>
                </div>
                <div className="rsdiv">
                    <img src="https://www.tourmyindia.com/states/rajasthan/image/air.png" className="rimg"/>
                    <div>
                        <h4 className="rsheader">By Air</h4>
                        <p className="rspara">There are three major Airports in Rajasthan – Jaipur, Udaipur and Jodhpur which operates both International and domestic flights. They are connected to all the major cities like Delhi, Mumbai, Bangalore, Kolkata, Ahmedabad and Thiruvananthapuram.</p>
                    </div>
                </div>
                <div className="rsdiv">
                    <img src="https://www.tourmyindia.com/states/rajasthan/image/bus.png" className="rimg"/>
                    <div>
                        <h4 className="rsheader">By Road</h4>
                        <p className="rspara">Rajasthan has well connected national highways and state highways. NH8 which is connected to other major cities like Delhi, Udaipur, Jaipur, Mumbai, Ahmedabad, is the easiest way to reach Rajasthan.</p>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="rheader">A few Tips Before Visiting Rajasthan</h2>
                <ul>
                    <li className="rpara">Rajasthan is the biggest state in India, so plan your itinerary accordingly.</li>
                    <li className="rpara">Wear cotton clothes, hat and carry sunscreen lotion if you are visiting it during summers.</li>
                    <li className="rpara">Respect the rules and customs if you are visiting a heritage site or temples.</li>
                    <li className="rpara">Remember to enjoy a camel ride during your visit to Rajasthan.</li>
                    <li className="rpara">Stay hydrated and drink plenty of water at all times.</li>
                    <li className="rpara">There are plenty of options when it comes to public transport, from tuk tuks to battery operated autos.</li>
                </ul>
            </div>
        </div>
    );
}
export default Rajasthan;