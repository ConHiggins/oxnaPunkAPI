import "./Main.scss";
import CardList from "../CardList/CardList";

const Main = ({arr}) => {

    

    return (<div className="main">
                
                <CardList className="card-list" arr={arr}/>
            </div>  
    )

    }

export default Main;