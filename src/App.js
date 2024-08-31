import HeaderComp from "./Components/HeaderComp/HeaderComp";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
      path: "about/",
      element: <div>About!</div>,
    },
  ]);
  return (
    <div className="App">
      <HeaderComp/>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
