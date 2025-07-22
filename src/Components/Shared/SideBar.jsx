import React, {useState} from "react";
import { LuPencil } from "react-icons/lu";
import { IoMdStar } from "react-icons/io";
import { MdOutlineKeyboard, MdOutlineKeyboardArrowDown, MdOutlineWatchLater } from "react-icons/md";
import { TbSend } from "react-icons/tb";
import { MdOutlineDrafts } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setOpen } from "../../Redux/appSlice";

const SideBar = () => {
  //const [open, setOpen] = useState(false)  //this is a local state Variable
  const dispatch = useDispatch()
const sideBarItems = [
  {
    icon: <LuPencil size={"22px"} />,
    text: "Inbox",
  },
  {
    icon: <IoMdStar size={"22px"} />,
    text: "Starred",
  },
  {
    icon: <MdOutlineWatchLater size={"22px"} />,
    text: "snooze",
  },
  {
    icon: <TbSend  size={"22px"} />,
    text: "Sent",
  },
  {
    icon: <MdOutlineDrafts size={"22px"} />,
    text: "Draft",
  },
  {
    icon: <MdOutlineKeyboardArrowDown size={"22px"} />,
    text: "More",
  },
];
  return (
    <div className="w-[15%]">
      <div className="p-3">
        <button onClick={
          () => {
            dispatch(setOpen(true))
              console.log("Dispatching setOpen(true)");
          }
          } className="flex items-center gap-2 p-4 rounded-2xl hover:shadow-md bg-[#C2E7FF]">
          <LuPencil size={"22px"} />
          Compose
        </button>
      </div>
      <div className="text-gray-500">
        {sideBarItems.map((item, index) => (
          <div key={index} className="flex items-center gap-4 pl-6 py-1 rounded-full hover:cursor-pointer my-2 hover:bg-gray-200 ">
            {item.icon}
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
