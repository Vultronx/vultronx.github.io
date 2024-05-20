import shapeRed from '../../images/shape_red.png';
import htmlIcon from '../../images/hardskills/html5-line.png'
import cssIcon from '../../images/hardskills/css3-line.png'
import jsIcon from '../../images/hardskills/javascript-line.png'
import nodeJsIcon from '../../images/hardskills/nodejs-line.png'
import reactJsIcon from '../../images/hardskills/reactjs-line.png'
import './style.scss';

function Skills() {
  return (
    <div id="skills" className='skills'>
        <div className='title'>
            <img className='shapeRed' src={shapeRed}/>
            <h2>Compétences</h2>
        </div>
        <div className='subTitle'>
            <div className='softSkills'>
                <h3>Soft Skills</h3>
                <p>Identification des besoins</p>
                <p>Résolution de problèmes</p>
                <p>Sens de lorganisation</p>
                <p>Travail déquipe</p>
                <p>Adaptabilité</p>
                <p>Autonomie</p>
            </div>
            <div className='hardSkills'>
                <h3>Hard Skills</h3>
                <div className='hardSkillsIcons'>
                    <div className='hardSkillsIcon'>
                        <img src={htmlIcon}/> 
                        <p>HTML</p>
                    </div>
                    <div className='hardSkillsIcon'>
                        <img src={cssIcon}/>
                        <p>CSS</p>
                    </div>
                    <div className='hardSkillsIcon'>
                        <img src={jsIcon}/>
                        <p>Javascript</p>
                    </div>
                    <div className='hardSkillsIcon'>
                        <img src={nodeJsIcon}/>
                        <p>Nodejs</p>
                    </div>
                    <div className='hardSkillsIcon'>
                        <img src={reactJsIcon}/>
                        <p>React</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Skills