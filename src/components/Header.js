import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

function Header({ mail, onClick, title, route }) {

  const toggleBurgerMenu = () => {
    const button = document.querySelector('.burger-menu');
    const header = document.querySelector('.header');
    button.classList.toggle('burger-menu_active');
    header.classList.toggle('header_burger-menu');
  };

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип Mesto" />
      <nav className="header__auth">
        <p className="header__text">{mail}</p>
        <Link to={route} className="header__link" type="button" onClick={onClick}>{title}</Link>
      </nav>
      <span className="burger-menu" onClick={toggleBurgerMenu} />
    </header>
  )
}

export default Header;
