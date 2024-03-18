import React,{useState,useEffect,useRef} from "react";
import './Daman.css';
function DamanAndDiu(){
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
            <center className="dacenter">DAMAN & DIU TRAVEL GUIDE</center>
            <p className="dapara">Plan a trip to Daman and Diu if you want to have a good time. Daman and Diu is the union territory of India located in the western part of it. These two regions are separated by each other by the Gulf of Khambhat. It offers several opportunities for leisure, along with some adventure thrown in between. Once the colonies of the Portuguese, their legacy lives on in this union territory in the form of churches and forts. Most tourists who arrive here, are immediately struck by its tranquillity. You can get your fair share of adventure by enjoying water sports or exploring caves. Among the many things to see here, one is visiting its temples, some of which date back to ancient times.</p>
            <h3 className="daheader"><strong>Capital:</strong>Daman<strong>Location:</strong>West India</h3>
            <h2 className="daheader">BEST TIME TO VISIT DAMAN AND DIU</h2>
            <p className="dapara">The months from October to March is the best time for visiting Daman and Diu.</p>
            <h2 className="daheader">WHY VISIT DAMAN AND DIU?</h2>
            <p className="dapara">You should spend your holidays in Daman and Diu for its beaches, caves, temples, water sports, forts, solitude, incredible views, museums, bird sanctuary, forests, swimming, surfing and parasailing.</p>
            <h2 className="daheader">TEMPERATURE</h2>
            <div className="dadiv">
                <div className="dadiv2">
                    <h4>23°C to 43°C</h4>
                    <p>summer</p>
                    <p>March to May</p>
                </div>
                <div className="dadiv1">
                    <h4>20°C to 35°C</h4>
                    <p>Monsoon</p>
                    <p>June to October</p>
                </div>
                <div className="dadiv1">
                    <h4>10°C to 24°C</h4>
                    <p> Winter</p>
                    <p>November to February</p>
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
            <center className="dacenter">An Insight into Daman and Diu Tourism</center>
            <div className="dainsight">
                <div className="dasep">
                    <p className="dapara">Daman and Diu tourism attracts tourists because it is the permanent abode of tranquillity. It’s great for those who enjoy spending their time in leisure, along with some adventure and sightseeing. After arriving here, you immediately feel the calming effect this place has on you. There are many things to do here, besides pondering on its beauty. That is what makes it such an incredible holiday destination.</p>
                    <p className="dapara">Gorgeous beaches are an essential part of the top tourist attractions of Daman and Diu. It is home to five beaches in all, each as beautiful as the other. One of the most beautiful among the five beaches is the Nagoa Beach. Located in the hamlet of Nagoa in the village of Bucharwada, it is shaped in the form of a semi-circle and offers various activities including swimming and gamboling.</p>
                    <p className="dapara">Ghogla Beach is another famous beach located at the entrance to Ghogla village. It is great for those who love listening to the sound of waves and revelling in the sights greeting their eyes. Chakratirth Beach is relatively more crowded and is visited by both domestic and international tourists. Here, the sea seems to merge with the sun, an interesting phenomenon which is both curious and beautiful. Two other famous beaches are Jallandhar and Gomtimata Beach.</p>
                    <p className="dapara">Daman and Diu is also home to two forts, both of which offer excellent sightseeing opportunities and are reminders of its colonial past. The Fortress of Panikotha is an incredible structure built of stone and situated right at the entrance to the creek. At one point in history, it served as an entry post for regulating the entry and exit of merchant ships entering Diu for purposes of trade, especially spices. A special feature of the fort was the defensive system which was operated by means of a thick metallic chain upon the river bed.</p>
                    <p className="dapara">Another imposing structure is the Fort of Diu situated on the eastern side of the island. From here, you are treated to amazing views of the sea. The fort, which was built in the 14th century, consisted of a warehouse, residence for the nobles, barracks for the soldiers, prison, church, chapel and a storage place for arms and ammunitions. There are a number of bastions inside the fort, with the oldest of them being St. George. The interiors of the fort, which are carved in stone work, are as impressive as the exteriors. Exploring the fort is nothing less than an adventure.</p>
                    <p className="dapara">Daman and Dui does not disappoint you in any way, not even when you are  looking for a spiritual experience.</p>
                </div>
                <div className="dasep">
                    <p className="dapara"> There are two churches and both of them are located in Diu. One of these, the St. Paul’s Church, is also known as the Church of Immaculate Conception. Built by the Portuguese in the 15th century, it possesses both religious and historical importance. The architecture of the church impresses visitors with its front facade, inside walls which are adorned with shell like motifs and the high vaulted dome. The main attraction is the three altars including the pulpit. It is widely believed that the wood for the altar was purchased from Mozambique, which was another Portuguese colony in Africa.</p>
                    <p className="dapara">St. Francis of Assisi Church, built in the 14th century, is another famous church in Daman and Diu. An interesting fact about this temple is that it served as a hospital for 14 years. Situated at close proximity to St. Paul’s Church, it is easily distinguishable by its high tower. A particular attraction of the church is its main altar, which is decorated with beautiful frescoes.</p>
                    <p className="dapara">Your travel experience in Daman and Diu should also include a visit to its museums. There are two museums, Sea Shell Museum and St. Thomas Church Museum. Of these, the Sea Shell Museum is quite unlike any other museum you have ever visited. Its owner, Captain Devjibhai Vira Fulbaria, converted his hobby of collecting sea shells into a museum. There is an amazing variety of sea shell exhibits in the museum, along with different kinds of marine life.  All the sea shells have been meticulously sorted and labelled, with the life cycle and anatomy of each specie explained by posters.</p>
                    <p className="dapara">The thick plantations along the coastal areas in the island of Diu is also a popular tourist attraction. Most of these forest areas are found in the Vanakbara, Bucharwada and Ghogla village. Apart from promoting tourism, these dense plantations have also served to maintain the ecological balance of the island. Among the different kinds of trees, the Hyphonea Indica palm tree, also known as Hokka tree, enjoy a dominance. Taking a tour of these plantations makes for some wonderful sightseeing, besides educating visitors on the important role they protecting the ecology and creating the right kind of weather conditions for agro-horticultural development.</p>
                    <p className="dapara">Those who love water sports will find their vacation to Diu to be very rewarding. You can try out a variety of water sports here, thanks to its many beaches. In the island of Diu, there are two beaches which offer the excitement of water sports. These are Nagoa Beach and Ghogla Beach. The different types of water sports which you can try your hand at are water roller, parasailing, water scooter, scuba diving, desert bike, speed boat, water zorbing ball, hot air balloon, water skiing, banana boating, paramotor flying, bumper boating, dolphin trip and couple ring.</p>
                </div>
            </div>
        </div>
    );
}
export default DamanAndDiu;