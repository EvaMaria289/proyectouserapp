import igImage from "../../assets/img/ig.png"
import whatsappImage from "../../assets/img/whatsapp.png"
import "./Footer.css";
 
const Footer = () => {

    return(
    <>

    <div className="footer">
            <a href="https://wa.me/+584266809739?text=¡Estoy+interesado!"><img src={whatsappImage} className="Image"/></a>
           <a href="https://msng.link/o?@evamaria.gl=ig"><img src={igImage} className="Image"/></a>
     
            <p>Created by Eva M. Gutierrez 2023®</p>
      </div>
    </>);
}

export default Footer;