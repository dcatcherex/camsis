import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { DevicePhoneMobileIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-1 sd:grid-cols-2 md:grid-cols-4 p-12 bg-slate-900 text-gray-400 gap-8">
        <div>logo</div>
        <div>
          We are based in Cambridge, Bangkok, and Taipei providing various
          courses to both students and teachers aiming to create new generations
          of skilled human resources.
        </div>

        <div>
          <h4 className="text-white">Contact Info</h4>
          <ul className="list-none mt-4 ml-0">
            <li>
              <span>Fb:</span> CAMSIS Education
            </li>
            <li>
              <span>Youtube:</span> CAMSIS Education
            </li>
            <li>
              <span>Line:</span> @camsiseducation
            </li>
            <li>
              <span>IG:</span> CAMSIS Education
            </li>
          </ul>
          <div className="flex gap-2 mt-4">
            <EnvelopeIcon className="h-6 w-6" />
            <div>
              <p className="font-semibold">Email:</p>
              <p>info@camsiseducation.com</p>
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <DevicePhoneMobileIcon className="h-6 w-6" />
            <div>
              <p className="font-semibold">Phone:</p>
              <p>+447708091891 (UK), +66819857217 (Thailand)</p>
            </div>
          </div>
        </div>
        {/* link */}
        <div>
          <h4 className="text-white">Policy Links</h4>
          <div className="flex flex-col mt-4 underline underline-offset-4">
            <Link to={""}>Privacy Policy</Link>
            <Link to={""}>Cookies Policy</Link>
            <Link to={""}>Terms & Conditions </Link>
            <Link to={""}>Health and Safety Policy </Link>
            <Link to={""}>Safeguarding Policy</Link>
            <Link to={""}>Complaints Policy</Link>
            <Link to={""}>Coronavirus (COVID-19) Policy Update</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
