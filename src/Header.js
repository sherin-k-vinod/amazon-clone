import React from "react";
import "./Header.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://bloximages.chicago2.vip.townnews.com/kenoshanews.com/content/tncms/assets/v3/editorial/0/56/05663cea-77e2-5e21-8a79-53e9a96e9acc/5f1f3d4695a1a.image.jpg"
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchinput"></input>
        <SearchIcon className="header__searchicon" />
      </div>

      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__options">
            <span className="header__optionsLineOne">hello sherin</span>
            <span className="header__optionsLineTwo">sign in</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__options">
            <span className="header__optionsLineOne">return</span>
            <span className="header__optionsLineTwo">& Orders </span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__options">
            <span className="header__optionsLineOne">your</span>
            <span className="header__optionsLineTwo">prime </span>
          </div>
        </Link>
      </div>
      <Link to="/checkout" className="header__link">
        <div className="header__basket"></div>
        <ShoppingBasketIcon />
        <span className="header__basketCount">{basket?.length}</span>
      </Link>
    </nav>
  );
}

export default Header;
