import usd2 from "../assets/images/usd/usd02.jpg"; 
import usd3 from "../assets/images/usd/usd03.jpg"; 
import usd4 from "../assets/images/usd/usd04.jpg"; 
import usd5 from "../assets/images/usd/usd05.jpg"; 
import usd7 from "../assets/images/usd/usd07.jpg"; 
import usd8 from "../assets/images/usd/usd08.jpg"; 

import slp1 from "../assets/images/slp/slp1.jpg"
import slp2 from "../assets/images/slp/slp2.jpg"
import slp3 from "../assets/images/slp/slp3.jpg"
import slp4 from "../assets/images/slp/slp4.jpg"

import slptop from "../assets/images/slp/slp_top.jpg";
import slptimetable from "../assets/images/slp/slptimetable.jpg"
import slpoutline from "../assets/images/slp/slpoutline.jpg"
import cyecourseoutline from "../assets/images/cye/courseoutline.jpg";

import PopOut from "../components/Popout";

const images = [usd7,slp1,slp2,slp3,slp4,usd8];

const hero =
  "This programme is designed for the top decision-makers of School administration such as School Owners, Leadership, and Principals. We may need evidence of your authority before we confirm your participation.";

const programmeOverview = [
  "Location: University of Cambridge, UK",
  "Date: to be announced",
  "Age: 14-17",
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
  "Course Fees",
  "All teaching, small group seminars, and skills development workshops",
  "Single accommodation for the duration of programme",
  "Venue costs and a private school visit",
  "Daytime catering during programme days",
  "Formal Dinner (Cambridge’s traditional college banquet)",
  "One Gala college dinner and One welcome buffet",
  "One-day tour in Cambridge",
  "One-day packaged trip to London",
  "Airport transfers and transportation for packaged tour"
];

const notIncludeItems = [
  "International fligh ticket",
  "Visa application fees (if applicable)",
];

const highlights = [
  "Certificate of Attendance from a Cambridge College",
  "Taught by Cambridge professors/lecturers",
  "School visits",
  "Networking opportunities with Cambridge faculties",
  "Trips (Cambridge, London etc.)",
];

const benefit = ("This tailored programme not only provides you with access to the highest quality of resources but also opens your door to an international community and its quality network. A lifelong network will help you explore your unrealised leadership potential to grow your education business and at the same time play your role in the rapid transformation of the education system. Post-COVID, every school, whether small or big has been tremendously put to the test and therefore needs critical transformation. This programme will broaden your perspective to deal with the modern-day challenges and help you learn the transformative approach from the world’s best academic staff and experts.")

const award = ("As part of this programme, you will be invited to an evening reception on the last day of the programme. This is a great opportunity for you to network with global leaders, academics, and corporations. Tickets to this reception will be provided free of cost to all the programme candidates. However, this is a paid event and if you're required to invite your friends or additional guests, please contact the organisers in advance to arrange for their tickets.")

const tour = ("The programme includes packaged tours both in Cambridge and in London. You don’t have to worry about making any reservations or transportation on the tour days. The London package may include attractions like a mini cruise on the Thames, Tower Bridge, London eye, etc, depending on the availability and the events scheduled in November. The Cambridge tour will include a punting and Cambridge guided walk tour of several attractions within the historic university town. Exact details of the touring day will be provided before the commencement of the programme.")

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
          backgroundImage: `url(${slptop})`,
        }}
      >
        <div className="max-w-[1280px] mx-auto p-8 text-center sm:text-left">
          <div className="lg:max-w-[50%]">
            <p className="text-rose-500 font-semibold">
            School Leadership Team's Professional Development            </p>
            <h2 className="text-white uppercase">
              school leadership programme(slp)
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
            content_img={slptimetable}
            bg_color="bg-rose-500"
          />
          <PopOut
            text="Course Outline"
            content_img={slpoutline}
            bg_color="bg-rose-500"
          />
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 p-8">
        <div>
          <h3 className="mb-4">How will it benefit you?</h3>
          <p className="text-justify max-w-[500px]">{benefit}</p>

          <h3 className="mt-8 mb-4">Award Ceremony & Evening Reception</h3>
          <p className="text-justify max-w-[500px]">{award}</p>

        </div>
        <div>
          <h3 className="mb-4">Packaged tours Inclusion</h3>
          <p className="text-justify max-w-[500px] mb-8">{tour}</p>


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
