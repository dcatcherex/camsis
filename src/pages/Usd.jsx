import usd2 from "../assets/images/usd/usd02.jpg"; 
import usd3 from "../assets/images/usd/usd03.jpg"; 
import usd4 from "../assets/images/usd/usd04.jpg"; 
import usd5 from "../assets/images/usd/usd05.jpg"; 
import usd7 from "../assets/images/usd/usd07.jpg"; 
import usd8 from "../assets/images/usd/usd08.jpg"; 

import usdtop from "../assets/images/usd/usd_top.jpg";
import usdoutline from "../assets/images/usd/usdoutline.jpg";
import usdtimetable from "../assets/images/usd/usdtimetable.jpg"

import PropTypes from 'prop-types';


import PopOut from "../components/Popout";

const images = [usd7,usd2,usd3,usd4,usd5,usd8];

const hero =
  "This is your best chance to explore various university subject choices and learn from experts who have years of experience working in their subject fields. You will acquire essential skills for successful university entrance and meet role models who are extremely passionate about what they do.";

const courseOverview1 = 'USD offers students a unique opportunity to explore their interests and discover their desired field of study as well as career paths. By attending university-level classes in a range of social sciences and natural sciences, students gain valuable exposure to diverse disciplines, enabling them to explore different areas of academic interest. This exposure supports students in making informed decisions about their high school courses and provides insights that can guide their choices for future majors in college.'

const courseOverview2 = 'In addition to subject-specific classes, students also participate in 21st Century Skills Development workshops which focus on essential skills for the modern world, including leadership, collaboration, public speaking, and presentation skills. By acquiring these vital skills, students are better equipped to navigate their educational journey and future professional endeavors. Most importantly, students will receive strategic guidance for university application, preparing them for their desired choice of university.'

const courseObjectives = [
  "Foster aspirations and academic excellence through challenging classes and expert tutors.",
"Develop key skills for future success in education and careers via engaging workshops.",
"Guide students to discover their desired field of study for degree pursuits.",
"Prepare students for university applications and boost their potential.",
"Promote leadership and inspire students to become change agents.",
"Provide opportunity for students to expand their networks.",
]



const highlights = ["Study at the University of Cambridge",
  "Learn from Top University Academics and Professional",
  "University Application Preparation",
  "University Subjects Exploration",
  "Certificate of Attendance",
  "Acquire 21st Century Skills",
  "Trip to London"
];

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

const Usd = () => {
  return (
    <div>
      <div
        className="bg-cover bg-bottom bg-fixed bg-gray-600 bg-blend-overlay min-h-[420px]"
        style={{
          backgroundImage: `url(${usdtop})`,
        }}
      >
        <div className="max-w-[1280px] mx-auto p-8 text-center sm:text-left">
          <div className="lg:max-w-[50%]">
            <p className="text-orange-500 font-semibold">
            Pathway to Passion
            </p>
            <h2 className="text-white uppercase">
              university subject discovery(usd)
            </h2>
            <p className="text-white">{hero}</p>
          </div>
        </div>
      </div>
      {/* programme schedule */}
      <div className="bg-slate-950 p-8 ">
        {/* course outline */}
        <div className="max-w-[1000px] mx-auto flex justify-between m-4">
          <PopOut
            text="Programme Schedule"
            content_img={usdtimetable}
            bg_color="bg-orange-500"
          />
          <PopOut
            text="Course Outline"
            content_img={usdoutline}
            bg_color="bg-orange-500"
          />
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 p-8">
        <div className="text-justify max-w-[500px]">
          <h3 className="mb-4">Course Overview</h3>
          <p >{courseOverview1}</p>
          <p>{courseOverview2}</p>
        </div>
        <div className="text-justify max-w-[500px]">
          <h3 className="mb-4">Course Objectives</h3>
          <div className="mb-8">
          <List items={courseObjectives} />

          </div>

          <h4 className="capitalize">Programme Fees: Available upon request</h4>
        </div>
      </div>

      {/* highlight */}
      <div className="bg-gray-100 ">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 pb-8 mt-8 items-center">
          <ImagesGrid />

          <div className="px-8">
            <h3 className="mb-4">Highlights</h3>
            
            <ul className="sm:leading-loose">
              {highlights.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* What our students say about us */}
    </div>
  );
};

List.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Usd;
