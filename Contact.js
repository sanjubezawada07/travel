import Hero from "./Hero";
import Navbar from "./Navbar";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
function Contact (){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg="https://c4.wallpaperflare.com/wallpaper/319/976/955/5bd3adff6e89e-wallpaper-preview.jpg"
        title="Contact"
        btnClass="hide"
        />
        <ContactForm/>
        <Footer/>
        </>
    )
}
export default Contact;