import React,{useState,useEffect,useRef} from "react";
import './Dadra.css';
function DadraAndNagarHaveli(){
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
                <center className="dcenter">DADRA & NAGAR TRAVEL GUIDE</center>
                <p className="dpara">A perfect serene and sylvan land, Dadra and Nagar is a tourist destination to spend a perfect vacation with family and friends. The delightful place let the tourists experience nature at its best with lush green forests, massive waterfronts, meandering rivers, a variety of flora and fauna. Besides this, tourists will even get the opportunity to experience fine Portuguese architecture and tribal culture of Silvassa- the capital of Dadra and Nagar Haveli. Being a perfect place for both native and travellers, Dadra and Nagar Haveli beckons a travel experience unlike any other. For tourists planning to visit this amazing holiday destination, the travel guide will let one know what all is to be covered when spending a peaceful and calm vacation in Dadra and Nagar Haveli.</p>
                <h3 className="dheader"><strong>Capital:</strong>SAilvassa<strong>Location:</strong>Westren India</h3>
                <h2 className="dheader">BEST TIME TO VISIT DADRA AND NAGAR HAVELI:</h2>
                <p className="dpara">A trip to Dadra and Nagar Haveli can be planned during the winter season between November and February when the place enjoys a pleasant climate. Also, tourists can even consider visiting the tourism destination during the summer season between April and June as the summer temperature is not very high due to its proximity to the sea. The nights in Dadra and Nagar Haveli is cool and pleasant making it perfect to unwind.</p>
                <h2 className="dheader">WHY VISIT DADRA AND NAGAR HAVELI?</h2>
                <p className="dpara">For pristine nature, architecture, wildlife, sightseeing, nature, shopping, festivals seafood.</p>
                </div>
                <h2 className="dheader">TEMPERATURE</h2>
                <div className="ddiv">
                <div className="ddiv2">
                    <h4>22°C to 36°C</h4>
                    <p>summer</p>
                    <p>March to June</p>
                </div>
                <div className="ddiv1">
                    <h4>25°C to 30°C</h4>
                    <p>Monsoon</p>
                    <p>June to September</p>
                </div>
                <div className="ddiv1">
                    <h4>18°C to 31°C</h4>
                    <p> Winter</p>
                    <p>November to March</p>
                </div>
            </div>
            <div>
            <div className="carousel-container">
      <div className="slides" ref={slides}>
        <div className={`slide ${currentIndex === 0 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.2JQVx60Wck-zIRfVljFMjwHaEK?w=322&h=181&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7" alt="Slide 1" />
        </div>
        <div className={`slide ${currentIndex === 1 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.v9avX_jROw4mVvos8tim1AHaEK?w=326&h=180&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7" alt="Slide 2" />
        </div>
        <div className={`slide ${currentIndex === 2 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.1Ij5yzwPAfuy1PPS32oXrAHaEC?w=315&h=180&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7" alt="Side 3" />
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
            <center className="dcenter">An Insight into Dadra and Nagar Haveli Tourism</center>
            <div className="dinsight">
                <div className="dsep">
                    <p className="dpara">Wedged between the state of Gujarat and Maharashtra, Dadra and Nagar Haveli is a quaint Union Territory blessed with a lovely climate, making it one of the best tourism destination in India.  Dotted with gardens, lakes, temples, zoo and more, the place is good for travellers of all genre, especially for those with the love for nature and wildlife.</p>
                    <p className="dpara"> As you stroll in Silvassa, you will also get the opportunity to visit the Tribal Cultural Museum which houses an interesting collection of musical apparatus, masks, life-size statues, fishing gadgets and more. Besides this Dadra and Nagar Haveli has a lot to offer to the nature lovers where one can sit and relax amid serene landscape comprising lush green hills, rolling meadows and native-styled cottages. Vanganga Lake Garden, Hirwa Van Garden, Vandhara Udyan, and Dudhni where the large waterfront of river Damanganga offers an amazing view of the Madhuban Dam are some points of interests where tourists can head to for witnessing the nature at its best. Also, one can even visit Hirwa Van to witness cascading waterfalls and extensive lawns interspersed with a variety of flowers. Wildlife enthusiasts can head to a mini zoo in Silvassa where one can spot birds, monkeys, pythons and crocodiles. Tourists can even opt for Vasona Lion Safari. Last but not the least, another destination worth a mention is the Union Territory is the Satmaliya Deer Park, which houses several deer species and other animals.</p>
                    <p className="dpara">Songs and dance are an inevitable part of these tribal groups which can be easily witnessed on every occasion held in Dadra and Nagar Haveli,be it harvest, or marriage and death.A trip to Dadra and Nagar Haveli will let the tourists explore nature, learn about the tribal culture, witness the magnificent architecture, try the scrumptious seafood. There are many other things to do and places to visit in Dadra and Nagar Haveli that one can explore when partnering with Tour My India. With our best Dadra and Nagar Haveli holiday packages tourists can enjoy every bit of their stay in the region. Our travel guide covers the tourists will all the basic information that is required when planning a trip including where to go,</p>
                </div>
                <div className="dsep">
                    <p className="dpara">Moving to the culture of the place, the tribals here have a distinct culture and set of rituals that let the tourists learn about their lifestyle. The tribes that one can find here include Kokana, Varlies, Koli, Dhodia, Kathodi, Naika and Dublas.Coming to the tourist attractions of Dadra and Nagar Haveli, the first and foremost things that grabs the attention of the tourists is the Portuguese architecture all  around the region. Of many the important ones where you can admire the splendid  architecture of Dadra and Nagar Haveli is the Roman Catholic Church - the Church of Our Lady of Piety and the Hindu temples including Bindrabin temple and Swaminarayan Temple.</p>
                    <p className="dpara">  Of all the other festivals celebrated in the region, the most significant ones of the local tribes include Akhatrij, Divasol, Barash, Monsoon Magic Festival, Tarpa Festival and Nariyeli Purnima. Besides exploring the natural beauty, you can indulge in trying the amazing cuisines of Dadra and Nagar Haveli. This includes lentils, kadhi and sweet dal which is the speciality of tribal cuisine and you cannot miss out giving it a try. Other than this, the food of Dadra and Nagar Haveli has a lot of Gujarati influence, so one gets to try Ubadiyu which is a popular winter dish and is often served with a glass of buttermilk. Besides offering delicious vegetarian fare, the region is popular for seafood. Of all, tourists can try the sweet meat of crabs which is enjoyed by many locals and travellers.</p>
                    <p className="dpara">Shopping in Dadra and Nagar Haveli let the tourist get their hands on different artwork of which the important one is the traditional Warli Art. These ancient art forms are available in almost all the shops in the region and tourists can get it in a number of options including small souvenirs, pots, vases and paintings. In addition to this, bags made of reused paper and flour is yet another thing to shop that pick the interests of the travellers.</p>
                    <p className="dpara"> what to eat, what to see, how to reach and more. The well-curated Dadra and Nagar Haveli tour packages assure the travellers a hassle-free visit to the Union Territory.</p>
                </div>
                
            </div>
        </div>
    );
}
export default DadraAndNagarHaveli;