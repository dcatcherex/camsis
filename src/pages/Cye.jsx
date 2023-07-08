import timetable1 from "../assets/images/camsis-timetable-1.png";
import timetable2 from "../assets/images/camsis-timetable-2.png";
import cye1 from "../assets/images/cye/cye.jpg";
import cye2 from "../assets/images/cye/cye_2.jpg";
import cye3 from "../assets/images/cye/cye_3.jpg";
import cye4 from "../assets/images/cye/cye_4.jpg";
import cye5 from "../assets/images/cye/cye_5.jpg";
import cye6 from "../assets/images/cye/cye_6.jpg";
import cyetop from "../assets/images/cye/cye_top.jpg";
import cyecourseoutline from "../assets/images/cye/courseoutline.jpg"

import PopOut from "../components/Popout";

const images = [cye1,cye2,cye3,cye4,cye5,cye6]

  

const hero = (
  "Situated in the historic town of Cambridge, the course combines both academic knowledge for university and key skills for future careers. It is perfect for gaining an introduction into the study of entrepreneurship at the university level and develop skills essential for success such as leadership skills and communication skills. Here, you will get to study with prominent academics from the world-renowned University of Cambridge, live in its centuries-old college accommodations just like their students, dine at its historic dining halls, meet bright young minds from Cambridge who would be your supervisors and connect with classmates. This truly is a once-in-a-lifetime experience that you wouldn’t want to miss."
)

const topics = ['Entrepreneurship fundamentals',"Innovation and “Design Thinking”","Creating differentiated products and services","Understanding customers","Growth strategies","Business model innovation","Finance","Business plan preparation"
]

const teachingApproaches = ["Lectures","Oxbridge-style supervisions","In-class experiential activities", "Project-based learning","Small group workshops(with local business & start-up companies"]

const includeItems = ["Course Fees","All teaching, small group seminars, and skills development workshops","Accommodation for 14 nights in college room","Venue and study materials","3 meals a day","Formal Dinner (Cambridge’s traditional college banquet)","All programmed visits and excursions","All transportation including airport transfers","A graduation ceremony","A pre-departure orientation","Travel insurance","A supervisor accompanying the group throughout the programme from airport departure to home arrival"
]

const notIncludeItems = ["International fligh ticket","Visa application fees (if applicable)"]

const highlights = ["Taught by Cambridge professors/lecturers","Certificate of Attendance from a Cambridge College","University-level subject in a campus environment","Mini Hackathon experience (the winning team gets a prize)","Workshops with local businesses and start-up companies","Skills development workshops for future success","Real-life experience as a Cambridge student","Networking opportunities with Cambridge faculties & students/ successful entrepreneurs & innovators / classmates from top schools","Day trips to Oxford/London"]
  
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
        <PopOut text="Course Outline" content_img={cyecourseoutline} />
      </div>
      

      <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 p-8">
        <div>
          <h3>CYE Course Outline</h3>
          <h4 className="mt-4">Topic</h4>
          <List items={topics} />

          <h4 className="mt-4">Teaching Approaches</h4>
          <List items={teachingApproaches} />
          
        </div>
        <div>
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
            <h3>Highlights</h3>
            <h4 className="mt-4">Experience Business and Entrepreneurship</h4>
            <h4>Experience Leadership and Public Speaking</h4>
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

export default Cye;
