import React from "react";
import "./index.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { QueryClientProvider, QueryClient } from "react-query";

const container = document.getElementById("root");
const root = createRoot(container);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <App />
      </Router>{" "}
    </QueryClientProvider>{" "}
  </React.StrictMode>
);
