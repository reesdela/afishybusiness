import { useState } from 'react'
import Logo from '../../../assets/fishy.svg'
import { Link } from 'react-router-dom'

const MobileNavigation = () => {
    const [drawerStatus, toggleDrawer] = useState(false)

    const displayDrawer = () => {
        toggleDrawer(!drawerStatus)
        const hamMenu = document.querySelector('.hamburger-menu')
        hamMenu.classList.toggle('active');
    }

    return (
        <div className="mobileNavWrapper">
        <div className="WrapperTest">
            <div className="navHeader">
                <img id="logoMobile" src={Logo} />
                <span id="menuToggle" onClick={displayDrawer}>
                    <p id="menu">MENU</p>
                    <div className="hamburger-menu">
                        <div className="ham-bar bar-top" />
                        <div className="ham-bar bar-middle" />
                        <div className="ham-bar bar-bottom" />
                    </div>
                </span>
            </div>
            {drawerStatus &&
                <nav className="nav-main">
                    <ul className="nav-list-main">
                        <li className="nav-list-item first-item">
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
                        <hr className="line-seperator"></hr>
                        <li className="nav-list-item">
                            <Link to={'login'}>SIGN IN</Link>
                        </li>
                        <li className="nav-list-item">
                            <Link to={'register'}>REGISTER</Link>
                        </li>
                    </ul>
                </nav>}
                </div>
        </div>
    )
}

export default MobileNavigation;