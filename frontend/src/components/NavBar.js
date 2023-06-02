import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function Navbar() {
  return (
    <div className="container">
      <nav className="navbar navbar-fixed">
        <Link to="/home" className="logo-link">
          <div className="logo-container">
            <img className='transparent' src="https://www.pngrepo.com/png/397518/512/moai.png" alt="Logo" height="40" width="auto" />
            <Link to="/home" className="nav-link black1 ml-3 py-2 fs-2">Sigma Gainz</Link>
          </div>
        </Link>

        <div className="tabs">
          <button className="tab">
            <Link className="tab" to="/home">Home</Link>
          </button>

          <button className="tab">
            <Link className="tab" to="/add-blog">Add Blog</Link>
          </button>

          <button className="tab">
            <Link className="tab" to="/about">About</Link>
          </button>

          <button className="tab">
            <Link className="tab" to="/blog/:id">Blogs</Link>
          </button>

          <button className="tab">
            <Link className="tab" to="/">Logout</Link>
          </button>
         

          <span className="glider"></span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;