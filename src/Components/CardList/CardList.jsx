import "./CardList.scss";
import Card from "../Card/Card";

const CardList = ({arr}) => {

    const beers = arr.map(beer => {

        console.log(beer.img_url);
        return <Card id={beer.id} name={beer.name} tagline={beer.tagline} desc={beer.description} img={beer.image_url} />
    })

    console.log(beers);

    return <div className="card-list">
                {beers}
            </div>

}

export default CardList