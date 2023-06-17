
import ShoppingBasket from "./ShoppingBasket";
import { useState } from "react";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const links = [
    {
      name: "FRAGRANCE",
      menu: [
        "All Perfume Oils",
        "Men's Perfume Oils",
        "Women's Perfume Oils",
        "Gender Neutral Perfume Oils",
        "Sample Pack - Perfume Oil",
      ],
    },
    {
      name: "COLLECTION",
    },
    {
      name: "GIFTS",
      menu: ["Shop all", "Gift Sets for him", "Gift Sets for her"],
    },
  ];

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
            <a
              onClick={()=> setShowSearch(true)}
              className="hover:text-gold transition duration-200 focus:outline-none"
            >
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
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </a>
            <ShoppingBasket />
          </div>
        </nav>

        <div
          id="navbar"
          className="pt-4 lg:flex gap-5 text-xs tracking-widest hidden"
          onMouseLeave={() => setOpen(false)}
        >
          {links.map((link, i) => {
            return (
              <a
                onMouseEnter={() => setOpen(link)}
                key={i}
                className="flex gap-1 items-center hover:text-gold transition duration-300"
                href="/"
              >
                {link.name}
                {link.menu && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="w-3 h-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                )}
              </a>
            );
          })}
        </div>
      </div>

      {open !== false && (
        <div
          id="navbar-fragrance-dropdown"
          className="bg-white w-full h-[550px] flex flex-col p-7"
        >
          {open.menu &&
            open.menu.map((link, i) => {
              return (
                <a key={i} href="/" className="">
                  {link}
                </a>
              );
            })}
        </div>
      )}

      {showMenu == true && (
        <div id="search"
        className="flex flex-col bg-white h-full w-[320px] fixed top-0 left-0">
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
                {link.name}
              </a>
            );
          })}
        </div>
      )}

      {showSearch == true && (
        <div
          id="search-bar"
          className="bg-white h-full w-[320px] absolute right-0"
        >
          <div className="flex">
            <h1 className="p-4 tracking-wider flex grow">SEARCH OUR SITE</h1>
            <button
              onClick={() => setShowSearch(false)}
              className="hover:rotate-[180deg] duration-[0.3s] m-3"
            >
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
              className="outline-none w-[265px]  placeholder-black focus:placeholder-transparent tracking-wide font-light text-xs h-[40px] p-3 border"
              placeholder="Search for products"
              type="text"
            />
          </div>
        </div>
      )}
    </>
  );
}
export default Navbar;
