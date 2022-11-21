import './What-style.css';
import Design from '../../assets/Acera01.png';
import DesignMuay from'../../assets/Condo01.png';
import MainBottom from '../../assets/botao-home.png';
import WhatBottom from '../../assets/team.png';
import RocketBottom from '../../assets/rocket.png';
import ContactBottom from '../../assets/contact-mail.png';

function What() {
  return (
    <div id="what">
        <div className="What">
            <h2 className="We">We and what we do</h2>
            <h4 className="TextoWe">
              Welcome to w4y (we for you), Professional, Creative Design for Businesses. You dream it, 
              we build it. The idea, creating the business card for our client. Designing and mounting all 
              information, the first impression, confiance and satisfaction.<br></br><br></br> Our perfil 
              starts with logos, banners, buisness-cards, apresentations, web-pages, celular-applications 
              and complete marketing strategies.<br></br> Please contact us helping to make your dreams come 
              truth.
            </h4>
            <div className="Arte">
            <img className="DesignWhat" src={Design} alt="design"></img>
            <img className="DesignMuay" src={DesignMuay} alt="designMuay"></img>
            </div>
        <div className="FussnoteWhat">
              <a className="MainWhat" href='#main'><img ClassName="MainBottom" src={MainBottom} alt="MainB" /></a>
              <a className="WhatWhat" href='#what'><img ClassName="WhatBottom" src={WhatBottom} alt="WhatB" /></a>
              <a className="RocketWhat" href='#projects'><img ClassName="RocketBottom" src={RocketBottom} alt="RocketB" /></a>
              <a className="MailWhat" href='#contact'><img ClassName="ContactBottom" src={ContactBottom} alt="ContactB" /></a>
        </div>
        </div>
   </div>
  );
}

export default What;
