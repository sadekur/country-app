import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import NavBar from "../layout/NavBar";

import AddBlog from "../pages/AddBlog";
import Protected from "./Protected";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Blogs from "../pages/Blogs";
import Blog from "../pages/SingleBlog";
import Error from "../pages/Error";

function Index() {
  const [isLigedIn, setLoggedIn] = useState(false);
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        {isLigedIn ? <button onClick={() => setLoggedIn(!isLigedIn)}> Log Out</button> : <button onClick={() => setLoggedIn(!isLigedIn)}>Log In</button>}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/add-blog" element={<Protected isLogedIn={isLigedIn}><AddBlog /></Protected>} />
          <Route path="/blog/:title" element={<Blog />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Index;
