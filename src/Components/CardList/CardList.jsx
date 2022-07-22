import "./CardList.scss";
import Card from "../Card/Card";
import InfoCard from "../InfoCard/InfoCard";

const CardList = ({arr}) => {

    const malt = arr.map(beer => {

        return (<p>{beer.ingredients.malt.map(m => { return <p>{m.name}</p>})}</p>)
    })


    const beers = arr.map((beer, index) => {
        return <>
                    <Card 
                        key={beer.id} 
                        name={beer.name} 
                        tagline={beer.tagline} 
                        brewdate = {beer.first_brewed}
                        desc={beer.description} 
                        img={beer.image_url} />
                    <InfoCard
                        brewers_tips={beer.brewers_tips}
                        food_pairing={beer.food_pairing}
                        ingredients={malt[index]}
                        />
                </>
    })

    return <div className="card-list">
                {beers}
            </div>

}

export default CardList