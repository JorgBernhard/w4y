import './Main-style.css';
import Logo from '../../assets/w4y.png'
import MainBottom from '../../assets/botao-home.png';
import WhatBottom from '../../assets/team.png';
import RocketBottom from '../../assets/rocket.png';
import ContactBottom from '../../assets/contact-mail.png';

function Main() {
  return (
    <div id="main">
    <div className="Main">
      <div className="Container-Main">
         <h2 className="BemVindo">Bem Vindo</h2> 
         <a className="Home" href='#what'><img className="W4Y" src={Logo} alt="Logo" /></a>
         <h2 className="Slogan">What can we do for you?</h2>
      </div>
      <div className="Fussnote">
          <a className="MainB" href='#main'><img ClassName="MainBottom" src={MainBottom} alt="MainB" /></a>
          <a className="WhatB" href='#what'><img ClassName="WhatBottom" src={WhatBottom} alt="WhatB" /></a>
          <a className="RocketB" href='#projects'><img ClassName="RocketBottom" src={RocketBottom} alt="RocketB" /></a>
          <a className="MailB" href='#contact'><img ClassName="ContactBottom" src={ContactBottom} alt="ContactB" /></a>
      </div>
    </div>
    </div>
  );
}

export default Main;
