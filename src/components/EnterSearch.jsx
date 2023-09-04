import Search from "../assets/SearchIcon";

const EnterSearch = ({ value, onChange, onSearch }) => {
  return (
    <>
      <div className="border-[1px] flex h-[130px] w-full items-center justify-center">
        <div className="flex flex-row border-[1px] w-[280px]">
          <input
            className="h-10 p-2 focus:placeholder-opacity-0 outline-none border-[px] font-light text-[12px] placeholder-black w-[270px]"
            placeholder="Search for Products"
            type="text"
            value={value}
            onChange={onChange}
          />

          <button onClick={onSearch} className="flex justify-center items-center h-10 w-12 hover:bg-gold transition duration-300">
            <div className="flex h-full w-4">
              <Search></Search>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default EnterSearch;
