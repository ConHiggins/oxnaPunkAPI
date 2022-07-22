import logo from './logo.svg';
import './App.css';
import Main from './Components/Main/Main';
import NavBar from './Components/NavBar/NavBar';

import beers from './data/beers';

function App() {
  return (
    <>
    <NavBar className="nav-bar"/>
    <Main className="main" arr={beers} />
    </>
  );
}

export default App;
