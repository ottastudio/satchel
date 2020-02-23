import { createContext, useContext } from "react";
import { NavigationProvider } from "./NavigationContext";

export const AppContext = createContext({});
export const AppProvider: React.FC<{}> = ({ children }) => {
  return (
    <AppContext.Provider value={{}}>
      <NavigationProvider>{children}</NavigationProvider>
    </AppContext.Provider>
  );
};
export const AppConsumer = AppContext.Consumer;
export const useAppContext = () => useContext(AppContext);
