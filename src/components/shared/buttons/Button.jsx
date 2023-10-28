import './Button.css'

const Button = (props) => {

    return (
        <input type="submit" className="button-primary" value={props.buttonText} />
    )
}

export default Button