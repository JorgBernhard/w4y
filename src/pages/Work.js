import Celular from '../assets/Celular.png';
import AceraP from '../assets/Acera.png';
import Amaral from '../assets/Amarals.png';
import Condo from '../assets/Condo.png';

import logoI from '../assets/logoI.png';
import logoII from '../assets/logoII.png';
import logoIII from '../assets/logoIII.png';

import '../css/work.css'

const Work = () => {
    return <>
    <div className="Work">
        <header className="Work-header">
          <img className="Work-logoI" src={logoI}  alt="logoI" />
          <img className="Work-logoII" src={logoII} alt="logoII" />
          <img className="Work-logoIII" src={logoIII} alt="logoIII" />
        </header>
      <div className='WorkContainer'>
          <h1 className='WorkHeaderText'>More than 50 awsome <br></br>web-design Work-app's.</h1>
          <h1 className='WorkText'>We specialize in creating visual identities for your 
        company,<br></br> products abd brands. Web-stes responsive or slide apresentation</h1>
       
       <div className='ImageContainer'>
        <img className='Celular' src={Celular} alt="celular" />
        <img className='AceraP' src={AceraP} alt="AceraP" />
       </div>
        <div className='ImageContainerII'>
        <img className='Condo' src={Condo} alt="Condo" />
        <img className='Amaral' src={Amaral} alt="Amaral" />
        </div>
      <div className='BodenContainer'>
      <h1 className='WorkBodenText'>Some of our client response.</h1>
      <h1 className='BodenText'>Customer response during and after our work was finished.</h1>
      <div className='ImageContainerIII'>
        <div className='ClienteI'>
      <h3 className='Client01'>Precise, fast and excelent quality of workmanship.<br></br>
      Thanks alot.</h3>
      <h3 className='RVP'>R.v.Pesscatore</h3>
      </div>
      <div className='ClienteII'>
      <h3 className='Client02'>Nothing to say, just fast and perfect.<br></br>Great Job.</h3>
      <h3 className='MS'>Mathias Schnitzer</h3>
      </div>
      <div className='ClienteIII'>
      <h3 className='Client03'>Had a blast, nice working with you guys.<br></br>Cool</h3>
      <h3 className='IR'>Isabella Reske</h3>
      </div>
      </div>
      </div>
      </div>
    </div>
    </>
  };
  
  export default Work;