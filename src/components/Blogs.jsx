import React from "react";

export const Blog = ({ blog, onClick }) => {
  return (
    <div
      className="w-full cursor-pointer transition-transform duration-300 transform hover:scale-105"
      onClick={onClick}
    >
      <img src={blog.image_url} alt={blog.title} className="rounded mb-4" />
      <h3 className="font-bold mb-4">{blog.title}</h3>
      <p>{blog.description}</p>
    </div>
  );
};
