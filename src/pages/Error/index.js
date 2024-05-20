import { Link } from 'react-router-dom'
import '../../styles/App.scss';
import './style.scss';

function Error() {
  return (
    <div className="Error">
        <main className="App-body Error">
            <span className="App-color App-font-size-xxl .App-font-weight-700 App-margin-default">404</span>
            <p className="App-color App-font-size-s">Oups! La page que vous demandez n'existe pas.</p>
            <Link className='App-link App-font-size-xs App-margin-default' to="/">Retourner sur la page d’accueil</Link>
        </main>
    </div>
  );
}

export default Error; 