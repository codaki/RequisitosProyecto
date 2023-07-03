import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Peliculas from "./pages/Peliculas";
import Usuario from "./pages/Usuario";
import Encuesta from "./pages/Encuesta";
import EncuestaS from "./pages/EncuestaS";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Peliculas",
        element: <Peliculas />,
      },
      {
        path: "/Usuario",
        element: <Usuario />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/Encuesta",
    element: <Encuesta />,
  },
  {
    path: "/EncuestaS",
    element: <EncuestaS />,
  }
]);

function App({ children }) {
  return (
    
    <div className="app">
      <div>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
