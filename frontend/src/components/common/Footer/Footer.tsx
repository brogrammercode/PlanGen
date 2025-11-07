import { Instagram, Linkedin, Twitter } from "lucide-react";
import { Plangen } from "../../../assets";
import Button from "../../ui/Button/Button";

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-10 lg:gap-30 justify-center items-start px-10 py-20 bg-[#F6F5F4]">
      <div className="flex flex-col items-start">
        <div className="flex items-center cursor-pointer">
          <img src={Plangen} alt="" height={50} width={50} />
          <h1 className="text-2xl font-bold">Plangen</h1>
        </div>
        <div className="flex justify-center mt-3">
          <Button>{() => <Instagram size={20} />}</Button>
          <Button>{() => <Linkedin size={20} />}</Button>
          <Button>{() => <Twitter size={20} />}</Button>
        </div>
        <div className="mt-20">
          <span>© 2025 Plangen Corps</span>
        </div>
      </div>
      <div className="mt-3 flex flex-col items-start gap-3">
        <h1 className="text-[16px] font-semibold">Company</h1>
        <span className="text-gray-800 hover:underline hover:decoration-blue-400 cursor-pointer">
          About us
        </span>
        <span className="text-gray-800 hover:underline hover:decoration-blue-400 cursor-pointer">
          Security
        </span>
        <span className="text-gray-800 hover:underline hover:decoration-blue-400 cursor-pointer">
          Stats
        </span>
        <span className="text-gray-800 hover:underline hover:decoration-blue-400 cursor-pointer">
          Terms & privacy
        </span>
        <span className="text-gray-800 hover:underline hover:decoration-blue-400 cursor-pointer">
          Your privacy rights
        </span>
      </div>
      <div className="mt-3 flex flex-col items-start gap-3">
        <h1 className="text-[16px] font-semibold">Downloads</h1>
        <span className="text-gray-800 hover:underline hover:decoration-blue-400 cursor-pointer">
          Android
        </span>
        <span className="text-gray-800 hover:underline hover:decoration-blue-400 cursor-pointer">
          iOS
        </span>
      </div>
      <div className="mt-3 flex flex-col items-start gap-3">
        <h1 className="text-[16px] font-semibold">Resources</h1>
        <span className="text-gray-800 hover:underline hover:decoration-blue-400 cursor-pointer">
          Help center
        </span>
        <span className="text-gray-800 hover:underline hover:decoration-blue-400 cursor-pointer">
          Pricing
        </span>
        <span className="text-gray-800 hover:underline hover:decoration-blue-400 cursor-pointer">
          Blog
        </span>
        <span className="text-gray-800 hover:underline hover:decoration-blue-400 cursor-pointer">
          Community
        </span>
        <span className="text-gray-800 hover:underline hover:decoration-blue-400 cursor-pointer">
          Templates
        </span>
      </div>
      <div className="mt-3 flex flex-col items-start gap-3">
        <h1 className="text-[16px] font-semibold">Plangen</h1>
        <span className="text-gray-800 hover:underline hover:decoration-blue-400 cursor-pointer">
          Donations
        </span>
        <span className="text-gray-800 hover:underline hover:decoration-blue-400 cursor-pointer">
          Ask for feature
        </span>
        <span className="text-gray-800 hover:underline hover:decoration-blue-400 cursor-pointer">
          Bug report
        </span>
        <span className="text-gray-800 hover:underline hover:decoration-blue-400 cursor-pointer">
          Feedback
        </span>
      </div>
    </div>
  );
};

export default Footer;
