import SearchIcon from "./SearchIcon";
import ShoppingBasket from "./ShoppingBasket";
import MenuButton from "./MenuButton";

function Navbar() {
  return (
    <>
    <nav className="flex justify between items-center py-4 h-20 max-w-full">
      <div className="flex space-x-4 md:hidden">
        <MenuButton ></MenuButton>
      </div>
      <div className="place-content-center px-32">
        <a href="/">
          <div className="text-3xl text-gold font-light">SCENTEDMUSK</div>
          <div className="text-xs text-gold font-light pl-16 ml-3">L O N D O N</div></a>
      </div>

      <div className="flex space-x-4 ">
        <SearchIcon></SearchIcon>
        <ShoppingBasket></ShoppingBasket>
      </div>
     
      
    </nav>
      
    </>
   
  )
}
export default Navbar;