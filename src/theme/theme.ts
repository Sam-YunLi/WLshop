import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6f1200", // 主色：深红色
      contrastText: "#FFFFFF", // 与主色搭配的文字颜色
    },
    secondary: {
      main: "#D4AF37", // 次色：金色
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#FAF3E0", // 米色背景
      paper: "#FFFFFF",
    },
    text: {
      primary: "#333333", // 主文字颜色
      secondary: "#777777", // 次文字颜色
    },
  },
  typography: {
    fontFamily: `"Poppins", "Arial", sans-serif`,
    h1: {
      fontWeight: 700,
      fontSize: "2.5rem",
      color: "#FFFFFF", // 深红色强调
    },
    h2: {
      fontWeight: 600,
      fontSize: "2rem",
      color: "#FFFFFF",
    },
    body1: {
      fontWeight: 400,
      fontSize: "1rem",
      color: "#333333",
    },
    body2: {
      fontWeight: 300,
      fontSize: "0.9rem",
      color: "#777777",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px", // 按钮圆角
          textTransform: "none",
          padding: "8px 16px",
        },
        containedPrimary: {
          backgroundColor: "#6f1200",
          "&:hover": {
            backgroundColor: "#4A0E00", // 更深的红色
          },
        },
      },
    },
  },
});

export default theme;
