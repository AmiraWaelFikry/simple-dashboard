import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import General from "./Pages/General/General";
import Users from "./Pages/Users/Users";
import Settings from "./Pages/Settings/Settings";
import Login from "./Pages/Login/Login";
import { ProtectedRoute } from "./Components/ProtectedRoute/ProtectedRoute";

const routes = createBrowserRouter([
  { path: "", element: <Login /> },
  { path: "/login", element: <Login /> },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      { path: "/dashboard", element: <General /> },
      { path: "general", element: <General /> },
      { path: "users", element: <Users /> },
      { path: "settings", element: <Settings /> },
    ],
  },
  { path: "*", element: <h1>NO PAGE FOUND</h1> },
]);
function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
