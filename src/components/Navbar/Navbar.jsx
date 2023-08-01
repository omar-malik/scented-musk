import MenuOpen from "../../assets/MenuOpen";
import SearchIcon from "../../assets/SearchIcon";
import SearchClose from "../../assets/SearchClose"
import ShoppingBasket from "../../assets/ShoppingBasket";
import { Link } from "react-router-dom";
import navbarLinks from "../Navbar/navbar-links.json";
import { useState } from "react";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  let searchMenu = null;

  
  if (searchOpen) {
    searchMenu = (
      <>
        <div className="bg-white fixed h-screen flex flex-col right-0 w-[335px] z-[100]">
          <div className="flex h-[60px] items-center">
            <div className="p-4 w-[300px] tracking-wider">SEARCH OUR SITE</div>
            <button
                onClick={() => setSearchOpen(false)}
                className=" hover:rotate-[180deg] duration-[0.3s] m-3"
              >
                <SearchClose />
              </button>
          </div>
          <div className="border-[1px] flex h-[100px] items-center justify-center">
            <input
              className="h-10 p-2 focus:placeholder-opacity-0 outline-none border-[1px] font-light text-[12px] placeholder-black w-[280px]"
              placeholder="Search for Products"
              type="text"

            />
          </div>
        </div>
        <div onClick={() => setSearchOpen(false)} className="h-screen w-full fixed bg-black z-[99] opacity-50"></div>
      </>
    );
  }

  return (
    <>
      <div className="flex flex-col fixed top-0 z-50 w-full items-center bg-white ">
        <div className="grid grid-cols-3 items-center w-full h-[70px] p-2">
          <button className="md:invisible md:pointer-events-none flex justify-start h-8 w-8">
            <MenuOpen></MenuOpen>
          </button>

          <Link to="/" className="text-gold flex flex-col items-center ">
            <div className="text-[28px] tracking-wider font-light">MISK</div>
            <div className="text-[10px] font-light tracking-[2px] mt-[-4px]">
              LONDON
            </div>
          </Link>

          <div className="flex justify-end  h-6 gap-3">
            <button
              onClick={() => setSearchOpen(true)}
              className="h-6 w-6 hover:text-gold transition duration-200"
            >
              <SearchIcon></SearchIcon>
            </button>
            <button className="h-6 w-6 hover:text-gold transition duration-200">
              <ShoppingBasket></ShoppingBasket>
            </button>
          </div>
        </div>
        <div className="lg:flex hidden text-xs p-3 justify-between w-[800px]">
          {navbarLinks.map((link, i) => {
            return (
              <div className="tracking-wide" key={i}>
                {link.name}
              </div>
            );
          })}
        </div>
      </div>
      <div className="">{searchMenu}</div>
    </>
  );
};

export default Navbar;
