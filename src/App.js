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
      path: "/IoT/",
      element: <HomePage/>,
    },
    {
      path: "/IoT/about/",
      element: <UnderDevComp/>,
    },
    {
      path: "/IoT/contact/",
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
