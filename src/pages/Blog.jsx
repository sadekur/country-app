import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogData } from "../data";

const Blog = () => {
  const { title } = useParams();
  const [blog, setBlog] = useState(null); // State to hold the single blog

  useEffect(() => {
    const singleBlog = blogData.find((blog) => blog.title === title); // Find the matching blog by title
    if (singleBlog) {
      setBlog(singleBlog); // Update state with the matching blog
    }
  }, [title]);

  if (!blog) {
    // Render a loading message or fallback in case blog is not found
    return <h2>Loading or Blog not found</h2>;
  }

  return (
    <div>
      <h2>{blog.title} page</h2>
      <p>{blog.body.slice(0, 200)}</p>
      <p>{blog.body.slice(200)}</p>
    </div>
  );
};

export default Blog;
