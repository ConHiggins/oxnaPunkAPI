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
    const response = await fetch("https://api.punkapi.com/v2/beers/?" + params + "&per_page=80");
    const data = await response.json();
    console.log(data);
    setBeers(data);
  }
  useEffect(() => { getBeers(); }, [params] );

//////////////////////////////////////////////////////////////////////

  const searchTermParams = () =>{
    ///Check for beer name param and return index
    const currentBeerParam = params.findIndex(elem => elem.includes("beer_name"));

    ///Reset 
    if(searchTerm == "") {

      setParams(currState => {return [];});
    }
    ////if URL params already contain "beer_name"
    else if(currentBeerParam !== -1) {
      
      setParams(currState => {
        ////If so, just update the current index
        const tempParams = [...currState];
        tempParams[currentBeerParam] = `beer_name=${searchTerm}`;
        return tempParams;
        
      });
    } else {
    setParams(currState => {
      ///Else push new "beer_name" to params 
      const tempParams = [...currState];
      tempParams.push(`beer_name=${searchTerm}`);
      return tempParams; 
    })};
  }
    
  ////////////////////////////////////////////////
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {

    setSearchTerm(event.target.value);
    
  }
////////////////////////////////////////////////////
   

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
