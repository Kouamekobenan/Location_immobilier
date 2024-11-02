import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="container bg-slate-300 p-1 w-full fixed z-10">
      <div className="content flex justify-around">
        <div className="icon pt-3 md:hidden cursor-pointer" onClick={() => setOpen(!open)}>{open ? <FiAlignJustify /> : "❌"}         
        </div>
        <div className="logo">
          <div className="image grid-cols-1 gap-1 ">
            <span className="text-blue-500 text-xl flex flex-col justify-center text-center font-bold md:text-4xl">
              Intelect certain
            </span>
            <span className="text-xl md:text-3xl text-blue-700 italic">
              Immobilier
            </span>
          </div>
        </div>
        <div className="list">
          
          <ul
            className={`flex flex-col justify-center md:flex md:flex-row md:gap-4 
            cursor-pointer top-8
             text-black font-serif pt-4 text-2xl  ${ !open ? 'top-20': 'hidden' }`}
          >
            <Link to="/">
              <li className="hover:bg-slate-400 border-b-2 md:border-b-0 
              transform motion-safe:hover:scale-110 duration-500 ">
                Accueil
              </li>
            </Link>
            <Link to="/lcation">
              <li className="hover:bg-slate-400 border-b-2 md:border-b-0 transform motion-safe:hover:scale-110 duration-500">
                vente de terrain
              </li>
            </Link>

            <Link to="/mobilier">
              <li className="hover:bg-slate-400 border-b-2 md:border-b-0 transform motion-safe:hover:scale-110 duration-500">
                Location de maison
              </li>
            </Link>

            <Link to="/login">
              <li
                className="btn_second transform motion-safe:hover:scale-110 
                 duration-500"
              >
                connectez-vous
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
