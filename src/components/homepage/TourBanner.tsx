import img from "../../assets/banner.webp";

export const TourBanner = () => {
  return (
    <div className="w-[50%] flex flex-col gap-4 border-2 pb-5 border-green-400">
      <img src={img} className="h-[25rem] object-cover" alt="" />
      <h3 className="text-xl text-center font-bold">
        Lorem ipsum dolor sit amet.
      </h3>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati totam
        nobis animi, minus mollitia dolorum?
      </p>
    </div>
  );
};
