import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
interface Props {}
const Header: React.FC<Props> = () => {
  const location = useLocation();
  return (
    <div className="header">
      <div className="header__left">
        <Link
          to={"/"}
          className={`header__a ${
            location.pathname === "/" && "header__a--active"
          }`}
        >
          Home
        </Link>
      </div>
      <div className="header__right">
        <Link
          to={"/awards"}
          className={`header__a ${
            location.pathname === "/awards" && "header__a--active"
          }`}
        >
          Awards
        </Link>
        <Link
          to={"/research"}
          className={`header__a ${
            location.pathname === "/research" && "header__a--active"
          }`}
        >
          Research
        </Link>
        <Link
          to={"/teaching"}
          className={`header__a ${
            location.pathname === "/teaching" && "header__a--active"
          }`}
        >
          Teaching
        </Link>
      </div>
    </div>
  );
};

export default Header;
