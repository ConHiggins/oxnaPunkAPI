import logo from './logo.svg';
import './App.css';
import Main from './Components/Main/Main';
import NavBar from './Components/NavBar/NavBar';

//import beers from './data/beers';
import { useEffect, useState } from 'react';
import Button from './Components/Button/Button';

function App() {
  
  
  const [params, setParams] = useState([]);
  const [beers, setBeers] = useState(false);
  
  
  const getBeers = async (searchTerm) => {

    console.log(params);
    

    const response = await fetch("https://api.punkapi.com/v2/beers/?" + params);
    const data = await response.json();
    console.log(data);
    setBeers(data);
  }
  useEffect(() => { getBeers(); }, [params] );


  const searchTermParams = () =>{

    const currentBeerParam = params.findIndex(elem => elem.includes("beer_name"))
    console.log("currB:" + currentBeerParam);

    if(currentBeerParam !== -1) {
      
      setParams(currState => {

        const tempParams = [...currState];
        tempParams[currentBeerParam] = `beer_name=${searchTerm}`;
        return tempParams;
        
      })
    } else {
    setParams(currState => {

      const tempParams = [...currState];
      tempParams.push(`beer_name=${searchTerm}`);
      return tempParams; })  }
      
    console.log(params);
  }
    
  ////////////////////////////////////////////////
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {

    setSearchTerm(event.target.value);
    
  }
////////////////////////////////////////////////////
  // let filteredBeers = [];
  // if(beers) {

  //     filteredBeers = beers.filter(beer => {

  //     return beer.name.toLowerCase().includes(searchTerm);
  //     }) 
  //   }; 

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
