function Header () {
    
    return (
    <header>
        <div className="container">
            <figure>
                <img src="src/assets/img/dc-logo.png" alt="" />
            </figure>
            <nav>
                <ul>
                    <li className="li-header"><a href="#">CHARACTER</a></li>
                    <li className="active li-header"><a href="#">COMICS</a></li>
                    <li className="li-header"><a href="#">MOVIES</a></li>
                    <li className="li-header"><a href="#">TV</a></li>
                    <li className="li-header"><a href="#">GAMES</a></li>
                    <li className="li-header"><a href="#">COLLECTIBLES</a></li>
                    <li className="li-header"><a href="#">VIDEOS</a></li>
                    <li className="li-header"><a href="#">FANS</a></li>
                    <li className="li-header"><a href="#">NEWS</a></li>
                    <li className="li-header"><a href="#">SHOP</a></li>
                </ul>
            </nav>
        </div>
    </header>
)
    
}

export default Header;