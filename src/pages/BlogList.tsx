import img from "../assets/banner.webp";

export const BlogList = () => {
  return (
    <div className="flex flex-col gap-5 max-w-4xl m-auto py-10 min-h-screen">
      <div className="flex gap-10">
        <img className="w-64 h-40 object-cover" src={img} alt="" />
        <div>
          <h3 className="text-2xl">TItle</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
            eum quaerat quod aspernatur sunt mollitia dolorum laborum modi,
            ullam assumenda quibusdam esse nostrum facere?
          </p>
        </div>
      </div>
      <div className="flex gap-10">
        <img className="w-64 h-40 object-cover" src={img} alt="" />
        <div>
          <h3 className="text-2xl">TItle</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
            eum quaerat quod aspernatur sunt mollitia dolorum laborum modi,
            ullam assumenda quibusdam esse nostrum facere?
          </p>
        </div>
      </div>
      <div className="flex gap-10">
        <img className="w-64 h-40 object-cover" src={img} alt="" />
        <div>
          <h3 className="text-2xl">TItle</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
            eum quaerat quod aspernatur sunt mollitia dolorum laborum modi,
            ullam assumenda quibusdam esse nostrum facere?
          </p>
        </div>
      </div>
    </div>
  );
};
