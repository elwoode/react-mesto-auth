import { useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";


function Header({ emailName, onSignOut }) {
  const location = useLocation();
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }

  return (
    <header className={`header ${isBurgerMenuOpen && `header_burger-menu`}`}>
      <img className="header__logo" src={logo} alt="Логотип Mesto" />
      <nav className="header__auth">
        <p className="header__text">
          {location.pathname === "/" ? emailName : ""}
        </p>
        <Link to={
          location.pathname === "/sign-up"
            ? "/sign-in"
            : location.pathname === "/sign-in"
              ? "/sign-up"
              : "/sign-in"
        }
          className="header__link" type="button"
          onClick={location.pathname === "/" ? onSignOut : () => { }}
        >
          {
            location.pathname === "/sign-up"
              ? "Войти"
              : location.pathname === "/sign-in"
                ? "Регистрация"
                : "Выйти"
          }
        </Link>
      </nav>
      <span className={`burger-menu ${isBurgerMenuOpen && `burger-menu_active`}`} onClick={toggleBurgerMenu} />
    </header>
  )

};
export default Header;