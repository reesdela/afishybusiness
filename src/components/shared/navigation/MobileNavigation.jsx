import Hamburger from '../../../assets/hamburger.svg'
import Logo from '../../../assets/fishy.svg'
import './MobileNavigation.css'

const MobileNavigation = () => {

    const openDrawer = () => {

    }

    return (
        <div>
            <div className="navHeader">
                <img id="logoMobile" src={Logo} />
                <span id="menuToggle" onClick={openDrawer}>
                    <p id="menu">MENU</p>
                    <img id="hamburger" src={Hamburger} />
                </span>
            </div>
            <nav className="nav-main">
                    <ul className="nav-list-main">
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

export default MobileNavigation;