import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { SiHomeassistantcommunitystore } from "react-icons/si";

const Nav = () => {

  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(false); //if token means we are logged in

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <div className="font-bona font-semibold text-primary w-44 cursor-pointer text-4xl">
        <Link to="/" className="hover:text-orange-600">
          <div className="flex justify-between items-center gap-2">
            <SiHomeassistantcommunitystore />
             <div className="text-orange-800">
              GharTak
             </div>
          </div>
        </Link>
      </div>

      {/* Navlinks */}
      <div className="hidden md:flex items-start gap-5 font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `py-1 ${
              isActive ? "underline underline-offset-4 decoration-primary" : ""
            }`
          }
        >
          HOME
        </NavLink>

        <NavLink
          to="/workers"
          className={({ isActive }) =>
            `py-1 ${
              isActive ? "underline underline-offset-4 decoration-primary" : ""
            }`
          }
        >
          ALL WORKERS
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `py-1 ${
              isActive ? "underline underline-offset-4 decoration-primary" : ""
            }`
          }
        >
          ABOUT
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `py-1 ${
              isActive ? "underline underline-offset-4 decoration-primary" : ""
            }`
          }
        >
          CONTACT
        </NavLink>
      </div>

      <div className="flex items-center gap-4">
        {/* if token means logged in means show profile, otherwise show button */}
        {token ? 
        <div className="flex items-center gap-2 cursor-pointer group relative">
           <img className="w-8 rounded-full" src= {assets.profile_pic} alt="" />
           <img className="w-2.5" src= {assets.dropdown_icon} alt="" />
           <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
            <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
              <p onClick={() => navigate('/myProfile')} className="hover:text-stone-400 cursor-pointer">My Profile</p>
              <p onClick={() => navigate('/myAppointments')} className="hover:text-stone-400 cursor-pointer">My Appointments</p>
              <p onClick={() => setToken(false)} className="hover:text-stone-400 cursor-pointer">Logout</p>
            </div>
           </div>
        </div>
         : <button onClick={()=> navigate('/login')} className="bg-primary font-semibold px-8 py-3 text-white rounded-full hidden md:block">Create Account</button>}
      </div>
    </div>
  );
};

export default Nav;
