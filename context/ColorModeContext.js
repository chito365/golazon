import { createContext, useState } from "react";

export const ColorModeContext = createContext();

const ColorModeContextProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  return (
    <ColorModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};

export default ColorModeContextProvider;
