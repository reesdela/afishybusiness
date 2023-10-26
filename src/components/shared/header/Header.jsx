import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    
    return (
        <div className="header">
            <nav className="header-nav">
                <ul className="header-user">
                    <li className="user-item">
                        <span><Link to={`login`}>Sign In</Link><Link to={`register`}>Register</Link></span>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;