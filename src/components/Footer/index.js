import logo from '../../images/squares.svg';
import './style.scss';

function Footer() {
  return (
    <div className="Footer">
      <footer className="App-footer">
        <p>Gaëtan Gobin © 2024</p> 
        <img src={logo} alt="logo" />
      </footer>
    </div>
  );
}

export default Footer 