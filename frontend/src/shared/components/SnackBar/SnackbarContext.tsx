import React, { ReactNode, createContext, useContext } from "react";
import useSnackbar from "./useSnackBar";

interface SnackbarContextType {
  showSnackbar: (
    message: string,
    severity?: "success" | "error" | "info" | "warning"
  ) => void;
}

interface SnackbarProviderProps {
  children: ReactNode;
}

const SnackbarContext = createContext<SnackbarContextType | undefined>(
  undefined
);

export const useSnackbarContext = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error(
      "useSnackbarContext must be used within a SnackbarProvider"
    );
  }
  return context;
};

export const SnackbarProvider: React.FC<SnackbarProviderProps> = ({
  children,
}) => {
  const { showSnackbar, SnackbarComponent } = useSnackbar();

  const contextValue: SnackbarContextType = {
    showSnackbar: (message, severity) => showSnackbar(message, severity),
  };

  return (
    <SnackbarContext.Provider value={contextValue}>
      {children}
      <SnackbarComponent />
    </SnackbarContext.Provider>
  );
};
