import { createTheme, responsiveFontSizes } from "@mui/material";
import { grey } from "@mui/material/colors";

let globalTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: "#d05ce3",
      main: "#9c27b0",
      dark: "#6a0080",
      extraDark: "#130720",
      contrastText: "#ffffff",
    },

    secondary: {
      light: "#484848",
      main: "#212121",
      dark: "#000000",
      contrastText: "#ffffff",
    },

    light: {
      main: grey[50],
    },
  },

  typography: {
    fontFamily: ["Lato"].join(","),
  },
});

globalTheme = responsiveFontSizes(globalTheme);

export { globalTheme };
