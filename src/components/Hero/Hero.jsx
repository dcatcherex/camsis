import { Link } from "react-router-dom";
import { useState } from "react";

import pic from "../../../src/assets/images/bg.jpg";
import cyepic from "../../assets/images/cye/cye_top.jpg";
import usdpic from "../../assets/images/usd/usd_top.jpg";
import slppic from "../../assets/images/slp/slp1.jpg"
import cyetest from "../../assets/data/cye_testimonials.json";
import introvideo from "../../assets/images/cye/introvideo.jpg";

const partners = ("We pride ourselves in delivering high quality educational programmes and collaborative projects. Hence, we work closely with educational institutions from all over the world, private companies, and local businesses to provide both  theoretical guidance and hands-on experience to our participants")

const videos = [
  "https://www.youtube.com/embed/03qgPF1Sp70","https://www.youtube.com/embed/wc8rCqQABPA","https://www.youtube.com/embed/I8UoVsGtXjc","https://www.youtube.com/embed/gYXgVQBwCDE"
]

const Hero = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div
        className="bg-gray-600 bg-cover bg-blend-overlay bg-center "
        style={{ backgroundImage: `url(${pic})` }}
      >
        {/* <img src={pic} alt="" /> */}
        <div className=" max-w-[1280px] mx-auto">
          <div className=" sm:max-w-[50%] px-4 py-20 text-center sm:text-left text-white font-medium text-3xl sm:text-5xl uppercase ">
            <p className="text-base">nelson mandela,</p>
            <p className="my-3 font-bold">
              "education is the most powerful weapon which you can use to change
              the world."
            </p>
            <p className="uppercase text-base">
              honorary fellow of magdalene college university of cambridge
            </p>
            <button className="uppercase text-base  mt-16 px-4 py-3 bg-blue-500 rounded-sm font-semibold text-white">
              apply now
            </button>
          </div>
        </div>
      </div>
      {/* video introduction */}
      <div className="max-w-[1280px] mx-auto px-8 py-10 bg-white">
        <h2 className="text-2xl sm:text-4xl text-bold uppercase max-w-[900px] mx-auto text-center leading-relaxed">
          world class education at the university of cambridge
        </h2>
        <p className="max-w-[700px] mx-auto text-center leading-loose">
          Study at one of our academic/training programmes based in Cambridge.
          All teaching is delivered by members from the University of Cambridge.
        </p>

        {/* <img
          onClick={() => setOpen(true)}
          className="sm:max-w-[900px] mx-auto cursor-pointer"
          src={introvideo}
          alt=""
        /> */}

       

        <div className="relative overflow-hidden mt-8  min-h-[200px] sm:min-h-[500px] w-full mx-auto sm:max-w-[900px] rounded-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/03qgPF1Sp70"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      {/* courses */}
      <div className=" bg-slate-100">
        <div className="max-w-[1280px] mx-auto px-8 py-10  grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8">
          <div className="">
            <p className="text-md font-bold text-sky-500">
              Business and Entrepreneurship Course
            </p>
            <h2 className="uppercase">cambridge young entrepreneurs (cye)</h2>
            <img className="my-4 sm:my-6 rounded-md " src={cyepic}  alt="" />
            <p className="line-clamp-3">
              Situated in the historic town of Cambridge, the course combines
              both academic knowledge for university and key skills for future
              careers.
            </p>
            <div className="mt-6">
              <Link to={"/cye"} className="btn">
                More "CYE" details
              </Link>
            </div>
          </div>
          <hr className="sm:hidden" />
          <div className="">
            <p className="text-md font-bold text-orange-500">
              Business and Entrepreneurship Course
            </p>
            <h2 className="uppercase">UNIVERSITY SUBJECT DISCOVERY (USD) </h2>
            <img className="my-6 rounded-md " src={usdpic} height={10} alt="" />
            <p className="line-clamp-3">
              This is your best chance to explore various university subject
              choices and learn from experts who have years of experience
              working in their subject fields.
            </p>
            <div className="mt-6">
              <Link to={"/usd"} className="btn bg-orange-500">
                More "USD" details
              </Link>
            </div>
          </div>
          <hr className="sm:hidden" />
          <div className="">
            <p className="text-md font-bold text-rose-500">
              Business and Entrepreneurship Course
            </p>
            <h2 className="uppercase">school leadership programme (slp) </h2>
            <img className="my-6 rounded-md " src={slppic} alt="" />
            <p className="line-clamp-3">
            This programme is designed for the top decision-makers of School administration such as School Owners, Leadership, and Principals.
            </p>
            <div className="mt-6">
              <Link to={"/slp"} className="btn bg-rose-500">
                More "SLP" details
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* testimonials */}
      <div className="px-4 py-10 bg-white">
        <h2 className="text-4xl font-bold text-center">
          What our students say about us
        </h2>
        <div className="flex overflow-x-scroll  p-4  gap-x-4">
          {/* map testimonials */}
          {cyetest.map(({ name, level, say, id }) => (
            <div className=" max-w-[400px] " key={id}>
              <div>
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
      <div className="bg-slate-900">
        <div className="max-w-[1280px] mx-auto flex gap-x-4 justify-between px-4 py-10 overflow-x-auto">
          {videos.map((video,npx) => (
            <iframe key={npx}
            className="w-[300px] rounded-md"
            src={video}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
        
            </iframe>
          ))}
        
        </div>
      </div>
      <div className="m-8">
        <div className="sm:flex items-center max-w-[1200px] mx-auto  px-8 py-6 rounded-lg text-white bg-sky-500">
          <div>
            <h2 className="uppercase font-semibold text-white  ">our partners</h2>
            <p className="py-4">{partners}</p>
          </div>
          <button className="btn bg-white text-sky-500 min-w-[130px] font-semibold">Contact us</button>
        </div>
      </div>
    </>
  );
};

export default Hero;
