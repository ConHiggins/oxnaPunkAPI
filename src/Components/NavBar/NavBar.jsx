import "./NavBar.scss";

const NavBar = ({arr, searchTerm, handleInput}) => {



    return (
        <div className="nav-bar">
            <input type="text" value={searchTerm} onInput={handleInput} className="nav-bar__search-bar"></input>
        </div>
    )
}

export default NavBar;