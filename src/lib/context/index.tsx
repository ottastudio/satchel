import { createContext, useContext } from "react";
import { ToggleProvider } from "./ToggleContext";

export const AppContext = createContext({});
export const AppProvider: React.FC<{}> = ({ children }) => {
  return (
    <AppContext.Provider value={{}}>
      <ToggleProvider>{children}</ToggleProvider>
    </AppContext.Provider>
  );
};
export const AppConsumer = AppContext.Consumer;
export const useAppContext = () => useContext(AppContext);
