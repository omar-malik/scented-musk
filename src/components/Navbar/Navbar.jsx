import SearchIcon from "./SearchIcon";
import ShoppingBasket from "./ShoppingBasket";
import MenuButton from "./MenuButton";

function Navbar() {
  return (
    <>

      <div className="flex justify-center w-full ">

        <nav className="flex justify-between w-full max-w-full p-2">

          <div className="">
            <span></span>
            <MenuButton/>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 ">
            <a className="" href="/">
              <div className="text-3xl text-gold font-light">SCENTEDMUSK</div>
              <div className="text-xs text-gold font-light pl-16 ml-3">L O N D O N</div></a>
          </div>

          <div className="flex space-x-4">
            <SearchIcon/>
            <ShoppingBasket/>
          </div>

        </nav>
      </div>

    </>
   
  )
}
export default Navbar;