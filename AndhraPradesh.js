import React,{useState,useEffect,useRef} from "react";
import './Andhra.css';
function AndhraPradesh(){
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
                <h2 className="Aheader">About Tourism in Andhra Pradesh</h2>
                <p className="Apara">Cheerful and serene, Andhra Pradesh is a land bristling with many heritage sites; the forts; citadels, mind boggling array of beautiful cliffs; stunning stretches of coast; magnificent ruins; pristine water lapping against golden powder and lip-smacking regional cuisines. Situated at the foot of Tirumala hills, Tirupati Balaji or the lord Venkatesa temple is said to be the home of one of the richest temples in the country. The state’s 13 districts are spread across two unofficial regions – Coastal Andhra and Rayalaseema which is an astounding amalgamation of Colour, contrast and experience. Call it an exquisite stopover for those seeking bliss and tranquillity. At heart, Andhra Pradesh is nothing but a glorious representation of India’s ancient past.</p>
                <h2 className="Aheader">Ancient shrines & grand temples make it a major pilgrimage destination!</h2>
                <p className="Apara">Andhra Pradesh, with its exquisite temples and ancient shrines, is counted among the top pilgrimage destinations in India. On an Andhra Pradesh pilgrimage tour, tourists can visit the sacred ‘Mallikarjuna Temple’ in Srisailam and pay their obeisance to one of the 12 Jyotirlingas of Shiva, admire the architectural brilliance of the stunning mural-adorned edifice of the ‘Lepakshi Temple’ in Anantpur, or just soak in the mystical aura of the ‘Kanaka Durga Temple’ at Vijayawada, where Goddess Durga is worshipped in her Mahishasurmardini avatar.</p>
                <p className="Apara">Apart from that, pilgrimage tourism in Andhra Pradesh should also involve a visit to the holy abode of Lord Shri Venkateswara Swamy, an incarnation of Lord Vishnu who is believed to have been residing in the hallowed sanctuary of “Tirumala Tirupati Balaji Temple” since Vedic times. Built in 300 AD by the Tamil King, Thondaimaan, it is one of the world’s richest shrines, which receives a donation of over 300 crore every year from millions and millions of devotees.</p>
                <h2 className="Aheader">Magnificent structures that reflect its glorious past!</h2>
                <p className="Apara">Andhra Pradesh, having been ruled by powerful and glorious dynasties like Mauryas, Cholas, Chalukyas, and the famous Vijayanagara Empire, is dotted with magnificent structures which reflect its rich past. For that very reason, it is regarded as one of the top tourist destinations to experience heritage tourism in India. Your heritage tour should begin with a visit to the town of Amaravathi, located in Guntur district of Andhra Pradesh. It is a treasure house of several structures and monuments dating back to the Satvahana Era. The Amaravati Stupa, Amaravati Mahachaitya and Amaralingeswara Temple are some of the best heritage places to visit in Andhra Pradesh.</p>
                <p className="Apara">About 65 kilometers from Amaravati is another important heritage destination, Vijayawada. The second largest city in Andhra Pradesh, it is famous for the Kondapalli Fort, Undavalli & Mogalarajapuram Caves, Hazratbal Mosque and Mangalagiri – Lakshmi Narasimha Temple, among many others.

Heritage tourism in Andhra Pradesh is incomplete without visiting the beautiful village of Lepakshi which is located in Anantapur district, about 600 kilometers from Vijayawada. One of the most important heritage sites in the state, it highlights the legacy of Vijayanagara Empire and is famed for its group of shrines dedicated to Lord Vishnu, Shiva and Veerabhadra. Apart from the splendid temple architecture and paintings, it is the hanging pillar supported from the ceiling that surprises the visitors.</p>
<div>
                <h2 className='Anheader'>Andaman And Nicobar Travel guide </h2>
            </div>
            <div>
            <div className="carousel-container">
      <div className="slides" ref={slides}>
        <div className={`slide ${currentIndex === 0 ? 'active' : ''}`}>
          <img src="https://www.holidify.com/images/bgImages/AMARAVATHI.jpg" alt="Slide 1" />
        </div>
        <div className={`slide ${currentIndex === 1 ? 'active' : ''}`}>
          <img src="https://www.holidify.com/images/bgImages/TIRUPATI.jpg" alt="Slide 2" />
        </div>
        <div className={`slide ${currentIndex === 2 ? 'active' : ''}`}>
          <img src="https://www.holidify.com/images/bgImages/ANANTAPUR.jpg" alt="Side 3" />
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
<h2 className="Aheader">Rich & diverse wildlife of Andhra Pradesh!</h2>
<p className="Apara">Andhra Pradesh, in South India, boasts a rich biodiversity, and has a lot to offer in terms of wildlife tourism. Some of the best wildlife destinations to visit in Andhra Pradesh are the Kaundinya Wildlife Sanctuary, Indira Gandhi Zoological Park, and the famous of all, Nagarjuna Sagar – Srisailam Sanctuary, which is the third largest tiger reserve in India, spread across an area of 3,658 square kilometres along the Nallamala Hill Range of Eastern Ghats. Away from the Eastern Ghats, the deltaic region of Andhra Pradesh hosts an exceptional</p>
<p className="APara">The famous Coringa Wildlife Sanctuary is the habitat of more than 120 different kinds of birds, including the White-Backed Vulture, Oriental White Ibis, Painted Stork, Purple Heron and Spot-Billed Pelican. This sanctuary finds an honourable mention in the wildlife tourism of Andhra Pradesh because of its mangroves, which are believed to be the second biggest in India. Wildlife tours in Andhra Pradesh should also consist of a visit to Manjira Wildlife & Bird Sanctuary, Mrugavani National Park and the Alisagar Deer Park, which sit as few more wildlife gems of this beautiful Indian state.</p>
<h2 className="Aheader">Captivating sunsets, serene ambience and panoramic views!</h2>
<p className="Apara">Andhra Pradesh, with its picturesque coastline of 970 square kilometers, finds a place on the list of best beach destinations in India. While taking a sightseeing tour of the state, tourists can visit the two popular beaches in Visakhapatnam, Rishikonda Beach and Rama Krishna Beach. Your beach tour in Andhra Pradesh should also include a visit to the Yarada Beach, Gangavaram Beach and Dolphin’s Nose. If you are a nature lover or a photographer, then these beaches, with their captivating sunsets and serene ambience, are exactly the place you should be.</p>
<p className="Apara">Other places that Andhra Pradesh has to offer in terms of beach tourism are the Bhavani Island in Vijayawada, Manginapudi in Machilipatnam and Mypadu Beach in Nellore. Baruva beach in Srikakulam district, Bheemunipatnam located about 20 kilometers from Visakhapatnam, Manginapudi about 75 kilometers from Vijayawada and Mypadu located about 25 kilometers from Nellore city, are other best beaches to visit in Andhra Pradesh.</p>
<p className="Apara">Other beaches which you should visit while travelling to this fascinating South India state are Uppada, located about 5 kilometers from Kakinada town, Suryalanka, 50 kilometers from Guntur city and Vodarevu, located about 100 kilometers from Vijayawada.</p>
<h2 className="Aheader">Explore the “Cave-Full” of adventures in Andhra Pradesh!</h2>
<p className="Apara">You won’t be disappointed if some adventure is what you seek while visiting Andhra Pradesh in South India. It is home to a number of caves, which makes cave tourism an attractive option to check out during your trip. Cave tourism in Andhra Pradesh should definitely include a visit to Mogalarajapuram Caves in Vijayawada, which are a protected monument of national importance, and famed as significant cave temples of Andhra, housing the idol of Ardhanareeswara which is not found anywhere else in South India. The most popular caves in Andhra Pradesh are Borra Caves, Belum Caves and Mogalarajapuram Caves, which are located in Visakhapatnam, Kurnool and Vijayawada respectively. Amongst these, the Belum Caves are considered the second longest caves in India and a must visit while exploring caves in Andhra Pradesh.</p>
<p className="Apara">Besides their beautiful stalactite and stalagmite formations, they also have a mythological significance which makes them a revered site among the locals. Other caves which you can check out while visiting the famous caves in Andhra Pradesh are Undavalli Caves in Vijayawada and the Mayavi Caves in Kurnool. Colours, music, customs & traditions: Richness of festivals!</p>
<p className="Apara">While the majority of festivals in Andhra Pradesh, just like elsewhere, display the local folklore, mythological legends and religious traditions, some are also organized by the Andhra Pradesh government to promote state tourism.

Among the popular fairs & festivals in Andhra Pradesh, which are also must visit festivals for their scale of celebrations, colours and festivities, the most important ones are Srivari Brahmotsavam - a nine-day long fiesta held on the grounds of the sacred Tirupati Balaji Temple, Vinayaka Chaturthi Fair, held in the ancient port city of Machilipatnam, and Sri Rama Navami Festival, celebrated at Bhadrachalam. Among the other famous religious festivals, one is Ugadi, also known as Gudi Padwa in other parts of India.</p>
<h2 className="Aheader">Best Time to Visit Andhra Pradesh for holidays</h2>
<p className="Apara">The winter season between October and February is the best time to plan a trip to Andhra Pradesh as the temperature remains cool and pleasant. A trip to Andhra Pradesh can also be planned during the monsoon season as some of the hill stations could be best enjoyed at its verdant best. However, the state in summer season remains hot and humid, but tourists who don’t mind the scorching heat of the sun can make it to Andhra Pradesh.</p>
            </div>
            <h2 className="Aheader">Best Time to Visit Andhra Pradesh</h2>
            <div className="Adiv">
                <div className="Atrain">
                    <img src="https://www.tourmyindia.com/states/andhrapradesh/image/summer-ico.png" className="Aimg1"/>
                    <div>
                        <h3 className="Asheader">Summer Season</h3>
                        <p className="Aspara">Summers in Andhra Pradesh lasts from April to June. Temperature ranges between 25 to 45°C</p>
                    </div>
                </div>
                <div className="Atrain">
                    <img src="https://www.tourmyindia.com/states/andhrapradesh/image/mansoon-ico.png" className="Aimg1"/>
                    <div>
                        <h4 className="Asheader">Monsoon Season</h4>
                        <p className="Aspara">Monsoon season in Andhra Pradesh arrives in June and last till September. Temperature ranges between 25 to 35°C</p>
                    </div>
                </div>
                <div className="Atrain">
                    <img src="https://www.tourmyindia.com/states/andhrapradesh/image/winter-ico.png" className="Aimg1"/>
                    <div>
                        <h4 className="Asheader">Winter Season</h4>
                        <p className="Aspara">Winters start from October and last till February in Andhra Pradesh. Temperature ranges between 18°C to 25°C.</p>
                    </div>
                </div>
            </div>
            <div>
            <h2 className="Aheader">How to Reach Andhra Pradesh</h2>
            <div className="Adiv">
                <div className="Atrain">
                    <img src="https://www.tourmyindia.com/states/andhrapradesh/image/train.png" className="Aimg1"/>
                    <div>
                        <h4 className="Asheader">By Train</h4>
                        <p className="Aspara">If you want to travel to Andhra Pradesh by rail Nampally station is the best option. It is one of the busiest railway stations of Hyderabad.</p>
                    </div>
                </div>
                <div className="Atrain">
                    <img src="https://www.tourmyindia.com/states/andhrapradesh/image/air.png" className="Aimg1"/>
                    <div>
                        <h4 className="Asheader">By Air</h4>
                        <p className="Aspara">Hyderabad‘s Rajiv Gandhi International Airport is the best way to reach the state of Andhra Pradesh By air. It is the biggest airport of Andhra Pradesh. Daily flights are available.</p>
                    </div>
                </div>
                <div className="Atrain">
                    <img src="https://www.tourmyindia.com/states/andhrapradesh/image/bus.png" className="Aimg1"/>
                    <div>
                        <h4 className="Asheader">By Road</h4>
                        <p className="Aspara">Travelling to Andhra Pradesh by Road can be the best experience of life. Telangana is connected with Andhra Pradesh via NH 65 and NH 16 from Odisha. Good motorable roads connect Andhra Pradesh to the other cities in the state.</p>
                    </div>
                </div>
            </div>
            </div>
            <h2 className="Aheader">Few Travel Tips</h2>
            <div>
                <ul>
                    <li>Prepare your trip after acquainting yourself thoroughly with its weather Every season has its own charm but Winter is the best season to visit Andhra Pradesh.</li>
                    <li>Carry antibacterial creams, sunscreen lotions, woolen garments and a first aid kit.</li>
                    <li>Carry your identity proof with you at all times. You will be required to produce them at different check posts.</li>
                    <li>It is advisable to read about Andhra Pradesh’s policy about birds and animals, visiting sacred places and eco-tourism.</li>
                    <li>Cover yourself with travel insurance for theft, loss and mediclaim.</li>
                    <li>Be respectful and friendly towards people.</li>
                    <li>Do not leave your precious belongings in the vehicle.</li>
                </ul>
            </div>
        </div>
    );
}
export default AndhraPradesh;