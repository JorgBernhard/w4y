import './Contact-style.css';
import MainBottom from '../../assets/botao-home.png';
import WhatBottom from '../../assets/team.png';
import RocketBottom from '../../assets/rocket.png';
import ContactBottom from '../../assets/contact-mail.png';

function Contact() {
  return (
    <div id="contact">
    <div className="Contact">
      <div className="Container-Contact">
        <h2 className="Header-Contact">How to find us</h2> 
        <h4 className="Texto-cont">
          Contact us:<br></br>
          Telephone: (+5584) 99968-5830 <br></br>Whats-Up / Telegram<br></br>
          Email: jorg.reske@gmail.com<br></br><br></br>

          Adress:<br></br>
          W4Y<br></br>
          Rua Lagoa Nova, 124 B402<br></br>
          Cep: 59152-655<br></br>
          Nova Parnamirim / Parnamirim<br></br>
          RN / Brasil<br></br>
        </h4>
      </div>
    <div className="FussnoteCont">
          <a className="MainCont" href='#main'><img ClassName="MainBottom" src={MainBottom} alt="MainB" /></a>
          <a className="WhatCont" href='#what'><img ClassName="WhatBottom" src={WhatBottom} alt="WhatB" /></a>
          <a className="RocketCont" href='#projects'><img ClassName="RocketBottom" src={RocketBottom} alt="RocketB" /></a>
          <a className="MailCont" href='#contact'><img ClassName="ContactBottom" src={ContactBottom} alt="ContactB" /></a>
      </div>
    </div>
    </div>
  );
}

export default Contact;
