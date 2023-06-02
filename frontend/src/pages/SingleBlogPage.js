import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BsTrash } from 'react-icons/bs';
import './SingleBlogPage.css';

const SingleBlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/blogs/author')
      .then(response => {
        setBlogs(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the blogs:', error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/blogs/${id}`)
      .then(response => {
        // Remove the deleted blog from the state
        setBlogs(prevBlogs => prevBlogs.filter(blog => blog._id !== id));
        console.log('Blog deleted successfully:', response.data);
        window.alert('Blog post deleted successfully');
      })
      .catch(error => {
        console.error('There was an error deleting the blog:', error);
      });
  };

  return (
    <div className="blogs-container">
      {blogs.map(blog => (
        <div key={blog._id} className="blog">
          <h1>{blog.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          <div className="delete-icon" onClick={() => handleDelete(blog._id)}>
            <BsTrash />
          </div>
        </div>
      ))}
    </div>
  );
}

export default SingleBlogPage;