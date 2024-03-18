import { Link } from "react-router-dom";
import "./HeroStyles.css";
function Hero(props){
    
    return(
        <>
         <div className={props.cName}>
           <img alt="travel1" src={props.heroImg}></img>
            <div className="hero-text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <Link to={"/Main"}><a href={props.url} className={props.btnClass}>{props.buttonText}</a></Link>
                </div>
         </div>
        </>
    );
}
export default Hero;