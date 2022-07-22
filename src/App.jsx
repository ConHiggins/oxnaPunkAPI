import logo from './logo.svg';
import './App.css';
import Main from './Components/Main/Main';
import NavBar from './Components/NavBar/NavBar';

import beers from './data/beers';
import { useState } from 'react';

function App() {

  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    const cleanInput = event.target.value.toUpperCase();

    setSearchTerm(cleanInput);
  }

const filteredBeers = beers.filter(beer => {

 return beer.name.toUpperCase().includes(searchTerm);
 
})

  return (
    <>
    <NavBar className="nav-bar" searchTerm={searchTerm} handleInput={handleInput} />
    <Main className="main" arr={filteredBeers} />
    </>
  );
}

export default App;
