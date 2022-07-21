import "./Button.scss";

const Button = ({value, onClick}) => {

    return <button value={value} onClick={onClick}>{value}</button>
}

export default Button;