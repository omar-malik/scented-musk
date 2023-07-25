import Truck from "../assets/Truck";
import Delivery from "../assets/Delivery";
import Returns from "../assets/Returns";
import Payment from "../assets/Payment";
const Footer = () => {
  return (
    <div>
      <div className="  flex flex-col h-[365px] bg-black text-white">
        <div className="p-6 flex h-[350px] flex-col justify-between">
          <p className="">
            Images found on{""}
            <a
              className="p-1 hover:bg-slate-700 underline hover:underline-offset-2 transition duration-100 rounded-md"
              href="https://www.freepik.com/free-photo/healthy-argan-oil-arrangement_14959159.htm#from_view=detail_serie#position=6"
            >
              Freepik.com
            </a>
            {""}by artists:
          </p>
          <div className="mt-[-30px] flex flex-row justify-between w-[300px] text-gold">
          <a className="hover:bg-slate-700 underline hover:underline-offset-2 transition duration-100 rounded-md" href="https://www.freepik.com/author/xvector">xvector on freepik</a>
          <a className="hover:bg-slate-700 underline hover:underline-offset-2 transition duration-100 rounded-md" href="https://www.freepik.com/author/vecstock">vecstock on freepik</a>
          </div>

          <p className="flex flex-row">
            <Truck />{" "}
            <div className="pl-2">
              No DELIVERY since you can't order anything!
            </div>
          </p>

          <p className="flex flex-row">
            <Payment />{" "}
            <div className="pl-2">SAFE PAYMENT since you pay nothing!</div>
          </p>

          <p className="flex flex-row">
            <Returns />{" "}
            <div className="pl-2">
              EASY RETURNS
            </div>
          </p>

          <p className="flex flex-row ">
            <Delivery />{" "}
            <div className="pl-2">
              INTERNATIONAL THEORETICAL DELIVERY - We deliver just as much
              worldwide as we do in the UK
            </div>
          </p>
        </div>
      </div>

      <div className="bg-gray-100 border-[1px] h-[42px] flex justify-center items-center">
        Excellent - rated by - peers and myself :){" "}
      </div>

      <div className="h-[270px] p-8 flex flex-col justify-between ">
        <p>NEED HELP</p>
        <p>CONTACT ME</p>
        <p>MY LINKED IN</p>
      </div>
    </div>
  );
};

export default Footer;
