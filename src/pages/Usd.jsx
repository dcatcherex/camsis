import usd1 from "../assets/images/usd/usd01.jpg";
import usd2 from "../assets/images/usd/usd02.jpg"; 
import usd3 from "../assets/images/usd/usd03.jpg"; 
import usd4 from "../assets/images/usd/usd04.jpg"; 
import usd5 from "../assets/images/usd/usd05.jpg"; 
import usd6 from "../assets/images/usd/usd06.jpg"; 
import usd7 from "../assets/images/usd/usd07.jpg"; 
import usd8 from "../assets/images/usd/usd08.jpg"; 

import usdtop from "../assets/images/usd/usd_top.jpg";
import usdoutline from "../assets/images/usd/usdoutline.jpg";
import usdtimetable from "../assets/images/usd/usdtimetable.jpg"

import PopOut from "../components/Popout";

const images = [usd7,usd2,usd3,usd4,usd5,usd8];

const hero =
  "This is your best chance to explore various university subject choices and learn from experts who have years of experience working in their subject fields. You will acquire essential skills for successful university entrance and meet role models who are extremely passionate about what they do.";

const programmeOverview = [
  "Location: University of Cambridge, UK",
  "Date: to be announced",
  "Age: 13-17",
  "Topics: University-level subjects exploration/ University application preparation/ 21st Century skills",
  "Suitable for: Students who want to gain insights into a wide range of university subject areas",
  "Exploring which university subject to pursue",
  "Studying abroad and gaining insights into undergraduate life",
  "Gaining support for university applications",
  "Learning directly from experts and academics from world-class universities",
  "Developing key attributes via academic skills workshops and supervisions",
];

const programmeObjectives = [
  "Build students’ aspirations through exposure to academically challenging classes from expert tutors.",
  "Develop key skills for students’ future success in education and career via workshops",
  "Encourage students to discover which field they want to pursue a degree",
  "Prepare students & strengthen their portfolios.",
  "Inspire students to be a leader/change agents",
  "Help students grow their network.",
];

const todos = [
  "Gain insights into a wide range of university-level subjects","Discover which subject they're passionate about","Build essential skills for a successful entrance to universities","Craft their portfolio","Acquire 21st-century skills(public speaking, communication, leadership skills, etc.","Gain cultural experiences"
]

const includeItems = [
  "Tuitions",
  "Workshops",
  "Class materials",
  "Accommodation",
  "Excursions (Cambridge, London)",
  "3 Meals a day",
  "Graduation dinner (Cambridge's Traditional Banquet)",
  "Transportations in the UK",
  "Travel and medical insurance",
  "Support staff 24/7",
];

const notIncludeItems = [
  "International fligh ticket",
  "Visa application fees (if applicable)",
];

const highlights = ["Certificate of Attendance from a Cambridge College",
  "University Subjects Exploration (Medicine, Business, Law, Computer Science, etc.)",
  "University Entrance Preparation",
  "Learn from Cambridge Academics",
  "Crafting Perfect Portfolio",
  "Acquiring 21st Century skills (Public Speaking, Communication, Leadership, etc.)",
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
        <div>
          <h3 className="mb-4">Programme Overview</h3>
          <List items={programmeOverview} />

          <h3 className="mt-8 mb-4">Programme Objectives</h3>
          <List items={programmeObjectives} />
        </div>
        <div>
          <h3 className="mb-4">What students would be able to do at the end of the "University Subject Discovery" course</h3>
          <div className="mb-8">
            <List items={todos} />
          </div>

          <h3>Programme Fees:</h3>
          <h3>Available upon request</h3>
          <h4 className="mt-4">What is Included:</h4>
          <List items={includeItems} />

          <h4 className="mt-4">
            What is <span className="text-red-500 ">Not</span> Included:
          </h4>
          <List items={notIncludeItems} />
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

export default Usd;
