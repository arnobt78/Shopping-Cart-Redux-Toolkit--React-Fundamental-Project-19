import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import "./Header.css";

export function Header() {
  const cartList = useAppSelector((state) => state.cartState.cartList);

  return (
    <header>
      <Link to="/" className="logo">
        <img src="/vite.svg" alt="Shopmate Logo" />
        <span>REDUX CART</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>
          Home
        </NavLink>
        <NavLink to="/cart" className="link">
          Cart
        </NavLink>
      </nav>
      <Link to="/cart" className="items">
        <span>Cart: {cartList.length}</span>
      </Link>
    </header>
  );
}
