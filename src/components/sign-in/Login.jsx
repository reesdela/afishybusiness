import Background from "../shared/background"
import Form from "../shared/form/Form"
import Input from "../shared/input/Input"
import Button from "../shared/buttons/Button"
import { validateEmail, validatePassword } from "../shared/regex/regex"
import { registerErrors } from "../shared/error/errorStrings"
import { useState } from "react"
import './Login.css'

const Login = () => {

    const [errors, setErrors] = useState({})
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

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

    const handleSubmit = async (inputs) => {
        // const errorArry = []
        // inputs.preventDefault()
        // for (let i = 0; i < inputs.target.length - 1; i++) {
        //     errorArry.push(handleValidate(inputs.target[i]))
        // }
        // if(!errorArry.join('')) {
        //     const account = {
        //         email: email,
        //         password: password,
        //     }
        //     const response = await fetch("http://localhost:8080/afishybusiness-backend/account/createaccount", {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //             "Accept": "application/json"
        //         },
        //         body: JSON.stringify(account)
        //     })
        //     const data = await response.json()
        //     if (!data.status) {
        //         if (data.error === 'DuplicateKeyException') {
        //             setErrors({'email': registerErrors.register.email.emailTaken})
        //         }
        //     } else {
        //         navigate("/")
        //     }
        // }
    }

    return (
        <Background>
            <div className="body_bottom_header">
                <h1>Sign In</h1>
            </div>
            {/* <form id="login_form" action="logins.php" enctype="multipart/form-data" method="post" onsubmit="return isValidForm()">
                <div class="form_field form_field_left" id="email_field">
                    <label class="form_label" for="formInput">Email: </label>
                    <input autocomplete="email" class="form_input" type="text" id="formInput" name="email" />
                        <span class="form_inline_message" id="email_message">You must enter a valid email.</span>
                </div>
                <div class="form_field form_field_right" id="password_field">
                    <label class="form_label" for="formInput">Password: </label>
                    <input class="form_input" type="password" id="formInput" name="password" />
                        <span class="form_inline_message" id="password_message">You must enter a password.</span>
                </div>
            </form>
            <div class="form_submit">
                <button id="form_button_submit" form="login_form" name="loginButton">Login</button>
            </div> */}
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
                <Button buttonText="Create Account" />
            </Form>
        </Background>
    )
}

export default Login