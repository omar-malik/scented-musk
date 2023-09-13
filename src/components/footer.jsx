import Truck from "../assets/Truck";
import Delivery from "../assets/Delivery";
import Returns from "../assets/Returns";
import Payment from "../assets/Payment";
const Footer = () => {
  return (
    <div>
      <div className="flex flex-col h-[365px] bg-black text-white tracking-wide font-[quicksand]">
        <div className="p-8 mt-2 flex h-[350px] flex-col justify-between">

          <p className="flex font-light text-sm flex-row">
            <Truck /> <div className="pl-2">DELIVERY</div>
          </p>

          <p className="flex font-light text-sm flex-row">
            <Payment /> <div className="pl-2">SAFE AND SECURE</div>
          </p>

          <p className="flex font-light text-sm flex-row">
            <Returns /> <div className="pl-2">RETURNS</div>
          </p>

          <p className="flex font-light text-sm flex-row ">
            <Delivery /> <div className="pl-2">INTERNATIONAL</div>
          </p>
        </div>
      </div>

      <div className="bg-gray-100 border-[1px] h-[42px] flex justify-center items-center">
      <p className="">
            Images found on{""}
            <a
              className="p-1 hover:bg-slate-300 underline hover:underline-offset-2 transition duration-200 rounded-md"
              href="https://www.freepik.com/free-photo/healthy-argan-oil-arrangement_14959159.htm#from_view=detail_serie#position=6"
            >
              Freepik.com
            </a>
            {""}by artists:
          </p>
          <div className="mt-[px] flex flex-row p-4 gap-3 text-gold">
            <a
              className="hover:bg-slate-200 underline hover:underline-offset-2 transition duration-200 rounded-md"
              href="https://www.freepik.com/author/xvector"
            >
              xvector on freepik
            </a>
            <a
              className="hover:bg-slate-200 underline hover:underline-offset-2 transition duration-100 rounded-md"
              href="https://www.freepik.com/author/vecstock"
            >
              vecstock on freepik
            </a>
          </div>
      </div>

      <div className="h-[270px] p-7 pl-4 pb-10 flex flex-col tracking-widest justify-between text-[15px]">
        <p>NEED HELP</p>
        <p>CONTACT US</p>
        <p>LEGAL</p>
        <p>PORTFOLIO</p>
        <p>LINKED IN</p>
      </div>
    </div>
  );
};

export default Footer;
