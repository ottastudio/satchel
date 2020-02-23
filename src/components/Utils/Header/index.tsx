import Link from "next/link";
import { useToggleContext } from "../../../lib/context/ToggleContext";

import ToggleModule from "./ToggleModule";
import MenuIcon from "../SVGIcon/MenuIcon";
import AccountIcon from "../SVGIcon/AccountIcon";
import CartIcon from "../SVGIcon/CartIcon";
import SearchIcon from "../SVGIcon/SearchIcon";

import MenuModule from "./Modules/MenuModule";
import AccountModule from "./Modules/AccountModule";
import CartModule from "./Modules/CartModule";
import SearchModule from "./Modules/SearchModule";

const Header: React.FC<{}> = () => {
  const {
    dispatch,
    toggle: { menu, account, cart, search }
  } = useToggleContext();

  const modules = [
    {
      children: <MenuModule />,
      label: <MenuIcon />,
      state: menu,
      onClick: () => dispatch({ type: "TOGGLE_MENU" })
    },
    {
      children: <AccountModule />,
      label: <AccountIcon />,
      state: account,
      onClick: () => dispatch({ type: "TOGGLE_ACCOUNT" })
    },
    {
      children: <CartModule />,
      label: <CartIcon />,
      state: cart,
      onClick: () => dispatch({ type: "TOGGLE_CART" })
    },
    {
      children: <SearchModule />,
      label: <SearchIcon />,
      state: search,
      onClick: () => dispatch({ type: "TOGGLE_SEARCH" })
    }
  ];

  return (
    <header>
      <Link href="/">
        <a className="main-link">Satchel</a>
      </Link>
      {modules.map(({ label, state, onClick, children }, i: number) => (
        <ToggleModule key={i} label={label} state={state} onClick={onClick}>
          {children}
        </ToggleModule>
      ))}

      <style jsx>{`
        header {
          position: fixed;
          top: 40px;
          left: 40px;
          z-index: 1000;
          display: flex;
        }
        a {
          color: currentColor;
          text-decoration: none;
        }
        .main-link {
          border: 1px solid;
          height: 40px;
          width: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: -1px;
        }
      `}</style>
    </header>
  );
};

export default Header;
