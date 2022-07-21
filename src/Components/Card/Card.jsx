import { useState } from "react";
import "./Card.scss";
import Button from "../Button/Button";

import months from "../../data/months";

const Card = ({id, name, tagline, desc, img, brewdate}) => {

    let dateStr;

    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    }

    const formatDate = (d) => {

        ///Format date e.g January 1999
            dateStr = `${months[d.substring(1,2)]} ${d.substring(3,d.length)}`;
    } 

    formatDate(brewdate);
    
    return (

    <div className="beer-card" key={id} >
        {!showMore && 
        <>
            <img className="beer-card__img" src={img} />
            <p className="beer-card__name">{name}</p>
            <p className="beer-card__tagline">{tagline}</p>
            <p className="beer-card__brew-date">First brewed: {dateStr}</p>
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