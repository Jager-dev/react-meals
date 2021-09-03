import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__left-side">
          <Link to="/" className="header__logo">ZHU Food</Link>
          <nav className="header__menu">
            <Link to="/home" className="header__link">Home</Link>
            <Link to="/" className="header__link">Meals</Link>
            <Link to="/" className="header__link">Contact us</Link>
          </nav>
        </div>
        <div className="header__right-side">
        </div>
      </div>
    </header>
  );
}
export default Header;