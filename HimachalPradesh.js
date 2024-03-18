import React,{useState,useEffect,useRef} from "react";
import './Himachal.css';
function HimachalPradesh(){
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
               <h3 className="hiheader">About Himachal Pradesh Tourism</h3>
               <p className="hipara">Himachal Pradesh is among the most visited top mountain tourist places in North India, Himalayas region. It gifts you with memories that last for a lifetime. Valleys, mountains, ancient monasteries, historical sites, lakes, mountain passes! - The list never ends. The wanderlust in you will be compelled to stay here forever. Pick up any Himachal travel guide, chances are, you will be hooked on to its beauty within a few minutes. This state has so much to offer. Indeed, it’s a top tourist attraction in North India!</p> 
                <h3 className="hiheader">Let’s Blend with the Soothing Rhythm of Nature</h3>
                <p className="hipara">Himachal Pradesh tourism has something in store for nature lovers. Its beauty lies in its diversity. You have lush valleys like Kinnaur, Kullu and Kangra & barren terrains of Lahaul & Spiti. Tales of Malana fascinate tourists as much as the Buddhist culture in Mcleodganj. Exploring Dalhousie, with its rich colonial past, is sheer delight. The famous Hill stations like Shimla, Kullu & Manali are dotted with meadows, orchards, quaint villages & rich colonial past.</p>
                <p className="hipara">Any sightseeing tour of Himachal should include its wonderful lakes. Quiet and still, they reflect the surroundings, both literally and symbolically. A few of the famous lakes are Renuka, Rewalsar, Prashar, Suraj Tal & Chandratal. The views of the Himalayan Ranges fill you with excitement, from head to toe.</p>
                <h3 className="hipara">Say Yes to New Adventures</h3>
                <p className="hipara">The varied landscape of Himachal also lends itself to various adventure activities. The thrill of river rafting can be enjoyed at River Sutlej at Tattapani near Shimla, River Beas near Kullu, River Ravi near Chamba, River Chenab and Spiti in Lahaul and Spiti district.</p>
                <p className="hipara">There are also a lot of opportunities for trekking, for both amateur & advanced trekkers. Some of the famous treks are Pin Parvati Pass, Hampta Pass, Kinnaur Kailash & Chandratal.</p>
                <p className="hipara">Soar high with paragliding at Bir Billing, the second highest paragliding spot in the world. Skiing, angling, rock climbing, camping & mountaineering are other top adventure sports you can enjoy.</p>
                <h3 className="hiheader">Tickle Your Taste Buds in Himachal Pradesh</h3>
                <p className="hipara">Just like any other state, Himachal has its own cuisine, which has a strong Tibetan influence on it. The Tibetan influence is more strongly seen in the highlands of Kinnaur, Lahaul & Spiti, Patande of Sirmaur, Sepu Vadi or Mandi & Khatta Karai of Kangra. These delicious cuisines have a rich history. Good taste and simplicity in presentation makes it more authentic and worth it to have.</p>
            </div>
            <div>
                <ul>
                    <li><strong>Shimla :</strong>Visit the neo gothic Christ Church, Viceregal Lodge & other colonial architecture. Hang out at The Mall & attend the Ice Skating Carnival from November.</li>
                    <li><strong>Manali : </strong>Famous for its rich cultural heritage & age old traditions. Visit its tourist sites like Hidimba Devi & Manu Temple. Visit the bazaar & explore Old Manali.</li>
                    <li><strong>Kullu : </strong>It’s blessed by nature’s bounty. The Kullu Dusshera in October is celebrated with great vigour. Adventure activities like rafting, camping & hiking are popular.</li>
                    <li><strong>Dharamshala :</strong>Visit Mcleodganj & find out why it’s called Little Lhasa. A few tourist places are Bhagsunag Falls, Kangra Art Museum & War Memorial.</li>
                    <li><strong>Paonta Sahib :</strong>Guru Gobind Singh, the 10th Guru, lived here for 10 years. Seek blessings. Enjoy the views of Doon Valley. Go for a picnic at Khodri Dakpathar, about 25 kilometres from here.</li>
                    <li><strong>Kangra :</strong>Its history dates back to more than 3,500 years. Its top tourist attractions are Kangra Fort, Shree Bajreshwari Devi Temple and Baijnath Shiv Temple.</li>
                    <li><strong>Dalhousie : </strong> This hill station will win you over with its rich colonial architecture, including churches. The Mall Road, Subhash Baoli & spectacular beauty are its prime attractions.</li>
                    <li><strong>Kinnaur :</strong> India’s last village, views of Mt. Kinner Kailash & apple orchards, it’s all here in Kinnaur. A few tourist sites are Nichar, Moorang and Kothi.</li>
                    <li><strong>Chamba : </strong>Its landscape is dotted with lakes, streams, rich wildlife & fertile valleys. It is also dotted with significant historical and architectural landmarks.</li>
                    <li><strong>Hamirpur :</strong>Dense pine forests and fertile valleys form a major part of its landscape. Two of its major tourist attractions are the historic fort at Sujanpur Tihra & Baba Balak Nath Temple.</li>
                </ul>
            </div>
            <div className="hidiv">
                <div className="hisdiv">
                    <img src="https://www.tourmyindia.com/states/himachal/image/summer-ico.png" className="hiimg1"/>
                    <div>
                        <h4 className="hisheader">Summer Season In Himachal Pradesh</h4>
                        <p className="hispara">Summers in Sikkim last from April to June. Temperature ranges between 5°C. to 24°C.</p>
                    </div>
                </div>
                <div className="hisdiv">
                    <img src="https://www.tourmyindia.com/states/himachal/image/mansoon-ico.png" className="hiimg1"/>
                    <div>
                        <h4 className="hisheader">Monsoon Season In Himachal Pradesh</h4>
                        <p className="hispara">Monsoon arrives in mid June and lasts till September. Temperature ranges between 14°C. to 21°C.</p>
                    </div>
                </div>
                <div className="hisdiv">
                    <img src="https://www.tourmyindia.com/states/himachal/image/winter-ico.png" className="hiimg1"/>
                    <div>
                        <h4 className="hisheader">Winter Season In Himachal Pradesh</h4>
                        <p className="hispara">Winters start from November and last till March. It can be extremely cold. The temperature ranges between 14°C. to 21°C.</p>
                    </div>
                </div>
            </div>
            <div className="hidiv">
                <div className="hisdiv">
                    <img src="https://www.tourmyindia.com/states/himachal/image/air.png" className="hiimg1"/>
                    <div>
                        <h4 className="hisheader">By Train</h4>
                        <p className="hispara">In the north border with Punjab, Pathankot is the major railway station that connects to Himachal. From Pathankot, a narrow gauge train to Joginder Nagar connects the Kangra Valley. There is also the Kalka-Shimla railway line.</p>
                    </div>
                </div>
                <div className="hisdiv">
                    <img src="https://www.tourmyindia.com/states/himachal/image/train.png" className="hiimg1"/>
                    <div>
                        <h4 className="hisheader">By Air</h4>
                        <p className="hispara">Himachal is connected via air by the airports in Chandigarh & Pathankot. The smaller airports are Bhuntar Airport in Manali, Gaggal Airport in Kangra & Jubbarhatti Airport in Shimla.</p>
                    </div>
                </div>
                <div className="hisdiv">
                    <img src="https://www.tourmyindia.com/states/himachal/image/bus.png" className="hiimg1"/>
                    <div>
                        <h4 className="hisheader">By Road</h4>
                        <p className="hispara">Himachal Pradesh is easily accessible by road from Chandigarh, Kalka and Pathankot. Interstate bus services are available from Delhi, Chandigarh and Jaipur.</p>
                    </div>
                </div>
            </div>
            <div>
            <div className="carousel-container">
      <div className="slides" ref={slides}>
        <div className={`slide ${currentIndex === 0 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th?q=Himachal+Pradesh+Places+to+Visit&w=120&h=120&c=1&rs=1&qlt=90&cb=11&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=strict&t=1&mw=247" alt="Slide 1" />
        </div>
        <div className={`slide ${currentIndex === 1 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.8WQSrJ_3oBEdfzsCLpakbwHaE8?rs=1&pid=ImgDetMain" alt="Slide 2" />
        </div>
        <div className={`slide ${currentIndex === 2 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.5ndpDRnjXveobo5sl4W9NAHaHb?pid=ImgDet&w=200&h=201&c=7&dpr=1.3" alt="Side 3" />
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
                <h2 className="hiheader">Official Guidelines and Travel Tips by Himachal Pradesh Tourism</h2>
                <ul>
                    <li>Always carry your identity card/passport while travelling.</li>
                    <li>You require permission for photography & filming at some monuments. Contact the Tourism Office to know which ones require permission.</li>
                    <li>Ensure that your vehicle is locked before you leave it. Don’t leave cash or jewellery behind in your vehicle.</li>
                    <li>Do not encourage beggars by offering them money or other stuff.</li>
                    <li>Always shop at Government Emporiums, where prices are reasonable & quality is assured.</li>
                    <li>Cover yourself with travel insurance for theft, loss and mediclaim.</li>
                    <li>Keep your cash divided in separate pockets. Do not leave your cash and valuables in your hotel rooms.</li>
                    <li>Be careful while driving in Himachal Pradesh during the monsoons. The road is slippery and landslides/rockfalls are common.</li>
                    <li>The normal banking hours are 10:00 AM to 4:00 PM. Banks remain closed on Sundays and gazetted holidays.</li>
                    <li>Always be patient, respectful and friendly.</li>
                </ul>
            </div>
        </div>
    );
}
export default HimachalPradesh;