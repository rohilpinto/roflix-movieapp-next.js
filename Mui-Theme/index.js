import { createTheme } from "@mui/material";

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

export { globalTheme };
