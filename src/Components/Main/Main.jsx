import "./Main.scss";
import CardList from "../CardList/CardList";

const Main = ({arr}) => {

    return <CardList className="card-list" arr={arr}/>
}

export default Main;