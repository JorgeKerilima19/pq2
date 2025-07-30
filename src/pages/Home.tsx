import banner from "../assets/banner.webp";
import { Assets, TourBanner } from "../components/homepage";

export const Home = () => {
  return (
    <div className="flex flex-col">
      <img src={banner} alt="" />
      <h2 className="text-5xl font-bold text-center py-10">
        Travel confidently with Paquito tours and seek new and unique
        experiences
      </h2>
      <div className="self-center flex items-center gap-14 m-10">
        <span className="border-2 bg-gray-900 text-white py-5 px-10 rounded-2xl hover:text-black hover:bg-white">
          LOCAL
        </span>
        <span className="border-2 bg-gray-900 text-white py-5 px-10 rounded-2xl hover:text-black hover:bg-white">
          INDIGENOUS
        </span>
        <span className="border-2 bg-gray-900 text-white py-5 px-10 rounded-2xl hover:text-black hover:bg-white">
          SUSTAINABLE
        </span>
      </div>
      <div className="grid gap-4 py-16">
        <p className="text-center text-2xl">
          At Paquito Tours, we specialize in offering authentic and enriching
          experiences in Cusco, standing out with an approach that goes beyond
          conventional tourist routes.
        </p>
        <p className="text-center text-2xl">
          Founded by Raúl Ángel Valandra Yuca, a passionate guide with a deep
          connection to Inca culture and Peruvian history, our agency provides a
          family-like atmosphere and personalized attention to each client.
        </p>
      </div>
      <Assets />
      <div>
        <h2 className="text-5xl font-bold text-center py-10">
          What's your plan?
        </h2>
        <div className="flex gap-2">
          <TourBanner />
          <TourBanner />
        </div>
      </div>
      <div className="flex flex-col items-center gap-5 m-10">
        <h2 className="text-3xl font-bold">Join Us</h2>
        <p  className="text-lg px-16 text-center">
          Discover Cusco with Paquito Tours and experience an authentic and
          deeply connected adventure with its history and culture. We are here
          to help you create unforgettable memories and explore the true essence
          of Peru.
        </p>
        <p className="text-lg px-16 text-center">
          Contact us today to plan your next adventure and let us show you the
          magic of Cusco through the passion and knowledge of Raúl Ángel
          Valandra Yuca.
        </p>
        <button>Contact Us</button>
      </div>
    </div>
  );
};
