import React from "react";
import {
  MdCropSquare,
  MdInbox,
  MdKeyboard,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { FaCaretDown, FaUserFriends } from "react-icons/fa";
import { IoMdMore, IoMdRefresh } from "react-icons/io";
import { GoTag } from "react-icons/go";
import { useState } from "react";
import Messages from "./Messages";
import MessagePromotion from "../MessagePromotion";
import SocialMessage from "../SocialMessage";
const Inbox = () => {
  const [mailTypeunderline, setMailTypeUnderline] = useState(0);
  const mailType = [
    {
      text: "Primary",
      icon: <MdInbox size={"20px"} />,
      section: <Messages />,
    },
    {
      text: "Promotions",
      icon: <GoTag size={"20px"} />,
      section: <MessagePromotion />,
    },
    {
      text: "Social",
      icon: <FaUserFriends size={"20px"} />,
      section: <SocialMessage />,
    },
  ];
  return (
    <>
      <div className=" flex-1 bg-white rounded-xl mx-5">
        <div className="flex items-center justify-between px-4">
          <div className="flex items-center gap-2 text-gray-700 py-2">
            <div className="flex items-center gap-1">
              <MdCropSquare size={"20px"} />
              <FaCaretDown size={"20px"} />
            </div>
            <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer ">
              <IoMdRefresh size={"20px"} />
            </div>
            <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer ">
              <IoMdMore size={"20px"} />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500 ">1-50 of 1000</span>
            <button className="hover:rounded-full rounded-md bg-gray-100">
              <MdKeyboardArrowLeft size={"24px"} />
            </button>
            <button className="hover:rounded-full rounded-md bg-gray-100">
              <MdKeyboardArrowRight size={"24px"} />
            </button>
          </div>
        </div>
        <div className="h-[90vh] overflow-y-auto">
          <div className="flex items-center gap-1">
            {mailType.map((items, index) => (
              <button
                key={index}
                className={`${
                  mailTypeunderline === index
                    ? "border-b-4 border-b-blue-600"
                    : "border-b-4 border-b-transparent"
                } w-52 hover:bg-gray-100 flex items-center gap-5 p-4`}
                onClick={() => setMailTypeUnderline(index)}
              >
                {items.icon}
                <span>{items.text}</span>
              </button>
            ))}
          </div>
          {mailType[mailTypeunderline].section}
        </div>
      </div>
    </>
  );
};

export default Inbox;
