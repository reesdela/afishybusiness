import Button from "../buttons/Button"
import Input from "../input/Input"
import './Form.css'

const Form = (props) => {

    return (
        <form className="form-primary" onSubmit={(e) => props.onSubmit(e) }>
            {props.children}
        </form>
    )
}

export default Form