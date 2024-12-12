import { CssBaseline } from "@mui/material";
import { AppRoutes } from "./config/routes/AppRoutes";
import { GlobalStyle } from "./global/GlobalStyles";

function App() {
  return (
    <>
      <CssBaseline />
      <GlobalStyle />
      <AppRoutes />
    </>
  );
}

export default App;
