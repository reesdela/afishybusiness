import './Navigation.css'
import Logo from '../../../assets/fishy.svg'

const Navigation = () => {

    return (
        <div>
            <div className="imgLogo">
                <img id="logo" src={Logo} />
            </div>
            <nav className="nav-main">
                <ul className="nav-list-main">
                    <li className="nav-list-item">
                        <a href="">HOME</a>
                    </li>
                    <li className="nav-list-item">
                        <a href="">CERAMIC FISH ART</a>
                    </li>
                    <li className="nav-list-item">
                        <a href="">CUSTOM ORDER</a>
                    </li>
                    <li className="nav-list-item">
                        <a href="">SALE</a>
                    </li>
                    <li className="nav-list-item">
                        <a href="">SHIPPING</a>
                    </li>
                    <li className="nav-list-item">
                        <a href="">ABOUT US</a>
                    </li>
                    <li className="nav-list-item">
                        <a href="">FAQ</a>
                    </li>
                    <li className="nav-list-item">
                        <a href="">CONTACT US</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;