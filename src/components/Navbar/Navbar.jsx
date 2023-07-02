import ShoppingBasket from "./ShoppingBasket";
import Search from "../../assets/SearchIcon";
import SearchClose from "../../assets/SearchClose";
import SearchOpen from "../../assets/SearchOpen";
import MenuOpen from "../../assets/MenuOpen";
import NavbarChevron from "../../assets/NavbarChevron";
import { useState } from "react";
import { useAtom } from "jotai";
import { cart } from "../../Atoms.js";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [cartStore, setCartStore] = useAtom(cart);
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
      <div className="fixed top-0 z-10 bg-gray-100 flex justify-center w-full flex-col items-center">
        <nav className="flex justify-between w-full max-w-full p-3 h-18">
          <div className="p-0 pt-3">
            
            <button
              id="menuButton"
              onClick={() => {
                setShowMenu(true);
              }}
              type="button"
              className="w-8 h-8 absolute text-gray-500 hover:text-gray-700 focus:outline-none md:hidden"
            >
              <MenuOpen />
            </button>
          </div>

          <div className=" absolute left-1/2 -translate-x-1/2 ">
            <a className="" href="/">
              <div className="text-3xl text-gold font-light tracking-wide">
                SCENTEDMUSK
              </div>
              <div className="text-[10px] text-gold font-normal pl-[72px] ml-3">
                L O N D O N
              </div>
            </a>
          </div>

          <div className="flex space-x-4 p-2 pt-3">
            <button
              onClick={() => setShowSearch(true)}
              className="w-6 h-6 hover:text-gold transition duration-200 focus:outline-none"
            >
              <Search />
            </button>
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
                className="flex gap-1 pb-4 items-center hover:text-gold transition duration-300"
                href="/"
              >
                {link.name}
                {link.menu && <NavbarChevron />}
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
        <div
          onClick={() => setShowMenu(false)}
          className="w-full h-full z-20 fixed top-0 left-0 bg-black/60"
        >
          <div
            id="search"
            onClick={(event) => event.stopPropagation()}
            className="flex z-20 flex-col bg-white h-full w-[320px] fixed top-0 left-0"
          >
            <button
              className="absolute bg-black left-full top-0"
              onClick={() => {
                setShowMenu(false);
              }}
            >
              <SearchClose />
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
        </div>
      )}

      {showSearch == true && (
        <div
          className="fixed z-20 h-full w-full right-0 bg-black/60"
          onClick={() => setShowSearch(false)}
        >
          <div
            id="search-bar"
            onClick={(event) => event.stopPropagation()}
            className="bg-white z-20 h-full w-[320px] absolute right-0"
          >
            <div className="flex">
              <h1 className="p-4 tracking-wider flex grow">SEARCH OUR SITE</h1>
              <button
                onClick={() => setShowSearch(false)}
                className="hover:rotate-[180deg] duration-[0.3s] m-3"
              >
                <SearchOpen />
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
        </div>
      )}
    </>
  );
}
export default Navbar;