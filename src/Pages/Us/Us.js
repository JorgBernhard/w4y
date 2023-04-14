import Acera from '../../assets/clientes/acera.png';
import Bmg from '../../assets/clientes/bmg.png';
import Dewi from '../../assets/clientes/dewi.png';
import Epe from '../../assets/clientes/epe.png';
import Fuhrlaender from '../../assets/clientes/fuhrlaender.png';
import Kfw from '../../assets/clientes/kfw.png';
import Natural from '../../assets/clientes/natural power.png';
import Siah from '../../assets/clientes/Siah.png';
import Siemens from '../../assets/clientes/Simens.png';
import Vestas from '../../assets/clientes/vestas.png';
import Windex from '../../assets/clientes/windex.png';

import logoI from '../../assets/logoI.png';
import logoII from '../../assets/logoII.png';
import logoIII from '../../assets/logoIII.png';

import Ceo from '../../assets/Eu.png';
import './us.css';

function Us() {
  return (
    <div id="us">
    <div className="Us">
      <div className='UsContainer'>
      <header className="Us-header">
        <img className="Us-logoI" src={logoI}  alt="logoI" />
        <img className="Us-logoII" src={logoII} alt="logoII" />
        <img className="Us-logoIII" src={logoIII} alt="logoIII" />
      </header>
            <h1 className='UsText'>Us W4Y Design</h1>
            <h1 className='UsTextGeral'>Since 1996 are we creating, envolving, growing with 
            our clients true the ups and downs of the digital market all over the world.
            Our CEO started creating weg design in 1992, teaching the first steps of Photoshop, 
            Dream Weaver, creating Flash components to serve others. <br></br>This company was 
            started in 2020 is finding a way to help, building exceptional web design pages, 
            Logos, Businesscards, Banners, Slide-shows and company-documents.</h1>
          <div className='UsContainerCenter'>
              <img className='Ceo' src={Ceo} alt="Ceo" />
              <h1 className='UsCeoGeral'>CEO da W4Y Design, Jörg Bernhard Reske, with over 
              20 years of experience, Bachelor degree in Administration, Tecnical Degree 
              in international transport, Design by CPD, Programmer degree Fullstack 
              (JavaScript, NodeJs, ReactJs, Html and Css) Cubos Academy, organizes and directs 
              all our needs to the best wellness of all.</h1>
          </div>
          <div className="UsBoden">
              <h1 className='UsBodenText'>Some Clients.</h1>
             <div className='UsBodenImages'>
              <img className='UsClients' src={Acera} alt="acera" />
              <img className='UsClients' src={Bmg} alt="bmg" />
              <img  className='UsClients' src={Dewi} alt="Dewi" />
              <img  className='UsClients' src={Epe} alt="Epe" />
              <img  className='UsClients' src={Fuhrlaender} alt="Fuhrlaender" />
              <img  className='UsClients' src={Kfw} alt="Kfw" />
             </div>
             <div className='UsBodenImagesII'>
              <img  className='UsClients' src={Natural} alt="natural" />
              <img  className='UsClients' src={Siah} alt="Siah" />
              <img  className='UsClients' src={Siemens} alt="Siemens" />
              <img  className='UsClients' src={Vestas} alt="Vestas" />
              <img  className='UsClients' src={Windex} alt="Windex" />
              </div>
          </div>
      </div>
    </div>
    </div>
  );
}

export default Us;
