import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./app/App.jsx";
import ThemeProvider from "./theme/ThemeProvider";
import { AuthProvider } from "./auth/AuthProvider";
import { registerServiceWorker } from "./pwa/serviceWorker.js";

// Register service worker for PWA functionality
registerServiceWorker();

const basename = window.location.pathname.includes("/demos/schooliq") ? "/demos/schooliq" : "/";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter basename={basename}>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);
