

import banner from "../assets/images/accommodation/banner.jpg";
import pic1 from "../assets/images/accommodation/pic1.jpg";
import pic2 from "../assets/images/accommodation/pic2.jpg";
import pic3 from "../assets/images/accommodation/3.jpg";
import pic4 from "../assets/images/accommodation/4.jpg";
import pic5 from "../assets/images/accommodation/5.jpg";
import pic6 from "../assets/images/accommodation/6.jpg";
import pic7 from "../assets/images/accommodation/7.jpg";
import pic8 from "../assets/images/accommodation/8.jpg";
import pic9 from "../assets/images/accommodation/9.jpg";
import pic10 from "../assets/images/accommodation/10.jpg";
import pic11 from "../assets/images/accommodation/11.jpg";


const hero =
  "Our stronghold in Cambridge is at Fitzwilliam College. Camsis Education is a summer school that contracts with Fitzwilliam College at the University of Cambridge for the use of their facilities including accommodation";

const general =
  "Fitzwilliam College offers a superb array of facilities within its picturesque grounds. The college seamlessly combines Victorian charm with modern facilities, providing students with a comfortable living and learning environment. Students can enjoy the college’s well-equipped accommodation, strikingly beautiful dining hall with glass windows, cafe, sport field and expansive gardens. The greenery and tranquil surroundings offer an ideal space for leisure activities and social gatherings. ";

const history =
  "Fitzwilliam College, established in 1869 as the Non-Collegiate Students Board, became a full college of the University of Cambridge in 1966. The College’s notable alumni include the Nobel Prize-winning neuroscientist Sir Charles Scott Sherrington, Queen Sofia of Spain, and the first prime minister of Singapore Lee Kuan Yew. Today, Fitzwilliam College is recognized for its inclusive community, academic excellence, and contributions to various fields as their global student body pursues a wide range of  undergraduate and postgraduate programmes at the University of Cambridge.  ";

const Accommodation = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center bg-fixed bg-gray-600 bg-blend-overlay min-h-[420px]"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="max-w-[1280px] mx-auto p-8 text-center sm:text-left">
          <div className="lg:max-w-[50%]">
            <h2 className="text-white uppercase">
              Fitzwilliam College, Cambridge
            </h2>
            <p className="text-white">{hero}</p>
          </div>
        </div>
      </div>

      <div className="bg-[#f5f5f5] ">
        <div className=" max-w-6xl flex flex-col-reverse md:flex-row gap-8 mx-auto p-8 items-center ">
          <div className=" flex-1 text-justify  ">
            <h3 className="mb-12 md:text-justify text-center">Staying at Fitzwilliam College</h3>
            <p>{general}</p>
          </div>
          <div className=" flex-1">
            <img src={pic1} className="rounded-lg " alt="" />
          </div>
        </div>
      </div>

      <div className=" max-w-6xl mx-auto gap-8 p-8 sm: sm:px-0 grid grid-cols-1   sm:grid-cols-2 items-center  ">
      <div className=" flex-1">
        <img src={pic2} className="rounded-lg " alt="" />
      </div>

      <div className=" flex-1 text-justify">
        <h3 className="mb-12 md:text-justify text-center">The History of Fitzwilliam College</h3>
        <p>{history}</p>
      </div>

      </div>

      {/* programme schedule */}
      <div className="bg-slate-950 p-8 ">
        {/* gallery */}
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center text-slate-500">
          <img src={pic3} className="rounded-lg" alt="" />
          <img src={pic4} className="rounded-lg" alt="" />
          <img src={pic5} className="rounded-lg" alt="" />
          <img src={pic6} className="hidden sm:block rounded-lg" alt="" />
          <img src={pic7} className="hidden sm:block rounded-lg" alt="" />
          <img src={pic8} className="hidden sm:block rounded-lg" alt="" />
          <img src={pic9} className="hidden sm:block rounded-lg" alt="" />
          <img src={pic10} className="hidden sm:block rounded-lg" alt="" />
          <img src={pic11} className="hidden sm:block rounded-lg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Accommodation;
