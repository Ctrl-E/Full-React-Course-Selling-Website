import bgImg from "../../../assets/home/banner-2.jpg";

export const Hero2 = () => {
  return (
    <div
      className="min-h-screen bg-cover"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="min-h-screen flex justify-start pl-11 text-white bg-black bg-opacity-60 items-center">
        <div>
          <div className="space-y-4">
            <p className="md:text-4xl text-2xl">Find Out</p>
            <h1 className="md:text-7xl text-4xl font-bold">
              Best Online Courses From Home
            </h1>
            <div className="md:w-1/2">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
                temporibus a suscipit culpa et ipsa id, illum quibusdam,
                expedita voluptates minus. Incidunt, eius. Earum aspernatur
                aliquid ad cumque nam in.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <button className="px-7 py-3 rounded-lg bg-secondary font-bold">
                Join Today
              </button>
              <button className="px-7 py-3 hover:bg-secondary rounded-lg border font-bold">
                View Courses
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
