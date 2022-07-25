import logo from './logo.svg';
import './App.css';
import Main from './Components/Main/Main';
import NavBar from './Components/NavBar/NavBar';

//import beers from './data/beers';
import { useEffect, useState } from 'react';
import Button from './Components/Button/Button';

function App() {

  const [beers, setBeers] = useState(false);
  
  const getBeers = async () => {

    const response = await fetch("https://api.punkapi.com/v2/beers");
    const data = await response.json();
    console.log(data);
    setBeers(data);
  }


useEffect(() => {
  getBeers();}, 
  []);
    
  ////////////////////////////////////////////////
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    const cleanInput = event.target.value.toUpperCase();

    setSearchTerm(cleanInput);
  }
////////////////////////////////////////////////////
  let filteredBeers = [];
  if(beers) {

      filteredBeers = beers.filter(beer => {

      return beer.name.toUpperCase().includes(searchTerm);
      }) 
    } 

  return (
    <>
    <NavBar className="nav-bar" searchTerm={searchTerm} handleInput={handleInput} />
    {beers && 
    <Main className="main" arr={filteredBeers} /> }
    </>
  );
}

export default App;
