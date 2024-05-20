import { Link } from 'react-router-dom'
import '../../styles/App.scss';

import Projects from '../../components/Projects/';
import Contact from '../../components/Contact/';
import Skills from '../../components/Skills/';
import AboutMe from '../../components/AboutMe/';

function Home() {
  return (
    <div className="Home">
      <main>
        <AboutMe/>
        <Projects/>
        <Skills/>
        <Contact/>
      </main>
    </div>
  );
}

export default Home;
 