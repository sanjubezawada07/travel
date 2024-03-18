import React,{useState,useEffect,useRef} from "react";
import './Madya.css';
function Madhyapradesh(){
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
                <h3 className="mheader">About Madhya Pradesh Tourism (MP)</h3>
                <p className="mpara">Welcome to the heart of India, Madhya Pradesh, a state which exudes timelessness in every way. The exotic land is an intoxicating mixture of rich history, vibrant sights, awe inspiring art and shrines. From north to south, east to west, Madhya Pradesh is adorned with beautiful tourist attractions. On the state's rugged northern side, there are the famous temples of Khajuraho. Never before was sensuality and spirituality depicted as artistically as here. Two of India's most famous wildlife sanctuaries- Kanha and Bandhavgarh are embracing the state's area. Towards the southwest are the Buddhist stupas of Sanchi and 15th-century citadels of Mandu. Madhya Pradesh tourism offers you a wonderful mix of nature, heritage, wildlife and spirituality.</p>
                <p className="mpara">The state shares its borders with 6 states of India – Chhattisgarh towards south-east, south-west border touches "Maharashtra", western border touches "Gujarat", north-west border touches "Rajasthan", and north-east border touches "Uttar Pradesh".</p>
                <h3 className="mheader">India’s Tiger State!</h3>
                <p className="mpara">Wildlife is a major part of Madhya Pradesh tourism. It is India’s “Tiger State'', with more than 526 tigers. Have you read the famous classic novel, The Jungle Book? The adventures of the little boy, Mowgli with Sher Khan and Bagheera, thrilled us as kids. It was the charm of Kanha and Pench National Parks that inspired Rudyard Kipling to write this book. Bandhavgarh National Park in Madhya Pradesh has the highest density of tiger population in India. Spotting a tiger here, or in the other wildlife parks, is quite easy. The other famous national parks in Madhya Pradesh are Bandhavgarh Tiger Reserve, Panna National Park and Pench National Park. Some of the wildlife sanctuaries in Madhya Pradesh are Bori, Bagdara, Phen, Ghatigaon, Ken Gharial and Pachmarhi.</p>
                <h3 className="mheader">Heritage dating back thousands of years!</h3>
                <p className="mpara">The rich heritage of Madhya Pradesh can be seen in its palaces, forts, caves and monuments. There are five UNESCO World Heritage Sites in Madhya Pradesh. Amongst these is the Bhimbetka Rock Shelters, a UNESCO World Heritage Site. The cave paintings in these rock shelters are believed to be more than 30,000 years old. No mention of top heritage sites is complete without mentioning Khajuraho. The Khajuraho Group of Monuments is a UNESCO World Heritage Site too. The temples, built between 950-1050 AD, represent spirituality, meditation and wrestling. Human sensuality is also depicted in the most artistic manner.</p>
                <p className="mpara">Another UNESCO World Heritage Site is the Buddhist Group of Monuments at Sanchi. You can explore the monasteries, stupas and an Ashokan pillar. The two cities, Gwalior and Orchha, are UNESCO World Heritage Cities. Gwalior Fort, Bateshwar and Jai Vilas Palace are top tourist attractions of Gwalior. In Orchha, Ram Raja Temple, Chaturbhuj Temple and Laxmi Narayan Temple are some must visit heritage attractions. Some other popular heritage tourist attractions are located in Mandu, Burhanpur and Chanderi.</p>
                <h3 className="mheader">Numerous options for adventure too!</h3>
                <p className="mpara">Options for adventure abound in Madhya Pradesh. Parasailing, river rafting, trekking, camping and mountain climbing are various adventure activities available. Mountaineering can be enjoyed in the Maikal Hills region from January-May & October-December. Mountaineering can be enjoyed from November to December & January to April at Lanjee Giri in Pachmarhi. River rafting is a water sports activity which is extremely popular in Madhya Pradesh. The entire rafting expedition takes about 3 hours.</p>
                <p className="mpara">It takes you across Orchha Wildlife Sanctuary and further downstream to Kanchan Ghat. The Rapids range from 1 to 2. Monsoons are the best time to enjoy it. Trekking is by far the most popular adventure activity in Madhya Pradesh. The most famous treks in Madhya Pradesh are Kanha Trek, Pachmarhi Trek and Amarkantak Trek. Photographers will be presented with a lot of opportunities to capture some incredible picturesque shots. The trekking routes takes you through the diverse landscape & natural beauty of Madhya Pradesh.</p>
                <h3 className="mheader">Natural richness of Madhya Pradesh</h3>
                <p className="mpara">The richness of natural beauty in Madhya Pradesh can be seen in its waterfalls, caves and gigantic marble rocks. There are places like Bhedaghat, where enormous marble rocks stand alongside the River Narmada. There is a 10th century Chaunsath Yogini Temple. As if the visual spectacle wasn't enough, a boat ride at these moonlit rocks enhances your experience. Another great natural attraction is Tamia, a forest destination. Tranquility resides in Tamia, it’s untouched feel is enticing.</p>
                <p className="mpara">There are some houses dating back to the British era. Parsili is another natural attraction in Madhya Pradesh. Stretched out on the banks of River Banas, it’s famous for its soft moist sand bed, which runs to almost 4 kilometers. You should definitely visit this place if you love birds though. It’s an ideal place to visit, and is home to numerous exotic species of birds. The famous Sanjay Dubri National Park is located just 10 kilometers from Parsili.</p>
                <p className="mpara">While visiting Madhya Pradesh, you should visit the lakes too. Most of the famous lakes like Bhojtal, Lower Lake, Moti Lake and Sharangpani Lake are located in Bhopal. The waterfalls of Madhya Pradesh deserve a separate mention. They are found in all the parts of the state: North, South, East and West. The top waterfalls in Madhya Pradesh are Bahuti Falls in Rewa (466 feet), Kapildhara Waterfalls in Anuppur (100 feet), Pandav falls in Panna (98 feet), Shambudhara Falls in Anuppur (114 feet) and Doodh Dhara Falls in Amarkantak (10 feet).</p>
                <h3 className="mheader">Sanchi Stupa, Mahakaleshwar Temple & other pilgrimage sites!</h3>
                <p className="mpara">Madhya Pradesh is home to Mahakaleshwar Temple in Ujjain, one of the 12 Jyotirlingas in India. This makes it a major pilgrimage site for Hindus. Ujjain is also one of the seven sacred sites which host the Kumbh Mela. The city of Maheswar, situated on the banks of the holy River Narmada, is called the “Varanasi of Central India.” Located in the district of Khargaon, it has numerous temples dedicated to Lord Shiva. Other famous Hindu pilgrimage sites are Amarkantak, Omkareshwar, Orchha and Chitrakoot.</p>
                <p className="mpara">The famous mosques are Jama Masjid, Moti Masjid and Taj-ul-Masjid. The Buddhist Monuments in Sanchi are a UNESCO World Heritage Site and a major Buddhist pilgrimage destination. You come across the oldest temples, monasteries and the great Sanchi Stupa. Built in 262 BC, by the Mauryan emperor Ashoka, it is one of the oldest stone structures in India.

                Madhya Pradesh also has numerous gurudwaras, with some of them being Gurudwara Shri Badi Sangat Patshahi Dasvin Sahib in Burhanpur, Gurudwara Shri Gwarighat Sahib in Jabalpur and Gurudwara Shri Data Bandichod Sahib in Gwalior.</p>
                <h3 className="mheader">Witness its rich history and heritage in its museums!</h3>
                <p className="mpara">Madhya Pradesh has a rich history and heritage. The famous museums contain exhibits like paintings, sculptures and artefacts dating back to ancient times. The Sanchi Museum is one such famous museum. It contains sculptures, paintings and artefacts starting from the 3rd century BC. The Lion Capital of Ashoka, which is India’s emblem, is a part of the museum.

                Other attractions inside the museum are objects belonging to Maurya, Sunga, Satvahana, Kushana, Gupta and post Gupta period. Other museums in Madhya Pradesh that you should visit are Archaeological Museum in Chanderi, Asi Museum in Khajuraho, Asi Museum in Mandu, Rani Durgavati Museum in Jabalpur and State Museum in Bhopal.</p>
                <h3 className="mheader">Festivals that reflect its rich culture, traditions & customs!</h3>
                <p>Madhya Pradesh is one such land in India that emits vibrancy from every nook and corner. The heart of India hosts the best cultural and heritage festivals that can't be seen anywhere else in the world. People of various castes, religions and tribes are currently nestled in Madhya Pradesh. All these fairs and festivals interweave souls of different religions and drench them in the color of festivities. Some of the famous festivals and fairs celebrated in Madhya Pradesh are Lokrang, Khajuraho, Akhil Bharatiya Kalidas Samaroh, Holi and Ujjain Kumbh.</p>
                <h3 className="mheader">Best Time for Visiting Madhya Pradesh for Holidays</h3>
                <p className="mpara">Madhya Pradesh can get extremely hot during the summer season. During the winter season, the temperature is cool and ideal for sightseeing or enjoying other activities. If you visit it during the monsoon season, you can watch the waterfalls in all their glory.</p>
            </div>
        <div>
            <h2>Best Time to Visit Madhya Pradesh</h2>
                <div className="mdiv">
                    <div className="msdiv">
                        <img src="https://www.tourmyindia.com/states/madhyapradesh/image/summer-ico.png" className="mimg"/>
                        <div>
                            <h3 className="msheader">Summer Season In Madhya Pradesh</h3>
                            <p className="mspara">Summers in Madhya Pradesh last from March to June. Temperature ranges between 38°C to 42°C.</p>
                        </div>
                    </div>
                    <div className="msdiv">
                        <img src="https://www.tourmyindia.com/states/madhyapradesh/image/mansoon-ico.png" className="mimg"/>
                        <div>
                            <h3 className="msheader">Monsoon Season In Madhya Pradesh</h3>
                            <p className="mspara">Monsoon arrives in July and lasts till September. Temperature ranges between 32°C to 37°C.</p>
                        </div>
                    </div>
                    <div className="msdiv">
                        <img src="https://www.tourmyindia.com/states/madhyapradesh/image/winter-ico.png" className="mimg"/>
                        <div>
                            <h3 className="msheader">Winter Season In Madhya Pradesh</h3>
                            <p className="mspara">Winters start from November and last till February. The temperature ranges between 10°C to 25°C. The weather during this time is extremely pleasant.</p>
                        </div>
                    </div>   
            </div>
        </div>
        <div>
            <div className="carousel-container">
      <div className="slides" ref={slides}>
        <div className={`slide ${currentIndex === 0 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/R.bf95d96905daadf03054a618432dfcc7?rik=jFz%2b0n7us7Ty1g&riu=http%3a%2f%2fwww.trawell.in%2fimages%2fpics%2fmadhya-pradesh_hh_main.jpg&ehk=itoMiRx6zSSVs8szh7BHJxMpHYaqV8ygh6FEbjajqMg%3d&risl=&pid=ImgRaw&r=0" alt="Slide 1" />
        </div>
        <div className={`slide ${currentIndex === 1 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th?q=Mhow+Madhya+Pradesh&w=120&h=120&c=1&rs=1&qlt=90&cb=11&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=strict&t=1&mw=247" alt="Slide 2" />
        </div>
        <div className={`slide ${currentIndex === 2 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th?q=Madhya+Pradesh+Dance+Form&w=120&h=120&c=1&rs=1&qlt=90&cb=11&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=strict&t=1&mw=247" alt="Side 3" />
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
                <h1>How to Reach Madhya Pradesh?</h1>
                    <div className="mdiv">
                        <div className="msdiv">
                            <img src="https://www.tourmyindia.com/states/madhyapradesh/image/air.png" className="mimg"/>
                            <div>
                                <h3 className="msheader">By Train</h3>
                                <p className="mspara">There are at least 20 major railway stations in Madhya Pradesh which run trains to all the major parts of the country. There are direct trains from Delhi, Mumbai, Bangalore and other major cities of India.</p>
                            </div>
                        </div>
                        <div className="msdiv">
                            <img src="https://www.tourmyindia.com/states/madhyapradesh/image/train.png"/>
                            <div>
                                <h3 className="msheader">By Air</h3>
                                <p className="mspara">There are 5 airports with excellent connectivity. The largest airport is Devi Ahilyabai Holkar Airport, about 8 kilometers from Indore. Raja Bhoj International Airport is the international airport.</p>
                            </div>
                        </div>
                        <div className="msdiv">
                            <img src="https://www.tourmyindia.com/states/madhyapradesh/image/bus.png" className="mimg"/>
                            <div>
                                <h3 className="msheader">By Road</h3>
                                <p className="mspara">Madhya Pradesh has 20 national highways including NH-7, NH 12-A, NH-25, NH-26 and NH-27. The major interstate bus terminals are in Gwalior, Indore, Jabalpur and Bhopal.</p>
                            </div>
                        </div>
                    </div>
        </div>
        <h3 className="mheader">Major Activities for Tourists in Madhya Pradesh</h3>
        <div className="minsight">
            <div className="msep">
                <p className="mpara"> Heritage is a major part of the state, and you should try to explore during your holidays in Madhya Pradesh. The most famous heritage sites are Sanchi, while 5 of them are UNESCO World Heritage Sites. Sanchi, Bhimbetka Rock Shelters, Khajuraho Group of Monuments and Buddhist Group of Monuments at Sanchi are the most popular ones.You absolutely can miss out on the rich wildlife while travelling to Madhya Pradesh. The most famous wildlife sanctuaries and national parks in Madhya Pradesh are Kanha, Bandhavgarh, Panna and Pench.</p>
                <p className="mpara"> Spiritual seekers and those with a spiritual bent of mind should visit the top religious sites in Madhya Pradesh like Maheshwar, Mahakaleshwar Temple, Omkareshwar, Amarkantak, Chitrakoot, Jama Masjid and Moti Masjid.</p>
            </div>
            <div className="msep">
                <p className="mpara"> There are so many activities that you can try in Madhya Pradesh.Adventure enthusiasts can look forward to numerous adventure activities like mountaineering, water sports, trekking and river rafting.  The Buddhist Group of Monuments at Sanchi are an absolutely must visit. The state of Madhya Pradesh is also blessed with beautiful natural attractions. One of these is Bhedaghat, famous for its enormous marble rocks which run alongside the River Narmada.</p>
                <p className="mpara">Other must visit natural attractions in Madhya Pradesh are Tamia, Parsili and Sanjay Dubri National Park. There are so many options for tourists looking to have an enjoyable time in Madhya Pradesh!</p>
            </div>
        </div>
</div>
    )
}
export default Madhyapradesh;
