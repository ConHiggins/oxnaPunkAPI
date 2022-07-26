import { useEffect, useState } from "react";
import "./Card.scss";
import Button from "../Button/Button";
import Color from "color-thief-react";
import { Palette } from "color-thief-react";

import months from "../../data/months";

const Card = ({
    id,
    name,
    tagline,
    desc,
    img,
    brewdate,
    infoNum,
    setInfoNum,
    toggleInfoCard,
    ph,
}) => {
    ////////////////////////////////////////////////

    const greyCol = "#1b1c22";

    let dateStr;

    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
        setInfoNum(id);
        console.log(infoNum);
        toggleInfoCard();
    };

    const formatDate = (d) => {
        ///Format date e.g January 1999
        dateStr = `${months[d.substring(1, 2) - 1]} ${d.substring(
            3,
            d.length
        )}`;
    };

    formatDate(brewdate);

    return (
        <Palette src={img} crossOrigin="anonymous" format="hex">
            {({ data, loading }) => {
                if (loading === true || data === undefined) {
                    return null;
                }
                return (
                    <div className="beer-card-wrapper">
                        <div className="beer-card-background"></div>
                        <div
                            key={id}
                            className="beer-card"
                            style={{
                                background: `linear-gradient(to right, 
                                        ${greyCol}, 
                                        ${data[0]} 20%, 
                                        ${data[0]} 80%, 
                                        ${greyCol} 100% )`,
                            }}
                        >
                            {!showMore && (
                                <>
                                    <div className="beer-card__date-label">
                                        <p className="beer-card__brew-date">
                                            First brewed: <br />
                                            {dateStr}
                                        </p>
                                    </div>

                                    <img className="beer-card__img" src={img} />
                                    <p className="beer-card__name">{name}</p>
                                    <p className="beer-card__tagline">
                                        {tagline}
                                    </p>
                                    <div className="beer-card__button">
                                        <Button
                                            isSecondary={true}
                                            value="Read more"
                                            onClick={toggleShowMore}
                                        />
                                    </div>
                                </>
                            )}

                            {showMore && (
                                <>
                                    <Button
                                        isSecondary={true}
                                        value="X"
                                        onClick={toggleShowMore}
                                    />
                                    <p className="beer-card__desc">{desc}</p>
                                </>
                            )}
                        </div>
                    </div>
                );
            }}
        </Palette>
    );
};

export default Card;
