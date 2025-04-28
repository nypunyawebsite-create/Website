import React from "react";
import { blogs } from "../../utils/blogsData"; // Adjust the path based on your folder structure

const BlogContent = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto pt-20">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white overflow-hidden">
            <img src={blog.image} alt={blog.title} className="w-full h-72 object-cover rounded-lg" />
            <div className="p-5">
              <h3 className="text-lg font-semibold h-14">{blog.title}</h3>
              <p className="text-gray-600 text-sm mt-2 h-16">{blog.description}</p>
              <button className="mt-4 bg-custom-green rounded-2xl  px-8 py-2 hover:bg-teal-600 transition">
                Know More
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center py-10">
        {/* <button className="bg-custom-green rounded-2xl  px-10 py-2 hover:bg-teal-600 transition">
          Read More •••
        </button> */}
      </div>
    </>
  );
};

export default BlogContent;
