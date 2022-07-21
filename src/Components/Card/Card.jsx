import { useState } from "react";
import "./Card.scss";
import Button from "../Button/Button";

const Card = ({id, name, tagline, desc, img, brewdate}) => {

    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {

        console.log("toggle");
        setShowMore(!showMore);
    }


return (

    <div className="beer-card" key={id} >
        {!showMore && 
        <>
        <img className="beer-card__img" src={img} />
        <p className="beer-card__name">{name}</p>
        <p className="beer-card__tagline">{tagline}</p>
        <p className="beer-card__brew-date">First brewed: {brewdate}</p>
        <Button className="beer-card__toggle-info" value="Read more" onClick={toggleShowMore} />
        </> }
         {showMore &&
         <>    
            <Button className="beer-card__toggle-info" value="X" onClick={toggleShowMore} />
            <p className="beer-card__desc">{desc}</p> 
        </>}
    </div>
)

}

export default Card;