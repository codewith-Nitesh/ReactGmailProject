import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { AiFillQuestionCircle } from "react-icons/ai";
import { IoSettings } from "react-icons/io5";
import { PiDotsNineBold } from "react-icons/pi";
import Avatar from 'react-avatar';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between mx-3 h-16">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer text-gray-500 hover:text-gray-900 transition ease-in">
            <GiHamburgerMenu size={"20px"} />
          </div>
          <img
            className="w-8"
            src="../../../public/images/a13faef14e859b2da904950fbc5045ad.png"
            alt="G-img_logo"
          />
          <h1 className="text-2xl text-gray-500 font-medium">Gmail</h1>
        </div>
      </div>
      <div className="md:block hidden w-[50%] mr-60">
        <div className="flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full">
          <IoSearch size={"24px"} className="text-gray-700 " />
          <input
            type="text"
            className="rounded-full w-full bg-tranparent px-1 outline-none"
            placeholder="Search mail"
          />
        </div>
      </div>
      <div className="md:block hidden">
        <div className="flex items-center gap-2">
          <div className="rounded-full hover:bg-gray-100 cursor-pointer p-3 text-gray-500 hover:text-gray-900 transition ease-in ">
            <AiFillQuestionCircle size={"25px"} />
          </div>
          <div className="rounded-full hover:bg-gray-100 cursor-pointer p-3 text-gray-500 hover:text-gray-900 transition ease-in ">
            <IoSettings size={"25px"} />
          </div>
          <div className="rounded-full hover:bg-gray-100 cursor-pointer p-3 text-gray-500 hover:text-gray-900 transition ease-in ">
            <PiDotsNineBold size={"25px"} />
          </div>
          <div className="cursor-pointer">
<Avatar src="../../../public/images/Nitesh_22BCT10006.jpg" size="38" round={true}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
