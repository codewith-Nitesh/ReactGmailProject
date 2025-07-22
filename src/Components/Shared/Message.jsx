import React from "react";
import { MdCropSquare } from "react-icons/md";
import { RiStarLine } from "react-icons/ri";
import {useNavigate} from "react-router-dom"

const Message = ({email}) => {
    const navigate  = useNavigate()
    const openMail = () =>{
        navigate(`/mail/${email.id}`)
    }
  return (
    <div onClick={openMail} className="flex items-start justify-between border-b border-gray-200 px-4 py-3 text-sm hover:cursor-pointer hover:shadow-md hover:scale-101 transition duration-150">
      <div className="flex items-center gap-3">
        <div className="flex-none text-gray-300">
          <MdCropSquare className="w-5 h-5" />
        </div>
        <div className="flex-none text-gray-300">
          <RiStarLine className="w-5 h-5" />
        </div>
      </div>
      <div className="flex-grow ml-4 ">
        <p className="text-gray-600 inline-block max-w-full truncate ">
          {email?.message}
        </p>
      </div>
      <div className="flex-none text-gray-400 text-sm ">
      <span>{new Date(email?.createdAt?.seconds*1000).toUTCString()}</span>
      </div>
    </div>
  );
};

export default Message;
