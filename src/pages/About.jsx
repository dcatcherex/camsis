import usd1 from "../assets/images/usd/usd01.jpg";
import usd2 from "../assets/images/usd/usd02.jpg";
import usd3 from "../assets/images/usd/usd03.jpg";
import usd4 from "../assets/images/usd/usd04.jpg";
import usd5 from "../assets/images/usd/usd05.jpg";
import usd6 from "../assets/images/usd/usd06.jpg";
import usd7 from "../assets/images/usd/usd07.jpg";
import usd8 from "../assets/images/usd/usd08.jpg";

import oilsally1 from "../assets/images/about/oilsally1.jpg";
import oilsally2 from "../assets/images/about/oilsally2.jpg";
import oilsally3 from "../assets/images/about/oilsally3.jpg";
import sally from "../assets/images/about/sally.jpg";
import oil from "../assets/images/about/oil.jpg";
import jaideep from "../assets/images/about/Jaideep.jpg"
import monique from "../assets/images/about/monique.jpg"
import joe from "../assets/images/about/joe.jpg"
import tony from "../assets/images/about/tony.jpg"
import vishal from "../assets/images/about/vishal.jpg"
import camsisteam from "../assets/images/about/camsisteam.jpg"

import usdtop from "../assets/images/usd/usd_top.jpg";
import usdoutline from "../assets/images/usd/usdoutline.jpg";
import usdtimetable from "../assets/images/usd/usdtimetable.jpg";

import PopOut from "../components/Popout";

const images = [usd7, usd2, usd3, usd4, usd5, usd8];

const hero =
  "CAMSIS Education is an education service entity founded by PhD graduates from the Faculty of Education at the University of Cambridge. We are based in Cambridge, Bangkok, and Taipei providing various courses to both students and teachers aiming to create new generations of skilled human resources.";

const coreValues =
  "Our core values are to deliver quality teaching and training, make an academic contribution to the education field, and reduce the social gap in education through our projects, using methods such as giving scholarships to students from low socio-economic backgrounds. Being in the field of Education ourselves, we pay great attention to crafting quality courses. Hence, our teaching teams consist of eminent academics from the University of Cambridge and professionals from various fields ranging from education to business.";

const coreValues2 =
  "CAMSIS Education mainly includes two kinds of businesses. The first is academic courses catering for students. The programmes will be based in Cambridge only. The second is training programmes for teachers. We provide training both in Cambridge and in overseas in Thailand and Taiwan.";

const poTsai =
  "Dr. Po Tsai’s main passion in life is education, which she has been enthusiastically researching for the past 10 years. She completed her doctorate in education at the Faculty of Education, University of Cambridge. She is currently an ESRC Postdoctoral Fellow and supervises undergraduates in education psychology and learning sciences at the Faculty of Education, University of Cambridge. She is an outstanding scholar and is a specialist on school effectiveness, teacher professional programmes, and wellbeing in schools. Her project, currently funded by ESRC, aims to conduct a study with primary school teachers in Cambridge to adapt strategies and develop games for promoting students’ wellbeing according to DASI. Later, this project will expand beyond Cambridge to the rest of the UK. She also plans to expand the project to more student age groups and other parts of the world. ";

const vimunchalee =
  "With a B.A. in English from Chulalongkorn University in Thailand, an M.A. in International Culture and Communication Studies from Waseda University in Japan, and a PhD in Education from the University of Cambridge, Vimunchalee is set to make a valuable contribution in the education field. Being aware that there is always room to improve the quality of teaching and learning, she aims to deliver quality programmes shaping both students and teachers to be skilled and competent in areas needed in the 21st century. Her main goal is to create a network of skillful and competent human resources and bring change, not only to those attending the programmes, but also to those who are from disadvantaged backgrounds with a lack of access to resources.";

const ourLecturers1 = ("Our expert tutors are academics form the University of Cambridge and professionals who are experts in their own fields.")

const ourLecturers2 = ("Before founding CAMSIS Education, we experienced the inspiring personalised instruction Cambridge offers first-hand. We believe this unique combination of learning from both Cambridge members and prominent professionals is the best way for our students to develop.")

const List = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

const ImagesGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-8">
      {images.map((image, index) => (
        <img
          className={`rounded-lg ${index > 1 ? "hidden sm:block" : ""}`}
          src={image}
          alt=""
          key={index}
        />
      ))}
    </div>
  );
};

const About = () => {
  return (
    <div>
      <div
        className="bg-cover bg-bottom bg-fixed bg-gray-600 bg-blend-overlay min-h-[420px]"
        style={{
          backgroundImage: `url(${camsisteam})`,
        }}
      >
        <div className="max-w-[1280px] mx-auto p-8 text-center sm:text-left">
          <div className="lg:max-w-[50%]">
            <h2 className="text-white uppercase">our story</h2>
            <p className="text-white">{hero}</p>
          </div>
        </div>
      </div>

      <div className=" max-w-[1280px] mx-auto gap-8 p-8 sm:py-8 sm:px-0 grid grid-cols-1 sm:grid-cols-2 items-center ">
        <div className=" flex-1">
          <img src={oilsally3} className="rounded-lg" alt="" />
        </div>
        <div className=" flex-1">
          <h3 className="mb-4">Core Values</h3>
          <p>{coreValues}</p>
          <p>{coreValues2}</p>
        </div>
      </div>
      {/* programme schedule */}
      <div className="bg-slate-950 p-8 ">
        {/* gallery */}
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center text-slate-500">
          <img src={usd4} className="rounded-lg" alt="" />
          <img src={usd5} className="rounded-lg" alt="" />
          <img src={usd2} className="hidden sm:block rounded-lg" alt="" />
        </div>
      </div>
      {/* Our Team */}
      <div className="max-w-[1000px] mx-auto ">
        <h2 className="mt-8 text-center">Our Team</h2>
        <div className="p-8 sm:flex items-center justify-between ">
          <div>
            <img src={sally} className=" rounded-lg sm:min-w-[400px]" alt="" />
          </div>
          <div className=" sm:mx-8">
            <h3 className="my-4 text-2xl">Dr. Po Tsai</h3>
            <p className="uppercase font-semibold">founder</p>
            <p className="text-justify ">{poTsai}</p>
          </div>
        </div>
        <div className="p-8 sm:flex items-center justify-between ">
          <div>
            <img src={oil} className=" rounded-lg sm:min-w-[400px]" alt="" />
          </div>
          <div className=" sm:mx-8">
            <h3 className="my-4 text-2xl">Dr. Vimunchalee Dulyasittikorn</h3>
            <p className="uppercase font-semibold">founder</p>
            <p className="text-justify ">{vimunchalee}</p>
          </div>
        </div>
      </div>
      {/* Our Lectures*/}
      <div className="bg-gray-100">
        <div className="max-w-[1000px] mx-auto text-center py-4 px-8">
          <h2 className="mt-8 text-center">Our Lectures</h2>
          <p>{ourLecturers1}</p>
          <p>{ourLecturers2}</p>
          <div className="sm:flex gap-10">
            <div className=" items-center justify-between text-center flex-1 mt-8 ">
              <div>
                <img src={jaideep} className=" rounded-lg sm:min-w-[400px] aspect-square object-cover " alt=""  />
              </div>
              <div className=" sm:mx-8">
                <h3 className="my-4 text-2xl">Professor Jaideep Prabhu</h3>
                <div className="font-semibold text-slate-500">BTech (IIT Delhi), PhD (University of Southern California)</div>
                <p className="font-semibold text-slate-500">Judge Business School, Cambridge</p>
              </div>
            </div>
            <div className=" items-center justify-between text-center flex-1 mt-8">
              <div>
                <img src={monique} className=" rounded-lg sm:min-w-[400px] aspect-square object-cover " alt=""  />
              </div>
              <div className=" sm:mx-8">
                <h3 className="my-4 text-2xl">Professor Monique Boddington</h3>
                <div className="font-semibold text-slate-500">BA, MA (University of Nottingham), PhD (University of Cambridge)</div>
                <p className="font-semibold text-slate-500">Management Practice Associate Professor</p>

              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* Advisory Team */}
      <div className="">
        <div className="max-w-[1280px] mx-auto text-center py-4 px-8">
          <h2 className="mt-8 text-center">Advisory Team</h2>
        
          <div className="sm:flex gap-10">
            <div className=" items-center justify-between text-center flex-1 mt-8 ">
              <div>
                <img src={joe} className=" rounded-lg sm:min-w-[400px] aspect-square object-cover " alt=""  />
              </div>
              <div className=" sm:mx-8">
                <h3 className="my-4 text-2xl">Dr. Joe Watson</h3>
                <div className="font-semibold text-slate-500">PhD in Education, University of Cambridge</div>
                <p className="font-semibold text-slate-500">Psychometrician at the Psychometrics Centre, Judge Business School, University of Cambridge</p>
              </div>
            </div>
            <div className=" items-center justify-between text-center flex-1 mt-8">
              <div>
                <img src={vishal} className=" rounded-lg sm:min-w-[400px] aspect-square object-cover " alt=""  />
              </div>
              <div className=" sm:mx-8">
                <h3 className="my-4 text-2xl">Vishal Jain</h3>
                <div className="font-semibold text-slate-500">MBA, Judge Business School, University of Cambridge</div>
                <p className="font-semibold text-slate-500">Strategy, Google Singapore</p>

              </div>
            </div>
            <div className=" items-center justify-between text-center flex-1 mt-8">
              <div>
                <img src={tony} className=" rounded-lg sm:min-w-[400px] aspect-square object-cover " alt=""  />
              </div>
              <div className=" sm:mx-8">
                <h3 className="my-4 text-2xl">Tony Zhou</h3>
                <div className="font-semibold text-slate-500">PhD candidate in Law, University of Cambridge</div>
                <p className="font-semibold text-slate-500">Ex-corporate tax lawyer (PricewaterhouseCoopers Australia)</p>

              </div>
            </div>
            
          </div>
        </div>
      </div>


      {/* What our students say about us */}
    </div>
  );
};

export default About;
