import "./CardList.scss";
import Card from "../Card/Card";
import InfoCard from "../InfoCard/InfoCard";
import { useState } from "react";

const CardList = ({arr}) => {

    const malt = arr.map(beer => {

        return (<p>{beer.ingredients.malt.map(m => { return <p>{m.name}</p>})}</p>)
    })

    const [showInfoCard, setShowInfoCard] = useState(false);

    const toggleInfoCard = () => {

        console.log("info");
        setShowInfoCard(!showInfoCard);
    }


    const beers = arr.map((beer, index) => {
        return <>
                    <Card 
                        key={beer.id} 
                        name={beer.name} 
                        tagline={beer.tagline} 
                        brewdate = {beer.first_brewed}
                        desc={beer.description} 
                        img={beer.image_url} 
                        onClick={toggleInfoCard}
                        />
                    <InfoCard        
                                      
                        show={showInfoCard}
                        brewers_tips={beer.brewers_tips}
                        food_pairing={beer.food_pairing}
                        malts={malt[index]}
                        />
                </>
    })

    return <div className="card-list">
                {beers}
            </div>

}

export default CardList