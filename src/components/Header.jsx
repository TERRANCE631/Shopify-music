import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import "./Header.css"

export const Header = () => {
  return (
    <header>
      <Link className="logo" to="/">
        <img src={ Logo } alt="Shopmate Logo" />
        <span>Shopmate</span>
      </Link>
      <nav className="navigation">
        <NavLink className="link" to="/" end>Home</NavLink>
        <NavLink className="link" to="Card">Cart</NavLink>
      </nav>
      <Link className="items">
        <span>cart: 2</span>
      </Link>

    </header>
  )
}
