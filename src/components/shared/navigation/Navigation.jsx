
const Navigation = () => {

    return (
        <div>
            <div className="header">
                <img id="logo" src="../../assets/fishy.svg" />
                <br></br>
            </div>
            <div className="navigation">
                <span>HOME</span>
                <span>|</span>
                <span><a href="./subpages/ceramic_fish.php">CERAMIC FISH ART</a></span>
                <span>|</span>
                <span>CUSTOM ORDER</span>
                <span>|</span>
                <span>SALE</span>
                <span>|</span>
                <span>SHIPPING</span>
                <span>|</span>
                <span>ABOUT US</span>
                <span>|</span>
                <span>FAQ</span>
                <span>|</span>
                <span><a href="./subpages/contact_us/contact_us.php">CONTACT US</a></span>
            </div>
        </div>
    )
}

export default Navigation;