import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Shared/Navbar";
import SideBar from "./Components/Shared/SideBar";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Inbox from "./Components/Shared/Inbox";
import Mail from "./Components/Shared/Mail";
import Body from "./Components/Shared/Body";
import SendMail from "./Components/Shared/SendMail";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Body />
      </div>
    ),
    children: [
      {
        path: "/",
        element: (
          <div>
            <Inbox />
          </div>
        ),
      },
       {
        path: "/mail/:id",
        element: (
          <div>
            <Mail/>
          </div>
        ),
      },
    ],
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-[#F6F8FC] h-screen w-screen overflow-hidden">
        <Navbar />
        <RouterProvider router={router}/>
        <div className="absolute w-[30%] bottom-2 right-20 z-10 ">
          <SendMail/>
        </div>
      </div>
    </>
  );
}

export default App;
