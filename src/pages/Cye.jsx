import cye1 from "../assets/images/cye/cye_1.jpg";
import cye2 from "../assets/images/cye/cye_2.jpg";
import cye3 from "../assets/images/cye/cye_3.jpg";
import cye4 from "../assets/images/cye/cye_4.jpg";
import cye5 from "../assets/images/cye/cye_5.jpg";
import cye6 from "../assets/images/cye/cye_6.jpg";
import cyetop from "../assets/images/cye/cye_top.jpg";
import cyetimetable from "../assets/images/cye/cyetimetable.jpg"
import cyeoutline from "../assets/images/cye/cyeoutline.jpg"

import PopOut from "../components/Popout";

import PropTypes from 'prop-types';


const images = [cye1,cye2,cye3,cye4,cye5,cye6]

  

const hero = (
  "Situated in the historic town of Cambridge, the course combines both academic knowledge for university and key skills for future careers. It is perfect for gaining an introduction into the study of entrepreneurship at the university level and develop skills essential for success such as leadership skills and communication skills. Here, you will get to study with prominent academics from the world-renowned University of Cambridge, live in its centuries-old college accommodations just like their students, dine at its historic dining halls, meet bright young minds from Cambridge who would be your supervisors and connect with classmates. This truly is a once-in-a-lifetime experience that you wouldn’t want to miss."
)

const courseOverview1 = 'Disruptions continue to happen and challenge conventional businesses and approaches. We see disruptions over centuries through the change in technology, customer behavior and introduction of innovation.  Smartphones and tablets are threatening the personal computers. The Netflix business model and technology drove Blockbuster to bankruptcy etc'

const courseOverview2 = 'In this course, students will learn about what it takes to be an entrepreneur, how to start and run a successful business by understanding the market, customer changes, and challenges. Most importantly, students will learn how to innovate and create a solid business plan that fits and responds to 21st century business settings.  At the end of the course, students will have a chance to integrate their accumulated knowledge and present a business plan in a form of hackathon competition.'

const courseObjectives = [
  "Understand the important concepts related to business processes, planning, and operations",
"Demonstrate business knowledge required to propose solutions and solve problems in business and other settings",
"Acquire a solid foundation to become an entrepreneur with the ability to think systematically, rationally, and creatively in order to integrate the knowledge accumulated needed for starting a business"
]

const highlights = ["Taught by Cambridge professors/lecturers","Certificate of Attendance","University-level subject in a campus environment","Mini Hackathon experience (the winning team gets a prize)","Workshops with local businesses and start-up companies","Skills development workshops for future success","Real-life experience as a Cambridge student","Networking opportunities with Cambridge faculties & students/ successful entrepreneurs & innovators / classmates from top schools","Day trips to Oxford/London"]
  
const List = ({items})=>{
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

const ImagesGrid = ()=> {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-8">
      {images.map((image, index) => (
        <img className={`rounded-lg ${index > 1 ? 'hidden sm:block' : ''}`} src={image} alt="" key={index} />
      ))}
    </div>
  );
}

const Cye = () => {
  return (
    <div>
      <div
        className="bg-cover bg-top bg-fixed bg-gray-600 bg-blend-overlay min-h-[420px]"
        style={{
          backgroundImage:  `url(${cyetop})`,
        }}
      >
        <div className="max-w-[1280px] mx-auto p-8 text-center sm:text-left">
          <div className="lg:max-w-[50%]">
            <p className="text-sky-500 font-semibold">
              Business and Entrepreneurship Course
            </p>
            <h2 className="text-white">CAMBRIDGE YOUNG ENTREPRENEURS (CYE)</h2>
            <p className="text-white">
              {hero}
            </p>
          </div>
        </div>
      </div>
      {/* programme schedule */}
      <div className="bg-slate-950 p-8 ">
        {/* course outline */}
        <div className="max-w-[1000px] mx-auto flex justify-between m-4">
          <PopOut
            text="Programme Schedule"
            content_img={cyetimetable}
            bg_color="bg-sky-500"
          />
          <PopOut
            text="Course Outline"
            content_img={cyeoutline}
            bg_color="bg-sky-500"
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
            <p>The students are able to:</p>
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
            <h3>Highlights</h3>
            <h4 className="mt-4">Experience Business / Entrepreneurship / Leadership and Public Speaking</h4>
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

export default Cye;
