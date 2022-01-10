import "../styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material";

function MyApp({ Component, pageProps }) {
  const globalTheme = createTheme({
    palette: {
      primary: {
        main: "#DC7F9B",
      },
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
