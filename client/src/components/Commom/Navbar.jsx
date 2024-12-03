import { useState } from "react";

import CustomButton from './../Utility/CustomButton';
import { NavLink } from 'react-router-dom';

import { LuUser2 } from "react-icons/lu";
import { CgMenuRight } from "react-icons/cg";
import { MdOutlineArrowOutward } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();

  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { link: "Remove Background", slug: "/playground" },
    { link: "Pricing", slug: "/pricing" },
  ];

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };


  return (
    <nav className="max-w-[100rem] mx-auto px-[.8rem] sm:px-[1.5rem] lg:px-[2rem] ">
      <div className=" py-[1.2rem] flex items-center justify-between border-b-2 border-gray-300">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center z-[99]" id="logo-box">
          <NavLink to="/" onClick={() => setIsOpen(false)} >
            <img src="/kdevelops-logo.png" alt="logo" className=" li:h-[2rem] h-[1.5rem] " />
          </NavLink>
        </div>
        {/* Right Side -- Links and Buttons */}
        <div className="flex justify-center items-center gap-[5rem]">
          {/* Center links (hidden on small screens) */}
          <div className={`ul-wapper ${isOpen ? 'fixed h-full w-full top-0 right-0 bg-gradient-to-r from-emerald-400 to-cyan-400 text-gray-800 z-[98]' : 'hidden'} md:block space-x-6 text-gray-500 font-semibold`}>
            <ul className={isOpen ? 'p-8 mt-[5rem] flex justify-center flex-col text-gray-200 li:text-2xl text-[2.8rem] font-bold li:leading-[3.5rem] leading-[2.8rem]' : 'flex justify-center gap-[2rem] items-center'} id="Navlinks">
              {
                links.map(
                  (link, index) => {
                    return <NavLink key={index} to={link.slug} onClick={() => setIsOpen(false)} className={({ isActive }) =>
                      `${isActive ? 'text-indigo-600 border-b-2' : ''} ${isOpen ? 'border-b-2' : ''} flex items-center justify-between hover:text-indigo-600`
                    } id={`links-${index}`}>
                      {link.link}
                      {isOpen && (
                        <MdOutlineArrowOutward />
                      )}
                    </NavLink>
                  }
                )
              }
            </ul>
          </div>

          {/* Right buttons (hidden on small screens) */}
          <div className={isOpen ? 'auth-btn-mobile fixed bottom-10 right-10 flex items-center gap-2 scale-[1.3] z-[99]' : "md:flex items-center gap-2 hidden z-[99]"} id="auth-btn">
            {
              isSignedIn ? <div className="cleck-profile">
                <UserButton />
              </div> : <CustomButton onclick={() => openSignIn({})} icon={<LuUser2 />} value={'Register'} />
            }
          </div>

          {/* Mobile menu CustomButton */}
          <div className="flex items-center md:hidden z-[99]" id="menu">
            {
              isOpen ? <CustomButton icon={<MdOutlineClose />} onclick={handleToggle} tailwindclass={'p-[.8rem] px-[1rem]'} /> : <CustomButton icon={<CgMenuRight />} onclick={handleToggle} tailwindclass={'p-[.8rem] px-[1rem]'} />
            }
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
