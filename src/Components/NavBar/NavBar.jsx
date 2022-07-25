import "./NavBar.scss";
import Button from "../Button/Button";

const NavBar = ({arr, searchTerm, handleInput, getBeers, params, searchTermParams}) => {

    

    return (
        <div className="nav-bar">
            <input className="nav-bar__searchbox" type="text" value={searchTerm} onInput={handleInput}></input>
            <Button value="Search" isSecondary={true} onClick={searchTermParams} />
        </div>
    )
}

export default NavBar;