import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ThemeWrapper from "@/shared/theme/ThemeWrapper.tsx";
import { ApolloProvider } from "@apollo/client";
import client from "@/api/apollo.ts";
import { SnackbarProvider } from "./shared/components/SnackBar/SnackbarContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeWrapper>
      <ApolloProvider client={client}>
        <SnackbarProvider>
          <App />
        </SnackbarProvider>
      </ApolloProvider>
    </ThemeWrapper>
  </React.StrictMode>
);
