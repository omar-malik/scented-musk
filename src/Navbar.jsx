

function Navbar() {
  return (
    <>
    <nav className="flex justify between items-center py-4 h-20">
      <div className="place-content-center">
        <a href="/" className="text-3xl mr-5 text-gold font-thin">SCENTEDMUSK</a>
      </div>
      <div>
        <div className="relative">
      

        </div>
      </div>
      <div className="flex space-x-4">
      <a href="/search">search<img src="" alt="" /></a>
      <a href="/cart">cart</a>
      </div>
    </nav>
    </>
   
  )
}
export default Navbar;