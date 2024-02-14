import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import common_en from "./translations/en/common.json";
import common_id from "./translations/id/common.json";


i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      common: common_en,
    },
    id: {
      common: common_id,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
