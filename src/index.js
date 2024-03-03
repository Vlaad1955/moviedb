import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { ThemeProvider } from "./context/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ThemeProvider>
        <RouterProvider router={router} />
    </ThemeProvider>
);