import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../../Redux/appSlice";
import { addDoc, serverTimestamp, collection } from "firebase/firestore";
import { db } from "../../firebase";

const SendMail = () => {
  const open = useSelector((state) => state.appSlice.open);
  const dispatch = useDispatch();

  const composeClose = () => {
    dispatch(setOpen(false));
    console.log("Dispatching setOpen(false)");
  };

  const [formData, setFormData] = useState({
    to: "",
    subject: "",
    message: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault(),
    await addDoc(collection(db, "emails"), {
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      createdAt: serverTimestamp(),
    });
    composeClose(),
      setFormData({
        to: "",
        subject: "",
        message: "",
      });
  };
  
  return (
    <div
      className={`${
        open ? "block" : "hidden"
      } bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md `}
    >
      <div className="flex px-3 py-2 bg-[#F2F6FC] justify-between items-center rounded-t-md">
        <h1>New Message</h1>
        <div
          onClick={composeClose}
          className="p-2 rounded-full hover:bg-gray-200 cursor-pointer  "
        >
          <RxCross2 size={"15px"} />
        </div>
      </div>
      <form onSubmit={submitHandler} className="flex flex-col p-3 gap-2">
        <input
          type="text"
          placeholder="To"
          className="outline:none py-1"
          value={formData.to}
          name="to"
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Subject"
          className="outline:none py-1"
          value={formData.subject}
          name="subject"
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
        />
        <textarea
          name="message"
          cols={"30"}
          rows={"10"}
          className="outline-none py-1"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
        ></textarea>
        <button
          type="submit"
          className="rounded-full w-fit px-4 text-white font-medium bg-[#0B57D0] "
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMail;
