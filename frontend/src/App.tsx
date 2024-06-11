import "./App.css";
import BooksPage from "./pages/BooksPage";
import "@fontsource/mulish/300.css";
import "@fontsource/mulish/400.css";
import "@fontsource/mulish/500.css";
import "@fontsource/mulish/700.css";
import { Container, CssBaseline } from "@mui/material";
import Header from "@/shared/components/Header/Header";
import Footer from "@/shared/components/Footer/Footer";

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <Container sx={{minHeight:'80vh'}}>
        <BooksPage />
        </Container>
        <Footer/>
      </Container>
    </>
  );
}

export default App;
