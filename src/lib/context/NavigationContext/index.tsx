import { createContext, useContext } from "react";

export const NavigationContext = createContext({});
export const NavigationProvider: React.FC<{}> = ({ children }) => {
  return (
    <NavigationContext.Provider value={{}}>
      {children}
    </NavigationContext.Provider>
  );
};
export const NavigationConsumer = NavigationContext.Consumer;
export const useNavigationContext = () => useContext(NavigationContext);
