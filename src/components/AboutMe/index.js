import photo from '../../images/photo.png';
import shapesDesign from '../../images/shapes_design.png';
import './style.scss';

function AboutMe() {
  return (
    <div id="aboutMe" className='aboutMe'>
      <div className='card'>
        <img className="photo" src={photo} alt="Photo Gaëtan Gobin"/>
        <div className='description'>
            <h2>A propos de moi</h2>
            <p>Hello ! Je suis Gaëtan Gobin, développeur Web, diplômé chez OpenClassrooms.</p>
            <p>Les compétences qui me définissent le plus sont : l’organisation, ma disponibilité et mes qualités relationnelles.</p>
            <p>Prêt à relever de nouveaux défis, je suis résolu à apporter des solutions efficaces et innovantes dans le développement web.</p>
        </div>
      </div> 
      <img className="shapesDesign" src={shapesDesign} alt="Shapes design"/>
    </div>
  );
}

export default AboutMe