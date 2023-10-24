import './background.css'

const Background = (props) => {

    return (
        <div id="body_bottom_wrapper">
            {props.children}
        </div>
    )
}

export default Background;