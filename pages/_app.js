// import firebase from "../firebase/init.firebase";

import { createTheme, ThemeProvider } from "@mui/material";
// import "../styles/globals.css";
import CssBaseline from "@mui/material/CssBaseline";

import "@fontsource/lato";
import "@fontsource/lato/100.css";
import "@fontsource/lato/300.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import "@fontsource/lato/900.css";
// firebase();


function MyApp({ Component, pageProps }) {
  const globalTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        light: "#d05ce3",
        main: "#9c27b0",
        dark: "#6a0080",
      },

      secondary: {
        light: "#484848",
        main: "#212121",
        dark: "#000000",
      },
    },

    typography: {
      fontFamily: ["Lato"].join(","),
    },
  });

  return (
    <div>
      <ThemeProvider theme={globalTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
