import "./Button.scss";

const Button = ({value, onClick, isSecondary}) => {

    let buttonType = (isSecondary) ? "button-secondary":"button-primary";
    return <button className={buttonType} value={value} onClick={onClick}>{value}</button>
}

export default Button;