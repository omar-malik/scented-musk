const Footer = () => {
  return (
    <div>
      <div className="z-[200]  flex flex-col  bottom-0 h-[365px] bg-black text-gold">
        <div className="p-3">
          Images found on{" "}
          <a className=" hover:bg-slate-700 underline-offset-2 transition duration-500 rounded-md" href="https://www.freepik.com/free-photo/healthy-argan-oil-arrangement_14959159.htm#from_view=detail_serie#position=6">
            Freepik.com
          </a>
          {" "} by artists:
        </div>


      </div>
      <div className="bg-gray-100 border-[1px] h-[42px] flex justify-center items-center">Excellent rated by - peers and myself :) </div>

      <div className="h-[270px] flex flex-col justify-between ">
        <p>NEED HELP</p>
        <p>CONTACT ME</p>
        <p>MY LINKED IN</p>

      </div>
    </div>
  );
};

export default Footer;
