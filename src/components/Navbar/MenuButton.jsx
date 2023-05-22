function MenuButton() {
  return (
    <button type="button" className="text-gray-500 hover:text-gray-700 focus:outline-none md:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.5h118M3.75 13h16.5m-16.5 6h20" />
      </svg>
    </button>
  )
}

export default MenuButton