import { createTheme, ThemeProvider } from "@mui/material";
// import "../styles/globals.css";
import CssBaseline from "@mui/material/CssBaseline";
import { globalTheme } from "../Mui-Theme";
import AppStateWrapper from "../context/AppState";

import "@fontsource/lato";
import "@fontsource/lato/100.css";
import "@fontsource/lato/300.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import "@fontsource/lato/900.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <AppStateWrapper>
        <ThemeProvider theme={globalTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </AppStateWrapper>
    </div>
  );
}

export default MyApp;
