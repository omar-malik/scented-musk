import SearchIcon from "./SearchIcon";
import ShoppingBasket from "./ShoppingBasket";
import { useState } from "react";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const fragrance = (
    <div
      onMouseOver={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="flex"
    >
      FRAGRANCE
      <svg
        className="ml-0 -mr-0. h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
  const gifts = (
    <div className="flex">
      GIFTS
      <svg
        className="ml-0 -mr-0. h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  );
  const homeFragrance = (
    <div className="flex left-[-5px]">
      HOME FRAGRANCE
      <svg
        class="ml-0 -mr-0. h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  );
  const links = [
    fragrance,
    "COLLECTION",
    gifts,
    homeFragrance,
    "BESPOKE FRAGRANCE",
  ];
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex justify-center w-full flex-col items-center">
        <nav className="flex justify-between w-full max-w-full p-3">
          <div className="p-0 pt-5">
            <span></span>
            <button
              id="menuButton"
              onClick={() => {
                setShowMenu(true);
                console.log(showMenu);
              }}
              type="button"
              className="text-gray-500 hover:text-gray-700 focus:outline-none md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.5h118M3.75 13h16.5m-16.5 6h20"
                />
              </svg>
            </button>
          </div>

          <div className="pt-2 absolute left-1/2 -translate-x-1/2 ">
            <a className="" href="/">
              <div className="text-3xl text-gold font-light tracking-wide">
                SCENTEDMUSK
              </div>
              <div className="text-xs text-gold font-light pl-16 ml-3">
                L O N D O N
              </div>
            </a>
          </div>

          <div className="flex space-x-4 p-2 pt-5">
            <SearchIcon />
            <ShoppingBasket />
          </div>
        </nav>

        <div className="pt-4 lg:flex gap-5 text-xs tracking-widest hidden">
          {links.map((link, i) => {
            return (
              <a
                key={i}
                className="hover:text-gold transition duration-300"
                href="/"
              >
                {link}
              </a>
            );
          })}
        </div>
      </div>

      {open == true && (
        <div
          id="navbar-fragrance-dropdown"
          onMouseOver={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className="bg-white w-full h-[550px] p-7"
        >
          {links.map((link, i) => {
            return (
              <a key={i} href="/" className="">
                {link}
              </a>
            );
          })}
        </div>
      )}

      {showMenu == true && (
        <div className="flex flex-col bg-white h-full w-[320px] fixed top-0 left-0">
          <button
            className="absolute bg-black left-full top-0"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-[51px] h-[51px] p-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {links.map((link, i) => {
            return (
              <a
                key={i}
                href="/"
                className="p-4 text-xs hover:bg-gray-100 transition-all duration-500 border"
              >
                {link}
              </a>
            );
          })}
        </div>
      )}

      <div className="bg-white h-full w-[320px] absolute right-0">
        <div className="flex">
        <h1 className="p-5 tracking-wider">SEARCH OUR SITE</h1>
        <button className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        </div>

        <div className="flex p-7 border ">
          <input
            className="w-[265px] font-light text-xs h-[40px] p-3 border"
            placeholder="Search for products"
            type="text"
          />
        </div>
      </div>
    </>
  );
}
export default Navbar;
