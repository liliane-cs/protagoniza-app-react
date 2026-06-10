import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProviderCustom = ({ children }) => {
  const [tema, setTema] = useState("light");

  const alternarTema = () => {
    setTema((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ tema, alternarTema }}>
      {children}
    </ThemeContext.Provider>
  );
};
