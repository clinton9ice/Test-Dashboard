import { createContext, useCallback, useContext, useReducer } from "react";
import { activeReducer, activeState } from "../Reducer/ActiveReducer";

const activeTabContext = createContext({ isActive: null });
 
// Custom Hook
export const useActiveTab = () => useContext(activeTabContext);

export const ActiveTabProvider = ({ children }) => {
  const [isActiveTab, dispatchActiveTab] = useReducer(
    activeReducer,
    activeState
  );

  const dispatcher = useCallback((e) => {
    dispatchActiveTab({ type: e });
  }, []);

  return (
    <activeTabContext.Provider value={[isActiveTab, dispatcher]}>
      {children}
    </activeTabContext.Provider>
  );
};
