import "./NavBar.scss";

const NavBar = ({arr, searchTerm, handleInput}) => {



    return (
        <div className="nav-bar">
            <input className="nav-bar__searchbox" type="text" value={searchTerm} onInput={handleInput}></input>
        </div>
    )
}

export default NavBar;