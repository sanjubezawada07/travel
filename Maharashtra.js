import React,{useState,useEffect,useRef} from "react";
import './Masharastra.css';
function Maharashtra(){
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
                <center className="mahcenter">MAHARASHTRA TRAVEL GUIDE</center>
                <p className="mahpara">The third largest state and the second most populous state in India - Maharashtra - is brimming with an array of colorful shrines; a remarkable collection of caves; golden beaches lined with swaying palm trees; historic hotspots with strong past connection; and oodles of emerald hill stations under the canopy of lush western ghats. With an incredible mashup of everything, there's is no better place to go for a holiday in India than Maharashtra.The state is primarily known for its ancient Ellora and Ajanta caves, and pilgrim destinations. Plan a holiday in Maharashtra to witness the dazzling range of experience, beautiful landscapes and years of history.</p>
                <p className="mahpara"><strong>Capital:</strong>Mumbai<strong>Location:</strong>Westren India</p>
                <h3 className="mahheader">BEST TIME TO VISIT MAHARASHTRA:</h3>
                <p className="mahpara">If travelling to Maharashtra, monsoon (June to August) season would be the best time to visit</p>
                <h3 className="mahheader">WHY VISIT MAHARASHTRA?:</h3>
                <p className="mahpara">Witness the art from the past; slip in the madding crowd; get drenched in the luscious colors of its hill station; go crazy on the capsizing waves; experience the iconic attractions of India - do all these and much more on a trip to Maharashtra.</p>
                <h3 className="mahheader">TEMPERATURE</h3>
                <div className="mahdiv">
                    <div className="mahdiv2">
                        <h4>28.8°C & 36.9°C</h4>
                        <p>Summer</p>
                        <p>April to June</p>
                    </div>
                    <div className='mahline'>
                        <p>|</p>
                        <p>|</p>
                        <p>|</p>
                    </div>
                    <div className="mahdiv1">
                        <h4>25.3°C & 29.4°C</h4>
                        <p>Monsoon</p>
                        <p>July to september</p>
                    </div>
                    <div className='mahline'>
                        <p>|</p>
                        <p>|</p>
                        <p>|</p>
                    </div>
                    <div className="mahdiv1">
                        <h4>20.5°C & 31.9°C</h4>
                        <p>Winter</p>
                        <p>October to February</p>
                    </div>
                </div>
                <div>
            <div className="carousel-container">
      <div className="slides" ref={slides}>
        <div className={`slide ${currentIndex === 0 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.ki6QHuMQLVPGk-AY9jgL9wHaE7?rs=1&pid=ImgDetMain" alt="Slide 1" />
        </div>
        <div className={`slide ${currentIndex === 1 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.92xG8TMRxRoghlrUaT8-nAHaE8?w=264&h=180&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7" alt="Slide 2" />
        </div>
        <div className={`slide ${currentIndex === 2 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.Nyu-HdLfw_UjnwAS3x070wHaE8?w=260&h=180&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7" alt="Side 3" />
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
                    <center className="mahcenter">An Insight to Maharashtra Tourism</center>
                    <div className="mahinsight">
                        <div className="mahsep">
                            <p>Vast, varied, vibrant and extremely vivacious - Maharashtra has a thing when it comes to urbanization and rapid development that is hard to find anywhere else in India. It's a paradisiacal paradox -subtle yet energetic; wild but manicured, and hushes yet fueled by rapid urbanization. Along with its stronghold on commercialism, Maharashtra is a winner in the category of tourism too. In this 307,713 km2 land, which makes it the third largest state in India, there are some irresistible holiday destinations that are not only meant for the nature lovers but also for the religiously inclined travelers. For a vacation in Maharashtra, there is abundance natural beauty to soothe the senses; beaches that are the best places to unwind; exceptional shrines that are the epitome of architectural excellence and rich flora and fauna that makes it a biodiversity hotspot. In nutshell, Maharashtra is untouched, intriguing, captivating, and picture as perfect.</p>
                            <p>To begin the brief introduction of Maharashtra, it's important to know about its origination. As per the historical records, one can see the traces of Maharashtra since the days of Maurya Empire in the 4th and 3rd centuries BCE. Later it has witnessed the presence of many rulers - Western Satraps, Gupta Empire, Gurjara-Pratihara, Vakataka, Kadambas, Chalukya Empire, Rashtrakuta Dynasty, Western Chalukya, and Yadava. Amongst all these, the most talked about were the rulers of Marathas, who were later dethroned by the British after the Third Anglo-Maratha War. The presence of much unique distinctive dynastic remains reflecting through their archeological treasures, which are counted amongst the popular places to visit in Maharashtra.</p>
                            <p>Over a long period of time, Maharashtra has witnessed the rule of different rulers. And the testaments of the same can be seen over in its forts, caves, and places. There are over 350 vestiges in Maharashtra but the primarily known are Ajanta Ellora caves. An outstanding specimen of ancient Indian architectural heritages, all these caves are shrines cut out of the rock by hand. Other prominent tourist's places to visit for a heritage sightseeing tour are Raigadh Fort, Vijaydurg Fort, Sindhudurg Fort, Pratapgadh Fort, Shaniwar Wada, Lal Mahal, Ahmednagar Fort, Bibi Ka Maqbara, and Daulatabad Fort. Some architectural masterpieces of Maharashtra have a colonial touch like Gateway of India, Rajabai Clock Tower and Chhatrapati Shivaji Maharaj Terminus. Portuguese too has left their mark in Maharashtra in the form of the Vasai Fort, which was initially built a ship building site.</p>
                            <p>No doubt it’s important to know about history but it’s the culture that best defines a state. And when it comes to Maharashtra, there are many things associated with it, which can be seen through the lifestyle of the people, be it from the urban or rural area. The local cuisines of Maharashtra, which changes every season, grabs a lot of attention for its flavourful spices. As such, there is no staple diet that people of Maharashtra follow, it changes from region to region, but fish curries and rice are prominent on the coastal belt, while spicy mutton curries are a favorite in the east Maharashtra. Vada pav, Pav Bhaji, chaat and puneri missal, selucha chana are a must try street food on Maharashtra holiday.</p>
                            <p className="mahpara"> The place is gradually making a mark on an international platform as well. For upcoming vacation, if considering Maharashtra as an option then book the holiday package right away with Tour My India. The Maharashtra travel packages available at Tour My India ranges from weekend getaways to heritage tour to honeymoon. And even one can get a tailor-made made packages.From hotel bookings to transportation, everything will be a part of these travel packages. The packages will include a visit to all the famous attractions and make sure that travelers get the whimsical experience.</p>
                        </div>
                        <div className="mahsep">
                            <p className="mahpara"> Isn't Maharashtra fascinating enough to go for a holiday or a weekend getaway? And all thanks to Maharashtra tourism,.When it comes to culture, the traditional dance forms of Maharashtra - Powada, Lavani, and Koli are hard to miss. Carried out by the locals wearing colorful Nauwari saadi or Lugda (women), and Dhotar (men) during the festival celebrations, the beats of these dance performances gets one into a craving for more. Undoubtedly, festivals are the best time to go on a vacation to Maharashtra as this when one can see the rich culture, heritage, and ethnicity of the state. While the most highly visible festival maybe the Ganesh Chaturthi. But festivals like Gudi Padwa, Naga Panchami, Marabats and Badgyas are too celebrated with as much enthusiasm and spirit.</p>
                            <p className="mahpara">Maharashtra is synonymous to Mumbai, it's capital city that is known for its pulsating rich lifestyle that never comes to down still. And Mumbai is the nexus of the prolific global film industry - Bollywood; that's what exactly charms tourists the most. An undisputed movie-making center of India, Mumbai is the place where all the drama and dance of Bollywood takes place. It's a fast pacing city thriving with many cultures and has many top tourist attractions to visit like Mahim Beach, Juhu, Hanging Garden, Sanjay Gandhi National Park, Siddhi Vinayak Mandir, Haji Ali Dargah, and Gateway of India. So when on a visit to Mumbai take a hop-on-hop-off city tour and feast your eyes on some of the classiest movie sets.</p>
                            <p className="mahpara">Along with Bollywood, Maharashtra takes pride in is its lush canopies that together form the western ghats, a biodiversity hotspot. Under the shadow of the western ghats, which mostly locals call Sahyadri Ranges, many hilly hamlets are blooming, the cool aura which even drew Britons upwards and downwards during the British Raj era. Mahabaleshwar, Panchgani, Matheran, Mhaismal, Lonavala, Khandala, Amboli, and Malshej Ghat are the famous summer getaways of Maharashtra, and they are accessible too. Most of them must be having the similar silhouette, but each has its unique characteristic charm, charisma, and allure. Some them are rising high and tall to create a thumbs up, some are getting straight down into the Arabian sea, while another mender around waterfall and lakes.</p>
                            <p className="mahpara">Besides the hill stations, the eastern region of Maharashtra has some of the most promising national parks, where there are chances to spot tigers and many other mammals and birds. All in all, there are six wildlife reserves in Maharashtra that attracts an impressive range of animals, including Crocodiles, Bisons, Gawas, Neelgais, and numerous other avian species. Amongst all these parks, the must visit for wildlife tours are Tadoba National Park and Navegaon National Park, which keeps on buzzing with tourists even in the offseason to seek relaxation, and jeep safaris.</p>
                            <p className="mahpara">If ever made a travel guide of Maharashtra, no wonder it will turn out to be a thick book with major emphasis on pilgrimage holidays. Bestowed with five Jyotirlingas; two Shakti Peethas; one Panj Takht; beautiful churches; gigantic mosques; and a city that plays host to the grand Kumbh Mela- Nashik, Maharashtra is blessed by the presence of all the gods. Not only to Hindus, here one can find a good number of temples of various cultures knitted together, making it look a class apart. For Hindus, many pilgrimage circuits are there in Maharashtra but the prominent one is Ashtavinayaka, referring to eight Ganesha temples. Aundhya Nagnath, Parali Vaijnath, Bhimashankar, Trimbakeswar, Grishneshwar, Shree Siddhivinayak Temple, Shrimant Dagdusheth Halwai Ganpati Temple and Ganpatipule Temple are the places that one shouldn't miss on Maharashtra pilgrimage tour.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
export default Maharashtra;