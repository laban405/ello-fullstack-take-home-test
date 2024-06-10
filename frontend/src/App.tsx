import React, { useMemo, useState } from "react";
import { ApolloProvider } from "@apollo/client";
import "./App.css";
import client from "@/api/apollo";
import BooksPage from "./pages/BooksPage";
import "@fontsource/mulish/300.css";
import "@fontsource/mulish/400.css";
import "@fontsource/mulish/500.css";
import "@fontsource/mulish/700.css";
import {
  Box,
  Container,
  CssBaseline,
  IconButton,
  ThemeProvider,
  createTheme,
  useTheme,
} from "@mui/material";
import useSnackbar from "@/shared/components/SnackBar/useSnackBar";
import { SnackbarProvider } from "@/shared/components/SnackBar/SnackbarContext";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  const { SnackbarComponent } = useSnackbar();
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <>
      <CssBaseline />
      <ApolloProvider client={client}>
        <SnackbarProvider>
          <Container
            maxWidth="lg"
            
          >
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton
              sx={{ ml: 1 }}
              onClick={colorMode.toggleColorMode}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
            </Box>
            <BooksPage />
          </Container>
          <SnackbarComponent />
        </SnackbarProvider>
      </ApolloProvider>
    </>
  );
}

export default function ThemeWrapper() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({

        palette: {
          mode,
          primary:{
            main:'#5ACCCC',
            contrastText: '#ffffff',
          },
          secondary:{
            main:'#CFFAFA'
          }
        },
        typography:{
          fontFamily:'"Mulish", sans-serif;'
        }
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
