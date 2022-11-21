import './Projects-style.css';
import MainBottom from '../../assets/botao-home.png';
import WhatBottom from '../../assets/team.png';
import RocketBottom from '../../assets/rocket.png';
import ContactBottom from '../../assets/contact-mail.png';
import Work01 from '../../assets/Security.png';
import Work02 from '../../assets/Xiaomi.png';
import Work03 from '../../assets/Puppy.png';
import Work04 from '../../assets/Art-design.png';

function Projects() {
  return (
    <div id="projects">
    <div className="Projects">
      <div className="Container-Projects">
      <h2 className="Header-Projects">Some of our work</h2> 
      <h4 className="Texto-Pro">
        Projects of web-pages
      </h4>
      <div className="Fotos">
        <div className="Fotos01">
      <img className="Work1" src={Work01} alt="work01" />
      <img className="Work2" src={Work02} alt="work02" />
      </div>
      <div className="Fotos02">
      <img className="Work3" src={Work03} alt="work03" />
      <img className="Work4" src={Work04} alt="work04" />
      </div>
      </div>
      </div>
      <div className="FussnotePro">
              <a className="MainPro" href='#main'><img ClassName="MainBottom" src={MainBottom} alt="MainB" /></a>
              <a className="WhatPro" href='#what'><img ClassName="WhatBottom" src={WhatBottom} alt="WhatB" /></a>
              <a className="RocketPro" href='#projects'><img ClassName="RocketBottom" src={RocketBottom} alt="RocketB" /></a>
              <a className="MailPro" href='#contact'><img ClassName="ContactBottom" src={ContactBottom} alt="ContactB" /></a>
        </div>
    </div>
    </div>
  );
}

export default Projects;
