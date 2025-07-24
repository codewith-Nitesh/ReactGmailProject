import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { AiFillQuestionCircle } from "react-icons/ai";
import { IoSettings } from "react-icons/io5";
import { PiDotsNineBold } from "react-icons/pi";
import Avatar from "react-avatar";
import { useDispatch, useSelector } from "react-redux";
import { setSearchText, setUser } from "../../Redux/appSlice";
import { AnimatePresence, motion } from "framer-motion";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { logEvent } from "firebase/analytics";

const Navbar = () => {
  const [input, setInputField] = useState("");
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.appSlice);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    dispatch(setSearchText(input));
  }, [input]);

  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
            value={input}
            onChange={(e) => setInputField(e.target.value)}
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
          <div className="cursor-pointer relative">
            <Avatar
              onClick={() => setToggle(!toggle)}
              src={user?.photoURL}
              size="38"
              round={true}
            />
            <AnimatePresence>
              {toggle && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.1 }}
                  className="absolute z-20 -right-2.5 top-10 shadow-lg bg-white rounded-md"
                >
                  <span
                    className="P-4 underline font-bold"
                    onClick={signOutHandler}
                  >
                    LOGOUT
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
