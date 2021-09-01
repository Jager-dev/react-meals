import {Link} from "react-router-dom";
import Search from "./components/Search/Search";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__left-side">
          <Link to="/" className="header__logo">GoodFood</Link>
          <nav className="header__menu">
            <Link to="/" className="header__link">Home</Link>
            <Link to="/meals" className="header__link">Menu</Link>
            <Link to="/" className="header__link">Contact us</Link>
          </nav>
        </div>
        <div className="header__right-side">
          <Search />
        </div>
      </div>
    </header>
  );
}
export default Header;