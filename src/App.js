import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Category from "./components/Category";
import Doctors from "./components/Doctors";
import AllDoctors from "./components/AllDoctors";
import Login from "./components/Login";
import Register from "./components/Register";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () =>
            fetch("https://medihealth-website.onrender.com/doctors"),
        },
        {
          path: "/services",
          element: <Services></Services>,
          loader: () =>
            fetch("https://medihealth-website.onrender.com/doctors"),
        },
        {
          path: "/category/:id",
          element: <Category></Category>,
        },
        {
          path: "/doctors",
          element: <Doctors></Doctors>,
        },
        {
          path: "/doctors/:id",
          element: (
            <PrivateRoute>
              <AllDoctors></AllDoctors>
            </PrivateRoute>
          ),
          loader: ({ params }) =>
            fetch(
              `https://medihealth-website.onrender.com/doctors/${params.id}`
            ),
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/contact",
          element: <Contact></Contact>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
