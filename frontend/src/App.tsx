import { ApolloProvider } from "@apollo/client";
import "./App.css";
import client from "@/api/apollo";
import BooksPage from "./pages/BooksPage";
import "@fontsource/mulish/300.css";
import "@fontsource/mulish/400.css";
import "@fontsource/mulish/500.css";
import "@fontsource/mulish/700.css";
import { Box, Container, CssBaseline } from "@mui/material";
import useSnackbar from "@/shared/components/SnackBar/useSnackBar";
import { SnackbarProvider } from "@/shared/components/SnackBar/SnackbarContext";
import ThemeSwitcher from "@/shared/components/ThemeSwitcher/ThemeSwitcher";

function App() {
  const { SnackbarComponent } = useSnackbar();

  return (
    <>
      <CssBaseline />
      <ApolloProvider client={client}>
        <SnackbarProvider>
          <Container maxWidth="lg">
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <ThemeSwitcher />
            </Box>
            <BooksPage />
          </Container>
        </SnackbarProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
