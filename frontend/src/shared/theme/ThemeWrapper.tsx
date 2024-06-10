import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { useState, useMemo, createContext, ReactNode } from "react";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

interface ThemeWrapperProps {
  children: ReactNode;
}

const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children }) => {
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
          primary: {
            main: "#5ACCCC",
            contrastText: "#ffffff",
          },
          secondary: {
            main: "#CFFAFA",
          },
        },
        typography: {
          fontFamily: '"Mulish", sans-serif;',
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ThemeWrapper;
