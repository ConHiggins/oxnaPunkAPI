import "./NavBar.scss";
import Button from "../Button/Button";
import { useRef, useState } from "react";

const NavBar = ({
    searchTerm,
    handleInput,
    updateUrl,
    minAlc,
    maxAlc,
    ref,
    handleSlider,
    sliderVal,
}) => {
    const bubbles = [];
    for (let i = 0; i < 20; i++) {
        bubbles.push(<div className={`bubble-${i}`}></div>);
    }

    return (
        <div className="nav-bar">
            <div className="nav-bar__searchbox-container">
                <input
                    className="nav-bar__searchbox"
                    type="text"
                    value={searchTerm}
                    onInput={handleInput}
                ></input>
                <Button
                    className="nav-bar__search-button"
                    value="Search Beers"
                    isSecondary={false}
                    onClick={updateUrl}
                />
                <div className="nav-bar__input-container">
                    <p className="nav-bar__input-title">Alcohol %</p>
                    <input
                        onChange={(event) => {
                            handleSlider(event);
                        }}
                        type="range"
                        min={minAlc}
                        max={maxAlc}
                        className="nav-bar__input"
                    />
                    <p className="nav-bar__input-title">{sliderVal}</p>
                </div>
                <div className="bubbles-bg">{bubbles}</div>
            </div>
        </div>
    );
};

export default NavBar;
