import Link from "next/link";
import { Fragment } from "react";
import { useRouter } from "next/router";
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
      name: "menu",
      state: menu,
      onClick: () => dispatch({ type: "TOGGLE_MENU" })
    },
    {
      children: <AccountModule />,
      label: <AccountIcon />,
      name: "account",
      state: account,
      onClick: () => dispatch({ type: "TOGGLE_ACCOUNT" })
    },
    {
      children: <CartModule />,
      label: <CartIcon />,
      name: "cart",
      state: cart,
      onClick: () => dispatch({ type: "TOGGLE_CART" })
    },
    {
      children: <SearchModule />,
      label: <SearchIcon />,
      name: "search",
      state: search,
      onClick: () => dispatch({ type: "TOGGLE_SEARCH" })
    }
  ];

  const { asPath } = useRouter();
  const checker =
    asPath === "/product" || asPath === "/product/[name]" ? true : false;

  return (
    <Fragment>
      <nav className="home-link">
        <Link href="/">
          <a>Satchel</a>
        </Link>
      </nav>

      <nav
        className="module-container"
        style={{
          left: checker ? "50%" : 139,
          transform: checker ? "translateX(-50%)" : "translateX(0%)"
        }}
      >
        {modules.map(({ label, state, onClick, children, name }, i: number) => (
          <ToggleModule
            key={i}
            label={label}
            state={state}
            name={name}
            onClick={onClick}
          >
            {children}
          </ToggleModule>
        ))}
      </nav>

      <style jsx>{`
        .home-link {
          position: fixed;
          top: 40px;
          left: 40px;
          z-index: 1000;
        }
        a {
          color: currentColor;
          text-decoration: none;
          border: 1px solid;
          height: 40px;
          width: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: -1px;
          font-size: 1.2rem;
          padding-top: 2px;
        }

        .module-container {
          display: flex;
          position: fixed;
          top: 40px;
          transition: left 300ms cubic-bezier(1, 0, 0, 1),
            transform 300ms cubic-bezier(1, 0, 0, 1);
          z-index: 1000;
        }
      `}</style>
    </Fragment>
  );
};

export default Header;
