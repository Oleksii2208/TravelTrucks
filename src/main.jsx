import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "modern-normalize";
import "./index.css";
import App from "./components/App/App.jsx";

// const MyContext = createContext();

createRoot(document.getElementById("root")).render(
  // <MyContext value={{ username: "Mango" }}>
  //   <App />
  // </MyContext>
  <StrictMode>
    <App />
  </StrictMode>
);
