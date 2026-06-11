import { Router } from "./routers/Router";
import { ToastContainer } from "react-toastify";
import { ThemeContext, ThemeProviderCustom } from "./context/ThemeContext";
import { useContext, useEffect } from "react";
import { FavoritosProvider } from "./context/FavoritosContext";

function AppInner() {
  const { tema } = useContext(ThemeContext);

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(tema);
  }, [tema]);
  return (
    <>
      <Router />
      <ToastContainer />
    </>
  );
}
function App() {
  return (
    <>
      <ThemeProviderCustom>
        <FavoritosProvider>
          <AppInner />
        </FavoritosProvider>
      </ThemeProviderCustom>
    </>
  );
}

export default App;
