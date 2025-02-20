import NavBar from "./NavBar";

const Header = (props) => {
    
    return (
    <header>
        <div className="container">
            <figure>
                <img src="src/assets/img/dc-logo.png" alt="" />
            </figure>
            <NavBar links={ props.links }/>
        </div>
    </header>
)
    
}

export default Header;