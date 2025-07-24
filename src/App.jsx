import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Shared/Navbar";
import SideBar from "./Components/Shared/SideBar";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Inbox from "./Components/Shared/Inbox";
import Mail from "./Components/Shared/Mail";
import Body from "./Components/Shared/Body";
import SendMail from "./Components/Shared/SendMail";
import Login from "./Components/Shared/Login";
import { useSelector } from "react-redux";

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
            <Mail />
          </div>
        ),
      },
    ],
  },
]);

function App() {
  const [count, setCount] = useState(0);
  const {user} = useSelector(state => state.appSlice)
  return (
    <>
      <div className="bg-[#F6F8FC] h-screen w-screen overflow-hidden">
        {!user ? (
          <Login />
        ) : (
          <>
            <Navbar />
            <RouterProvider router={router} />
            <div className="absolute w-[30%] bottom-2 right-20 z-10 ">
              <SendMail />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
