import usd2 from "../assets/images/usd/usd02.jpg";
import usd4 from "../assets/images/usd/usd04.jpg";
import usd5 from "../assets/images/usd/usd05.jpg";

import shuling from "../assets/images/about/shuling.jpg";
import oil from "../assets/images/about/oil.jpg";
import mypic from "../assets/images/about/my.jpg";
import jaideep from "../assets/images/about/Jaideep.jpg"
import monique from "../assets/images/about/monique.jpg"
import ourstorybg from "../assets/images/about/ourstorybg.jpg"
import daria from "../assets/images/about/daria.jpg"
import suyash from "../assets/images/about/suyash.jpg"
import guy from "../assets/images/about/guy.jpg"
import corevalue from "../assets/images/about/corevalue.jpg"
import ourstory from "../assets/images/about/ourstory.jpg"


const hero =
  "CAMSIS Education is an education service entity founded by PhD graduates from the Faculty of Education at the University of Cambridge. We are based in Cambridge, Bangkok, and Taipei providing various courses to both students and teachers aiming to create new generations of skilled human resources.";

const coreValues =
  "Our core values are to deliver quality teaching and training, make an academic contribution to the education field, and reduce the social gap in education through our projects, using methods such as giving scholarships to students from low socio-economic backgrounds. Being in the field of Education ourselves, we pay great attention to crafting quality courses. Hence, our teaching teams consist of eminent academics from top universities and professionals from various fields ranging from education to business.";

const coreValues2 =
  "CAMSIS Education mainly provides two kinds of services The first is academic courses catering for students. The programmes will be based in Cambridge only. The second is training programmes for educators. We provide training both offline and online.";

const shuLing =
  "Shu Ling was born and raised in Borneo, Malaysia. She is a final year PhD candidate at the Faculty of Education, University of Cambridge. She also supervises undergraduate students from the same faculty in psychology, education, and learning sciences. Shu Ling is deeply passionate about working with young people. Her research focuses on understanding what motivates them to learn, their perception of school, and their social media usage. Her research interests align with her life passion, which is to help young people on their learning journey and see them achieve their full potential.";

const vimunchalee =
  "With a B.A. in English from Chulalongkorn University in Thailand, an M.A. in International Culture and Communication Studies from Waseda University in Japan, and a PhD in Education from the University of Cambridge, Vimunchalee is set to make a valuable contribution in the education field. Being aware that there is always room to improve the quality of teaching and learning, she aims to deliver quality programmes shaping both students and teachers to be skilled and competent in areas needed in the 21st century. Her main goal is to create a network of skillful and competent human resources and bring change, not only to those attending the programmes, but also to those who are from disadvantaged backgrounds with a lack of access to resources.";

const my = "Born and raised in a working-class family in Hanoi, Viet Nam, My believes that education has the power to allow anyone to acheive their dreams regardless of their backgrounds . She has been awarded full scholarships for the Master's and PhD degrees at the University of Cambridge, and is currently a third year PhD student in Cancer Genomics. As well as a scientist, My is a mentor and a motivational writer. She has assisted many Vietnamese students in applying for scholarships to study abroad. She is excited to provide opportunities for students and teachers to experience the world-leading education."

const ourLecturers1 = ("Our expert tutors are academics form the University of Cambridge and professionals who are experts in their own fields.")

const ourLecturers2 = ("Before founding CAMSIS Education, we experienced the inspiring personalised instruction Cambridge offers first-hand. We believe this unique combination of learning from both Cambridge members and prominent professionals is the best way for our students to develop.")





const About = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center bg-fixed bg-gray-600 bg-blend-overlay min-h-[420px]"
        style={{
          backgroundImage: `url(${ourstorybg})`,
        }}
      >
        <div className="max-w-[1280px] mx-auto p-8 text-center sm:text-left">
          <div className="lg:max-w-[50%]">
            <h2 className="text-white uppercase">our story</h2>
            <p className="text-white">{hero}</p>
          </div>
        </div>
      </div>

      <div className=" max-w-[1000px] mx-auto gap-8 p-8 sm: sm:px-0 grid grid-cols-1 sm:grid-cols-2 items-center ">
        <div className=" flex-1">
          <img src={corevalue} className="rounded-lg " alt="" />
        </div>
        <div className=" flex-1 text-justify">
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
            <img src={oil} className=" rounded-lg sm:min-w-[400px]" alt="" />
          </div>
          <div className=" sm:mx-8">
            <h3 className="my-4 text-2xl">Dr. Vimunchalee Dulyasittikorn</h3>
            <p className="uppercase font-semibold">Co-founder</p>
            <p className="text-justify ">{vimunchalee}</p>
          </div>
        </div>
        <div className="p-8 sm:flex items-center justify-between ">
          <div>
            <img src={mypic} className=" rounded-lg sm:min-w-[400px]" alt="" />
          </div>
          <div className=" sm:mx-8">
            <h3 className="my-4 text-2xl">My Ha Pham</h3>
            <p className="uppercase font-semibold">Program Manager</p>
            <p className="text-justify ">{my}</p>
          </div>
        </div>
        <div className="p-8 sm:flex items-center justify-between ">
          <div>
            <img src={shuling} className=" rounded-lg sm:min-w-[400px]" alt="" />
          </div>
          <div className=" sm:mx-8">
            <h3 className="my-4 text-2xl">Shu Ling</h3>
            <p className="uppercase font-semibold">Assistant Project Manager</p>
            <p className="text-justify ">{shuLing}</p>
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
                <img src={daria} className=" rounded-lg sm:min-w-[400px] aspect-square object-cover " alt=""  />
              </div>
              <div className=" sm:mx-8">
                <h3 className="my-4 text-2xl">Daria Sopelkina</h3>
                <div className="font-semibold text-slate-500">Cambridge Judge Entrepreneurship Centre, 
University of Cambridge</div>
                <p className="font-semibold text-slate-500">Founder of Tumchi (a nutrition startup)
Cofounder of DataMix (a software development studio)
Director of Room 8 Studio (a game development company)</p>
              </div>
            </div>
            <div className=" items-center justify-between text-center flex-1 mt-8">
              <div>
                <img src={guy} className=" rounded-lg sm:min-w-[400px] aspect-square object-cover " alt=""  />
              </div>
              <div className=" sm:mx-8">
                <h3 className="my-4 text-2xl">Guy Doza</h3>
                <div className="font-semibold text-slate-500">PGCE, MRes, MEd University of Cambridge</div>
                <p className="font-semibold text-slate-500">Educator/ Speechwriter/ Special Adviser</p>

              </div>
            </div>
            <div className=" items-center justify-between text-center flex-1 mt-8">
              <div>
                <img src={suyash} className=" rounded-lg sm:min-w-[400px] aspect-square object-cover " alt=""  />
              </div>
              <div className=" sm:mx-8">
                <h3 className="my-4 text-2xl">Suyash Bhatt</h3>
                <div className="font-semibold text-slate-500">MBA, Judge Business School, University of Cambridge</div>
                <p className="font-semibold text-slate-500">Founder, Foodbud UK</p>

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
