import logoI from '../../assets/logoI.png';
import logoII from '../../assets/logoII.png';
import logoIII from '../../assets/logoIII.png';
import Management from '../../assets/ManagementBack.png';
import Job from '../../assets/jobinterview.png';
import Meeting from '../../assets/meeting.png';
import './main.css';

function Main() {
  return (
    <div id="main">
    <div className="Main">
       <div className="MainContainer">
      <header className="Main-header">
        <img className="Main-logoI" src={logoI}  alt="logoI" />
        <img className="Main-logoII" src={logoII} alt="logoII" />
        <img className="Main-logoIII" src={logoIII} alt="logoIII" />
      </header>
      <div className='MainContainerII'>
        <h1 className='HeaderText'>Powerfull and easy to use<br></br> web-applications</h1>
        <h1 className='MainText'>We specialize in creating visual identities for your 
        company,<br></br> products abd brands.</h1>
      <div className='MainContainerCenter'>
        <img className='Job' src={Job} alt="Job"></img>
        <img className='Meeting' src={Meeting} alt="Meeting"></img>
        <img className='Management' src={Management} alt="Management"></img>
      </div>
      <div className='BotomContainer'>
      <h1 className='BotomText'>We have everything that's required <br></br> 
      for the web-app</h1>
      <h1 className='BotomTextGeral'>W4Y, we are the perfect team to atemt your companies
      needs in creating the first impression,<br></br>  that your customers will experience.</h1>
      <a className="Mail" href='mailto:w4ysolutions@gmail.com'>Get started</a>  
      </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Main;
