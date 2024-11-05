import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import { Home } from "./pages/home";
import { NavBar } from "./components/nav";
import { Footer } from "./components/footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);


function App() {


  return (
    <>
      <NavBar />
      <RouterProvider router={router} />
      <Footer />
    </>
  )
}

export default App
