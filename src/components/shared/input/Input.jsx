


const Input = ({ labelName = '', required = false, errorMessage = '', type = 'text', onClick = null }) => {

    return (
        <>
            {labelName &&
                <label className="form_label">{labelName} {required && <small>required</small>}</label>}
            <input className="form_input" type={type} />
            {errorMessage &&
                <span className="form_inline_message">{errorMessage}</span>}
        </>
    )
}

export default Input