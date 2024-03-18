import React,{useState,useEffect,useRef} from "react";
import './Sikkim.css';
function Sikkim(){
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
                <h2 className="sheader">About Sikkim Tourism</h2>
                <p className="spara">Despite being the smallest state in North East India, Sikkim is one of the most popular places for tourism in India. Its marvelous landscape is dotted with high-altitude lakes, rolling green mountains, colorful rhododendron groves, crystal-clear rivers, milky waterfalls, beautiful monasteries, and the unparalleled views of the third highest mountain in the world, Mount Khangchendzonga.</p>
                <p className="spara">Sikkim shares its borders with the neighboring countries of Nepal, Tibet and Bhutan and is divided into 4 districts namely East Sikkim, West Sikkim, North Sikkim, and South Sikkim. Each of these districts has something unique to offer to the tourists. Sikkim’s culture is a reflection of its neighboring countries as well, being in such close proximity they share common traits.</p>
                <p className="spara">Read along to find out more about Sikkim tourism and what you can expect as we at Tour My India bring you a complete guide on Sikkim tourism to help you plan your trip better.</p>
            </div>
            <div>
                <h2 className="sheader">East Sikkim: Icy lakes, monasteries & Gangtok!</h2>
                <p className="spara">District headquarters: Gangtok

                Starting with East Sikkim, as most tourists to Sikkim do, one is sure to be mesmerized by this land. Its lush forests, icy lakes, and monasteries make it a wonderful place to visit. Gangtok, the state’s capital, also serves as the district headquarters of East Sikkim.The capital city of Gangtok lies in the East Sikkim district of the state. It is the most popular destination of Sikkim and attracts a number of tourists every year. Elevated at a height of 5,500 ft. Gangtok is a popular hill station and is a preferred destination for couples on their honeymoon.</p>
            <p className="spara">Nestled in the lap of the mighty Himalayas, the city makes for an ideal trekking spot with its terrains and weather that remains cool throughout the year. Gangtok loves its quiet and serene monasteries as much as its vibrant nightlife. It has something for everyone</p>
            <p className="spara">Tsomgo Lake is another destination that should be on your East Sikkim itinerary. It is a glacial lake and is situated at a height of 12,313 ft. The lake is a beautiful sight to behold as it sits amidst the snow clad mountains which are reflected back in the lake’s water. Depending on the seasons, the lake changes colors from blue to a dark green. Tsomgo Lake remains frozen throughout the winter in complete contrast with the spring when the valley is covered in colorful rhododendron flowers.</p>
            </div>
            <div>
                <h2 className="sheader">West Sikkim: The embodiment of Sikkim’s beauty!</h2>
                <p className="spara">District headquarters: Gyalshing

The small hill town of Pelling is a popular tourist attraction of Sikkim after Gangtok. Situated at a height of 6,800 ft. the town is at a distance of 10 kilometers from the district headquarters of Gyalshing. The landscape of Pelling is dotted with monasteries, lakes and waterfalls along with mesmerizing views of Mount Khangchendzonga.

The Pemayangtse Monastery and the Sanga Choeling Monastery are popular among tourists in West Sikkim. The Sanga Choeling Monastery was built in the 17th century and is an important site for the devotees of Buddhism.</p>
<p className="spara">Close to the monastery is the Chenrezig Statue with India’s first ever Skywalk. With a height of 100 ft. and the transparent bridge, you will feel you are actually walking in the sky. Other places to explore in Pelling are the holy lake of Khecheopalri, Khangchendzonga Falls, and the Singshore Bridge, Asia’s second highest suspension bridge.</p>
            </div>
            <div>
                <h2 className="sheader">North Sikkim: Sightseeing overloaded!</h2>
                <p className="spara">District headquarters: Mangan

You could visit Lachung, a scenic village situated by the side of River Lachung, popular for its apples, peaches, and apricots, and the Lachung Monastery. North Sikkim is also popular for its Zero Point, located near Lachung. It is the final destination civilians can travel before reaching the country’s border with China.

Yumthang Valley is another tourist spot you must visit when you venture into North Sikkim. The valley is known for its hot springs and the beautiful rhododendron flowers during spring.</p>
<p className="spara">North Sikkim receives heavy snowfall during December and is a good time to visit if you want to enjoy the snowfall. The temperature often falls below zero and the entire landscape gets covered in snow. Everything turns white!

One of the highest lakes in the world, Gurudongmar Lake sits at almost 17.800 ft. and is a mesmerizing site during the winters when it decides to freeze completely. The Khangchendzonga National Park, a UNESCO World Heritage Site, is also located in this district of Sikkim.</p>
            </div>
            <div>
                <h2 className="sheader">South Sikkim: Culture, nature and adventure!</h2>
                <p className="spara">District headquarters: Namchi

A Sikkim tour is incomplete without visiting South Sikkim. Its surreal beauty ensures that it’s included in any Sikkim travel guide. It is home to Namchi, famously known as the cultural & religious hub of Sikkim. Two famous tourist sites are the 108 feet tall statue of Lord Shiva at the Siddheshwar Dham and the 118 feet tall statue of Guru Padmasambhava at Samdruptse Hill. The 17th century Ngadak Monastery is also a destination that you must visit to experience the serenity and peace of South Sikkim.</p>
<p className="spara">Ornithologists and bird watchers definitely should visit the Maenam Wildlife Sanctuary at Ravangla. This sanctuary of South Sikkim has a number of bird species such as the Dark-throated Thrush, Babblers, Blood Pheasant, and Cuckoos. Not just birds, the sanctuary also has native animals like the Red Panda, Goral, Barking Deer, Civet cat, and the Leopard cat.

The terrains of South Sikkim allow for treks that you will surely enjoy. The lush green forests, the cool weather, the view of the beautiful Teesta River along with the mighty Khangchendzonga. What’s not to love here!</p>
            </div>
            <div>
                <h2 className="sheader">Sikkim: To see the exotic & rare Himalayan wildlife!</h2>
                <p className="spara">Sikkim’s hills, forests & mountains harbor a variety of rare & exotic Himalayan wildlife. Many of these animals and birds are exclusively found at high altitudes. Spotting them in their natural habitat is a rare privilege.

There are several national parks & sanctuaries in Sikkim where you can observe its wildlife leisurely. The most famous of these is the Khangchendzonga National Park, a UNESCO World Heritage Site.</p>
<p className="spara">You can spot animals like Himalayan Black Bear, Tibetan Wild Ass, Himalayan Blue Sheep, Goral, Takin and the Red Panda. The Red Panda is a mammal species native to the Eastern Himalayas & southwestern China.</p>
            </div>
            <div>
                <h2 className="sheader">Best Time for Visiting Sikkim for Holidays</h2>
                <p className="spara">Summer is a good time to be in Sikkim. Being at such a high altitude, the pleasant weather of the state is the best for enjoying sightseeing & adventure between the months of March and June.

November to February is winter in Sikkim. During the winters, Sikkim is covered in snow, but looks extremely beautiful. A lot of the state festivals are held during winters and is also a good time to visit if you can bear the cold weather.

It is better to avoid the monsoon season during the months of July to September. Even though the weather is pleasant, there is a risk of landslides.</p>
            </div>
            <div className="sdiv">
                <div className="ssdiv">
                    <img src="https://www.tourmyindia.com/states/sikkim/image/summer-ico.png" className="simg"/>
                    <div>
                        <h4 className="sshedaer">Summer Season In Sikkim</h4>
                        <p className="sspara">Summers in Sikkim last from March to June. Temperature ranges between 5°C to 25°C.</p>
                    </div>
                </div>
                <div className="ssdiv">
                    <img src="https://www.tourmyindia.com/states/sikkim/image/mansoon-ico.png" className="simg"/>
                    <div>
                        <h4 className="sshedaer">Monsoon Season In Sikkim</h4>
                        <p className="spara">Monsoon arrives in July and lasts till August. Temperature ranges between 4°C to 15°C.</p>
                    </div>
                </div>
                <div className="ssdiv">
                    <img src="https://www.tourmyindia.com/states/sikkim/image/winter-ico.png" className="simg"/>
                    <div>
                        <h4 className="sshedaer">Winter Season In Sikkim</h4>
                        <p className="sspara">Winters start from November and last till February. It can be extremely cold. The temperature ranges between 4°C to 7°C.</p>
                    </div>
                </div>
            </div>
            <div className="sdiv">
            <div className="ssdiv">
                    <img src="https://www.tourmyindia.com/states/sikkim/image/air.png" className="simg"/>
                    <div>
                        <h4 className="sshedaer">By Air</h4>
                        <p className="sspara">The nearest airport to Sikkim is the Bagdogra Airport, at 124 kilometers. From there, it’s a 2 hours ride via taxi/private vehicle.</p>
                    </div>
                </div>
                <div className="ssdiv">
                    <img src="https://www.tourmyindia.com/states/sikkim/image/train.png" className="simg"/>
                    <div>
                        <h4 className="sshedaer">By Train</h4>
                        <p className="sspara">The nearest railway station, NJP, is almost 148 kilometers away. Taxis/private vehicles can be hired outside the station.</p>
                    </div>
                </div>
                <div className="ssdiv">
                    <img src="https://www.tourmyindia.com/states/sikkim/image/bus.png" className="simg"/>
                    <div>
                        <h4 className="ssheader">By Road</h4>
                        <p className="sspara">Travelling to Sikkim by road is an adventure in itself. Sikkim is connected to Siliguri via NH 31A. You can also reach Sikkim from Darjeeling, Kolkata, Kalimpong and Bagdogra.</p>
                    </div>
                </div>
            </div>
            <div>
            <div className="carousel-container">
      <div className="slides" ref={slides}>
        <div className={`slide ${currentIndex === 0 ? 'active' : ''}`}>
          <img src="https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/06/Refresh-yourself-at-these-places-to-visit-in-Sikkim-Hero-Image.jpg" alt="Slide 1" />
        </div>
        <div className={`slide ${currentIndex === 1 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.YS2SJhOQt5Bby8VlGM02AQHaEK?rs=1&pid=ImgDetMain" alt="Slide 2" />
        </div>
        <div className={`slide ${currentIndex === 2 ? 'active' : ''}`}>
          <img src="https://www.esikkimtourism.in/wp-content/uploads/2019/04/topmarch.jpg" alt="Side 3" />
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
                <h1>A Few Important Travel Tips Before Visiting Sikkim</h1>
                <ul>
                    <li className="spara">Prepare your trip after acquainting yourself thoroughly with its weather. While the summers can be pleasant, winters are quite harsh.</li>
                    <li className="spara">Carry antibacterial creams, sunscreen lotions, woolen garments and a first aid kit.</li>
                    <li className="spara">Foreigners require a Restricted Area Permit (RAP), previously known as Inner Line Permit, to visit Sikkim. International tourists who want to enjoy trekking are required to obtain a Protected Area Permit (PAP).</li>
                    <li className="spara">Indians too need to obtain a Protected Area Permit to visit the entire North Sikkim district as well as some areas in East Sikkim district.</li>
                    <li className="spara">Carry your identity proof with you at all times. You will be required to produce them at different checkposts.</li>
                    <li className="spara">It is advisable to read about Sikkim’s policy about birds and animals, visiting sacred places, eco-tourism and interacting with tribals.</li>
                </ul>
            </div>
        </div>
    );
}
export default Sikkim;