import "./Card.scss";

const Card = ({id, name, tagline, desc, img}) => {


return (

    <div className="beer-card" id={id} >
        <img className="beer-card__img" src={img} />
        <p className="beer-card__name">{name}</p>
        <p className="beer-card__tagline">{tagline}</p>
        <p className="beer-card__desc">{desc}</p>
    </div>
)

}

export default Card;