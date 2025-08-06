import img from "../assets/logo.png";

export const Footer = () => {
  return (
    <footer className="p-10 bg-black text-white">
      <div>
        <img src={img} alt="" className="w-20" />
      </div>
    </footer>
  );
};
