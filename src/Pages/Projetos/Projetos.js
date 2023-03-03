import './projetos.css';
import Foto01 from '../../assets/Condo.png';
import Foto02 from '../../assets/IsabellaReske.png';
import Foto03 from '../../assets/Magic.png';
import Foto04 from '../../assets/MuayTai.png';
import Foto05 from '../../assets/WindFarm03.png';
import Foto06 from '../../assets/WindFarm04.png';

function Projetos() {
  return (
    <div id="projects">
    <div className="Projetos">
      <div className="Projetos-Container">
        <div className="ProjetosTextContainer">
          <h3 className="ProjetosHeader">UX UI Projects</h3>   
          <h5 className="Projetos-Text">Some Art work over the years.</h5>
        </div>
        <div className="ProjectFotos1">
          <img className="Foto01" src={Foto01} alt="foto01" />
          <img className="Foto02" src={Foto02} alt="foto02" />
        </div>
        <div className="ProjectFotos2">
          <img className="Foto04" src={Foto04} alt="foto04" />
          <img className="Foto03" src={Foto03} alt="foto03" />
        </div>
        <div className="ProjectFotos3">
          <img className="Foto05" src={Foto05} alt="foto05" />
          <img className="Foto06" src={Foto06} alt="foto06" />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Projetos;