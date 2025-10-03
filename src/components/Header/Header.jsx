import "./Header.css";
import logo from "../../assets/logo_placeholder.png";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img src={logo} alt="logo" className="header__logo" />
        <div className="header__info">
          <h1 className="header__title">Zoe Allen</h1>
          <p className="header__subtitle">Social Media Management</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
