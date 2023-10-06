import './Header.css'

const Header = () => {
    
    return (
        <div className="header">
            <nav className="header-nav">
                <ul className="header-user">
                    <li className="user-item">
                        <span><a href="./subpages/login/login.php">Sign In</a><a href="./subpages/create_account/create_account.php">Register</a></span>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;