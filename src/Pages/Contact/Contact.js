import './contact.css';
import Whats from '../../assets/whatsapp.png';
import Mail from '../../assets/Email.png';
import Jorg from '../../assets/Jorg.png';

function Contact() {
  return (
    <div id="contact">
    <div className="Contact">
      <div className="Contact-Container">
      <img className="ContactJorg" src={Jorg}alt="jorg" />
      <div className="ContactTextContainer">
        <h3 className="ContactHeader">Contact</h3>   
        <h5 className="ContactText">Thank you so mutch for you interest. 
        If you like to contact me, please send a email or use whatsapp. 
        I will love to get in touch with you.<br></br><br></br> Anyway my contact address is:
        <br></br><br></br>
        Jörg Bernhard Reske<br></br>
        Rua Lagoa Nova, 124 - Bloco B 402,<br></br>
        CEP: 59152-655 <br></br>
        Nova Parnamirim / Parnamirim<br></br>
        Brasil.<br></br> <br></br>

        Thanks a lot and have a nice day!<br></br> <br></br>
        </h5>
        <div className="ContactLinks">
        <a className="Mail" href='#mailto:jorg.reske@gmail.com'><img className="Mail" src={Mail} alt="mail" /></a>  
        <a className="Whats" target="_blank" rel="noreferrer" href={"https://api.whatsapp.com/send/?phone=5584999685830&text&type=phone_number&app_absent=0"} alt="Whatsapp"><img className="Whats" src={Whats} alt="Whats" /></a> 
        </div>
        </div>
        </div>
    </div>
    </div>
  );
}

export default Contact;