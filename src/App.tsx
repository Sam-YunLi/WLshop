
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import HomePage from "./components/HomePage";
import "@fontsource/poppins"; // 默认权重400
import "@fontsource/poppins/600.css"; // 半粗字体


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
