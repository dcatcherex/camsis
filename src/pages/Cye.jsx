import timetable1 from "../assets/images/camsis-timetable-1.png";
import timetable2 from "../assets/images/camsis-timetable-2.png";
import cye1 from "../assets/images/cye/cye.jpg"
import cye2 from "../assets/images/cye/cye_2.jpg"
import cye3 from "../assets/images/cye/cye_3.jpg"
import cye4 from "../assets/images/cye/cye_4.jpg"
import cye5 from "../assets/images/cye/cye_5.jpg"
import cye6 from "../assets/images/cye/cye_6.jpg"
import cyetop from "../assets/images/cye/cye_top.jpg"

import { CheckCircleIcon } from "@heroicons/react/20/solid";

const Cye = () => {
  return (
    <div>
      <div className="bg-cover bg-top bg-fixed bg-gray-600 bg-blend-overlay"
      style={{ backgroundImage: "url(../../../src/assets/images/cye/cye_top.jpg)" }}>
        <div className="max-w-[1280px] mx-auto p-8 text-center sm:text-left">
          <div className="lg:max-w-[50%]">
            <p className="text-sky-500 font-semibold">Business and Entrepreneurship Course</p>
            <h2 className="text-white">CAMBRIDGE YOUNG ENTREPRENEURS (CYE)</h2>
            <p className="text-white">
              Situated in the historic town of Cambridge, the course combines both
              academic knowledge for university and key skills for future careers. It
              is perfect for gaining an introduction into the study of
              entrepreneurship at the university level and develop skills essential
              for success such as leadership skills and communication skills. Here,
              you will get to study with prominent academics from the world-renowned
              University of Cambridge, live in its centuries-old college
              accommodations just like their students, dine at its historic dining
              halls, meet bright young minds from Cambridge who would be your
              supervisors and connect with classmates. This truly is a
              once-in-a-lifetime experience that you wouldn’t want to miss.
            </p>
          </div>
        </div>
      </div>
      {/* programme schedule */}
      <div className="bg-slate-950 p-8 ">
        <h3 className="text-white text-center p-2">Programme Schedule</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <img src={timetable1} alt="" />
          </div>
          <div>
            <img src={timetable2} alt="" />
          </div>
        </div>
      </div>
      {/* course outline */}
      <div className="flex justify-center mt-8">
        <button className="btn">Course Outline</button>
      </div>

      <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 p-8">
        <div>
          <h3>CYE Course Outline</h3>
          <h4 className="mt-4">Topic</h4>
          <ul>
            <li>Entrepreneurship fundamentals</li>
            <li>Innovation and “Design Thinking”</li>
            <li>Creating differentiated products and services</li>
            <li>Understanding customers</li>
            <li>Growth strategies</li>
            <li>Business model innovation</li>
            <li>Finance</li>
            <li>Business plan preparation</li>
          </ul>
          <h4 className="mt-4">Teaching Approaches</h4>
          <ul>
            <li>Lectures</li>
            <li>Oxbridge-style supervisions</li>
            <li>In-class experiential activities</li>
            <li>Project-based learning</li>
            <li>
              Small group workshops(with local business & start-up companies
            </li>
          </ul>
        </div>
        <div>
          <h3>Programme Fees:</h3>
          <h3>Available upon request</h3>
          <h4 className="mt-4">What is Included:</h4>
          <ul>
            <li>Course Fees </li>
            <li>
              All teaching, small group seminars, and skills development
              workshops
            </li>
            <li>Accommodation for 14 nights in college room </li>
            <li>Venue and study materials</li>
            <li>3 meals a day </li>
            <li>Formal Dinner (Cambridge’s traditional college banquet)</li>
            <li>All programmed visits and excursions </li>
            <li>All transportation including airport transfers</li>
            <li>A graduation ceremony</li>
            <li>A pre-departure orientation</li>
            <li>Travel insurance</li>
            <li>
              A supervisor accompanying the group throughout the programme from
              airport departure to home arrival
            </li>
          </ul>
          <h4 className="mt-4">What is <span className="text-red-500 ">Not</span> Included:</h4>
          <ul>
            <li>International fligh ticket</li>
            <li>Visa application fees (if applicable)</li>
          </ul>
        </div>
      </div>

      {/* highlight */}
      <div className="bg-gray-100 ">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 pb-8 mt-8 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-8">
              <img className="rounded-lg" src={cye1} alt="" />
              <img className="rounded-lg" src={cye2} alt="" />
              <img className="hidden sm:block rounded-lg" src={cye3} alt="" />
              <img className="hidden sm:block rounded-lg" src={cye4} alt="" />
              <img className="hidden sm:block rounded-lg" src={cye5} alt="" />
              <img className="hidden sm:block rounded-lg" src={cye6} alt="" />
          </div>
          <div className="px-8">
            <h3>Highlights</h3>
            <h4 className="mt-4">Experience Business and Entrepreneurship</h4>
            <h4>Experience Leadership and Public Speaking</h4>
            <ul className="sm:leading-loose">
              <li>Taught by Cambridge professors/lecturers</li>
              <li>Certificate of attendance</li>
              <li>University-level subject in a campus environment</li>
              <li>Mini Hackathon experience (the winning team gets a prize)</li>
              <li>Workshops with local businesses and start-up companies</li>
              <li>Skills development workshops for future success</li>
              <li>Real-life experience as a Cambridge student</li>
              <li>
                Networking opportunities with Cambridge faculties & students/
                successful entrepreneurs & innovators / classmates from top
                schools
              </li>
              <li>Day trips to Oxford/London</li>
            </ul>
          </div>
        </div>
      </div>

      {/* What our students say about us */}
    </div>
  );
};

export default Cye;
