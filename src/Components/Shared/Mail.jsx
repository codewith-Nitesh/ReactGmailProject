import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoMdArrowBack, IoMdMore } from "react-icons/io";

import { BiArchiveIn } from "react-icons/bi";
import {
  MdDeleteOutline,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdOutlineAddTask,
  MdOutlineDriveFileMove,
  MdOutlineMarkEmailUnread,
  MdOutlineReport,
  MdOutlineWatchLater,
} from "react-icons/md";

const Mail = () => {
  const navigate = useNavigate();

  const toInbox = () => {
    navigate("/");
  };
  const { id } = useParams();

  const myIcon = [
    {
      icon: <IoMdArrowBack size={"20px"} />,
      onClick: toInbox,
    },
    {
      icon: <BiArchiveIn size={"20px"} />,
    },
    {
      icon: <MdOutlineReport size={"20px"} />,
    },
    {
      icon: <MdDeleteOutline size={"20px"} />,
    },
    {
      icon: <MdOutlineMarkEmailUnread size={"20px"} />,
    },
    {
      icon: <MdOutlineWatchLater size={"20px"} />,
    },
    {
      icon: <MdOutlineAddTask size={"20px"} />,
    },
    {
      icon: <MdOutlineDriveFileMove size={"20px"} />,
    },
    {
      icon: <IoMdMore size={"20px"} />,
    },
  ];

  return (
    <div className="flex-1 bg-white rounded-xl mx-5">
      <div className="flex items-center justify-between px-4">
        <div className="flex item-center gap-2 text-gray-700 py-2">
          {myIcon.map((items, index) => {
            return (
              <div
                key={index}
                className="p-2 rounded-full hover:bg-gray-100 cursor-pointer"
                onClick={items.onClick}
              >
                {items.icon}
              </div>
            );
          })}
        </div>
        <div className="flex items-center gap-2 ">
          <button className="hover:rounded-full rounded-md bg-gray-100">
            <MdKeyboardArrowLeft size={"24px"} />
          </button>
          <button className="hover:rounded-full rounded-md bg-gray-100">
            <MdKeyboardArrowRight size={"24px"} />
          </button>
        </div>
      </div>
      <div className="h-[90vh] overflow-y-auto p-4">
        <div className="flex items-center justify-between bg-white gap-1">
          <div className="flex items-center gap-2">
            <h1>Subject</h1>
            <span className="text-sm bg-gray-200 rounded-md px-2">inbox</span>
          </div>
          <div className="flex-none text-gray-400 my-5 text-sm">
            <span>20-07-2025</span>
          </div>
        </div>
        <div className="text-gray-500 text-sm  ">
          <h1>Nitesh123@gmail.com</h1>
          <span>to me</span>
        </div>
        <div className="my-10">
          <p>message</p>
        </div>
      </div>
    </div>
  );
};

export default Mail;
