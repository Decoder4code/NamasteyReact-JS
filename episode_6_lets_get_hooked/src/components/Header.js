const Title =()=>(
    <a href="/">
    <img 
        className="logo"
        alt="logo"
        src="https://t3.ftcdn.net/jpg/03/74/73/78/360_F_374737839_VsxlmnN7soqOOOFFzy5kfE9H6PFMCkPX.jpg"
    />
    </a>
);
const Header=()=>(
    <div className="header">
        <Title />     
        <div className="nav-items">
            <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
            </ul>
        </div>
    </div>
);
export default Header;
