import { Index } from "./pages/Index";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

export const routes = [
  { path: "/", element: <Index /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
];
