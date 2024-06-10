import React from "react";
import { ApolloProvider } from "@apollo/client";
import "./App.css";
import client from "./api/apollo";
import BooksPage from "./pages/BooksPage";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container, CssBaseline } from "@mui/material";
import useSnackbar from "./shared/components/SnackBar/useSnackBar";
import { SnackbarProvider } from "./shared/components/SnackBar/SnackbarContext";

function App() {
  const { SnackbarComponent } = useSnackbar();

  return (
    <>
      <CssBaseline />
      <ApolloProvider client={client}>
        <SnackbarProvider>
          <Container maxWidth="lg">
            <BooksPage />
          </Container>
          <SnackbarComponent />
        </SnackbarProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
