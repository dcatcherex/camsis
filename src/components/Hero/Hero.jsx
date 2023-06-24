import { Link } from "react-router-dom";
import pic from "../../../src/assets/images/bg.jpg";
import cyepic from "../../assets/images/cye/cye_top.jpg"
import cyetest from "../../assets/data/cye_testimonials.json"




const Hero = () => {

    
  return (
    <>
      <div
        className="bg-gray-600 bg-cover bg-blend-overlay bg-center "
        style={{ backgroundImage: "url(../../../src/assets/images/bg.jpg)" }}

      >
        {/* <img src={pic} alt="" /> */}
        <div className=" max-w-[1280px] mx-auto">
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
      </div>
      {/* video introduction */}
      <div className="max-w-[1280px] mx-auto px-4 py-10 bg-white">
        <h2 className="text-2xl sm:text-4xl text-bold uppercase max-w-[900px] mx-auto text-center leading-relaxed">
          world class education at the university of cambridge
        </h2>
        <p className="max-w-[700px] mx-auto text-center leading-loose">
          Study at one of our academic/training programmes based in Cambridge.
          All teaching is delivered by members from the University of Cambridge.
        </p>
        <video src=""></video>
      </div>
      {/* courses */}
      <div className=" bg-slate-100">
        <div className="max-w-[1280px] mx-auto px-8 py-10  grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-8">
          <div className="">
            <p className="text-md font-bold text-sky-500">
              Business and Entrepreneurship Course
            </p>
            <h2 className="uppercase">
              cambridge young entrepreneurs (cye)
            </h2>
            <img className="my-4 sm:my-6 rounded-md " src={cyepic} alt="" />
            <p className="line-clamp-3">
              Situated in the historic town of Cambridge, the course combines both
              academic knowledge for university and key skills for future careers.
            </p>
            <div className="mt-6">
              <Link to={"/cye"} className="btn">
                More "CYE" details
              </Link>
            </div>
          </div>
          <hr className="sm:hidden" />
          <div className="">
            <p className="text-md font-bold text-sky-500">
              Business and Entrepreneurship Course
            </p>
            <h2 className="uppercase">
            UNIVERSITY SUBJECT DISCOVERY (USD)          </h2>
            <img className="my-6 rounded-md " src={cyepic} alt="" />
            <p className="line-clamp-3">
            This is your best chance to explore various university subject choices and learn from experts who have years of experience working in their subject fields.
            </p>
            <div className="mt-6">
              <Link to={"/cye"} className="btn">
                More "CYE" details
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* testimonials */}
      <div className="px-4 py-10 bg-white">
        <h2 className="text-4xl font-bold text-center">What our students say about us</h2>
        <div className="flex overflow-x-scroll  p-4  gap-x-4">

          {/* map testimonials */}
          {cyetest.map(({name,level,say,id}) => (
          <div className=" max-w-[400px] "key={id}>
            <div  >
                <p className="w-[400px] font-semibold mt-8 p-4 border-2 border-slate-200 rounded-md text-center">
                  {say}
                </p>
            </div>
            <div className=" flex flex-row justify-center items-center gap-x-4">
              <img className="mt-4 h-16 w-16 rounded-full" src={pic} alt="" />
              <div>
                  <p className="font-semibold">{name}</p>
                  <p>year{level}</p>
              </div>
            </div>
          </div>
))}

          


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
