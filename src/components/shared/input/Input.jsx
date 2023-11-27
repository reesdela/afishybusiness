import { useState } from "react"
import './Input.css'


const Input = ({name = '', required = false, label = '', setFunction = () => null, errorMessage = '', type = 'text', validate = () => console.log('error') }) => {

    return (
        <div className="wrapper">
            <label className="form_label">{label}:{required && <small>required</small>}</label>
            <input name={name} onChange={(e) => setFunction(e.target.value)} onBlur={(e) => validate(e.target)} className="form_input" type={type} />
            {errorMessage && 
            <span className="form_inline_message">{errorMessage}</span>}
        </div>
    )
}

export default Input