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
      primary: "#0a0c38",
    },
    background: {
      paper: "#e1e2e1",
    },
  },
  typography: {
    fontFamily: font,
    color: "#0a0c38",
  },
});
