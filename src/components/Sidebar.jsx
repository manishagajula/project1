import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { TiKeyOutline } from "react-icons/ti";
import { GoSignOut } from "react-icons/go";
import { BsCart2 } from "react-icons/bs";
import { RiBox1Line } from "react-icons/ri";
import { GoSearch } from "react-icons/go";
import { SiMaterialdesignicons } from "react-icons/si";
import { FaKipSign } from "react-icons/fa6";
import { RxDividerHorizontal } from "react-icons/rx";

export const Sidebar = () => {
  //   const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSecondButton, setIsOpenSecondButton] = useState(false);
  const [selectedText, setSelectedText] = useState("");
  //   const [Changebackground, setChangebackground] = useState("bg-slate-50	");

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleMouseLeaveOnSecondButton = () => {
    setIsOpenSecondButton(false);
  };

  const handleMouseEnterOnSecondButton = () => {
    setIsOpenSecondButton(true);
  };

  return (
    <div className="lg:flex flex-col space-y-2 items-start pl-4 border-s-4 w-[300px] h-[200vh] bg-white-200 shadow-lg shadow-white-100/20 hidden pr-10">
      <div className="flex flex-row gap-2 justify-between mt-4 pl-4 font-bold text-4xl	">
        <span className="text-center pt-1">
          {" "}
          <RiBox1Line />
        </span>

        <h2> UIDeck</h2>
      </div>

      <div className="flex flex-col justify-between gap-4 pt-20">
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className=" flex flex-col gap-4 pb-2"
        >
          <div className="flex flex-row pl-10 pb-2">
            <button className="flex flex-row gap-4 text-xl border rounded-lg pr-2 pl-2 pt-2 pb-2 hover:text-violet-700">
              Templates{" "}
              <span className="pt-1">
                <IoIosArrowDown />
              </span>
            </button>
          </div>
          {isOpen && (
            <ul className="text-lg shadow-white border rounded-lg p-4 gap-6 grid grid-cols-2 items-start justify-start bg-slate-50	">
              <li>Business site Templates</li>
              <li>Saas landing Pages</li>
              <li>Tailwind Templates</li>
              <li>Portfolio Templates</li>
              <li>Startup Landing Pages</li>
              <li>App landing Pages</li>
              <li>One Page Templates</li>
              <li>Browse All Templates</li>
            </ul>
          )}
        </div>

        <div
          onMouseEnter={handleMouseEnterOnSecondButton}
          onMouseLeave={handleMouseLeaveOnSecondButton}
          className=" flex flex-col gap-4"
        >
          <div className="flex flex-row pl-10">
            <button className="flex flex-row gap-4 text-xl border rounded-lg pr-2 pl-2 pt-2 pb-2 hover:text-violet-700 ">
              Resources{" "}
              <span className="pt-1">
                {" "}
                <IoIosArrowDown />
              </span>
            </button>{" "}
          </div>
          {isOpenSecondButton && (
            <ul className="text-lg flex flex-col items-start p-4 rounded-lg gap-4 justify-start ml-10 bg-slate-50	">
              <li>Blogs</li>
              <li>Docs</li>
            </ul>
          )}
        </div>
      </div>
      <div className="">
        <button className=" flex flex-row items-start justify-start text-xl border p-2 ml-10 rounded-lg hover:text-violet-700">
          {" "}
          Support{" "}
        </button>
      </div>
      <div className="border-solid rounded-2 flex flex-row border rounded-md items-center p-2 mt-6 ml-10">
        <GoSearch />

        <input
          name="search"
          type="text"
          value={selectedText}
          onChange={(e) => setSelectedText(e.target.value)}
          placeholder="Search"
          className="pl-2 w-[70px] text-lg border-transparent	"
        />
        <SiMaterialdesignicons />
        <FaKipSign />
      </div>
      <div className="flex flex-row pl-10 pb-2 pt-4">
        <button className="flex flex-row text-md border rounded-lg pr-4 pl-4 pt-2 pb-2 bg-indigo-500 hover:bg-indigo-600 text-white">
          {" "}
          <TiKeyOutline className="text-2xl" />
          All-Access Pass
        </button>
      </div>
      <div className="flex flex-row gap-4 pl-10 pt-2 text-xl">
        <span className="pt-1 text-2xl">
          <GoSignOut />
        </span>
        Sign in
      </div>
      <div className=" flex flex-row gap-4 pl-10 pt-2 text-5xl">
        <RxDividerHorizontal />
      </div>
      <div className="flex flex-row gap-4 pl-10 pb-4 pt-2 text-3xl">
        <BsCart2 />
      </div>
    </div>
  );
};
