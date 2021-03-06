import { createTheme } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      light: "#a4161a",
      main: "#ba181b",
      dark: "#e5383b",
    },
    secondary: {
      light: "#023e8a",
      main: "#023e8a",
      dark: "#0077b6",
    },
    text: {
      primary: "#707070",
      secondary: "#9B9B9B",
    },
    error: {
      main: "#FC3C00",
    },
    warning: {
      main: "#FCA600",
    },
    success: {
      main: "#00D34D",
    },
    grey: {
      50: "#FAFAFA",
      100: "#F0F0F0",
      200: "#D7D9DD",
      300: "#C4C4C4",
      400: "#9B9B9B",
    },
  },
  typography: {
    fontFamily: "Poppins",
  },
  shape: {
    borderRadius: "1rem",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
      variants: [
        {
          props: { variant: "contained", color: "secondary" },
          style: {
            color: "white",
          },
        },
      ],
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0px 0px 39px rgba(0, 0, 0, 0.05)",
          textTransform: "uppercase",
        },
      },
    },
  },
});

export default theme;
