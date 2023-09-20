import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HiMenuAlt2 } from "react-icons/hi";

const Navbar = () => {
  const location = useLocation();

  const isGallery = location.pathname === "/gallery";

  return (
    <nav className="fixed top-0 left-0 w-screen bg-black z-50 py-3 px-3 border-b border-grey">
      <div className="flex justify-between items-center w-full shadow container mx-auto">
        <Link to="#" className="text-xl text-secondary">
          Img<span className="text-primary">Store</span>
        </Link>
        <div className="flex items-center space-x-3">
          {!isGallery &&(
            <NavLink to="/login" className="px-8 py-1 bg-primary rounded-lg">
              Upload
            </NavLink>
          )}
          <button className="text-white text-2xl">
            <HiMenuAlt2 />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
