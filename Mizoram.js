import React,{useState,useEffect,useRef} from "react";
import './Mizoram.css'
function Mizoram(){
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
                <center className="micenter">MIZORAM TRAVEL GUIDE</center>
                <p className="mipara">Tucked away in the thickets of green on the southern tip of Northeast India, Mizoram is a nature lover's paradise. Sandwiched between Bangladesh and Myanmar, this fifth smallest state in India is big on adventure with rugged terrains and gurgling rivers. It also boasts a rich historical and cultural heritage. That's not all, visit Mizoram, and be ready to be surprised by the locals' style quotient, apart from everything else.</p>
                <p className="mipara"><strong>Capital:</strong>Aizwal<strong>Location:</strong>Northeast India</p>
                <h3 className="miheader">BEST TIME TO VISIT MIZORAM:</h3>
                <p className="mipara">The months from December to March are the best for visiting Mizoram.</p>
                <h3 className="miheader">WHY VISIT MIZORAM?</h3>
                <p className="mipara">You should visit Mizoram for its lakes, waterfalls, hills, forests, lakes, caves, boating, bike riding, traditional cuisine, museums and concerts.</p>
                <h3 className="miheader">TEMPERATURE</h3>
                <div className="midiv">
                    <div className="midiv2">
                        <h3>33°C to 38°C</h3>
                        <p>Summer</p>
                        <p>March to June</p>
                    </div>
                    <div className='miline'>
                        <p>|</p>
                        <p>|</p>
                        <p>|</p>
                    </div>
                    <div className="midiv1">
                        <h3>23°C to 32°C</h3>
                        <p>Monsoon</p>
                        <p>June to September</p>
                    </div>
                    <div className='miline'>
                        <p>|</p>
                        <p>|</p>
                        <p>|</p>
                    </div>
                    <div className="midiv1">
                        <h3>10°C to 15°C</h3>
                        <p>Winter</p>
                        <p>November to March</p>
                    </div>
                </div>
                <div>
            <div className="carousel-container">
      <div className="slides" ref={slides}>
        <div className={`slide ${currentIndex === 0 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.byvOgfnHDFqGRIWFU6p8tAHaE8?w=289&h=180&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7" alt="Slide 1" />
        </div>
        <div className={`slide ${currentIndex === 1 ? 'active' : ''}`}>
          <img src="https://pbs.twimg.com/media/EHSjHuCUUAAS4qs?format=jpg&name=large" alt="Slide 2" />
        </div>
        <div className={`slide ${currentIndex === 2 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.CvuDb7gUJB87-P0Qd8CALgHaFj?pid=ImgDet&w=200&h=150&c=7&dpr=1.3" alt="Side 3" />
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
                <center className="micenter">An Insight into Mizoram Tourism</center>
                <div className="miinsight">
                    <div className="misep">
                        <p className="mipara">Mizoram Tourism is about enjoying all that nature has to offer, in the forms of lakes, valleys and rivers. A first time tourist may be surprised by the dense greenery that accompanies him everywhere. The state boasts as many as 21 hill ranges which extend throughout the state. The hills gain in height as they stretch from west to east. A major feature of its landscape are the lakes and rivers.</p>
                        <p className="mipara">some of the famous rivers of the state are Tut, Tlawng, Tuirial and Tuivawl. There are several lakes scattered across the state, and you can enjoy a boat ride on many of them. Those in search of adventure will find it in abundance here, thanks to the dense forests and places located at higher altitudes including Hmuifang Tlang and Vanzau. In many of its towns and cities you come across historical sites which witnessed a significant episode in its history.</p>
                        <p className="mipara">Many of the popular tourist places in Mizoram are also to be found in its cities and towns, the most famous of which are Aizawl, Champhai, Khawbung, Lunglei and Thenzawl. One of the top places to visit in Aizawl is Baktawng Village, where you come across the largest family in the world. This village is also home to Ziona Chana, a man who holds the Guiness World Record for the World’s Largest Family with 39 wives, 91 children, 33 grandchildren and 14 children in law.</p>
                        <p className="mipara">The district of Champai is very famous for the Murlen National Park. What makes this park special is the thickness of its forest covers, which has drawn comparisons to the forests found in the Amazon region in South America. The district of Thenzawl is also famous for one of the most beautiful waterfalls in the northeast. Located at a distance of about 137 km from Aizawl, Vantawng Falls are the highest waterfalls in the state and fall from a height of almost 750 ft. Although it can only be viewed from a distance, that hardly matters because even then it is an incredible sight. There is a tower from where you can view the waterfall.</p>
                        <p className="mipara">Mizoram is also popular for its lakes, with the two most famous among them being Palak Dil and Tam Dil. Palak Dil lake is one of the largest natural lakes in Mizoram and located in close proximity to a village called Phura. It may not seem like it at first sight, but this lake is home to a thriving wildlife.</p>
                    </div>
                    <div className="misep">
                        <p className="mipara">Beside some wetland and hill birds, it is also visited by Pintail Ducks during winters. Surrounded by mountain ranges on three sides, its isolation does much to enhance its beauty. The other famous lake is Tam Dil. Also known as Lake of Mustard, it lies in the midst of thick vegetation. Its waters are so clear that they reflect the huts, trees and mountains surrounding them. In 2010, a new frog species called leptolalax tamdil (its scientific name) was spotted at this lake.</p>
                        <p className="mipara">Exploring the wildlife is another of the sightseeing & tourist attractions in Mizoram. Two of the famous parks here are Dampa Tiger Reserve and Murlen National Park. Dampa Tiger Reserve is the largest wildlife sanctuary in the state and is dominated by tropical forests.</p>
                        <p className="mipara">It is a part of Project Tiger and is home to a variety of flora and fauna. Several rare ginger species have been reported in the park. Even though it is called a tiger reserve, it is home to a very large number of clouded leopards. Murlen National Park, besides its flora and fauna, is famous for the thickness of its vegetation cover. It is so thick that only a fraction of sunlight manages to penetrate through it. The park is also home to trees that are over 350 years old. Apart from these two wildlife parks, there is Lengteng Wildlife Sanctuary which is located in the Champhai district. It is named after Mt. Lengteng which is the second highest mountain in the state with a height of 2141m. A particular attraction in this park is Vavu, the endangered state bird. Some of the mammals found in the park are leopard, slow loris, stump tailed macaque and Asiatic black bear. Rhododendrons and cherry are prominently noticeable by their presence.</p>
                        <p className="mipara">Another of the must visit places during your trip to Mizoram is the village of Falkawn. In this village, you get to observe the traditional lifestyle of the people. It was created by the Department of Art and Culture and has been modelled after the villages inhabited by the Lusei tribe. In the village, you also come across an enormous stone commemorating the lives of Mizo people who lost their lives fighting against British colonisation.</p>
                        <p className="mipara">Plan a trip with Mizoram holiday packages and you can be sure of having a great time with the unbeatable deals and offers. Book your holiday trip to Mizoram and get ready for some unlimited fun and adventure.</p>
                    </div>                    
                </div>
            </div>
        </div>
    );
}
export default Mizoram;