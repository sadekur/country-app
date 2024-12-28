import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {blogData} from '../../data';
import '../../App.css';
function Blogs() {
  const [blogs, setBlogs] = useState(blogData);
  
  const turnCatString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + '...';
    }else {
      return str;
    }
  }
  const clearBlogs = () => {
    setBlogs([]);
  }
  return (
    <div>
      <h2>Blogs</h2>
      <button onClick={clearBlogs}>Clear Blogs</button>
      <section>
        {blogs.map((blog) => {
          const {id, title, body} = blog;
          return (
            <article key={id}>
              <h2>{title}</h2>
              <p>{turnCatString(body, 100)}</p> 
              <Link to={`/blog/${title}`} state={{id, title, body}}>Read more</Link>
            </article>
          )
        })}
      </section>
    </div>
  )
}

export default Blogs
