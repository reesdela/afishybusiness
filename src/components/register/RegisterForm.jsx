import Form from "../shared/form/Form"
import Input from "../shared/input/Input"
import Button from "../shared/buttons/Button"
import { useState } from "react"
import { validateEmail, validatePassword } from "../shared/regex/regex"
import { registerErrors } from "../shared/error/errorStrings"

const RegisterForm = (props) => {
    const [errors, setErrors] = useState({})
    const [password, setPassword] = useState('')

    const handleValidate = (input) => {
        if (input.name === 'password') {
            setPassword(input.value)
        }
        switch (input.name) {
            case 'email': setErrors({...errors, 'email': validateEmail(input)}) 
                break;
            case 'password': setErrors({...errors, 'password': validatePassword(input)})
                break;
            case 'confirmPassword': (input.value !== password) ? setErrors({...errors, 'confirmPassword': registerErrors.register.confirmPassword.noMatch}) : setErrors({...errors, 'confirmPassword': ''})
                break;
        }
        console.log(errors)
    }

    return (
        <Form
            onSubmit={props.onSubmit}
        >
            <Input
                required={true}
                label="Email"
                name="email"
                type="text"
                errorMessage={errors.email}
                validate={handleValidate}
            />
            <Input
                required={true}
                label="Password"
                name="password"
                type="password"
                errorMessage={errors.password}
                validate={handleValidate}
            />
            <Input
                required={true}
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                errorMessage={errors.confirmPassword}
                validate={handleValidate}
            />
            <Button buttonText="Create Account" />
        </Form>
    )
}

export default RegisterForm