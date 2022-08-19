import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  typography: {
    regular: {
      fontSize: "1.2rem",
      fontWeight: "200",
      textAlign: "center",
      margin: "0 2rem",
      color: "#000000",
      background: "transparent",
    },
    medium: {
      fontSize: "1.2rem",
      fontWeight: "400",
      textAlign: "center",
      margin: "0 2rem",
      color: "#000000",
      background: "transparent",
    },
    bold: {
      fontSize: "1.2rem",
      fontWeight: "600",
      textAlign: "center",
      margin: "0 2rem",
      color: "#000000",
      background: "transparent",
    },
  },
  palette: {
    primary: {
      main: "#7C72E8",
      white: "#ffffff",
      rhythm: "#696888",
      darkGray: "#484848",
      black: "#000000",
      eerieBlack: "#261919",
      chineseBlack: "#0F0F17",
      purple: "rgba(124, 114, 232, 0.51)",
      plumpPurple: "#657ADC",
      soap: "#E9E9EE",
      midGray: "#B8B7B7",
      lightGray: "#D9D9D9",
      ash: '#DDDDDD',
      darkAsh: '#A7A9AD',
      lightAsh: '#EFF0F2'
    },
    secondary: {
      main: "#0d2344",
    },
  },
});
theme = responsiveFontSizes(theme);

export { theme };
