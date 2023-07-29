import Layout from "./../src/Components/Layout/Layout";
import Home from "./../src/Components/Home/Home";
import NotFound from "./../src/Components/NotFound/NotFound";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
function App() {
  let router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
