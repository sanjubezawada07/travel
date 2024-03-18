import React,{useState,useEffect,useRef} from "react";
import './Uttarpradesh.css';
function UttarPradesh(){
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
                <h2 className="utheader">About Uttar Pradesh</h2>
                <p className="utpara">Uttar Pradesh conjures an image of acres and acres of wide swaying fields, ancient Hindu temples on the bank of meandering rivers, and towns and cities with narrow alleys where rich culture abides. Home to one of the world's oldest cities and the iconic Taj Mahal, Uttar Pradesh in North India is a holiday destination you do not want to</p>
                <p className="utpara">The epitome of diversity, Uttar Pradesh welcomes you to a land of history, culture, art, and traditions. This 4th largest state in India spreads over an area of 240,928 sq km and is a mix of cultures that it displays proudly and attracts tourists from all over the world.</p>
                <p className="utpara">Uttar Pradesh has more to offer than the iconic Taj Mahal in Agra. The North Indian state is also home to numerous significant Hindu temples, Muslim Dargahs and Masjids as well as Christian pilgrimage destinations.</p>
            </div>
            <div>
                <h2 className="utheader">Tourism in Uttar Pradesh</h2>
                <p className="utpara">Read along to find out the top tourist destinations of the state as we bring to you a complete guide on Uttar Pradesh tourism.</p>
            </div>
            <div>
                <h2 className="utheader">The state is also home to Lord Rama's birthplace at Ayodhya, Ram Janmabhoomi.</h2>
                <p className="utpara">Uttar Pradesh is an important destination for followers of Buddhism as well. Among the Buddhist circuit falls Sarnath, being the place where Lord Buddha gave his first sermon after he attained enlightenment. Sarnath is also important due to the presence of The Ashoka Pillar and the Dhamek Stupa, built centuries ago to honor Lord Buddha. Other prominent Buddhist sites in Uttar Pradesh include Kaushambi, Sankisa, Shravasti, and Kushinagar.</p>
                <p className="utpara">The state also houses places of religious importance for the Jains such as the Jain Shwetambar Temple at Ayodhya, which is dedicated to the first Tirthankar of the Digambar Jain sect, Rishabdev and has a 31 feet tall marble statue of him.</p>
                <p className="utpara">Sarnath is significant for followers of Jainism too for its Digambar Jain Temple, also called the Shreyansnath Jain Temple, built in honor of the 11th Jain Tirthankara Shreyansnath.</p>
                <p className="utpara">In the Aligarh district of Uttar Pradesh there is the Teerthdham Mangalayatan, a Jain pilgrimage complex which houses 5 Jain temples and also functions as a research center for socio-religious purposes.</p>
            </div>
            <div>
                <h2 className="utheader">Uttar Pradesh- A Wonder of the Heritage World</h2>
                <p className="utpara">The avenue of heritage tour is open across the length and breadth of the state with the capital city Lucknow reflecting the rich Mughal and British architecture to Varanasi showcasing a meld of Nagara style of architecture.</p>
                <p className="utpara">Among the wonders of the world, The Taj Mahal resides at Agra, Uttar Pradesh. This mausoleum made with white marble is crafted to perfection and was built by the Mughal emperor Shah Jahan in memory of his late wife Mumtaz Mahal and is considered to be the finest example of Mughal architecture. This beautiful structure was constructed between 1631-1648 and truly stands to be the pride of Uttar Pradesh and India.</p>
                <p className="utpara">The Agra Fort is another heritage site in Uttar Pradesh's Agra. It used to be the main residing place for the Mughal emperors till 1638 when they shifted the capital to Delhi from Agra. The fort, made of red sandstone, is built like a walled city and is located at a distance of 2.5 kilometers from the Taj Mahal.</p>
                <p className="utpara">At a distance from Agra, is built the fort city of Fatehpur Sikri. Constructed by the Mughal emperor Akbar, the city was made to honor the Sufi Saint Sheikh Salim Chisti. The forts at Fatehpur Sikri are made in the classic Mughal architecture using red sandstone. Popular attractions at Fatehpur Sikri include the Jama Masjid Mosque, Buland Darwaza, Palace of Jodha Bai, and the Hawa Mahal.</p>
            </div>
            <div>
                <h2 className="utheader">Into the Wild- Sanctuaries of Uttar Pradesh</h2>
                <p className="utpara">The state of Uttar Pradesh is also abundant in wildlife and encompasses wildlife sanctuaries and national parks that are home to a variety of flora and fauna. Dudhwa National Park, Katarniaghat Wildlife Sanctuary, Chambal Wildlife Sanctuary, Soor Sarovar Bird Sanctuary, Nawabganj Bird Sanctuary and Okhla Bird Sanctuary are amongst the top wildlife destinations in Uttar Pradesh.</p>
                <p className="utpara">The Dudhwa National Park is a Tiger Reserve located in the Lakhimpur-Kheri district of Uttar Pradesh, along the Indo-Nepal border. The park is home to Tigers, Rhinoceros, Elephants, Swamp Deer, Porcupines, etc. and has over 450 species of birds.</p>
                <p className="utpara">The Chambal Wildlife Sanctuary, located on the Chambal river includes endangered species of gharial or small crocodiles, red-crowned roof turtles and the Ganges river dolphin and is situated across the states of Rajasthan, Madhya Pradesh,and Uttar Pradesh which manage the sanctuary together.</p>
            </div>
            <div>
                <h2 className="utheader">Festivals of Uttar Pradesh- Time for Celebration</h2>
                <p className="utpara">Uttar Pradesh is expanding its tourism by hosting international level festivals like the Kumbh and Taj Mahotsav, which helps travelers learn about the state's rich history and culture.</p>
                <p className="utpara">he Taj Mahotsav is organized by the Department of Tourism and is a 10 day affair that takes place in the month of February. The Mahotsav is held at Shilpgram in the Agra district of Uttar Pradesh and celebrates India's art, craft and culture through music, dance and delicious food. Artisans from all over the country display their craft during the festival such as Bamboo work from the northeast, delicate shawls from Kashmir, and brassware from Moradabad.</p>
                <p className="utpara">The Kumbh Mela is a prominent religious festival for the devotees of Hinduism and happens every 3 years rotating between 4 pilgrim cities situated on 4 sacred rivers. In Uttar Pradesh the festival takes place at the Triveni Sangam in Prayagraj, at the confluence of Rivers Ganga, Yamuna, and Saraswati. The attendees, who include ascetic saints, sadhus, and visitors, take a dip in these holy rivers, which is believed to wash away their sins.</p>
            </div>
            <div>
                <h2 className="utheader">Cuisine of Uttar Pradesh- With a Nawabi Andaaz</h2>
                <p className="utpara">Uttar Pradesh also has delectable cuisine to offer which is perfect to revive your energy when you get tired taking in its beauty. Whether you want to indulge in Sattvic food or enjoy non-vegetarian Nawabi delicacies, Uttar Pradesh has it all. A lot of the food from Lucknow that is popular today has roots in the Nawabi culture.</p>
                <p className="utpara">For example, the melt-in-mouth Galouti Kabab, Nargisi Kofta, and the Awadhi Biryani are some of the popular foods of Lucknow. Other popular dishes of Uttar Pradesh include Puri Aloo, Mathura's Peda, Petha from Agra, and chatpati Chaat that you can find throughout the state.</p>
                <p className="utpara">More of a mouth freshener than an appetizer, the Banarasi Paan is also something that the people of Uttar Pradesh love, and therefore requires special mention.</p>
            </div>
            <div>
               <h2 className="utheader">Best Time to Visit Uttar Pradesh</h2>
               <p className="utpara">The best time to visit Uttar Pradesh is between the months of October and March when the weather is colder and pleasant. It is the peak season for tourism in the state since the second half of the year brings various Hindu festivities.</p>
               <p className="utpara">In the months of April to June, UP (Uttar Pradesh) can get extremely hot and is not ideal for travel, and so it is best to avoid these months.</p>
               <p className="utpara">The state experiences monsoon from July to September. There might be fewer crowds as compared to other months but the weather can get pretty humid.</p>
               <p className="utpara">Tour My India is excited to help you explore the incredible land of Uttar Pradesh with our Uttar Pradesh tourism packages at best prices. With our travel deals you have the opportunity to discover Uttar Pradesh the way you want without any added stress.</p> 
            </div>
            <div>
            <div className="carousel-container">
      <div className="slides" ref={slides}>
        <div className={`slide ${currentIndex === 0 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th/id/OIP.ohrwFsHXdtFvVBnv1t2VpAHaEK?w=304&h=180&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7" alt="Slide 1" />
        </div>
        <div className={`slide ${currentIndex === 1 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th?q=Jaunpur+Uttar+Pradesh&w=120&h=120&c=1&rs=1&qlt=90&cb=11&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=strict&t=1&mw=247" alt="Slide 2" />
        </div>
        <div className={`slide ${currentIndex === 2 ? 'active' : ''}`}>
          <img src="https://th.bing.com/th?q=Uttar+Pradesh+Places&w=120&h=120&c=1&rs=1&qlt=90&cb=11&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=strict&t=1&mw=247" alt="Side 3" />
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
        </div>
    );
}
export default UttarPradesh;