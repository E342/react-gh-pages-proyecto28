import './aboutUs.css';
import albumCollage from '../images/collage.png'

const AboutUs = ()=>{
    return(
        <div className = "aboutUs-container" id="about-us">
            <div>
                <img src = {albumCollage} className="aboutUs-img" alt=""></img>
            </div>
            <div>  
                <h1>Acerca de nosotros</h1>
                <p>
                    Just Breathe es una red social donde podrás encontrar una gran variedad de albumes
                    de diferentes artistas alrededor del mundo, independientemente del país que procedan, ya que 
                    nosostros sabemos que el amor por la música no tiene fronteras.
                </p>
            </div>
        </div>
    )
}
export default AboutUs;