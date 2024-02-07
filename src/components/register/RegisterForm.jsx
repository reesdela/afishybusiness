import Form from "../shared/form/Form"
import Input from "../shared/input/Input"
import Button from "../shared/buttons/Button"
import Cookies from "js-cookie"
import { useState } from "react"
import { validateEmail, validatePassword } from "../shared/regex/regex"
import { accountErrors } from "../shared/error/errorStrings"
import Background from "../shared/background"
import './Register.css'
import { useNavigate } from "react-router-dom"

const RegisterForm = (props) => {
    const [errors, setErrors] = useState({})
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate();

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
            case 'confirmPassword': (input.value !== password) ? temp = accountErrors.register.confirmPassword.noMatch : temp = ''
                break;
        }
        setErrors((prevVal) => {
            return {...prevVal, [input.name]: temp}
        })
        return temp
    }

    const handleSubmit = async (inputs) => {
        const errorArry = []
        inputs.preventDefault()
        for (let i = 0; i < inputs.target.length - 1; i++) {
            errorArry.push(handleValidate(inputs.target[i]))
        }
        if(!errorArry.join('')) {
            const account = {
                email: email,
                password: password
            }
            const response = await fetch("http://localhost:8080/user/createUser", {
                method: "POST",
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                    "X-XSRF-TOKEN": Cookies.get('XSRF-TOKEN')
                },
                body: JSON.stringify(account)
            })
            const data = await response.json()
            console.log(data);
            if (data.internalCode !== 'USER-7') {
                setErrors({'email': accountErrors.register.email.emailTaken})
            } else {
                console.log(data)
            }
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
                    setFunction={setEmail}
                    label="Email"
                    name="email"
                    type="text"
                    errorMessage={errors.email}
                    validate={handleValidate}
                />
                <Input
                    required={true}
                    setFunction={setPassword}
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