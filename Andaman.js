import React,{useState,useEffect,useRef} from 'react';
import './Andaman.css'
function Andaman(){
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
        <>
            <center className='Ancenter'>ANDAMAN & NICOBAR TRAVEL GUIDE</center>
            <div>
              <div className='main'>
                <div className='acon'>
                <p className='Anpara'>One of the union territories of India, Andaman and Nicobar Islands is a breathtaking archipelago located in the Bay of Bengal. The exotic beaches blessed with coral reefs and amazing marine life making the landscape breathtakingly exquisite, cater a perfect beach holiday away from the hustle and bustle of the city life. This group of islands is an empyrean for both nature admirers and adrenaline junkies alike.</p>
                <p className='Anpara'><strong>Capital:</strong>  Port Blair<strong>  Location: </strong>Bay of Bengal</p>
                <h2 className='Anheader'>BEST TIME TO VISIT ANDAMAN:</h2>
                <p className='Anpara'>Planning a holiday tour to Andaman & Nicobar Islands during the months of December to February (winter season); during April to June (summer season) or May to September (monsoon season) is considered to be best.</p>
                <h2 className='Anheader'>WHY VISIT ANDAMAN:</h2>
                <p className='Anpara'>Beaches, Water sports, Honeymoon, Luxury Tours, Trekking</p>
                <h2 className='Anheader'>TEMPERATURE</h2>
                <div className='Andamandiv'>
                <div className='Andamantdiv1'>
                    <h3>24°C to 33°C</h3>
                    <p>Summer</p>
                    <p>April - June</p>
                </div>
                <div className='Aline'>
                    <p>|</p>
                    <p>|</p>
                    <p>|</p>
                </div>
                <div className='Andamantdiv'>
                    <h3>22°C - 35°C</h3>
                    <p>Monsoon</p>
                    <p>May - September</p>
                </div>
                <div className='Aline'>
                    <p>|</p>
                    <p>|</p>
                    <p>|</p>
                </div>
                <div className='Andamantdiv'>
                    <h3>20°C - 30°C</h3>
                    <p>Winter</p>
                    <p>December - February</p>
                </div>

                </div>
            </div>
            <div className='images'>
      <div className='img-container'>
        <img src="https://www.tourmyindia.com/states/andaman/images/port-blair.jpg" alt='Port Blair' className='img1'/>
        <div className='overlay'>
          <span className='overlay-text'>Port Blair</span>
        </div>
      </div>
      <div className='img-container'>
        <img src="https://www.tourmyindia.com/states/andaman/images/havelock-island.jpg" alt='Havelock Island' className='img1'/>
        <div className='overlay'>
          <span className='overlay-text'>Havelock Island</span>
        </div>
      </div>
      <div className='img-container'>
        <img src='https://www.tourmyindia.com/states/andaman/images/neil-island.jpg' alt='Neil Island' className='img1'/>
        <div className='overlay'>
          <span className='overlay-text'>Neil Island</span>
        </div>
      </div>
      <div className='img-container'>
        <img src='https://www.tourmyindia.com/states/andaman/images/baratang-island.jpg' alt='Baratang Island' className='img1'/>
        <div className='overlay'>
          <span className='overlay-text'>Baratang Island</span>
        </div>
      </div>
      <div className='img-container'>
        <img src='https://www.tourmyindia.com/states/andaman/images/long-island.jpg' alt='Long Island' className='img1'/>
        <div className='overlay'>
          <span className='overlay-text'>Long Island</span>
        </div>
      </div>
      <div className='img-container'>
        <img src='https://www.tourmyindia.com/states/andaman/images/barren-island.jpg' alt='Barren Island' className='img1'/>
        <div className='overlay'>
          <span className='overlay-text'>Barren Island</span>
        </div>
      </div>
      <div className='img-container'>
        <img src='https://www.tourmyindia.com/states/andaman/images/ross-island.jpg' alt='Ross Island' className='img1'/>
        <div className='overlay'>
          <span className='overlay-text'>Ross Island</span>
        </div>
      </div>
      <div className='img-container'>
        <img src='https://www.tourmyindia.com/states/andaman/images/viper-island.jpg' alt='Viper Island' className='img1'/>
        <div className='overlay'>
          <span className='overlay-text'>Viper Island</span>
        </div>
      </div>
    </div>
                  
            </div>
            </div>
            <div>
                <h2 className='Anheader'>Andaman And Nicobar Travel guide </h2>
            </div>
            <div>
            <div className="carousel-container">
      <div className="slides" ref={slides}>
        <div className={`slide ${currentIndex === 0 ? 'active' : ''}`}>
          <img src="data:image/jpeg;base64,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" alt="Slide 1" />
        </div>
        <div className={`slide ${currentIndex === 1 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.CigDlDi8ZLM1dKU_jhkvQAHaFY?w=225&h=180&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7" alt="Slide 2" />
        </div>
        <div className={`slide ${currentIndex === 2 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.2RJr2GCuhx9SWKoHeY-wlwHaE8?w=263&h=180&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7 " alt="Side 3" />
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
            <center className='Ancenter'>An Insight into Andaman & Nicobar Tourism</center>
                <div>
                  <div className='andivide'>
                    <div>
                        <p className='Anpara'>Andaman Nicobar Islands are located in the Bay of Bengal. The area encompassed by these islands is 8249 square kilometers in which, 8211 square kilometers is rural. The Union Territory is home to tribes like Great Andamanese, Onge, Jarawa, Sentinelese, Nicobarese and Shompen. The major Andaman and Nicobar Islands’ religion is termed as animism. As per this religion of Andaman and Nicobar Islands, the sole deity responsible for everything that happens in the world is Paluga.</p>
                        <p className='Anpara'>Andaman and Nicobar Islands is a group of 3000 islands, which includes chain of mountains and ridges with moderate heights and gradients that are indeed the major tourist attractions here. The geography at Andaman and Nicobar Islands states that the archipelago comprises of North Andaman, South Andaman, Middle Andaman, and Little Andaman in the Andaman group of islands, as well as Great Nicobar, Nancowry, Car Nicobar, Chowra and Katchal in the Nicobar group of islands. Amongst all the islands, Great Andaman and Ritchie Archipelago are the top tourist destinations with some surreal beaches for the holiday. Andaman features thrilling watersports like snorkeling, sea walks and scuba diving amongst several others in many of islands’ beaches, hence calling adventure junkies from far and wide. Visitors would also enjoy their time basking in the sun on the white sandy beaches overlooking the azure blue waters while sipping on a refreshing drink. Witnessing the sunrise and sunset is certainly an unbeatable experience, which indeed adds to a memorable beach holiday here.</p>
                        <p className='Anpara'>The tourism of Andaman is not only confined to a memorable beach holiday as the archipelago is also blessed with lush flora including evergreen tropical rainforest canopy making a holiday for nature lovers quite a memorable one too. These forests engross an assorted a jumble of Indian, Malaysian and indigenous floral stretches that attract a lot of wildlife lovers. There are more than 2000 varieties of plants found here. These islands are extremely profuse with fauna and around 50 species of forest mammals are found here among which 26 rat species and 14 bat species are primarily notable.</p>
                    </div>
                    <div>
                        <p className='Anpara'>Other than these, the prominent mammal species that can be spotted here are Sus Scorfa (wild pig), spotted deer, barking deer feral elephant, etc. Butterfly, moths and shells also increase the charm of nature's exquisiteness in Andaman and Nicobar. Coral reefs and marine life of this archipelago is a prominent factor attracting the tourists from all around the blue planet.</p>
                        <p className='Anpara'>Andaman and Nicobar Islands are ideal for family tours, honeymoon couples as well as solo travellers as well . The contiguous areas of the seashores are marvelous that allure beach lovers a lot. Moreover, many exemplifications of architectural brilliance are also found here. Therefore, history buffs also has ample to explore here as well. Some of the best places to see in Andaman and Nicobar Islands are Neil Island, Havelock Island, Long Island, Cellular Jail, Mahatma Gandhi Marine National Park, Anthropological Museum, Indira Point, Car Nicobar, Katchal, etc.</p>
                        <p className='Anpara'>There is indeed no scarcity of adventure activities to do in Andaman and Nicobar Islands. There is a plethora of things to do here thus making the trip congenial and gratifying. Multitude of adventure activities are offered here. The top attractions for adventure here are Scuba Diving, Snorkeling, Camping, Surfing, and Trekking. Being blessed with sublime landscapes and equipped with beautiful markets, Andaman and Nicobar Islands are perfect destinations for sightseeing and shopping. In addition to this, Island Tourism Festival is celebrated in Port Blair for 15 days between December and February attracts the tourists to witness exuberance.</p>
                    </div>
                    </div>
                    <div>
                      <center className='Ancenter'>Best Tour Packages for Andaman & Nicobar</center>
                      <p className='Anpara'>Offering a wide array of watersports and an amazing underwater life, Andaman & Nicobar Islands are the perfect holiday destination in India. And as a lover of sun, sand and beach, a visit to the islands is a must. Find the best tour packages for your Andaman & Nicobar holidays with us, where we promise to cater to all your travel need. Choose from the assorted travel packages that are designed keeping in mind different choices and travel styles. Get the best holiday deals so that your vacation to Andaman & Nicobar becomes something to cherish forever.</p>
                      <div className='images2'>
                        <img src='https://www.tourmyindia.com/states/andaman/images/andaman-short-tour.jpg' alt='img' className='aimg2'/>
                        <img src='https://www.tourmyindia.com/states/andaman/images/cellular-jail-package.jpg' alt='img' className='aimg2'/>
                        <img src='https://www.tourmyindia.com/states/andaman/images/andamans-beaches.jpg' alt='img' className='aimg2'/>
                        <img src='https://www.tourmyindia.com/states/andaman/images/elephant-beach.jpg' alt='img' className='aimg2'/>
                      </div>
                    </div>
                    <div>
                      <center className='Ancenter'>Top Hotels & Resorts in Andaman</center>
                      <p className='Anpara'>Andaman have accommodation options that satiate the desire of every beach lover. Where the luxury travellers are spoilt for choices from resorts and hotels built in close proximity to gorgeous beaches, the budget travellers can also find plenty decent accommodation serving the basic need just right. The luxury resorts in Andaman boasts private entry to the beach, spa and wellness facilities and setting up of tables for fine dining on the beach. One can find good options in Port Blair, Neil Island, Havelock Island and Wandoor. There are some value for money guest houses as well that offer satisfying services and airy rooms close to the main attractions. There are also some Bed & Breakfast and Apartments available that have everything to keep things comfortable during a trip.</p>
                      <div className='images2'>
                        <img src='https://www.tourmyindia.com/states/andaman/images/hotels-in-port-blair.jpg' className="aimg2" alt='img'/>
                        <img src='https://www.tourmyindia.com/states/andaman/images/hotels-in-neil-island.jpg' alt='img' className='aimg2' />
                        <img src='https://www.tourmyindia.com/states/andaman/images/hotels-in-long-island.jpg' alt='img' className='aimg2'/>
                        <img src='https://www.tourmyindia.com/states/andaman/images/hotels-in-baratsang-island.jpg' alt='img' className='aimg2'/>
                      </div>
                    </div>
                    <div className='anglance'>
                        <h2 className='Anheader'>Andaman & Nicobar at a Glance</h2>
                        <p className='Anpara'>Find the relevant and authentic information on the how to travel to Andaman & Nicobar Islands. Get details on how to reach by different means of transport along with information on various flights and local means of transport. Find details on the best time to visit Andaman & Nicobar Islands with average temperature in different seasons.</p>
                        <p className='Anpara'>Also find information on best places to explore and tourist attractions in the state through a map made easy for you to navigate.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Andaman;
