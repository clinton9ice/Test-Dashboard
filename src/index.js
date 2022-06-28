import { createRoot } from "react-dom/client";

// Component
import App from "./App";

// Style
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import "./style/index.scss";
import { MetricsProvider } from "./Store/Context/Store.js";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <MetricsProvider>
    <App tab="home" />
  </MetricsProvider>
);
