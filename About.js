import Hero from "./Hero";
import Navbar from "./Navbar";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
function  About(){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg="https://w0.peakpx.com/wallpaper/915/361/HD-wallpaper-beautiful-night-autumn-foggy-beautiful-fog-lights-city-road-night-lanterns-romantic-romance-buildings-colors-clock-rainy-nature-rain-alley.jpg"
        title=""
        btnClass="hide"
        />
        <AboutUs/>
        <Footer/>
        </>
    );
}
export default About;