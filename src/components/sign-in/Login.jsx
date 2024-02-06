import Background from "../shared/background"
import Form from "../shared/form/Form"
import Input from "../shared/input/Input"
import Button from "../shared/buttons/Button"
import Cookies from "js-cookie"
import { validateEmail, validatePassword } from "../shared/regex/regex"
import { accountErrors } from "../shared/error/errorStrings"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import './Login.css'

const Login = () => {

    const [errors, setErrors] = useState({})
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate();

    const handleValidate = (input) => {
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
            return { ...prevVal, [input.name]: temp }
        })
        return temp
    }

    const handleSubmit = async (inputs) => {
        const errorArry = []
        inputs.preventDefault()
        for (let i = 0; i < inputs.target.length - 1; i++) {
            errorArry.push(handleValidate(inputs.target[i]))
        }
        if (!errorArry.join('')) {
            const account = {
                email: email,
                password: password,
            }
            const response = await fetch("http://localhost:8080/user/authenticate", {
                method: "POST",
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                    "X-XSRF-TOKEN": Cookies.get('XSRF-TOKEN')
                },
                body: JSON.stringify(account)
            })
            const data = await response.json()
            console.log(data)
            if (!data.status || data.status >= 400) {
                if (data.error === 'InvalidCredentials') {
                    setErrors({ 'general': accountErrors.login.invalidCredetials })
                } else {
                    setErrors({'general': accountErrors.general})
                }
            } else {
                console.log('success!')
                navigate("/")
            }
        }
    }

    return (
        <Background>
            <div className="body_bottom_header">
                <h1>Sign In</h1>
            </div>
            <div className="general_account_error">
                <p>{errors.general}</p>
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
                <Button buttonText="Sign In" />
            </Form>
        </Background>
    )
}

export default Login