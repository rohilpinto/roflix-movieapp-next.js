import { createTheme, ThemeProvider } from "@mui/material";
import "../styles/globals.css";
// import "@fontsource/lato";
// import "@fontsource/lato/100.css";
// import "@fontsource/lato/300.css";
// import "@fontsource/lato/400.css";
// import "@fontsource/lato/700.css";
// import "@fontsource/lato/900.css";

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
      fontFamily: ["lato"].join(","),
    },
  });

  return (
    <div>
      <ThemeProvider theme={globalTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
