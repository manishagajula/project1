import React from "react";
import { IoMdClose } from "react-icons/io";

export const Modal = ({ blog, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md max-w-md">
        <button
          className="absolute top-48 right-[500px] text-black-500"
          onClick={onClose}
        >
          <IoMdClose />
        </button>
        <img src={blog.image_url} alt={blog.title} className="mb-4 rounded" />
        <h3 className="font-bold mb-2">{blog.title}</h3>
        <p>{blog.description}</p>
      </div>
    </div>
  );
};
