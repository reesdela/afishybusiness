import Background from "../shared/background"
import Input from "../shared/input/Input"
import { registerErrors } from "../shared/error/errorStrings"
import './Register.css'
import { useState } from "react"
import RegisterForm from "./RegisterForm"
import Button from "../shared/buttons/Button"

const Register = () => {
    const [hasErrors, setHasErrors] = useState(false)

    const handleSubmit = (data) => {
        data.preventDefault()
        hasErrors ? console.log('errors') : console.log('submit')
    }

    return (
        <Background>
            <div className="body_bottom_header">
                <h1>Create Account</h1>
            </div>
            <RegisterForm
                onSubmit={handleSubmit}
                hasErrors={setHasErrors}
            />
        </Background>
    )
}

export default Register