import Form from "../shared/form/Form"
import Input from "../shared/input/Input"
import Button from "../shared/buttons/Button"
import { useState } from "react"
import { validateEmail, validatePassword } from "../shared/regex/regex"
import { registerErrors } from "../shared/error/errorStrings"
import Background from "../shared/background"
import './Register.css'

const RegisterForm = (props) => {
    const [errors, setErrors] = useState({})
    const [password, setPassword] = useState('')

    const handleValidate = (input) => {
        if (input.name === 'password') {
            setPassword(input.value)
        }
        let temp = ''
        switch (input.name) {
            case 'email': temp = validateEmail(input)
                break;
            case 'password': temp = validatePassword(input)
                break;
            case 'confirmPassword': (input.value !== password) ? temp = registerErrors.register.confirmPassword.noMatch : temp = ''
                break;
        }
        setErrors((prevVal) => {
            return {...prevVal, [input.name]: temp}
        })
        return temp
    }

    const handleSubmit = (inputs) => {
        const errorArry = []
        inputs.preventDefault()
        for (let i = 0; i < inputs.target.length - 1; i++) {
            errorArry.push(handleValidate(inputs.target[i]))
        }
        if(errorArry.join('')) {
            console.log('error')
        } else {
            console.log('no error')
        }
    }

    return (
        <Background>
            <div className="body_bottom_header">
                <h1>Create Account</h1>
            </div>
            <Form
                onSubmit={handleSubmit}
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
        </Background>
    )
}

export default RegisterForm