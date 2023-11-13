import usd7 from "../assets/images/usd/usd07.jpg";
import usd8 from "../assets/images/usd/usd08.jpg";

import slp1 from "../assets/images/slp/slp1.jpg";
import slp2 from "../assets/images/slp/slp2.jpg";
import slp3 from "../assets/images/slp/slp3.jpg";
import slp4 from "../assets/images/slp/slp4.jpg";

import slpbanner from "../assets/images/slp/slpbanner.jpg";
// import slptimetable from "../assets/images/slp/slptimetable.jpg"
import slpoutline from "../assets/images/slp/slpoutline.jpg";

import PopOut from "../components/Popout";
import PropTypes from "prop-types";

const images = [usd7, slp1, slp2, slp3, slp4, usd8];

const hero =
  "This course is suitable for teachers and all top decision-makers of school administration such as school owners, executive leaders, and principals interested in professional development.";

const highlights = [
  "Certificate of Attendance from a Cambridge College",
  "Taught by Cambridge Professors/Lecturers",
  "School Visits",
  "Networking Opportunities with Cambridge Faculties and Participants from Leading Schools",
];

const benefit =
  "This tailored programme not only provides you with access to the highest quality of resources but also opens your door to an international community and its quality network. A lifelong network will help you explore your unrealised leadership potential to grow your education business and at the same time play your role in the rapid transformation of the education system. Post-COVID, every school, whether small or big has been tremendously put to the test and therefore needs critical transformation. This programme will broaden your perspective to deal with the modern-day challenges and help you learn the transformative approach from the world’s best academic staff and experts.";

const summary = `Teachers and top leadership in school management have tremendous power to impact the educational landscape in the region positively. In this course, participants will be exposed to essential knowledge in teacher professional development, administration and leadership to enhance their schools’ quality.
 
`;

const summary2 =
  "Most importantly, participants will gain insight into the latest educational trends and research, as well as effective strategies for enhancing your school’s visibility which is a part of professional development in leadership and school management. In the process, participants will learn the required skills to foster trust and cultivate a collective sense of efficacy within their team. Lastly, this course also provides opportunities for participants to connect with an international community and its high-quality network, for instance, through sessions from school visits.";

const objective = [
  "Important concepts related to school management and school leadership",
  "Skills to lead their schools effectively in an increasingly complex and interconnected world of education",
  "Exposure to global education trends, including topics such as play pedagogy, how education has become globalised and its influence on today’s educational sector",
  "Essential knowledge for effective school management and students recruitment",
];

const award =
  "As part of this programme, you will be invited to an evening reception on the last day of the programme. This is a great opportunity for you to network with global leaders, academics, and corporations. Tickets to this reception will be provided free of cost to all the programme candidates. However, this is a paid event and if you're required to invite your friends or additional guests, please contact the organisers in advance to arrange for their tickets.";

const tour =
  "The programme includes packaged tours both in Cambridge and in London. You don’t have to worry about making any reservations or transportation on the tour days. The London package may include attractions like a mini cruise on the Thames, Tower Bridge, London eye, etc, depending on the availability. The Cambridge tour will include a punting and Cambridge guided walk tour of several attractions within the historic university town. Exact details of the touring day will be provided before the commencement of the programme.";

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
          backgroundImage: `url(${slpbanner})`,
        }}
      >
        <div className="max-w-[1280px] mx-auto p-8 text-center sm:text-left">
          <div className="lg:max-w-[50%]">
            <p className="text-rose-500 font-semibold">
              School Leadership Team&apos;s Professional Development{" "}
            </p>
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
        <div className="max-w-[1000px] mx-auto flex justify-center m-4">
          {/* <PopOut
            text="Programme Schedule"
            content_img={slptimetable}
            bg_color="bg-rose-500"
          /> */}
          <PopOut
            text="Course Outline"
            content_img={slpoutline}
            bg_color="bg-rose-500"
          />
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 p-8">
        <div>
          <h3 className="mb-4 capitalize">How will it benefit you?</h3>
          <p className="text-justify max-w-[500px]">{benefit}</p>

          <h3 className="mt-8 mb-4">Course Summary</h3>
          <p className="text-justify max-w-[500px]">{summary}</p>
          <p className="text-justify max-w-[500px]">{summary2}</p>

          <h3 className="mt-8 mb-4">Course Objectives</h3>
          <h4 className="mt-4">
            This course aims to provide participants with:
          </h4>
          <List items={objective} />
        </div>
        <div>
          <h3 className="mb-4">Award Ceremony & Evening Reception</h3>
          <p className="text-justify max-w-[500px]">{award}</p>
          <h3 className="mt-8 mb-4 capitalize">Packaged tours Inclusion</h3>
          <p className="text-justify max-w-[500px] mb-8">{tour}</p>

          <h4 className="capitalize">Programme Fees: Available upon request</h4>
          {/* <h4 className="mt-4">What is Included:</h4>
          <List items={includeItems} />

          <h4 className="mt-4">
            What is <span className="text-red-500 ">Not</span> Included:
          </h4>
          <List items={notIncludeItems} /> */}
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
