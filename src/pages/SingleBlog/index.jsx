import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { blogData } from "../../data";

const Blog = () => {
  const { title } = useParams();
  const location = useLocation();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const singleBlog = blogData.find((blog) => blog.title === title);
    if (singleBlog) {
      setBlog(singleBlog);
    }
  }, [title]);

  if (!blog) {
    return <h2>Loading or Blog not found</h2>;
  }

  return (
    <div>
      <h2>{location.state.title}</h2>
      <p>{location.state.body.slice(0, 200)}</p>
      <p>{location.state.body.slice(200)}</p>
    </div>
  );
};

export default Blog;
