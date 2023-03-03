import './me.css';

import Jorg from '../../assets/Eu.png';
import Cv from '../../assets/CV-JorgReske.pdf';


function Me() {
  return (
    <div id="me">
    <div className="Me">
      <div className="Me-Container">
      <img className="MeJorg" src={Jorg}alt="jorg" />
        <div className="MeTextContainer">
        <h3 className="MeHeader">Ux UI Designer Information</h3>   
        <h5 className="Me-Text">UX UI Designer, over 12 years of 
        eperience creating web-sites, logos, company documentatios, 
        banners, marketing brochures, real estate and financial 
        layouts.<br></br><br></br>
        I have a grown knowledge (two and a half year) of 
        JavaScript developing and programming, backend 
        and frond-end as a good understanding of it's libarys as 
        ReactJs, Nodejs, Vanilla, UI and Angular.<br></br><br></br>
        </h5>
        <a className="English-Resume" href={Cv} download="English">Download Resume PDF</a>
        </div>
        </div>
        <div className="MeText2Container">
        <h3 className="MeHeader2">Experience</h3>  
        <h5 className="Me-Text2">Analytical, innovative software development 
        professional with extensive experience in evaluating, executing and 
        deploying systems, improving quality and efficiency. Adept at 
        aligning end-user needs with complex IT solutions.<br></br><br></br> 
        Skilled troubleshooter, continually focused on identifying, isolating, 
        and resolving technical issues. Strong business acumen, accomplished in 
        functional and technical analysis, design and documentation. <br></br>
        Exceptional communicator, skilled in building effective cross-team 
        collaborations and strengthening relationships across functions to 
        drive cohesive, technical operations. Extensive teaching experience.</h5>

        </div>
    </div>
    </div>
  );
}

export default Me;