import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

import "modern-normalize";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext/ThemeContext.jsx";
import { Provider } from "react-redux";
import { persistor, store } from "./components/redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import "izitoast/dist/css/iziToast.min.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
