import Mail from '../../assets/Email.png';
import Git from '../../assets/github-green.png';
import Linked from '../../assets/linkedin-green.png';
import Whats from '../../assets/whatsapp.png';
import Avatar from '../../assets/Tigerw4y.png'
import './home.css';

function Home() {
  return (
    <div id='home'>
    <div className="Home">
      <div className="Home-Container">
        <div className="HomeTextContainer">
          <img className="Avatar" src={Avatar}alt="jorg" />
        <div className="HomeTextJorg">
        <h3 className="Hi">Hi, I am</h3>
        <h3 className="Jorg">Jörg Bernhard</h3>
        </div>
        <div className="HomeTextGeral">
        <h3 className="Designer">UX UI Designer</h3>
        <h5 className="Home-Text">Happy to see you here, please feel free 
        to check my portfolio out.</h5>
        <a className="MeButtom" href={"#me"} alt="me">Like to see more</a>
        </div>
        </div>
        <div className="HomeLinks">
          <a className="Git" target="_blank" rel="noreferrer" href={"https://github.com/JorgBernhard"} alt="git"><img className="Git" src={Git} alt="Git" /></a> 
          <a className="Linked" target="_blank" rel="noreferrer" href={"https://www.linkedin.com/in/jorg-reske-b327699b/"} alt="Linked"><img className="Linked" src={Linked} alt="linked" /></a>
          <a className="Mail" href='#mailto:jorg.reske@gmail.com'><img className="Mail" src={Mail} alt="mail" /></a>  
          <a className="Whats" target="_blank" rel="noreferrer" href={"https://api.whatsapp.com/send/?phone=5584999685830&text&type=phone_number&app_absent=0"} alt="Whatsapp"><img className="Whats" src={Whats} alt="Whats" /></a> 
        </div>
        </div>
    </div>
    </div>
  );
}

export default Home;
