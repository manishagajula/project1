import { IoCallSharp } from "react-icons/io5";
import { TfiLocationPin } from "react-icons/tfi";
import { MdOutlineSchedule } from "react-icons/md";
import React, { useState } from "react";

export const ContactUs = () => {
  const [getname, setGetName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [getTextArea, setGetTextArea] = useState("");
  return (
    <div className="flex flex-row gap-8 mt-20 ml-10">
      <div>
        <div className="border rounded-lg w-[380px] h-[15vh] pt-4 pl-6 mb-10 transition-transform duration-300 transform hover:scale-100 hover:shadow-xl">
          <div className="flex flex-row gap-20 h-12 w-12 border rounded-full bg-violet-700 relative">
            <div className="text-2xl">
              <IoCallSharp className="absolute top-2 left-3" />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="font-bold text-violet-700 text-2xl">Contact</h2>
              <p className="text-gray-500">0984537278623</p>
              <p className="text-gray-500">yourmail@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="border rounded-lg w-[380px] h-[15vh] pt-4 pl-6 mb-10 transition-transform duration-300 transform hover:scale-100 hover:shadow-xl">
          <div className="flex flex-row gap-20 h-12 w-12 border rounded-full bg-violet-700 relative">
            <div className="text-2xl">
              <TfiLocationPin className="absolute top-2 left-3" />
            </div>
            <div className="flex flex-col">
              <h2 className="font-bold text-violet-700 text-2xl">Address</h2>
              <div className=" flex flex-row">
                <p className="text-gray-500">1755thAve,NY,NY10010 US</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border flex flex-row gap-4 rounded-lg w-[380px] h-[15vh] pt-4 pl-6 mb-4 transition-transform duration-300 transform hover:scale-100 hover:shadow-xl">
          <div className="flex flex-row gap-20 h-12 w-12 border rounded-full bg-violet-700 relative">
            <div className="text-2xl">
              <MdOutlineSchedule className="absolute top-2 left-3" />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="font-bold text-violet-700 text-2xl">Schedule</h2>
            <p className="text-gray-500">24 Hours / 7 Days</p>
            <p>Open Office time: 10 AM - 5:30 PM</p>
          </div>
        </div>
      </div>
      <div className="border rounded-lg w-[700px] p-4 transition-transform duration-300 transform hover:scale-100 hover:shadow-xl">
        <form>
          <div className="flex flex-col items-center justify-center mb-2">
            <h3 className="text-violet-700 font-bold text-xl pt-4">
              Get in Touch
            </h3>
            <h2 className="text-black font-bold text-3xl">
              Ready to Get Started
            </h2>
          </div>
          <p className="text-gray-500 text-center">
            At vero eos et accusamus et iusto odio dignissimos ducimus
            quiblanditiis
          </p>
          <p className="text-center mb-8 text-gray-500">praesentium</p>
          <div className="flex flex-col gap-4 items-center justify-center">
            <div className="flex flex-row gap-10">
              <div className="border rounded-full pl-6 pr-24 pt-4 pb-4 ">
                <input
                  type="text"
                  value={getname}
                  name="name"
                  placeholder="Name"
                  onChange={(e) => setGetName(e.target.value)}
                />
              </div>
              <div className="border rounded-full pl-6 pr-24 pt-4 pb-4">
                <input
                  type="text"
                  value={phone}
                  name="name"
                  placeholder="Email"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-row gap-10">
              <div className="border rounded-full pl-6 pr-24 pt-4 pb-4">
                <input
                  type="text"
                  value={email}
                  name="name"
                  placeholder="Phone"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="border rounded-full pl-6 pr-24 pt-4 pb-4">
                <input
                  type="text"
                  value={subject}
                  name="name"
                  placeholder="Subject"
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="border rounded-xl w-[640px] pt-4 pl-4 ml-4 mt-8">
            <textarea
              id="textbox"
              value={getTextArea}
              placeholder="Type Message"
              cols={70}
              rows={6}
              onChange={(e) => setGetTextArea(e.target.value)}
            ></textarea>
          </div>
        </form>
        <div className="flex flex-row items-center justify-center mt-8 mb-8">
          <button
            className="border rounded-full bg-violet-600 pr-6 pl-6 pt-2 pb-2 text-white font-bold 
             hover:bg-violet-700 "
          >
            {" "}
            SEND MESSAGE
          </button>
        </div>
      </div>
    </div>
  );
};
