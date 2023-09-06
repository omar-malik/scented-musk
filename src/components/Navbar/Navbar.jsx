import MenuOpen from "../../assets/MenuOpen";
import SearchIcon from "../../assets/SearchIcon";
import SearchClose from "../../assets/SearchClose";
import ShoppingBasket from "../../assets/ShoppingBasket";
import EnterSearch from "../EnterSearch";
import { Link } from "react-router-dom";
import navbarLinks from "../Navbar/navbar-links.json";
import { useState } from "react";
import { productData } from "../../newProductData";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  let searchMenu = null;
  let mobileMenu = null;

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    handleSearchButtonClick();
  };

  const handleSearchButtonClick = () => {
    const filteredResults = Object.entries(productData).filter(
      ([productId, product]) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.top.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.heart.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.base.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredProducts = filteredResults.map(([productId, product]) => ({
      id: productId,
      ...product,
    }));
    setSearchResults(filteredProducts);
    console.log(filteredProducts);
  };

  if (searchOpen) {
    searchMenu = (
      <>
        <div className="bg-white fixed h-screen flex flex-col right-0 w-[325px] z-[100]">
          <div className="flex h-[60px] items-center">
            <div className="p-4 w-[300px] tracking-wider">SEARCH OUR SITE</div>
            <button
              onClick={() => setSearchOpen(false)}
              className=" hover:rotate-[180deg] duration-[0.3s] m-3"
            >
              <SearchClose />
            </button>
          </div>
          <EnterSearch
            value={searchQuery}
            onChange={handleSearchInputChange}
            onSearch={handleSearchButtonClick}
          />
          {searchResults.length > 0 && (
            <div className=" pl-5 p-3 text-sm font-[quicksand] shadow-md">
            Search Results:
          </div>
          )

          }
          <div className="bg-white w-full h-full overflow-y-auto">
            {searchResults.length > 0 && (
              <div className="flex flex-col h-full w-full">
                {searchResults.map((result) => (
                  <Link
                    to={`product/${result.id}`}
                    className="flex flex-row items-center h-28 border-[0.5px] w-full"
                    key={result.name}
                    onClick={() => setSearchOpen(false)}
                  >
                    <img
                      className="p-3 h-full w-28"
                      src={result.image}
                      alt=""
                    />
                    <div className="flex flex-col font-[quicksand]">
                      <div className=" text-sm">{result.name}</div>
                      <div className="text-xs">
                        from £{result.price["10ml"]}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
        <div
          onClick={() => setSearchOpen(false)}
          className="h-screen w-full fixed bg-black z-[99] opacity-50"
        ></div>
      </>
    );
  }

  if (mobileMenuOpen) {
    mobileMenu = (
      <>
        <div className="bg-white fixed h-screen flex flex-col left-0 w-[323px] z-[100]"></div>
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="h-screen w-full fixed bg-black z-[99] opacity-50"
        ></div>
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="absolute bg-black opacity-90 h-12 w-12 text-white flex items-center justify-center z-[101] left-[323px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="flex flex-col fixed top-0 z-50 w-full items-center bg-white ">
        <div className="grid grid-cols-3 items-center w-full h-[70px] p-2">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:invisible md:pointer-events-none flex justify-start h-8 w-8"
          >
            <MenuOpen></MenuOpen>
          </button>

          <Link to="/" className="text-gold flex flex-col items-center ">
            <div className="text-[28px] tracking-wider font-[quicksand]">
              SCENTEDMUSK
            </div>
            <div className="text-[10px] font-lght tracking-[2px] mt-[-4px]">
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
      <div className="">{mobileMenu}</div>
    </>
  );
};

export default Navbar;
