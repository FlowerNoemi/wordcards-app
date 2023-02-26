import { createTheme } from "@mui/material/styles";

const font = "'Poppins', sans-serif";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "rgba(8,8,96,0.93)",
      light: "#b7b5b3",
      dark: "#0a0c38",
    },
    secondary: {
      main: "#690501",
    },
    text: {
      primary: "rgba(0,0,0,0.87)",
    },
    background: {
      default: "#690501",
      paper: "#e1e2e1",
    },
  },
  typography: {
    fontFamily: font,
  },
});
