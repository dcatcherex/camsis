const Hero = () => {
  return (
    <>
      <div
        className="min-h-screen bg-cover"
        style={{ backgroundImage: "url(../../../src/assets/images/bg.jpg)" }}
      >
        <div className="text-white font-medium text-5xl uppercase w-[40%]">
          nelson mandela <br />
          "education is the most powerful weapon which you can use to change the
          world."
        </div>
      </div>
      {/* video introduction */}
      <div>
        <h2 className="text-4xl font-bold uppercase">world class education at the university of cambridge</h2>
        <p>
          Study at one of our academic/training programmes based in Cambridge.
          All teaching is delivered by members from the University of Cambridge.
        </p>
        <video src=""></video>
      </div>
      {/* courses */}
      <div className="px-4 bg-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="">
            <h3 className="text-md font-bold">Business and Entrepreneurship Course</h3>
            <h2 className="text-4xl font-bold uppercase">cambridge young entrepreneurs (cye)</h2>
            <img src="" alt="" />
            <p></p>
            <button className="px-4 py-3 bg-blue-500 rounded-sm font-semibold text-white">More "CYE" details</button>
          </div>
          <div className="">
            <h3 className="text-md font-bold">Business and Entrepreneurship Course</h3>
            <h2 className="text-4xl font-bold uppercase">cambridge young entrepreneurs (cye)</h2>
            <img src="" alt="" />
            <p></p>
            <button className="px-4 py-3 bg-blue-500 rounded-sm font-semibold text-white">More "CYE" details</button>
          </div>
      </div>
    </>
  );
};

export default Hero;
