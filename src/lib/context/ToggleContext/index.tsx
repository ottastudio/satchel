import Router from "next/router";
import {
  createContext,
  useContext,
  useReducer,
  Dispatch,
  useEffect
} from "react";

type ToggleReducerAction = {
  type:
    | "TOGGLE_MENU"
    | "TOGGLE_ACCOUNT"
    | "TOGGLE_CART"
    | "TOGGLE_SEARCH"
    | "ALL_FALSE";
};
type ToggleReducerState = {
  menu: boolean;
  account: boolean;
  cart: boolean;
  search: boolean;
};
interface ToggleProps {
  toggle: ToggleReducerState;
  dispatch: Dispatch<ToggleReducerAction>;
}

const initialState: ToggleReducerState = {
  menu: false,
  account: false,
  cart: false,
  search: false
};

const ToggleReducer = (
  state: ToggleReducerState = initialState,
  action: ToggleReducerAction
) => {
  switch (action.type) {
    case "TOGGLE_MENU":
      return {
        ...state,
        menu: !state.menu,
        account: false,
        cart: false,
        search: false
      };
    case "TOGGLE_ACCOUNT":
      return {
        ...state,
        menu: false,
        account: !state.account,
        cart: false,
        search: false
      };
    case "TOGGLE_CART":
      return {
        ...state,
        menu: false,
        account: false,
        cart: !state.cart,
        search: false
      };
    case "TOGGLE_SEARCH":
      return {
        ...state,
        menu: false,
        account: false,
        cart: false,
        search: !state.search
      };
    case "ALL_FALSE":
      return {
        ...state,
        menu: false,
        account: false,
        cart: false,
        search: false
      };
    default:
      return state;
  }
};

export const ToggleContext = createContext<ToggleProps>({
  toggle: initialState,
  dispatch: () => {}
});

export const ToggleProvider: React.FC<{}> = ({ children }) => {
  const [toggle, dispatch] = useReducer(ToggleReducer, initialState);

  useEffect(() => {
    Router.events.on("routeChangeComplete", () =>
      dispatch({ type: "ALL_FALSE" })
    );
  }, []);

  return (
    <ToggleContext.Provider value={{ toggle, dispatch }}>
      {children}
    </ToggleContext.Provider>
  );
};

export const ToggleConsumer = ToggleContext.Consumer;
export const useToggleContext = () => useContext(ToggleContext);
