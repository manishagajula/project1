import React, { useState } from "react";
import { BlogsData } from "../data/blogs";
import { Blog } from "../components/Blogs";
import { Modal } from "../components/Modal";

export const BlogComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const openModal = (blog) => {
    setSelectedBlog(blog);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedBlog(null);
  };

  return (
    <div>
      <div>
        <div className="flex flex-col items-center justify-center gap-4 mt-14 mb-6">
          <button className="border-2 rounded-full border-violet-700 pr-6 pl-6 pt-1 pb-1 text-violet-700 font-bold">
            latest news
          </button>
          <h2 className="font-bold text-3xl"> Latest News & Blog </h2>
          <div className="flex items-center flex-col">
            <p className="text-gray-500">
              There are many variations of passages of Lorem Ipsum available,
              but{" "}
            </p>
            <p className="text-gray-500">
              the majority have suffered alteration in some form.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {BlogsData.blogs.map((blog) => (
            <Blog
              key={blog.testimonial_id}
              blog={blog}
              onClick={() => openModal(blog)}
            />
          ))}
        </div>
        {showModal && <Modal blog={selectedBlog} onClose={closeModal} />}
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.5273421048755!2d72.81686747536598!3d18.99647065446408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cff81471d8f7%3A0xfe0f743d6a385cef!2sSwan%20Capital!5e0!3m2!1sen!2sin!4v1713524822569!5m2!1sen!2sin"
        width="100%"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="mt-10"
      ></iframe>
    </div>
  );
};
