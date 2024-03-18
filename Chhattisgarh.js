import React,{useState,useEffect,useRef} from "react";
import './Chhattisgarh.css';
function Chhattisgarh(){
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
            <center className="chatcenter">CHHATTISGARH TRAVEL GUIDE</center>
            <div>
                <p className="chatpara">Chhattisgarh, one of the few landlocked states in central India, is a treasure house of natural beauty. Tourists wanting to experience the raw side of nature will find themselves at home here. It is its rusticity that makes you fall in love with it. Dense forests abound in the state, and in them, reside various tribes, each with their unique customs, traditions and way of life. The points of tourist interest in Chhattisgarh also include ancient temples and towns which have constantly attracted historians and archaeologists. There are plenty of wildlife sanctuaries which house a rich wildlife, with the gaur never ceasing to surprise onlookers. Other must visit tourist attractions include dams, museums and waterfalls.</p>
                <p className="chatpara"><strong>Capital: </strong>Raipur<strong>Location:</strong>Central India</p>
                <h2 className="chatheader">BEST TIME TO VISIT CHHATTISGARH:</h2>
                <p className="chatpara">The months from October to March are the best time for visiting Chhattisgarh.</p>
                <h2 className="chatheader">WHY VISIT CHHATTISGARH?</h2>
                <p className="chatpara">Visiting Chhattisgarh means enjoying its waterfalls, natural beauty, tribal culture, handicrafts, temples, wildlife, waterfalls, hill stations, monuments, temples, caves, trekking, boating, bird watching, sightseeing, archaeological sites, adventure, arts & crafts and cuisine.</p>
                <h2 className="chatheader">TEMPERATURE</h2>
                <div className="chatdiv">
                    <div className="chatdiv2">
                        <h3>34°C to 45°C</h3>
                        <p>45°C</p>
                        <p>March to May</p>
                    </div>
                    <div className='chatline'>
                        <p>|</p>
                        <p>|</p>
                        <p>|</p>
                    </div>
                    <div className="chatdiv1">
                        <h3>32°C to 43°C</h3>
                        <p>Monsoon</p>
                        <p>June to October</p>
                    </div>
                    <div className='chatline'>
                        <p>|</p>
                        <p>|</p>
                        <p>|</p>
                    </div>
                    <div className="chatdiv1">
                        <h3>13°C to 25°C</h3>
                        <p>Winter</p>
                        <p>November to February</p>
                    </div>
                </div>
            </div>
            </div>
            <div>
            <div className="carousel-container">
      <div className="slides" ref={slides}>
        <div className={`slide ${currentIndex === 0 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.DanhyY20P9V1pwA0gJCn8AHaD4?w=316&h=180&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7" alt="Slide 1" />
        </div>
        <div className={`slide ${currentIndex === 1 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.AlKHd9JM2jBxczCkQZvAmgHaE1?w=308&h=180&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7" alt="Slide 2" />
        </div>
        <div className={`slide ${currentIndex === 2 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.OSUbzdwGjBh12L3HTe8ZawHaEK?w=319&h=180&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7" alt="Side 3" />
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
            <center className="chatcenter">An Insight into Chhattisgarh Tourism</center>
            <div className="chatinsight">
                <div className="chatsep">
                    <p>Travelling to Chhattisgarh is like planning a trip to ultimate bliss. The state is blessed generously by nature and you come across examples of that every few miles. Its landscape, which is dominated for the most part by dense forests, is dotted with waterfalls, caves and a rich wildlife. Located in central India, it offers its fair share of adventure, sightseeing and exploration. The state is home to many temples and some towns which trace their origin to historical times, thus fascinating tourists, historians and archaeologists constantly. To escape the sweltering heat during summers, nature has gifted it with several hill stations, each as beautiful as the other. If you prefer coming close to modernity, head towards Raipur, its capital city which boasts an impressive number of multiplexes, cafes, restaurants, malls and markets. An outing can also include a visit to its museums which introduce you to its tribal heritage, history, food habitats and other artefacts of the various tribal communities.</p>
                    <p>One cannot gain an insight into Chhattisgarh tourism without mentioning its tribal culture, which traces its origins to ancient times. As a tourist, you will be fascinated by the numerous tribes inhabiting this region which are culturally diverse from each other. Some of the most famous of them are Gonds, Abhuj Maria, Bison Horn Maria, Halba and Dhurvaa. Among these, people belonging to the Bison Horn Maria tribe are easily distinguished by their headdress. These are designed in a way that they resemble the horns of a wild bison. Their clothing is often bright and colorful, with the use of cotton being dominant. Women wear knee length saris. Both men and women share a love for jewellery, with the most popular items being wooden bangles, metal casts and silver ghungroos. They get their source of entertainment from cock fights and tribal dances. Some of the popular dances are Karma, Sua Nacha, Pandavani, Raut Nacha, Panthi Dance and Jhirliti. You can get a glimpse of the tribal art and culture at the museums, or exploring a village.</p>
                    <p>Among the most popular tourism places in Chhattisgarh are its waterfalls. The king of waterfalls is the Chitrakote Falls, which, due to its height and width, is also known as the “Niagara Falls of India”. Located to the west of Jagdalpur city on the Indravati river, it falls ferociously from a height of almost 100ft. You can hear it from a distance, and upon arrival, will find out that it’s nothing short of a spectacle. The other famous waterfall is the Tirathgarh Falls, which are formed when the River Kanger cascades over seven steps before landing with a ferocious drop. The best part is, you can view these falls from a close proximity. Other famous waterfalls in the state are Mendri Ghoomar, Amritdhara, Rajpuri, Chhuri, Tiger Point, Rakasganda, Devdhara, Kailash Gufa and Kendai.</p>
                </div>
                <div className="chatsep">
                    <p>To explore the tribal heritage of Chhattisgarh, you must visit its museums. One of these is Mahant Ghasidas Sangrahalaya. Located in Raipur, the state’s capital, it was established in 1875 and built by Raja Mahant Ghasidas of Rajnandgaon. Here, you come across a diverse collection of exhibits and artefacts dating back to the Stone Age. The Sculpture Gallery houses stone idols of various gods and goddesses. Other galleries inside the museum are natural history, anthropology, tribal, ancient arms and armoury. Purkhauti Muktangan Museum is another place to explore and understand the tribal culture, art, heritage, and basically anything else about them. This open air museum showcases the habitat, folk dances, artefacts and food habits of the tribals.</p>
                    <p>If a spiritual and religious experience is what you are after, then there are several temples which you can visit. The most important of these is Maa Bamleshwari temple in the city of Dongargarh. Situated on a hilltop at almost 1,600ft, the temple complex is actually home to two temples, Badi Bamleshwari and Chhoti Bamleshwari. These are visited by a large number of tourists during the occasions of Dussehra and Ram Navami. A major attraction during this time is the fair. It is also the only place in the state where you can enjoy a ropeway ride, and this in itself delights visitors to no end. Danteshwari Temple is another temple enthusiastically visited by tourists in large numbers. It is one of those temples which is revered by both HIndus and tribals. Built by the Chalukya kings of Bastar in honour of their family goddess, Devi Danteshwari, its main attraction is the sanctum sanctorum, which, it is widely believed, was built more than 800 years back. An interesting tradition of the temple is that men have to wear a lungi before entering the temple. Bhoramdeo Temple, also known as the Khajuraho of Chhattisgarh, is one of the ancient temples of the state. It gets its name after the similarity in its design and structure to that temple. Dedicated to Lord Shiva, it was built somewhere between the 7th to 11th century AD by King Ramchandra of Nag dynasty. Its location also does much to enhance its overall beauty.</p>
                    <p>Among other top things to do in Chhattisgarh, one is visiting its wildlife sanctuaries and tiger reserves. Among the most famous of them is Guru Ghasidas National Park, which is home to an incredible wildlife. Some of the mammals commonly spotted are jackals, four horned antelopes, striped hyena, sloth bear, wild dogs, porcupines and monkeys. The park is also home to around 309 species of birds and is also visited by migratory birds. Other famous national park is the Kanger Valley National Park. Located on the banks of the Khola River, it is particularly noted for the diversity in its topography, which is characterized by plateaus, streams, steep slopes and valleys. It is also reputed to be one of the few regions in India which is home to untouched forests. The wildlife here includes mammals ranging from tigers, leopards, barking deer, jackals, wild boar and monitor lizards to snakes. The various kinds of avi fauna like hill myne, red jungle owls, spotted owlets, peacocks, parrots and steppe eagles are also found in this sanctuary. To watch the majestic Royal Bengal Tiger, you should visit the two tiger reserves in the state, Achanakmar Tiger Reserve and Indravati Tiger Reserve.</p>
                </div>
            </div>
        </div>
    )
}
export default Chhattisgarh;
