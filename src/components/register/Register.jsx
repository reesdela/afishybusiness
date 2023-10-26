import Background from "../shared/background"
import Input from "../shared/input/Input"
import './Register.css'

const Register = () => {


    return (
        <Background>
            <div className="body_bottom_header">
                <h1>Create Account</h1>
            </div>
            <form id="create_account" encType="multipart/form-data" method="post">
                    <div className="form_field form_field_left" id="email_field">
                        <Input 
                            required={true}
                            labelName='Email:'
                            type="text"
                            errorMessage="You must enter a valid email."
                        />
                    </div>
                    <div className="form_field form_field_right" id="password_field">
                        <label className="form_label" htmlFor="formInput">Password: <small>required</small></label>
                        <input className="form_input" type="password" id="formInputPassword" name="password" />
                        <span className="form_inline_message" id="password_message">You must enter a password that is at least 6 characters long.</span>
                    </div>
                    <div className="form_field form_field_left" id="confirmPassword_field">
                        <label className="form_label" htmlFor="formInput">Confirm Password: <small>required</small></label>
                        <input className="form_input" type="password" id="formInputConfirmPass" name="confirmPassword" />
                        <span className="form_inline_message" id="confirmPassword_message">Passwords do not match.</span>
                    </div>
            </form>
            <div className="form_submit">
                <button id="form_button_submit" form="create_account" name="createAccountButton">Create Account</button>
            </div>
        </Background>
    )
}

export default Register