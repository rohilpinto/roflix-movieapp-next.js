// import firebase from "../firebase/init.firebase";

import { createTheme, ThemeProvider } from "@mui/material";

// import "../styles/globals.css";
import Layout from "../components/Layout";
import CssBaseline from "@mui/material/CssBaseline";
import { globalTheme } from "../Mui-Theme";

import "@fontsource/lato";
import "@fontsource/lato/100.css";
import "@fontsource/lato/300.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import "@fontsource/lato/900.css";

// firebase();

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={globalTheme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
