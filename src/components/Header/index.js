import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../../images/gaetan_gobin_logo.svg';
import aboutMeIcon from '../../images/user-line1.svg';
import projectsIcon from '../../images/code-box-line2.svg';
import skillsIcon from '../../images/git-repository-line.svg';
import contactIcon from '../../images/mail-line.svg';
import './style.scss';

function Header() {
    return (
            <header className='header'>
                <img className="logo" src={logo} alt="logo" />
                <nav className="navbar">
                    <HashLink className="navbar__hashLink" smooth to="#aboutMe"><img src={aboutMeIcon} /><span>A propos</span></HashLink>
                    <HashLink className="navbar__hashLink" smooth to="#projects"><img src={projectsIcon} /><span>Projets</span></HashLink>
                    <HashLink className="navbar__hashLink" smooth to="#skills"><img src={skillsIcon} /><span>Compétences</span></HashLink>
                    <HashLink className="navbar__hashLink" smooth to="#contact"><img src={contactIcon} /><span>Contact</span></HashLink>
                </nav>
            </header> 
    )
}

export default Header