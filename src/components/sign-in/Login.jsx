import Background from "../shared/background"
import './Login.css'

const Login = () => {
    return (
        <Background>
            <div class="body_bottom_header">
                <h1>Sign In</h1>
            </div>
            <form id="login_form" action="logins.php" enctype="multipart/form-data" method="post" onsubmit="return isValidForm()">
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
            </div>
        </Background>
    )
}

export default Login