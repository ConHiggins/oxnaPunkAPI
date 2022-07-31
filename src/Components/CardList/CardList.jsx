import "./CardList.scss";
import Card from "../Card/Card";
import InfoCard from "../InfoCard/InfoCard";
import { useState, useEffect, Suspense } from "react";
import Button from "../Button/Button";
import { info } from "sass";

const CardList = ({ arr }) => {
    const malt = arr.map((beer) => {
        return (
            <p>
                {beer.ingredients.malt.map((m) => {
                    return <p>{m.name}</p>;
                })}
            </p>
        );
    });

    const [showInfoCard, setShowInfoCard] = useState(false);
    const [infoNum, setInfoNum] = useState(0);

    const updateInfoNum = (n) => {
        setInfoNum(n);
    };

    const toggleInfoCard = () => {
        console.log("info");
        setShowInfoCard(!showInfoCard);
    };

    const beers = arr.map((beer, index) => {
        return (
            <>
                <Card
                    key={beer.id}
                    name={beer.name}
                    tagline={beer.tagline}
                    brewdate={beer.first_brewed}
                    desc={beer.description}
                    img={beer.image_url}
                    infoNum={infoNum}
                    setInfoNum={setInfoNum}
                    toggleInfoCard={toggleInfoCard}
                    ph={beer.ph}
                />

                <InfoCard
                    num={beer.id}
                    infoNum={infoNum}
                    show={showInfoCard}
                    brewers_tips={beer.brewers_tips}
                    food_pairing={beer.food_pairing}
                    malts={malt[index]}
                />
            </>
        );
    });

    return <div className="card-list">{beers}</div>;
};

export default CardList;
