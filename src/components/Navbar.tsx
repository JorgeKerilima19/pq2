import logo from "../assets/logo.png";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <img className="aspect-3/2" src={logo} alt="" />
      </div>
      <div className="flex-col gap-1.5">
        <ul className="flex gap-2.5">
          <li>Our Blogs</li>
          <li>Social Projects</li>
          <li>Check avaliability</li>
        </ul>
        <ul className="flex gap-2.5">
          <li>FB</li>
          <li>INS</li>
          <li>TRADV</li>
          <li>YT</li>
          <li>TIK</li>
          <li>PINTE</li>
        </ul>
      </div>
      <div className="flex flex-col gap-5">
        <button>EN/ES</button>
        <button>CONTACT</button>
      </div>
    </div>
  );
};
