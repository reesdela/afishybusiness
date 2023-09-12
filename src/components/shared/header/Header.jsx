import './Header.css'

const Header = () => {

    return (
        <div>
            <div className="top_of_page">
                <div className="top_of_page_info">
                    <span><a href="./subpages/login/login.php">Sign In</a><a href="./subpages/create_account/create_account.php">Register</a></span>
                </div>
            </div>
        </div>
    )
}

export default Header;