import logo from "./logo.svg";
import "./App.css";
import Main from "./Components/Main/Main";
import NavBar from "./Components/NavBar/NavBar";

//import beers from './data/beers';
import { useEffect, useState, useRef, Suspense } from "react";
import Button from "./Components/Button/Button";

function App() {
    const [params, setParams] = useState([]);
    const [beers, setBeers] = useState(false);
    const [loadCount, setLoadCount] = useState(0);
    let minAlcPercent, maxAlcPercent;

    const getBeers = async (params) => {
        const response = await fetch(
            "https://api.punkapi.com/v2/beers/?" +
                params.join("&") +
                "&per_page=80"
        );
        const data = await response.json();
        console.log(data);
        setBeers(data);
    };
    useEffect(() => {
        getBeers(params);
    }, [params]);

    //////////////////////////// Beer name //////////////////////////////////////////

    const searchTermParams = () => {
        ///Check for beer name param and return index
        const currentBeerParam = params.findIndex((elem) =>
            elem.includes("beer_name")
        );

        ///Reset
        if (searchTerm == "") {
            setParams((currState) => {
                return [];
            });
        }
        ////if URL params already contain "beer_name"
        else if (currentBeerParam !== -1) {
            setParams((currState) => {
                ////If so, just update the current index
                const tempParams = [...currState];
                tempParams[currentBeerParam] = `beer_name=${searchTerm}`;
                return tempParams;
            });
        } else {
            setParams((currState) => {
                ///Else push new "beer_name" to params
                const tempParams = [...currState];
                tempParams.push(`beer_name=${searchTerm}`);
                return tempParams;
            });
        }
    };

    ////////////////////////////////////////////////
    const [searchTerm, setSearchTerm] = useState("");

    const handleInput = (event) => {
        setSearchTerm(event.target.value);
    };
    //////////////////// Alcohol percentage ////////////////////////////////

    if (beers) {
        const alcoholPercents = beers.map((beer) => {
            return beer.abv;
        });

        minAlcPercent = Math.min(...alcoholPercents);

        if (loadCount == 0) {
            console.log("setting..");
            maxAlcPercent = Math.max(...alcoholPercents);
            console.log("max" + maxAlcPercent);
            setLoadCount(1);
        } else {
            maxAlcPercent = 55;
        }
        console.log(loadCount);
    }

    /////////////////////////////////////////////////

    const [sliderVal, setSliderVal] = useState(0);

    const handleSlider = (event) => {
        setSliderVal(event.target.value);
    };

    ////////////////////////////////////

    const alcPercParams = (params) => {
        ///Check for alc perc param and return index
        const currentAlcPercParam = params.findIndex((elem) =>
            elem.includes("abv")
        );

        if (currentAlcPercParam !== -1) {
            setParams((currState) => {
                ////If so, just update the current index
                const tempParams = [...currState];
                tempParams[currentAlcPercParam] = `abv_lt=${sliderVal}`;
                return tempParams;
            });
        } else {
            setParams((currState) => {
                ///Else push new "abv" to params
                const tempParams = [...currState];
                tempParams.push(`abv_lt=${sliderVal}`);
                return tempParams;
            });
        }
    };

    ////////////////////////////////

    const updateURL = () => {
        console.log("slider" + sliderVal);
        searchTermParams();
        alcPercParams(params);

        console.log(params);
    };

    return (
        <>
            {loadCount > 0 && (
                <>
                    <NavBar
                        className="nav-bar"
                        searchTerm={searchTerm}
                        handleInput={handleInput}
                        updateUrl={updateURL}
                        minAlc={minAlcPercent}
                        maxAlc={maxAlcPercent}
                        handleSlider={handleSlider}
                        sliderVal={sliderVal}
                    />
                    <Main className="main" arr={beers} />
                </>
            )}
        </>
    );
}

export default App;
