import "./App.css";
import BooksPage from "./pages/BooksPage";
import "@fontsource/mulish/300.css";
import "@fontsource/mulish/400.css";
import "@fontsource/mulish/500.css";
import "@fontsource/mulish/700.css";
import { Box, Container, CssBaseline } from "@mui/material";
import ThemeSwitcher from "@/shared/components/ThemeSwitcher/ThemeSwitcher";
import Logo from "@/shared/components/Logo/Logo";

function App() {
  return (
    <>
      <CssBaseline />

     
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 2,
            }}
          >
            <Logo />
          
            <ThemeSwitcher />
          </Box>
          <BooksPage />
        </Container>
     
    </>
  );
}

export default App;
