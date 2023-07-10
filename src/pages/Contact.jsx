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
import usdtimetable from "../assets/images/usd/usdtimetable.jpg";

import PopOut from "../components/Popout";

const images = [usd7, usd2, usd3, usd4, usd5, usd8];

const hero =
  "We would love to hear from you. For general inquiries, partnerships, or other questions, please fill out the form below and we will be in touch shortly.";

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
  "Gain insights into a wide range of university-level subjects",
  "Discover which subject they're passionate about",
  "Build essential skills for a successful entrance to universities",
  "Craft their portfolio",
  "Acquire 21st-century skills(public speaking, communication, leadership skills, etc.",
  "Gain cultural experiences",
];

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

const highlights = [
  "Certificate of Attendance from a Cambridge College",
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

const Contact = () => {
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
            <h2 className="text-white uppercase">contact us</h2>
            <p className="text-white">{hero}</p>
            <ul className="text-white text-left">
              <li>Fb: CAMSIS Education</li>
              <li>Youtube: CAMSIS Education</li>
              <li>Line: @camsiseducation</li>
              <li>IG: CAMSIS Education</li>
            </ul>
               
          </div>
        </div>
      </div>
      {/* programme schedule */}
      <div className="bg-slate-950 p-8 ">
        {/* course outline */}
        <div className=" max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center text-slate-500">
          <div className="bg-white p-2 rounded-lg ">
            <h3 className="mb-4 text-blue-950">Work Hours</h3>
            Monday to Friday: 7am to 7pm
            <p>Weekend: 10am to 5 pm</p>
          </div>
          <div className="bg-white p-2 rounded-lg ">
            <h3 className="mb-4 text-blue-950">Email Address</h3>
            <p>info@camsiseducation.com</p>
          </div>
          <div className="w-full bg-white p-2 rounded-lg">
            <h3 className="mb-4 text-blue-950">Phone Numbers</h3>
            <>+447708091891(UK)</>
            <p>+66819857217(Thailand)</p>
          </div>
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto gap-4 p-8 ">
        <div>
        <form action="#" method="POST" className="px-6 pb-8 pt-8 ">
          <div className="mx-auto ">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-lg font-semibold leading-6 text-gray-900">
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-lg font-semibold leading-6 text-gray-900">
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-lg font-semibold leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="subject" className="block text-lg font-semibold leading-6 text-gray-900">
                  Subject
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    autoComplete="text"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-lg font-semibold leading-6 text-gray-900">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-sky-500 px-3.5 py-2.5 text-center text-lg font-semibold text-white shadow-sm hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Send message
              </button>
            </div>
          </div>
        </form>
        </div>
        
      </div>

      {/* highlight */}
      

      {/* What our students say about us */}
    </div>
  );
};

export default Contact;
