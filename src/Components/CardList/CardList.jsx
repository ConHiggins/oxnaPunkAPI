import "./CardList.scss";
import Card from "../Card/Card";

const CardList = ({arr}) => {

    const beers = arr.map(beer => {
        return <Card 
                    id={beer.id} 
                    name={beer.name} 
                    tagline={beer.tagline} 
                    brewdate = {beer.first_brewed}
                    desc={beer.description} 
                    img={beer.image_url} />
    })

    return <div className="card-list">
                {beers}
            </div>

}

export default CardList