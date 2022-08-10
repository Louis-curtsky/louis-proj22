import logo from '../components/logo.jpg';

const Header =()=>{
    return (
<header>
<div className="Logo">
    <img src={logo} width="75rm" alt="Logo for Work Freelance"/>
</div>
<div>
<div>
    <nav>
    <h3>
    <a href="#" className="navbutton1"><span className="material-symbols-outlined">shopping_cart_checkout</span></a>
    <a href="#" className="navbutton1"><span className="material-symbols-outlined">logout</span></a>
    <a href="#" className="navbutton1"><span className="material-symbols-outlined">app_registration</span></a>
    </h3>
    </nav>
</div>
<nav>
    <a href="/Register.html" className="navbutton">Register</a>
    <a href="/person.html" className="navbutton">About</a>
    <a href="#" className="navbutton">Conact</a>
</nav>
</div>
</header>
);}

export default Header;