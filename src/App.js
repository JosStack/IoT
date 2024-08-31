import HeaderComp from "./Components/HeaderComp/HeaderComp";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UnderDevComp from "./Components/UnderDev/UnderDevComp";
import HomePage from "./Pages/Home/HomePage";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
    },
    {
      path: "about/",
      element: <UnderDevComp/>,
    },
    {
      path: "contact/",
      element: <UnderDevComp/>,
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
