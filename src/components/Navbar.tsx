import logo from "../assets/logo.png";
import fb from "../assets/SVG/facebook.svg";
import ins from "../assets/SVG/instagram.svg";
import pinte from "../assets/SVG/pinterest.svg";
import tik from "../assets/SVG/tiktok.svg";
import trip from "../assets/SVG/tripadvisor.svg";
import yt from "../assets/SVG/youtube.svg";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between pb-2">
      <div>
        <img className="w-32" src={logo} alt="" />
      </div>
      <div className="flex flex-col gap-5 justify-between">
        <ul className="flex gap-8 ml-16">
          <li className="underline underline-offset-4">Our Blogs</li>
          <li className="underline underline-offset-4">Social Projects</li>
          <li className="underline underline-offset-4">Check avaliability</li>
        </ul>
        <ul className="flex gap-2.5">
          <li>
            <img src={fb} className="w-6" alt="" />
          </li>
          <li>
            <img src={ins} className="w-6" alt="" />
          </li>
          <li>
            <img src={pinte} className="w-6" alt="" />
          </li>
          <li>
            <img src={tik} className="w-6" alt="" />
          </li>
          <li>
            <img src={trip} className="w-6" alt="" />
          </li>
          <li>
            <img src={yt} className="w-6" alt="" />
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-1">
        <button>
          R <label htmlFor="">EN/ES</label>
        </button>
        <button className="bg-gray-900 text-white p-3 rounded-2xl px-8">
          CONTACT
        </button>
      </div>
    </div>
  );
};
