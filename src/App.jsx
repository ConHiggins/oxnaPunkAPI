import logo from './logo.svg';
import './App.css';
import Main from './Components/Main/Main';
import NavBar from './Components/NavBar/NavBar';

//import beers from './data/beers';
import { useEffect, useState } from 'react';
import Button from './Components/Button/Button';

function App() {

  const [params, setParams] = useState("");
  const [beers, setBeers] = useState(false);
  
  
  const getBeers = async (searchTerm) => {

    let beerParam;
    if(searchTerm) { beerParam=`?beer_name=${searchTerm}` }
    

    const response = await fetch("https://api.punkapi.com/v2/beers/" + params);
    const data = await response.json();
    console.log(data);
    setBeers(data);
  }
  useEffect(() => { getBeers(); }, [] );


  const searchTermParams = () =>{

    params.includes("/?beer_name=") ? 
      setParams(params.replace(/\s+/g, '_') + searchTerm) : 
      setParams(params.replace(/\s+/g, '_') + `/?beer_name=${searchTerm}`);
      
    console.log(params);
    getBeers();
  }
    
  ////////////////////////////////////////////////
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();

    setSearchTerm(cleanInput);
    console.log(searchTerm);
    
  }
////////////////////////////////////////////////////
  let filteredBeers = [];
  if(beers) {

      filteredBeers = beers.filter(beer => {

      return beer.name.toLowerCase().includes(searchTerm);
      }) 
    }; 

  return (
    <>
    <NavBar className="nav-bar" 
            searchTerm={searchTerm} 
            handleInput={handleInput} 
            searchTermParams={searchTermParams}
            getBeers={getBeers} 
            params={params} />
    {beers && 
    <Main className="main" arr={beers} /> }
    </>
  );
}

export default App;
