import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/Home";
import Shoes from "./components/Shoes";
import RootLayout from "./components/Root";
import ShoeInfo from "./components/shoeInfo";
import Additem from "./components/AddItem";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/shoes",
        element: <Shoes />,
      },
      {
        path: "/ShoeInfo/:id",
        element: <ShoeInfo />,
      },
      {
        path: "/Additem",
        element: <Additem />,
      },
    ],
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
