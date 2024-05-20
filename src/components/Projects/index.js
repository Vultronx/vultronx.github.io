import { useState, useEffect } from 'react';

import Modal from '../../components/Modal/';

import './style.scss';
import shapeBrown from '../../images/shape_brown.png';
import projet1 from '../../images/projects/sophie_bluel.png';
import projet2 from '../../images/projects/seo_nina2.png';
import projet3 from '../../images/projects/mon_vieux_grimoire.png';
import closeIcon from '../../images/close.png';
import jsonTest from "../../assets/logements.json";

//barre de filtre par catégories
//modale d'affichage du projet

function Projects() {
  const [books, setBooks] = useState([]);
  const [filterBooks, setFilterBooks] = useState([]);
  const [modalTitle, setModalTitle] = useState([]);
  const [modalDescription, setModalDescription] = useState([]);
  const [modalGithub, setModalGithub] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/projects');
        if (response.ok) {
          const data = await response.json();
          console.log("data: ",data);
          setBooks(data);
          setFilterBooks(data);
        } else {
          console.error('Erreur lors de la récupération des données');
        }
      } catch (error) {
        console.error('Erreur réseau :', error);
      }
    };

    fetchData();
  }, []);


  let filterMenu = document.getElementById("filterMenu");

  const filter = (category) => {
    console.log(filterMenu);
    //const newContact = await addContact(data);*
    if (category==0) { 
      setBooks(filterBooks.filter((book) => book.category!=""));
      filterMenu.childNodes[0].className = "selected";
      filterMenu.childNodes[1].className = "";
      filterMenu.childNodes[2].className = "";
      filterMenu.childNodes[3].className = "";
    }
    if (category==1) {
      setBooks(filterBooks.filter((book) => book.category=="backend"));
      filterMenu.childNodes[0].className = "";
      filterMenu.childNodes[1].className = "selected";
      filterMenu.childNodes[2].className = "";
      filterMenu.childNodes[3].className = "";
    }
    if (category==2) {
      setBooks(filterBooks.filter((book) => book.category=="frontend"));
      filterMenu.childNodes[0].className = "";
      filterMenu.childNodes[1].className = "";
      filterMenu.childNodes[2].className = "selected";
      filterMenu.childNodes[3].className = "";
    }
    if (category==3) {
      setBooks(filterBooks.filter((book) => book.category=="seo"));
      filterMenu.childNodes[0].className = "";
      filterMenu.childNodes[1].className = "";
      filterMenu.childNodes[2].className = "";
      filterMenu.childNodes[3].className = "selected";
    }
  };

  let modal = document.getElementById("modal");
  let imgElement = document.getElementById("picture");

  const showModal = (project) => {
    const imageUrl = project.imageUrl;
    console.log(modal.style.display);
    if (modal.style.display == "") { //pas de none !
      modal.appendChild(imgElement);
      imgElement.src = imageUrl;
      setModalTitle(project.title);
      setModalDescription(project.description);
      setModalGithub(project.github);
      modal.style.display = "block";
      console.log("Affichage de la modale");
      console.log(imageUrl);
    }
  };

  const closeModal = () => {
    modal.style.display = "";
  }
  
  return (
    <div id="projects" className='projects'>
        <div className='title'>
            <img className='shapeBrown' src={shapeBrown}/>
            <h2>Projets</h2>
        </div>
        <div id="filterMenu" className='filterMenu'>
            <button className="selected" onClick={() => filter(0)}>Tous</button>
            <button onClick={() => filter(1)}>Backend</button>
            <button onClick={() => filter(2)}>Frontend</button>
            <button onClick={() => filter(3)}>SEO</button>
        </div>
        <div className='cards'>
            <div key="test" className='card' onClick={() => showModal()}>
              <img className="cardCover" src={projet1}></img>
              <div className="titleBar">
                <h5>Sophie Bluel</h5>
              </div>
              <div className="cardMask"></div>
              {/* Affichez d'autres propriétés du livre ici */}
            </div>
            {books.map(project => (
              <div key={project.id} className='card' onClick={() => showModal(project)}>
                <img className="cardCover" src={project.imageUrl}></img>
                <div className="titleBar">
                  <h5>{project.title}</h5>
                </div>
                <div className="cardMask"></div>
                {/* Affichez d'autres propriétés du livre ici */}
              </div>
            ))}
        </div>
        <Modal>
            <div id="modal" className='modal-window'>
              <img id='picture'/>           
              <div className="description">
                <h5>{modalTitle}</h5>
                <p>{modalDescription}</p>
                <a target="_blank" href={modalGithub}><div className='githubButton' alt="lien github">github</div></a>
              </div>
              <div id="close" className="close"><img src={closeIcon} onClick={() => closeModal()}></img></div>
            </div>
        </Modal>
    </div>
  );
}

export default Projects