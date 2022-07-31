import { useState } from "react";
import Button from "../Button/Button";
import "./InfoCard.scss";

const InfoCard = ({
    show,
    num,
    infoNum,
    brewers_tips,
    food_pairing,
    malts,
}) => {
    const [infoState, setInfoState] = useState(0);
    const info = [
        `BREWER'S TIPS: ${brewers_tips}`,
        `Best paired with: ${food_pairing}`,
        malts,
    ];

    let showSelf;

    show && infoNum == num ? (showSelf = true) : (showSelf = false);

    const incrInfoState = () => {
        infoState == info.length - 1
            ? setInfoState(0)
            : setInfoState(infoState + 1);
    };
    const decrInfoState = () => {
        infoState == 0
            ? setInfoState(info.length - 1)
            : setInfoState(infoState - 1);
    };

    let display = info[infoState];

    return (
        <>
            {showSelf && (
                <div className="info-card">
                    <p>{display}</p>
                    <Button
                        isSecondary={true}
                        value="<<"
                        onClick={decrInfoState}
                    />
                    <Button
                        isSecondary={true}
                        value=">>"
                        onClick={incrInfoState}
                    />
                </div>
            )}
        </>
    );
};

export default InfoCard;
