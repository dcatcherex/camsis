import pic from "../../../src/assets/images/bg.jpg";

const Hero = () => {

    
  return (
    <>
      <div
        className="bg-gray-700 bg-cover bg-blend-overlay"
        style={{ backgroundImage: "url(../../../src/assets/images/bg.jpg)" }}

      >
        {/* <img src={pic} alt="" /> */}
        <div className=" sm:max-w-[50%] px-4 py-20 text-center sm:text-left text-white font-medium text-3xl sm:text-5xl uppercase ">
          <p className="text-base">nelson mandela,</p>
          <p className="my-3 font-bold">
              "education is the most powerful weapon which you can use to change the
              world."
          </p>
          <p className="uppercase text-base">honorary fellow of magdalene college university of cambridge</p>
          <button className="uppercase text-base  mt-16 px-4 py-3 bg-blue-500 rounded-sm font-semibold text-white">
            apply now
          </button>
        </div>
      </div>
      {/* video introduction */}
      <div>
        <h2 className="text-4xl font-bold uppercase">
          world class education at the university of cambridge
        </h2>
        <p>
          Study at one of our academic/training programmes based in Cambridge.
          All teaching is delivered by members from the University of Cambridge.
        </p>
        <video src=""></video>
      </div>
      {/* courses */}
      <div className="px-4 py-10 bg-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="">
          <h3 className="text-md font-bold">
            Business and Entrepreneurship Course
          </h3>
          <h2 className="text-4xl font-bold uppercase">
            cambridge young entrepreneurs (cye)
          </h2>
          <img className="my-6 rounded-md " src={pic} alt="" />
          <p>
            Situated in the historic town of Cambridge, the course combines both
            academic knowledge for university and key skills for future careers.
          </p>
          <button className="mt-4 px-4 py-3 bg-blue-500 rounded-sm font-semibold text-white">
            More "CYE" details
          </button>
        </div>
      </div>
      {/* testimonials */}
      <div className="px-4 py-10 bg-white">
        <h2 className="text-4xl font-bold">What our students say about us</h2>
        <div className="flex flex-col">
          <div>
              <p className="max-w-[400px] font-semibold mt-8 p-4 border-2 border-slate-200 rounded-md">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
                sed eligendi quasi. Distinctio, perferendis quisquam.Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Sapiente sed eligendi
                quasi. Distinctio, perferendis quisquam.Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Sapiente sed eligendi quasi.
                Distinctio, perferendis quisquam.
              </p>
          </div>
          <div className="flex flex-row items-center gap-x-4">
            <img className="mt-4 h-16 w-16 rounded-full" src={pic} alt="" />
            <div>
                <p className="font-semibold">Natakorn</p>
                <p>year10</p>
            </div>
          </div>
        </div>
      </div>
      {/* video ref */}
      <div className="px-4 py-10 bg-blue-900">
        <img className="w-[300px] rounded-md" src={pic} alt="" />
      </div>
    </>
  );
};

export default Hero;
