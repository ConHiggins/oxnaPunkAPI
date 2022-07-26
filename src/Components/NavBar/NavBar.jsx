import "./NavBar.scss";
import Button from "../Button/Button";

const NavBar = ({arr, searchTerm, handleInput, getBeers, params, searchTermParams}) => {

    const bubbles = [];
    for(let i =0; i< 20; i++) {
        bubbles.push(<div className={`bubble-${i}`}></div>)
    }

    return (
        <div className="nav-bar">
            <div className="nav-bar__searchbox-container">
                <input className="nav-bar__searchbox" type="text" value={searchTerm} onInput={handleInput}></input>
                <Button className="nav-bar__search-button" value="Search Beers" isSecondary={false} onClick={searchTermParams} />
                <div className="bubbles-bg">{bubbles}</div>
            </div>
            
        </div>
    )
}

export default NavBar;